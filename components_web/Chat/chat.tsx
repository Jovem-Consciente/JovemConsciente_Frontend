"use client";
import Header_chat from "../Navbar/Header_chat";
import Sent_chat from "./sent_chats";
import To_send_chat from "./to_send_chat";

export default function Chat() {
    return (
        <div className="flex flex-col h-130 w-full max-w-xl mx-auto bg-[#0F1A2A] rounded-xl shadow-xl overflow-hidden">
            <Header_chat/>
           
            <div className="flex-1 overflow-y-auto p-4 space-y-4  mt-10 scroll-smooth">
                <Sent_chat />
            </div>

            
            <div className="sticky bottom-0 left-0 right-0 bg-[#0D1624] border-t border-white/10 p-3">
                <To_send_chat />
            </div>

        </div>
    );
}
