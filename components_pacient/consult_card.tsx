"use client";
import "flowbite";

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

    console.log(psy)
    return(
        <div className="w-60  bg-[#152144] text-white p-5 rounded-xl shadow-xl flex flex-col gap-3">
                 {/* <Icon className="w-8 h-8 text-blue-400" /> */}
                
                <h5 className="text-md font-semibold">Consulta: {reason}</h5>

                <div className="space-y-1">
                    <p className="text-sm opacity-80">
                        <strong>Psicologo: </strong> <span className="font-medium">{psy || "A definir..."}</span>
                    </p>
                    <p className="text-sm opacity-80">
                        <strong>Tipo de Consulta: </strong><span className="font-medium">{type}</span>
                    </p>
                </div>

                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                    <span className="text-sm font-medium">📅 {date}</span>
                    <span className="text-sm font-medium">⏰ {time}</span>
                </div>

                <button className="mt-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:opacity-90 font-medium rounded-xl text-sm px-6 py-2.5">
                    Ver Detalhes
                </button>
            </div>
    );
}