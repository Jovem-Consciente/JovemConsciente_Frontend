"use client"
import "flowbite"

export default function To_send_chat() {
    return (
        <form>
            <div className="flex items-center px-3 py-2 rounded-lg bg-[#131F33] border border-white/10 shadow-md">

               
                <button type="button" className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition">
                    📎
                </button>

                
                <textarea
                    rows={1}
                    className="mx-3 flex-1 bg-transparent border border-white/10 text-white text-sm rounded-lg 
                               focus:ring-purple-500 focus:border-purple-500 p-2 placeholder-gray-400 resize-none"
                    placeholder="Escreva uma mensagem..."
                />

                
                <button type="submit" className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-80 transition shadow-lg">
                    ➤
                </button>

            </div>
        </form>
    );
}
