"use client";

import Navbar from "@/components_psy/navbar";
import { useState, useEffect } from "react";
import { apiFetch } from "../../../lib/api";
import  Message  from "@/components_psy/messages_card";
import Chat from "@/components_psy/chat";

export default function Home() {
  const [error, setError] = useState("");
  const [my_consults, setMy_consults] = useState<any[]>([]);
  const [selectedConsult, setSelectedConsult] = useState<any>(null);

  async function loadConsults() {
    try {
      const data = await apiFetch("/psy/list_myconsults");
      setMy_consults(data);
      console.log(data);
    } catch (err: any) {
      setError(err.message);
    }
    
  }

  useEffect(() => {
    loadConsults();
  }, []);

  return (
    <div className="px-3 py-20">
      <Navbar />

      <div className="w-full flex flex-col md:flex-row gap-4 mt-20">

       
        <div className="w-full md:w-1/3 bg-[#0F1A2A] rounded-xl p-4">
          <h2 className="text-xl font-bold text-indigo-400 mb-4">
            Minhas Conversas
          </h2>

          <div className="space-y-3">
            {my_consults.length === 0 ? (
              <p className="text-gray-400">
                Nenhuma consulta disponível
              </p>
            ) : (
              my_consults.map((my_consult) => (
                <div
                  key={my_consult.id}
                  onClick={() => setSelectedConsult(my_consult)}
                  className={`cursor-pointer p-2 rounded-lg transition ${
                    selectedConsult?.id === my_consult.id
                      ? "bg-purple-700"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <Message
                    id={my_consult.id}
                    image={my_consult.url_profile}
                    pacient_name={my_consult.pacient_name}
                    message={my_consult.last_message}
                    date={my_consult.date}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        
        <div className="w-full md:w-2/3">
          {selectedConsult ? (
            <Chat consultationId={selectedConsult.id as number} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              Selecione uma consulta para iniciar o chat
            </div>
          )}
        </div>

      </div>
    </div>
  );
}