"use client";
import "flowbite"; 

export default function Services(){
    return(
        <div id="services" className=" justify-center md:justify-start items-center mt-20 ">
            <div className="w-full flex justify-center md:justify-start">
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
            <div className="justify-self-center mt-5">
                <h1 className=" text-4xl font-semibold text-heading">Serviços</h1>
                    
            </div>

            <div className="flex flex-row justify-center md:justify-start items-center gap-5 mt-15 mb-25  ">
                <div className="bg-[#111827] block max-w-sm p-5 rounded-xl shadow-md shadow-purple-800 ">
                   <a href="#">
                        <img className="rounded-base" src="/images/carousel/img_4.jpg" alt="" />
                    </a>
                    <a href="#">
                        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Consulta com Psicólogo</h5>
                    </a>
                    <p className="mb-6 text-body">Converse em tempo real com psicólogos licenciados, de forma segura, acolhedora e, se preferir, totalmente anónima.</p>
                    <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-blfocus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-6 py-2.5 text-center leading-5">
                        Saber mais
                    </button>
                </div>

                 <div className="bg-[#111827] block max-w-sm p-5 rounded-xl shadow-md shadow-purple-800 ">
                    <a href="#">
                        <img className="rounded-base" src="/images/carousel/img_6.jpg" alt="" />
                    </a>
                    <a href="#">
                        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Conversas entre Jovens</h5>
                    </a>
                    <p className="mb-6 text-body">Partilhe experiências, peça apoio e conecte-se com outros jovens que enfrentam desafios parecidos — num espaço seguro e moderado.</p>
                    <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-blfocus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-6 py-2.5 text-center leading-5">
                         Saber mais
                    </button>
                </div>

                 <div className="bg-[#111827] block max-w-sm p-5 rounded-xl shadow-md shadow-purple-800 ">
                    <a href="#">
                        <img className="rounded-base" src="/images/carousel/img_5.jpg" alt="" />
                    </a>
                    <a href="#">
                        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Diário da Jornada</h5>
                    </a>
                    <p className="mb-6 text-body">Registe pensamentos, emoções e avanços no seu próprio diário emocional. Acompanhe a sua evolução ao longo do tempo.</p>
                    <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-blfocus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-6 py-2.5 text-center leading-5">
                         Saber mais
                    </button>
                </div>

            </div>
        </div>
        
    );
}