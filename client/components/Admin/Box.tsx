import React from "react";
import Card from "../products_card";

const Box = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="mx-auto w-[70%] flex justify-between">
        <div className="w-[10%]"></div>
        <h1 className="font-roboto text-primary text-5xl font-bold">
          Nandur Horti Box
        </h1>
        <div className="flex gap-3">
          <button
            className="border-[1px] rounded-lg bg-white border-gray text-sm px-3 py-2 font-semibold hover:bg-primary hover:border-transparent hover:text-white transition-all duration-300 ease-in-out
      "
          >
            Add{" "}
          </button>
          <button
            className="border-[1px] rounded-lg bg-white border-gray text-sm px-3 py-2 font-semibold hover:bg-primary hover:border-transparent hover:text-white transition-all duration-300 ease-in-out
      "
          >
            Delete{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full mt-6 lg:justify-evenly">
        <Card
          title="Economic Package"
          description="Rp45.000"
          imageUrl="/logo_nandur.png"
        />
        <Card
          title="Premium Package"
          description="Rp145.000"
          imageUrl="/logo_nandur.png"
        />
      </div>
    </div>
  );
};

export default Box;
