"use client";
import "flowbite";
import Link from "next/link";

export default function Message({
    image,
    pacient_name,
    message,
    date
}  
) {
  return (
        <div className="flex flex-col gap-4 w-full">

            <div
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="cursor-pointer p-[2px] rounded-xl "
                >
                <div className="flex items-center gap-4 bg-[#0F1A2A] p-4 rounded-xl shadow-lg">
                    <img
                    src={image}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Paciente: {pacient_name}</h3>
                    <p className="text-gray-300 text-sm truncate">
                        {message}
                    </p>
                    </div>
                    <span className="text-xs text-gray-400">{date}</span>
                </div>
            </div>
 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>

        </div>
    
  );
}
