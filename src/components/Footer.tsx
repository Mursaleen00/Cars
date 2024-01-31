import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-20 mb-5 px-4 gap-y-10 w-full">
        <div className="flex flex-col gap-y-3 w-full sm:w-1/2 md:w-1/4">
          <div className="flex gap-x-2 text-lg items-center">
            <Image alt="Logo" src={"/icon/logo.svg"} width={32} height={32} />
            <h1 className="text-white font-pacifico font-medium text-lg">
              Cars
            </h1>
          </div>
          <p className="max-w-[170px]">
            We offer the best electric cars of the most recognized brands in the
            world.
          </p>
        </div>

        <div className="flex flex-col gap-y-3 w-full sm:w-1/2 md:w-1/4">
          <h1>Company</h1>
          <ul>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Cars</li>
            <li className="cursor-pointer">History</li>
            <li className="cursor-pointer">Shop</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-3 w-full sm:w-1/2 md:w-1/4">
          <h1>Information</h1>
          <ul>
            <li className="cursor-pointer">Request a quote</li>
            <li className="cursor-pointer">Find a dealer</li>
            <li className="cursor-pointer">Contact us</li>
            <li className="cursor-pointer">Services</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-3 w-full sm:w-1/2 md:w-1/4 items-center sm:items-start">
          <h1>Follow us</h1>
          <div className="flex gap-x-3">
            <Image
              alt="Logo"
              src={"/icon/facebook.svg"}
              width={11}
              height={11}
            />
            <Image
              alt="Logo"
              src={"/icon/instagram.svg"}
              width={20}
              height={20}
            />
            <Image
              alt="Logo"
              src={"/icon/twitter.svg"}
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-theme-text-color-light">&#169; Mursaleen Ansari. All rights reserved</p>
    </>
  );
}

export default Footer;
