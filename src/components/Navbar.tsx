"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Link from "next/link";
function Navbar() {
  const [color, setColor] = useState("Home");
  return (
    <div className="h-20 flex items-center justify-between md:justify-around px-8">
      <div className="flex gap-x-2 text-lg items-center">
        <Image alt="Logo" src={"/icon/logo.svg"} width={32} height={32} />
        <h1 className="text-white font-pacifico font-medium text-lg">Cars</h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-x-10 text-white font-medium text-sm md:text-lg font-pacifico">
          <li
            className={`${
              color == "Home" && "text-theme-first-color"
            }  cursor-pointer`}
            onClick={() => setColor("Home")}
          >
            Home
          </li>
          <Link href={"#future"} onClick={() => setColor("Future")}>
            <li
              className={`${
                color == "Future" && "text-theme-first-color"
              } cursor-pointer`}
            >
              Future
            </li>
          </Link>
          <Link href={"#electric"} onClick={() => setColor("Electric")}>
            <li
              className={`${
                color == "Electric" && "text-theme-first-color"
              } cursor-pointer`}
            >
              Electric Car
            </li>
          </Link>
          <Link href={"#luxury"} onClick={() => setColor("Luxury")}>
            <li
              className={`${
                color == "Luxury" && "text-theme-first-color"
              } cursor-pointer`}
            >
              Luxury Cars
            </li>
          </Link>
        </ul>
      </div>
      <div className="md:hidden">
        <Select>
          <SelectTrigger>
            <IoMenuOutline size={24} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Home">
                <Link href={"#future"}>Future</Link>
              </SelectItem>
              <Link href={"#electric"}>
                <SelectItem value="Electric Car">Electric Car</SelectItem>
              </Link>
              <SelectItem value="Testimonial">Luxury Cars</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Navbar;
