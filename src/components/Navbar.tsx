import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="h-20 flex items-center justify-around ">
      <div className="flex gap-x-2 text-lg items-center">
        <Image alt="Logo" src={"/icon/logo.svg"} width={32} height={32} />
        <h1 className="text-white font-pacifico">Cars</h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-x-10 text-white font-medium text-sm md:text-lg font-pacifico">
          <li className="text-theme-first-color cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Steps</li>
          <li className="cursor-pointer">Testimonial</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
