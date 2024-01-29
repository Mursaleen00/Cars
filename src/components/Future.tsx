import Image from "next/image";
import React from "react";

function Future() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:justify-around my-40 px-2 gap-y-20 gap-x-20">
      <div className="relative max-w-[480px] w-full">
        <div className="px-5 absolute w-[197px] h-[104px] right-0 -bottom-12 backdrop-blur-[12px] rounded-[20px] flex flex-col justify-center text-center">
          <h1 className="text-lg md:text-xl">2.500+</h1>
          <p className="text-sm">Supercharges placed along popular routes</p>
        </div>
        <Image alt="" src={"/image/dashboard.svg"} width={480} height={320} />
      </div>
      <div className="flex flex-col gap-y-10 w-full max-w-[400px]">
        <h1 className="text-xl md:text-2xl font-semibold">
          Machines With <br /> Future Technology
        </h1>
        <p className="text-lg font-normal">
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with new
          and innovative platforms that last a long time.
        </p>
        <button className="bg-theme-first-color px-8 py-4 rounded-md">Know more</button>
      </div>
    </div>
  );
}

export default Future;






