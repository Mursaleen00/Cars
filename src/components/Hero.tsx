import Image from "next/image";
import React from "react";

function Hero() {
  const detail = [
    { icon: "/icon/tempCold.svg", text: "TEMPERATURE", count: "24°" },
    { icon: "/icon/dashboard.svg", text: "MILEAGE", count: "873" },
    { icon: "/icon/flashlightWhite.svg", text: "BATTERY", count: "94%" },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center text-center relative gap-y-10 my-10 px-2">
      <div className="md:w-[500px] w-[300px] md:h-[500px] h-[300px] absolute rounded-full bg-theme-blur blur-[90px] -left-32 -z-10 -top-80" />
      <h1 className="font-semibold md:text-[36px] text-[24px]">
        Choose The Best Car
      </h1>
      <div className="flex flex-col gap-y-2">
        <h1 className="font-semibold text-lg md:text-2xl">Porsche Mission E</h1>
        <div className="flex w-full justify-center gap-x-1">
          <Image
            alt="Flash"
            src={"/icon/flashlight.svg"}
            width={20}
            height={20}
          />
          <p className="text-theme-text-color md:text-lg text-sm">
            Electric car
          </p>
        </div>
      </div>
      <Image alt="" src={"/image/homeCar.svg"} width={380} height={222} />
      <div className="flex md:gap-x-28 gap-x-10 sm:gap-x-16">
        {detail.map((items: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-y-4 justify-center items-center drop-shadow-themeGreen shadow-green-900"
            >
              <h3 className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                <Image
                  alt={items.text}
                  src={`${items.icon}`}
                  width={20}
                  height={20}
                />
              </h3>
              <div>
                <h1 className="font-medium text-xl md:text-2xl">
                  {items.count}
                </h1>
                <p className="text-theme-text-color-light text-xs md:text-sm">
                  {items.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:w-[500px] w-[300px] md:h-[500px] h-[300px] absolute rounded-full bg-theme-blur blur-[90px] right-0 -z-10 top-80" />
    </div>
  );
}

export default Hero;
