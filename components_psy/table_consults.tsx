"use client";

export default function Table({

    url_profile,
    pacient_name,
    pacient_email,
    reason,
    type,
    date,
    time
}:{
  url_profile:string;
  pacient_name: string;
  pacient_email: string;
  reason: string;
  type: string;
  date: string;
  time: string;
}
    
) {
  return (
    <div className="relative overflow-x-auto bg-[#0F1A2A] p-6 rounded-2xl shadow-lg">
      <table className="w-full text-sm text-left text-gray-300">
        
        {/* HEADER */}
        <thead className="text-xs uppercase tracking-wide text-gray-400 border-b border-gray-600">
          <tr>
            <th className="px-6 py-4">Nome</th>
            <th className="px-6 py-4">Motivo</th>
            <th className="px-6 py-4">Tipo</th>
            <th className="px-6 py-4">Data e Hora</th>
            <th className="px-6 py-4 text-right">Ação</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          <tr className="border-b border-gray-800 hover:bg-white/5 transition">
            
            <th className="px-6 py-4 font-medium text-white whitespace-nowrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  <img className="w-10 h-10 rounded-full" src={url_profile} alt="image"/>
                </div>
                <div>
                  <div className="font-semibold">{pacient_name}</div>
                  <div className="text-xs text-gray-400">
                    {pacient_email}
                  </div>
                </div>
              </div>
            </th>

            <td className="px-6 py-4">
              {reason}
            </td>


            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                {type}
              </span>
            </td>

            <td className="px-6 py-4">
               📅 {date} ⏰ {time}
            </td>

            <td className="px-6 py-4 text-right">
              <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition">
                Ver detalhes
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}
