import Image from "next/image";
import React from "react";

function TopView() {
  return (
    <div className="relative w-full flex justify-center items-center my-20 px-2 max-w-[470px] mx-auto">
      <Image
        alt=""
        src={"/image/TopView.png"}
        width={200}
        height={462}
        className="w-[200px] h-[462px]"
      />
      <Image
        alt=""
        src={"/image/Roads.svg"}
        width={200}
        height={462}
        className="w-full -z-10 absolute"
      />
      <Image
        alt=""
        src={"/image/MiniRoads.svg"}
        width={200}
        height={462}
        className="w-full -z-10 absolute"
      />
      <div className="absolute flex-col backdrop-blur-[8px] flex text-center items-center justify-center w-[127px] h-[92px] rounded-xl top-10 left-10">
        <h1 className="font-semibold md:text-xl text-sm">800v</h1>
        <p className="text-xs md:text-sm">Turbo Chargin</p>
      </div>
      <div className="absolute flex-col backdrop-blur-[8px] flex text-center items-center justify-center w-[127px] h-[92px] rounded-xl right-10">
        <h1 className="font-semibold md:text-xl text-sm">350</h1>
        <p className="text-xs md:text-sm">Km Range</p>
      </div>
      <div className="absolute flex-col backdrop-blur-[8px] flex text-center items-center justify-center w-[127px] h-[92px] rounded-xl left-10 bottom-20">
        <h1 className="font-semibold md:text-xl text-sm">480</h1>
        <p className="text-xs md:text-sm">Km Travel</p>
      </div>
    </div>
  );
}

export default TopView;
