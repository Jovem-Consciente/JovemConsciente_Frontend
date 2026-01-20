"use client";

import "flowbite"
import Message from "../Card_Group/messages";

export default function Message_body(){
    return (
        <div className="w-full flex flex-col md:flex-row p-3 md:p-15 mt-10 gap-10">

        
        <div className="w-full md:w-1/2 flex flex-col">

            <Message/>

            <div className="w-full flex justify-center md:hidden mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
        </div>

        
        <div className="hidden md:flex justify-center items-center px-6">
            <div className="w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
        </div>

    
        <div className="w-full  justify-center flex flex-col">
        
            <p className="text-sm font-normal text-center  dark:text-white mb-6">
            Abra uma conversa
            </p>
        </div>

        </div>
  );
}