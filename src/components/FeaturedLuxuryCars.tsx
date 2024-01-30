"use client";
import Image from "next/image";
import React, { useState } from "react";

function FeaturedLuxuryCars() {
  const [state, setState] = useState("All");
  const detail = [
    {
      name: "Porsche",
      type: "Boxster 987",
      img: "/image/featured4.svg",
      price: "$126,900",
    },
    {
      name: "Tesla",
      type: "Model 3",
      img: "/image/featured2.svg",
      price: "$45,900",
    },
    {
      name: "Audi",
      type: "E-tron",
      img: "/image/featured3.svg",
      price: "$175, 900",
    },

    {
      name: "Porsche",
      type: "Panamera",
      img: "/image/featured5.svg",
      price: "$128,900",
    },
    {
      name: "Tesla",
      type: "Model X",
      img: "/image/featured1.svg",
      price: "$98,900",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center my-20 px-2 gap-y-10 gap-x-20">
      <h1 className="font-semibold md:text-2xl text-xl text-theme-title-color text-center">
        Featured Luxury Cars
      </h1>
      <div className="flex gap-x-5 w-full justify-center items-center">
        <div
          className={`md:w-[52px] w-[48px] h-[48px] md:h-[52px] rounded-[16px] flex justify-center items-center text-sm md:text-lg ${
            state == "All" ? "bg-theme-first-color" : "bg-theme-blur"
          }`}
          onClick={() => setState("All")}
        >
          ALL
        </div>
        <div
          className={`md:w-[52px] w-[48px] h-[48px] md:h-[52px] rounded-[16px] flex justify-center items-center ${
            state == "Tesla" ? "bg-theme-first-color" : "bg-theme-blur"
          }`}
          onClick={() => setState("Tesla")}
        >
          <Image alt="" src={"/icon/tesla.svg"} width={25} height={25} />
        </div>
        <div
          className={`md:w-[52px] w-[48px] h-[48px] md:h-[52px] rounded-[16px] flex justify-center items-center ${
            state == "Audi" ? "bg-theme-first-color" : "bg-theme-blur"
          }`}
          onClick={() => setState("Audi")}
        >
          <Image alt="" src={"/icon/audi.svg"} width={25} height={25} />
        </div>
        <div
          className={`md:w-[52px] w-[48px] h-[48px] md:h-[52px] rounded-[16px] flex justify-center items-center ${
            state == "Porsche" ? "bg-theme-first-color" : "bg-theme-blur"
          }`}
          onClick={() => setState("Porsche")}
        >
          <Image alt="" src={"/icon/porsche.svg"} width={25} height={25} />
        </div>
      </div>

      <div className="p-1 flex gap-5 flex-wrap justify-center items-center w-full">
        {detail.map((items, index) => (
          <>
            {state === "All" ? (
              <div className="flex rounded-[20px] w-[258px] flex-col relative h-[328px] p-6 bg-[#111213] gap-4 justify-between content-between">
                <div className="w-[100px] h-[100px] absolute rounded-full bg-[#374A6D80] blur-[60px] bottom-[100px] left-20" />
                <div>
                  <h1 className="text-xl font-semibold text-theme-title-color">
                    {items.name}
                  </h1>
                  <p className="text-theme-text-color text-sm">{items.type}</p>
                </div>
                <div className="w-full flex justify-center my-5">
                  <Image alt="" src={`${items.img}`} width={160} height={71} />
                </div>
                <h1 className="text-lg font-semibold">{items.price}</h1>
                <div className="py-3 px-4 w-[52px] h-[44px] bg-theme-first-color-alt absolute bottom-0 right-0 rounded-ss-[16px] rounded-ee-[16px]">
                  <Image
                    alt=""
                    src={"/icon/shopping.svg"}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ) : (
              items.name === state && (
                <div className="flex rounded-[20px] w-[258px] flex-col relative h-[328px] p-6 bg-[#111213] gap-y-4 justify-between content-between">
                  <div className="w-[100px] h-[100px] absolute rounded-full bg-[#374A6D80] blur-[60px] bottom-[100px] left-20" />
                  <div>
                    <h1 className="text-xl font-semibold text-theme-title-color">
                      {items.name}
                    </h1>
                    <p className="text-theme-text-color text-sm">
                      {items.type}
                    </p>
                  </div>
                  <div className="w-full flex justify-center my-5">
                    <Image
                      alt=""
                      src={`${items.img}`}
                      width={160}
                      height={71}
                    />
                  </div>
                  <h1 className="text-lg font-semibold">{items.price}</h1>
                  <div className="py-3 px-4 w-[52px] h-[44px] bg-theme-first-color-alt absolute bottom-0 right-0 rounded-ss-[16px] rounded-ee-[16px]">
                    <Image
                      alt=""
                      src={"/icon/shopping.svg"}
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              )
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default FeaturedLuxuryCars;
