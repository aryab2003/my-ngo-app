import React, { useState, useEffect } from "react";
// import ShelterCard from "../Components/ShelterCard";

const shelters = [
  { name: "Shelter A", location: { lat: 20.296059, lng: 85.82454 } },
  { name: "Shelter B", location: { lat: 22.4567, lng: 85.824546 } },
  { name: "Shelter C", location: { lat: 22.256466, lng: 84.89898 } },
  { name: "Shelter D", location: { lat: 20.4961, lng: 85.8236 } },
];

const Shelter = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    lng: null,
  });
  const [nearbyShelters, setNearbyShelters] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD0dkbY_TNonAJxBCnfuxJ1RvR8409BioI&libraries=places`;
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
    const mapInstance = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: currentLocation.lat, lng: currentLocation.lng },
        zoom: 10,
      }
    );
    setMap(mapInstance);
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

  const findNearbyShelters = () => {
    const nearby = shelters.filter((shelter) => {
      const distance = calculateDistance(
        currentLocation.lat,
        currentLocation.lng,
        shelter.location.lat,
        shelter.location.lng
      );
      return distance < 100;
    });
    setNearbyShelters(nearby);

    markers.forEach((marker) => {
      marker.setMap(null);
    });

    const newMarkers = nearby.map((shelter) => {
      return new window.google.maps.Marker({
        position: { lat: shelter.location.lat, lng: shelter.location.lng },
        map: map,
        title: shelter.name,
      });
    });

    setMarkers(newMarkers);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          map.setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          findNearbyShelters();
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported.");
    }
  };

  return (
    <div className="text-center p-[5rem]">
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded "
        onClick={getCurrentLocation}
      >
        Find Shelters Near Me
      </button>
      <div className="flex justify-around ml-[4rem] pt-[2rem] spce-x-5 pb-[2rem]">
        {/* <h1 className="text-3xl font-bold mb-4">Find Nearby Shelters</h1> */}
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
