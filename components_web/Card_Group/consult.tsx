"use client";

import {
  HeartPulse,
  Frown,
  Bed,
} from "lucide-react";

export default function Consult_Added() {
    return (
        <div className="flex flex-wrap gap-4">
            
           
            <div className="w-60 bg-[#0F1A2A] text-white p-5 rounded-xl shadow-lg flex flex-col gap-4">
                <HeartPulse className="w-10 h-10 text-blue-400" />

                <h4 className="text-lg font-semibold">Consulta: Ansiedade</h4>

                <div className="space-y-1">
                    <p className="text-sm opacity-80">
                        Paciente: <span className="font-medium">Maria Silva</span>
                    </p>
                    <p className="text-sm opacity-80">
                        Serviço: <span className="font-medium">Consulta Geral</span>
                    </p>
                </div>

                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                    <span className="text-sm font-medium">📅 20 Nov 2025</span>
                    <span className="text-sm font-medium">⏰ 14:00</span>
                </div>

                <button className="mt-auto text-white bg-gradient-to-br from-green-400 to-blue-600 hover:opacity-90 font-medium rounded-xl text-sm px-6 py-2.5">
                    Ver Detalhes
                </button>
            </div>

          
            <div className="w-60 bg-[#0F1A2A] text-white p-5 rounded-xl shadow-lg flex flex-col gap-4">
                <Frown className="w-10 h-10 text-blue-400" />
                <h4 className="text-lg font-semibold">Consulta: Depressão</h4>

                <div className="space-y-1">
                    <p className="text-sm opacity-80">Paciente: <span className="font-medium">Maria Silva</span></p>
                    <p className="text-sm opacity-80">Serviço: <span className="font-medium">Consulta Geral</span></p>
                </div>

                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                    <span className="text-sm font-medium">📅 20 Nov 2025</span>
                    <span className="text-sm font-medium">⏰ 14:00</span>
                </div>

                <button className="mt-auto text-white bg-gradient-to-br from-green-400 to-blue-600 hover:opacity-90 font-medium rounded-xl text-sm px-6 py-2.5">
                    Ver Detalhes
                </button>
            </div>

          
            <div className="w-60 bg-[#0F1A2A] text-white p-5 rounded-xl shadow-lg flex flex-col gap-4">
                <Bed className="w-10 h-10 text-blue-400" />
                <h4 className="text-lg font-semibold">Consulta: Insónia</h4>

                <div className="space-y-1">
                    <p className="text-sm opacity-80">Paciente: <span className="font-medium">Maria Silva</span></p>
                    <p className="text-sm opacity-80">Serviço: <span className="font-medium">Consulta Geral</span></p>
                </div>

                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                    <span className="text-sm font-medium">📅 20 Nov 2025</span>
                    <span className="text-sm font-medium">⏰ 14:00</span>
                </div>

                <button className="mt-auto text-white bg-gradient-to-br from-green-400 to-blue-600 hover:opacity-90 font-medium rounded-xl text-sm px-6 py-2.5">
                    Ver Detalhes
                </button>
            </div>

        </div>
    );
}
