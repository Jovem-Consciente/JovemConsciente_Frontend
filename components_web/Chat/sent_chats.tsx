"user client"
import "flowbite";

export default function Sent_chat(){
    return(
        <div className="space-y-5">
            <div className="flex items-start gap-2.5">
            
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-blue-800  rounded-e-base rounded-xl shadow-lg">
                    
                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                        
                        <span className="text-md font-semibold text-heading text-purple-400">Dr. Cassilda Peres</span>
                    </div>
                    <p className="text-sm py-2.5 text-body">Bom dia! Pedemos começar a nossa sessão de hoje.</p>
                    
                </div>
                
            </div>

            <div className="flex items-start gap-2.5">
            
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-blue-800  rounded-e-base rounded-xl shadow-lg">
                    
                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                        
                        <span className="text-md font-semibold text-heading text-purple-400">Dr. Cassilda Peres</span>
                    </div>
                    <p className="text-sm py-2.5 text-body">Peço que faça antes uma descrição do que sente, para poder ajudar.</p>
                    
                </div>
                
            </div>

            <div className="flex justify-end items-start gap-2.5">
            
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 justify-end bg-purple-900  rounded-e-base rounded-xl shadow-lg">
                    
                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                        
                        <span className="text-md font-semibold text-heading text-purple-400">Eu</span>
                    </div>
                    <p className="text-sm py-2.5 text-body">Boa tarde, doutora! </p>
                    
                </div>
                
            </div>
            
           

        </div>
    );
}