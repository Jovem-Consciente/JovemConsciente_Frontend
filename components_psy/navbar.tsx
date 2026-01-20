"use client";
import Link from "next/link";
import { useState } from "react";
import {
  MessageCircle,
  CalendarCheck,
  BookOpen,
  Video,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("consultas"); 

  return (
    <header className="fixed w-full z-20 top-0 start-0">
      <nav className="">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a className="flex items-center space-x-3">
            <img src="/images/Logo.png" className="h-12" alt="Logo" />
          </a>

          <div className="flex items-center space-x-6">
            <a
                href="tel: +258 84 848 6124"
                className="text-sm text-white hover:underline"
              >
              +258 84 848 6124
            </a>

            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center justify-center w-10 h-8 rounded-full border border-white hover:ring-2 hover:ring-white/40"
              >
                {/* <img
                  src=""
                  alt="user photo"
                  className="rounded-full w-10 h-10"
                /> */}
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-50">
                  <div className="px-4 py-3 text-sm border-b">
                    <span className="block text-gray-900 font-medium">
                      Joseph McFall
                    </span>
                    <span className="block text-gray-600 truncate">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="p-2 text-sm text-gray-700 font-medium">
                    <li className="hover:bg-gray-100 rounded p-2">Dashboard</li>
                    <li className="hover:bg-gray-100 rounded p-2">Settings</li>
                    <li className="hover:bg-gray-100 rounded p-2">Earnings</li>
                    <li className="hover:bg-gray-100 rounded p-2">Sign out</li>
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded hover:bg-white/10"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </nav>

      <nav className=" to-black border-y border-white/10 hidden md:block">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <ul className="flex space-x-10 text-sm font-medium text-white">
            
            <li>
              <Link            
                  href="/Psy/consults"
                    onClick={() => setActivePage("consultas")}
                    className={`flex items-center gap-2 cursor-pointer
                      ${
                        activePage === "consultas"
                          ? "text-purple-400  font-semibold"
                          : "hover:underline"
                      }`}
                  >
                    <CalendarCheck size={20} /> Consultas
               </Link>
            </li>

            
            <li>
              <Link
                  href="/Psy/messages" 
                  onClick={() => setActivePage("conversas")}
                  className={`flex items-center gap-2 cursor-pointer
                    ${
                      activePage === "conversas"
                        ? "text-purple-400  font-semibold"
                        : "hover:underline"
                    }`}
                >
                  <MessageCircle size={20} /> Conversas
              </Link>
            </li>

           
            <li>
              <Link
                  href=""
                  onClick={() => setActivePage("historico")}
                  className={`flex items-center gap-2 cursor-pointer
                    ${
                      activePage === "jornada"
                        ? "text-purple-400  font-semibold"
                        : "hover:underline"
                    }`}
                >
                  <BookOpen size={20} /> Historico
              </Link>
            </li>

            
            {/* <li>
              <Link
                  href=""
                  onClick={() => setActivePage("minhas")}
                  className={`flex items-center gap-2 cursor-pointer
                    ${
                      activePage === "videos"
                        ? "text-purple-400  font-semibold"
                        : "hover:underline"
                    }`}
                >
                  <Video size={20} /> Minhas Consultas
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
