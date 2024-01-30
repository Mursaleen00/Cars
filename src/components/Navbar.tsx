import Image from "next/image";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function Navbar() {
  return (
    <div className="h-20 flex items-center justify-between md:justify-around px-8">
      <div className="flex gap-x-2 text-lg items-center">
        <Image alt="Logo" src={"/icon/logo.svg"} width={32} height={32} />
        <h1 className="text-white font-pacifico font-medium text-lg">Cars</h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-x-10 text-white font-medium text-sm md:text-lg font-pacifico">
          <li className="text-theme-first-color cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Steps</li>
          <li className="cursor-pointer">Testimonial</li>
        </ul>
      </div>
      <div className="md:hidden">
        <Select>
          <SelectTrigger>
            <IoMenuOutline size={24} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Home">Home</SelectItem>
              <SelectItem value="About">About</SelectItem>
              <SelectItem value="Steps">Steps</SelectItem>
              <SelectItem value="Testimonial">Testimonial</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Navbar;
