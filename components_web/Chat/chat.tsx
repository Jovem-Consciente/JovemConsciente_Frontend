"use client";

import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

export default function Chat( consultationId : number) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const socketRef = useRef(null);

    // 🔌 conectar socket
    useEffect(() => {
        socketRef.current = io("http://localhost:3000", {
            auth: {
                token: localStorage.getItem("token")
            }
        });

        const socket = socketRef.current;

        // entrar na sala da consulta
        socket.emit("joinConsultation", { consultationId });

        
        socket.on("newMessage", (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, [consultationId]);

    // 📥 buscar histórico
    useEffect(() => {
        async function fetchMessages() {
            const res = await fetch(
                `http://localhost:3000/api/messages/${consultationId}`
            );
            const data = await res.json();
            setMessages(data);
        }

        if (consultationId) {
            fetchMessages();
        }
    }, [consultationId]);

    // 📤 enviar mensagem
    const handleSend = (e) => {
        e.preventDefault();

        if (!newMessage.trim()) return;

        socketRef.current.emit("sendMessage", {
            consultationId,
            content: newMessage
        });

        setNewMessage("");
    };

    return (
        <div className="flex flex-col h-130 w-full max-w-xl mx-auto bg-[#0F1A2A] rounded-xl shadow-xl overflow-hidden">

            <div className="bg-neutral-secondary-soft w-full rounded-xl border-y border-white/10">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                        <img src="/images/users/user5.jpg" className="h-7" />
                        <span className="text-xl text-white font-semibold">
                            Consulta #{consultationId}
                        </span>
                    </div>
                </div>
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