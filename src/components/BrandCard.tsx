import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function BrandCard() {
  const detail = [
    {
      name: "Porsche",
      type: "Turbo S",
      img: "/image/brand1.svg",
      sec: "3.4 Sec",
      km: "386 Km/h",
      price: "$175,900",
    },
    {
      name: "Porsche",
      type: "Taycan",
      img: "/image/brand2.svg",
      sec: "3.0 Sec",
      km: "256 Km/h",
      price: "$114,900",
    },
    {
      name: "Porsche",
      type: "Turbo S Cross",
      img: "/image/brand3.svg",
      sec: "4.7 Sec",
      km: "406 Km/h",
      price: "$150,900",
    },
    {
      name: "Porsche",
      type: "Boxster 718",
      img: "/image/brand4.svg",
      sec: "2.9 Sec",
      km: "356 Km/h",
      price: "$125,900",
    },
    {
      name: "Porsche",
      type: "Cayman",
      img: "/image/brand5.svg",
      sec: "3.3 Sec",
      km: "330 Km/h",
      price: "$128,900",
    },
  ];
  return (
    <div className="justify-center flex my-10 flex-col items-center gap-y-10">
      <h1 className="font-semibold md:text-2xl text-xl text-theme-title-color text-center">
        Choose Your Electric Car <br /> Of The Porsche Brand
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%]"
      >
        <CarouselContent>
          {detail.map((items, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 w-full flex justify-center">
                <div className="flex rounded-[20px] w-[258px] flex-col relative h-[328px] p-6 bg-[#111213] gap-y-4 ">
                  <div className="w-[100px] h-[100px] absolute rounded-full bg-theme-blur blur-[60px]" />
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
                  <div className="flex flex-wrap w-full justify-between">
                    <div className="flex gap-x-1 items-center w-[100px]">
                      <Image
                        alt=""
                        src={"/icon/dashboard.svg"}
                        width={16}
                        height={16}
                      />
                      <p className="text-theme-text-color text-sm">
                        {items.sec}
                      </p>
                    </div>
                    <div className="flex gap-x-1 items-center w-[100px]">
                      <Image
                        alt=""
                        src={"/icon/box.svg"}
                        width={16}
                        height={16}
                      />
                      <p className="text-theme-text-color text-sm">
                        {items.km}
                      </p>
                    </div>
                    <div className="flex gap-x-1 items-center w-[100px]">
                      <Image
                        alt=""
                        src={"/icon/charging.svg"}
                        width={16}
                        height={16}
                      />
                      <p className="text-theme-text-color text-sm">Electric</p>
                    </div>
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default BrandCard;
