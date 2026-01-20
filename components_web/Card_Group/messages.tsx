"use client";
import "flowbite";
import Link from "next/link";

export default function Message() {
  return (
        <div className="flex flex-col gap-4 w-full">

            <div
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="cursor-pointer p-[2px] rounded-xl "
                >
                <div className="flex items-center gap-4 bg-[#0F1A2A] p-4 rounded-xl shadow-lg">
                    <img
                    src="/images/users/user5.jpg"
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Dr. Cassilda Peres</h3>
                    <p className="text-gray-300 text-sm truncate">
                        Seu problema deve ser resolvido o mais rapido possivel
                    </p>
                    </div>
                    <span className="text-xs text-gray-400">Seg</span>
                </div>
            </div>

            <div
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="cursor-pointer p-[2px] rounded-xl "
                >
                <div className="flex items-center gap-4 bg-[#0F1A2A] p-4 rounded-xl shadow-lg">
                    <img
                    src="/images/users/user2.jpg"
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Dr. Anastancio Matola</h3>
                    <p className="text-gray-300 text-sm truncate">
                        Boa tarde, só confirmar que a sua próxima consulta...
                    </p>
                    </div>
                    <span className="text-xs text-gray-400">14:32</span>
                </div>
            </div>

            <div
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="cursor-pointer p-[2px] rounded-xl "
                >
                <div className="flex items-center gap-4 bg-[#0F1A2A] p-4 rounded-xl shadow-lg">
                    <img
                    src="/images/users/user1.jpg"
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Psic. Júlio Muanza</h3>
                    <p className="text-gray-300 text-sm truncate">
                        Obrigado por enviar o htmlFormulário. Já analisei e ...
                    </p>
                    </div>
                    <span className="text-xs text-gray-400">Ontem</span>
                </div>
            </div>


            <div
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="cursor-pointer p-[2px] rounded-xl "
                >
                <div className="flex items-center gap-4 bg-[#0F1A2A] p-4 rounded-xl shadow-lg">
                    <img
                    src="/images/users/user4.jpg"
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Dr. Alisha Kambane</h3>
                    <p className="text-gray-300 text-sm truncate">
                        Mesmo nessa situação é necessario manter a calma...
                    </p>
                    </div>
                    <span className="text-xs text-gray-400">Seg</span>
                </div>
            </div>
      
      

            <div id="authentication-modal" tabIndex= {-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
                <div className="relative bg-[#0F1A2A] border border-white/10 rounded-2xl shadow-2xl p-6">

  
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <h3 className="text-lg font-semibold text-white">
                            Digite seu código de acesso
                        </h3>

                        <button
                            type="button"
                            className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full p-2 transition"
                            data-modal-hide="authentication-modal"
                        >
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                   
                    <form className="pt-6">
                        <div className="mb-5">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-300"
                            >
                                Código de acesso
                            </label>

                            <input
                                type="password"
                                id="password"
                                placeholder="•••••••••"
                                className="bg-[#131F33] border border-white/10 text-white text-sm rounded-lg 
                                        focus:ring-purple-500 focus:border-purple-500 block w-full px-3 py-2.5 
                                        placeholder-gray-400 shadow-inner"
                                required
                            />
                        </div>

                        <Link href="/Pacients/chat">
                            <button
                                type="submit"
                                className="w-full text-white font-medium rounded-lg text-sm px-4 py-2.5 
                                        bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700
                                        hover:opacity-90 shadow-lg shadow-blue-900/30 transition"
                            >
                                Entrar
                            </button>
                        </Link>
                        
                    </form>
                </div>

            </div> 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>

        </div>
    
  );
}
