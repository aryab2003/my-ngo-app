import React from "react";

const Donation = () => {
  return (
    <div className="">
      <div className=" items-center flex justify-between ml-[4rem] p-[4rem] h-screen bg-[url('../Images/donation.jpg')] bg-no-repeat bg-cover overflow-x-hidden space-y-3 ">
        <div className=" text-white text-5xl font-bold">
          Donate for a better future
          <div className="text-white text-2xl font-semibold mt-4">
            Scan the QR code or click on the button to donate
          </div>
        </div>
        <div className="flex flex-col justify-center p-[5rem] bg-white">
          <img
            className="h-[7rem] w-auto brightness-[100%]"
            src="../Images/qr.jpeg"
            alt=""
          />
          <button className="ml-2 bg-gray-800 hover:bg-gray-900 p-3 rounded-md text-white mt-4">
            <a href="https://donate.stripe.com/test_9AQ5lx1tKh0na0U9AA">
              Donate
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
