"use client";
import Image from "next/image";

function SpecialOffer() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center md:justify-around my-20 px-2 gap-20 relative">
        <div className="md:w-[500px] w-[300px] md:h-[500px] h-[300px] absolute rounded-full bg-theme-blur blur-[90px] -left-32 -top-80" />
        <div className="flex flex-col gap-y-10">
          <h1 className="font-semibold md:text-2xl text-xl text-theme-title-color max-w-[310px]">
            Do You Want To Receive Special Offers?
          </h1>
          <p className="max-w-[320px] w-full font-normal text-sm md:text-lg text-theme-title-color">
            Be the first to receive all the information about our products and
            new cars by email by subscribing to our mailing list.
          </p>
          <button className="bg-theme-first-color px-8 py-4 rounded-md">
            Subscribe Now
          </button>
        </div>
        <div className="">
          <Image alt="Offer" src={"/image/OfferCar.svg"} width={450} height={200} />
        </div>
        <div className=" w-[300px]  h-[300px] absolute rounded-full bg-theme-blur blur-3xl right-0 -z-10 md:hidden" />
      </div>
    </>
  );
}

export default SpecialOffer;
