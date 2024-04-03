import React, { useState, useEffect } from "react";

const shelters = [
  { name: "Aravalli", location: { lat: 22.6454, lng: 88.4337 } },
  { name: "Brahmaputra", location: { lat: 22.6443, lng: 88.3796 } },
  { name: "Kaveri", location: { lat: 22.5622, lng: 88.3963 } },
  { name: "Kanchenjunga", location: { lat: 22.6698, lng: 88.4091 } },
];

const Shelter = () => {
  const [nearbyShelters, setNearbyShelters] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=
    AIzaSyD0dkbY_TNonAJxBCnfuxJ1RvR8409BioI&libraries=places`;
    script.async = true;
    script.onload = () => {
      initMap();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const kolkataCenter = { lat: 22.5726, lng: 88.3639 }; // Kolkata center coordinates
    const mapInstance = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: kolkataCenter, // Set the map center to Kolkata center
        zoom: 10,
      }
    );
    setMap(mapInstance);

    // Add markers for organization locations
    const organizationMarkers = shelters.map((shelter) => {
      return new window.google.maps.Marker({
        position: {
          lat: shelter.location.lat,
          lng: shelter.location.lng,
        },
        map: mapInstance,
        title: shelter.name,
      });
    });
    setMarkers(organizationMarkers);

    findNearbyShelters(kolkataCenter); // Find nearby shelters around Kolkata center
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const findNearbyShelters = (center) => {
    const nearby = shelters.filter((shelter) => {
      const distance = calculateDistance(
        center.lat,
        center.lng,
        shelter.location.lat,
        shelter.location.lng
      );
      return distance < 100;
    });
    setNearbyShelters(nearby);
  };

  return (
    <div className="text-center p-[5rem]">
      <div className="flex justify-around ml-[4rem] pt-[2rem] space-x-5 pb-[2rem]">
        <div className=" w-[50%]">
          <div className="mt-4 ">
            {nearbyShelters.length > 0 ? (
              <div className="space-y-4">
                {nearbyShelters.map((shelter) => (
                  <div
                    className=" py-6 text-center items-center rounded-md bg-gray-700 text-white"
                    key={shelter.name}
                  >
                    {shelter.name}
                  </div>
                ))}
              </div>
            ) : (
              <p>No shelters found nearby.</p>
            )}
          </div>
        </div>
        <div
          id="map"
          className="mt-4"
          style={{ width: "400px", height: "400px" }}
        ></div>
      </div>
    </div>
  );
};

export default Shelter;
