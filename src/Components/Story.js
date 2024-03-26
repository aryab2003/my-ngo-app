import React from "react";

const Story = () => {
  return (
    <div className="text-center py-[5rem] px-[5rem] space-y-8">
      <h1 className="text-4xl font-bold">Our Story</h1>
      <div className="flex justify-around space-x-3">
              <div className="text-left space-y-5">
                  <p className="w-[40vw]">
              Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Recusandae iure quasi deserunt
        maiores amet eius tenetur nulla, laudantium at veritatis officia vitae
        dolor architecto dolorum sunt totam laborum fuga aspernatur praesentium
        illum minus consectetur adipisci? Tempore, amet distinctio esse velit
        natus repellat. Eveniet aspernatur vel deserunt hic quaerat ea quos.
                      
                  </p>
                  <button className="bg-gray-900 p-3 rounded-lg text-white"><a href="/about us">
              Read more
                      
            </a>
            </button>
        </div>
          
          
              
              
        <div className=" ">
          <img src="../Images/homeless.jpg" alt="shelter-home" />
        </div>
      </div>
    </div>
  );
};

export default Story;
