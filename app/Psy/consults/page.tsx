"use client"
import Navbar from "@/components_psy/navbar";
import "flowbite";

import Consult_Card from "@/components_psy/consult_card";
import {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "../../../lib/api"; 
import Table from "@/components_psy/table_consults";

export default function Home() {



  const router = useRouter();
  const [error, setError] = useState("");
  const [consults, setConsults] = useState<any[]>([]);
  const [my_consults, setMy_consults] = useState<any[]>([]);


  async function loadConsults() {
      try {
        const data_consult = await apiFetch("/psy/list_consults");
        const data_myconsult = await apiFetch("/psy/list_myconsults");
        setConsults(data_consult);
        setMy_consults(data_myconsult);
      } catch (err: any) {
        setError(err.message);
      }
    }

    useEffect(() => {
      loadConsults();
  }, []);


  
  
  return (
    <div className="px-3 py-30">
        <Navbar/>

        <div className="w-full flex flex-col md:flex-row p-2 md:p-5 gap-1">

          <div className="w-full md:w-1/2 flex flex-col">
             <h2 className="mt-10 text-xl font-bold text-indigo-700 ">Minhas Consultas</h2>
            <div className="w-full md:w-1/2 flex flex-col mt-10">

              {my_consults.length === 0 ? (
                  <p className="text-gray-400">Nenhuma consulta existente</p>
                ) : (
                  my_consults.map((my_consult) => (
                    <Table
                      key={my_consult.id}
                      url_profile={my_consult.url_profile}
                      pacient_name={my_consult.pacient_name}
                      pacient_email={my_consult.pacient_email}
                      reason={my_consult.reason}
                      type={my_consult.type}
                      date={my_consult.date}
                      time={my_consult.time}
                    />
                  ))
                )
              }
              
            
            </div>
           
            <div className="w-full flex justify-center md:hidden mt-6">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
          </div>

          
          <div className="hidden md:flex justify-center items-center px-6">
            <div className="w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <div className="grid-rows-1">
            <h2 className="mt-10 text-xl font-bold text-red-900 ">Consultas sem psicologo</h2>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-65 ">
              
              {consults.length === 0 ? (
                  <p className="text-gray-400">Nenhuma consulta para assumir</p>
                ) : (
                  consults.map((consult) => (
                    <Consult_Card
                      key={consult.id}
                      id={consult.id}
                      type={consult.type}
                      reason={consult.reason}
                      psy={consult.psy_name}
                      date={consult.date}
                      time={consult.time}
                    />
                  ))
                )
              }
                                  

          </div>
          
          </div>
          
          

        </div>

       
        
    </div> 

   
      
  );
}



