import Image from "next/image";
import React from "react";

function Banner() {
  const icons = [
    { icon: "/icon/farari.svg" },
    { icon: "/icon/audi.svg" },
    { icon: "/icon/tesla.svg" },
    { icon: "/icon/bmw.svg" },
    { icon: "/icon/lamborghini.svg" },
    { icon: "/icon/mitsubishi.svg" },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center  w-full my-20 px-2 gap-20">
      {icons.map((item: any, index: number) => {
        return (
          <Image alt="" src={item.icon} key={index} width={50} height={50} />
        );
      })}
    </div>
  );
}

export default Banner;
