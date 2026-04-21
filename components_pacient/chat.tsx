"use client";

import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { apiFetch } from "@/lib/api";



type ChatProps = {
  consultationId: number;
};

type Message = {
  content: string;
  sender_role: "pacient" | "psy";
};

 type UserData = {
  email: string;
  name: string;
  phone: string;
  photo_profile: string;
};


export default function Chat( { consultationId }: ChatProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const socketRef = useRef<Socket | null>(null);
    const [user_data, setUser_data] = useState<UserData | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    async function loadUser() {
          try {
            console.log(consultationId);
            const data = await apiFetch(`/pacient/get_data_chat/${consultationId}`);
            console.log(consultationId);
            console.log(data);
            setUser_data(data.psy);
          } catch (err: any) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        }
      
     
    async function loadMesseges() {
        try {
            const data_messages = await apiFetch(`/pacient/get_data_messeges/${consultationId}`);
            setMessages(data_messages);
            console.log(data_messages);
        } catch (error: any) {
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }
     async function openSocket() {
            try {
                console.log("testando se funciona");
                const socket = io("http://localhost:3000");
                socket.on("connect", () =>{
                    console.log("Userrrrrrrrrrrrrrrrrrr conectado", socket.id);
                });
            } catch (error: any) {
                setError(error.message);
            }
            
        }
    

    useEffect(() => {
        openSocket();
        loadUser();
        loadMesseges();
    }, []);

    
    // useEffect(() => {
    //     socketRef.current = io("http://localhost:3000", {
    //         auth: {
    //             token: localStorage.getItem("token")
    //         }
    //     });

    //     const socket = socketRef.current;

       
    //     socket.emit("joinConsultation", { consultationId });

        
    //     socket.on("newMessage", (message: Message) => {
    //         setMessages((prev) => [...prev, message]);
    //     });

    //     return () => {
    //         socket.disconnect();
    //     };
    // }, [consultationId]);

    
    // useEffect(() => {
    //     try {
    //         const data_messages = await apiFetch(`/pacient/get_data_chat/${consultationId}`)
    //     } catch (error) {
            
    //     }
    // }, [consultationId]);

   
    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();

        if (!newMessage.trim()) return;

       socketRef.current?.emit("sendMessage", {
            consultationId,
            content: newMessage
        });

        setNewMessage("");
    };

    return (
        <div className="flex flex-col h-130 w-full max-w-xl mx-auto bg-[#0F1A2A] rounded-xl shadow-xl overflow-hidden">
            
            <div className="bg-neutral-secondary-soft w-full rounded-xl border-y border-white/10">
                { user_data ?(
                    <>
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center space-x-3">
                                <img src={user_data?.photo_profile || "/images/users/default_user.png"} className="h-7" />
                                <span className="text-xl text-white font-semibold">
                                    {user_data?.name}
                                </span>
                            </div>
                        </div>
                    </>
                    ):(
                        <p>A carregar...</p>
                    )}
            </div>
                
            

            {/* MENSAGENS */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-2">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${
                            msg.sender_role === "pacient"
                                ? "justify-end"
                                : "justify-start"
                        }`}
                    >
                        <div
                            className={`max-w-[320px] p-3 rounded-xl shadow ${
                                msg.sender_role === "pacient"
                                    ? "bg-purple-600 text-white"
                                    : "bg-blue-800 text-white"
                            }`}
                        >
                            <p className="text-sm">{msg.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* INPUT */}
            <div className="bg-[#0D1624] border-t border-white/10 p-3">
                <form onSubmit={handleSend}>
                    <div className="flex items-center px-3 py-2 rounded-lg bg-[#131F33] border border-white/10">

                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            rows={1}
                            className="flex-1 bg-transparent text-white text-sm p-2 resize-none"
                            placeholder="Escreva uma mensagem..."
                        />

                        <button
                            type="submit"
                            className="p-2 rounded-full bg-purple-600 ml-2"
                        >
                            ➤
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}