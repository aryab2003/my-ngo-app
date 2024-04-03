import React, { useState } from "react";

const Admin = () => {
  const [query, setQuery] = useState("");
  const [nearestNGO, setNearestNGO] = useState(null);
  const [presentCount, setPresentCount] = useState(0);
  const [relocatedCount, setRelocatedCount] = useState(0);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    // Handle query submission
    // You can perform any necessary actions here, such as fetching data from the database
  };

  const handlePendingRequests = () => {
    // Handle fetching pending requests
  };

  const handleApproveRequests = () => {
    // Handle approving requests
  };

  const handleShiftToNGO = () => {
    // Handle shifting individuals to nearest NGO
  };

  const handleCancelRequest = () => {
    // Handle canceling photo requests
  };

  return (
    <div
      className="container mx-auto my-8 py-20"
      //   style={{
      //     backgroundImage:
      //       "url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     height: "100vh",
      //     width: "100vw",
      //   }}
    >
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          className="border border-gray-400 rounded-md p-2 mr-2"
          placeholder="Enter query..."
          value={query}
          onChange={handleQueryChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {nearestNGO && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Nearest NGO</h2>
          <p>Name: {nearestNGO.name}</p>
          <p>Contact: {nearestNGO.contact}</p>
        </div>
      )}
      <div className="mb-4 ml-80">
        <h2 className="text-xl  font-semibold mb-2">Counts</h2>
        <p>Present: {presentCount}</p>
        <p>Relocated: {relocatedCount}</p>
      </div>
      <div className="mb-4 flex justify-center">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded mr-2"
          onClick={handlePendingRequests}
        >
          Pending Requests
        </button>
        {/* <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-2"
          onClick={handleApproveRequests}
        >
          Approve Requests
        </button> */}
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded mr-2"
          onClick={handleShiftToNGO}
        >
          Shift to NGO
        </button>
        {/* <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleCancelRequest}
        >
          Cancel Request
        </button> */}
      </div>
    </div>
  );
};

export default Admin;
