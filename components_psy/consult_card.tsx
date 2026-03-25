"use client";
import { apiFetch } from "@/lib/api";

export default function Consult_Card({ 
  id,
  type,
  reason, 
  psy, 
  date, 
  time
}: {
  id: number;
  type: string;
  reason: string;
  psy: string;
  date: string;
  time: string;
}) {

  async function handleConfirm(id_cons) {
    console.log("funcionando");
    await apiFetch(`/psy/assum_consult/${id_cons}`, {
      method: "PUT",
    });
  }

  return (
    <div
      className="
        w-60 
        bg-[#121F36]
        text-gray-200
        p-6
        rounded-2xl
        shadow-[0_0_0_1px_rgba(99,102,241,0.25)]
        ring-1 ring-indigo-500/20
        hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
        transition-all duration-300
        flex flex-col gap-4
      "
    >
      
      {/* TÍTULO */}
      <h5 className="text-base font-semibold text-white">
        {reason}
      </h5>

      {/* INFO */}
      <div className="space-y-2 text-sm">
        <p className="opacity-80">
          <span className="font-medium text-gray-300">Tipo:</span>{" "}
          {type}
        </p>

      </div>

      {/* DATA & HORA */}
      <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl text-sm">
        <span>📅 {date}</span>
        <span>⏰ {time}</span>
      </div>

      {/* AÇÕES */}
      <div className="flex gap-3 mt-2">
        <button
          className="
            flex-1 
            text-sm font-medium 
            text-gray-300 
            border border-gray-600/60 
            hover:bg-white/5 
            rounded-xl 
            py-2 
            transition
          "
        >
          Ver detalhes
        </button>

        <button
          onClick={() => handleConfirm(id)}
          className=" flex-1 text-sm font-medium  text-white bg-purple-600 hover:opacity-90 rounded-xl  py-2 transition">
          Assumir
        </button>
      </div>
    </div>
  );
}
