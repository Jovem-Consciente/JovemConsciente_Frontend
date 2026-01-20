"use client";

import "flowbite";
import { CirclePlus } from "lucide-react";

import Consult_Added from "../Card_Group/consult";
import Carousel from "../Carousel/carousel";
import Link from "next/link";

export default function Pacient_Body() {
  return (
    <div className="w-full flex flex-col md:flex-row p-4 md:p-15 gap-10">

      
      <div className="w-full md:w-1/2 flex flex-col">

       
        <div className="w-full flex justify-end mb-5">
          <Link href="/Pacients/home">
            <button
              type="button"
              className="flex items-center gap-2 text-white lg:text-lg bg-gradient-to-br from-purple-600 to-blue-500 
                         hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                         dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-3 py-3"
            >
              <CirclePlus size={20} />
              Add
            </button>
          </Link>
        </div>

        <Consult_Added />

        <div className="w-full flex justify-center md:hidden mt-6">
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      
      <div className="hidden md:flex justify-center items-center px-6">
        <div className="w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
      </div>

   
      <div className="w-full md:w-1/2 flex flex-col">
        <Carousel />
      </div>

    </div>
  );
}
