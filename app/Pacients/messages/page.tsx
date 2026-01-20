"use client"
import Navbar from "@/components_pacient/navbar";
import "flowbite";

import Consult_Card from "@/components_pacient/consult_card";
import {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "../../../lib/api"; 

export default function Messages() {

  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();
  const [reason, setReason] = useState("")
  const [type, setType] = useState("")
  const [notes, setNotes] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [time_to_take, setTime_to_take] = useState("")
  const [gender, setGender] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [consults, setConsults] = useState<any[]>([]);


  async function loadConsults() {
      try {
        const data = await apiFetch("/pacient/list_consults");
        setConsults(data);
      } catch (err: any) {
        setError(err.message);
      }
    }

    useEffect(() => {
      loadConsults();
  }, []);


  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    

    try {
      
      await apiFetch("/pacient/add_consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
      reason: reason,
          type: type,
          notes: notes,
          gender_pref: gender,
          date: date,
          time: time,
          time_to_take: time_to_take,
        }),
      });

      setOpenModal(false);
      router.refresh();

    } catch (err: any) {
      setError(err.message || "Erro ao marcar consulta");
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="px-3 py-30">
        <Navbar/>

        <div className="w-full flex flex-col md:flex-row p-3 md:p-5 gap-10">

          <div className="w-full md:w-1/2 flex flex-col">

            {/* <div className="w-full flex justify-end mb-5">
              <button
                onClick={() => setOpenModal(true)}
                className="flex items-center gap-2 text-white lg:text-lg bg-gradient-to-br from-purple-600 to-blue-500 
                          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                          dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-3 py-3"
              >
                <CirclePlus size={20} />
              </button>

            </div> */}
             
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-70 ">

              {consults.length === 0 ? (
                  <div>
                       
                        <p id="filled_error_help" className="mt-2 text-xs text-fg-danger-strong"><span className="font-medium">Oh, snapp!</span>  consulta registada.</p>
                    </div>
                ) : (
                  consults.map((consult) => (
                    <Consult_Card
                      key={consult.id}
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
           
            <div className="w-full flex justify-center md:hidden mt-6">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
          </div>

          
          <div className="hidden md:flex justify-center items-center px-6">
            <div className="w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
          </div>

      
          <div className="w-full md:w-1/2 flex flex-col">
              
            <div className="w-full max-w-lg  bg-[#0F1A2A] text-white rounded-2xl shadow-2xl border border-white/10">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <h3 className="text-xl font-semibold tracking-wide">
                  Nova Consulta
                </h3>

                
              </div>

              {/* Form */}
              <form className="px-6 py-5 space-y-5" onSubmit={handleRegister}>
                
                {/* Name */}
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                  <strong>Motivo da Consulta</strong> 
                  </label>
                <select id="reason"
                      className="w-full rounded-lg bg-[#162338] border border-white/10 
                                px-4 py-2.5 text-sm text-white
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={reason} onChange={(e) => setReason(e.target.value)}
                    >
                      <option value="">---selecionar---</option>
                      <option value="Ansiedade">Ansiedade</option>
                      <option value="Depressão">Depressão</option>
                      <option value="Insónia">Insónia</option>
                      <option value="Vícios">Vícios</option>
                      <option value="Outro">Outro</option>
                    </select>
                </div>

                {/* Price + Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm text-gray-300">
                    <strong>Duração da consulta (definido em horas)</strong> 
                    </label>
                    <input
                      type="number"
                      placeholder="50 mzn/h"
                      className="w-full rounded-lg bg-[#162338] border border-white/10 
                                px-4 py-2.5 text-sm text-white placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={time_to_take} onChange={(e) => setTime_to_take(e.target.value)} required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm text-gray-300">
                      <strong>Tipo de consulta</strong>
                    </label>
                    <select id="type"
                      className="w-full rounded-lg bg-[#162338] border border-white/10 
                                px-4 py-2.5 text-sm text-white
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={type} onChange={(e) => setType(e.target.value)}
                    >
                      <option value="">---selecionar---</option>
                      <option value="Normal">Normal</option>
                      <option value="Anonimato">Anonimato</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm text-gray-300">
                      <strong>Preferencia do gènero para o atentimento</strong>
                    </label>
                    <select id="gender"
                      className="w-full rounded-lg bg-[#162338] border border-white/10 
                                px-4 py-2.5 text-sm text-white
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={gender} onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">---selecionar---</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Sem preferencia">Sem preferencia</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm text-gray-300">
                    <strong>Data</strong> 
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg bg-[#162338] border border-white/10 
                                px-4 py-2.5 text-sm text-white placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={date} onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm text-gray-300">
                      <strong>Hora</strong>
                    </label>
                    <input
                      type="time"
                      step="60"
                      className="w-full rounded-lg bg-[#162338] border border-white/10 
                                px-4 py-2.5 text-sm text-white placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={time} onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>
                {/* Description */}
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                  <strong>Descrição do motivo da consulta </strong> (opcional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descrever..."
                    className="w-full rounded-lg bg-[#162338] border border-white/10 
                              px-4 py-2.5 text-sm text-white placeholder-gray-400
                              focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={notes} onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {error}
                  </div>
                )}

                {/* Footer */}
                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="px-5 py-2.5 rounded-lg text-sm text-gray-300
                              bg-white/5 hover:bg-white/10 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading} 
                    className="px-5 py-2.5 rounded-lg text-md font-medium text-white
                              bg-gradient-to-r from-purple-600 to-blue-500
                              hover:opacity-90 transition"
                  >
                    {loading ? "A processar..." : "Marcar"}
                  </button>
                </div>

              </form>
            </div>
     
          </div>

        </div>

       
        
    </div> 

   
      
  );
}



