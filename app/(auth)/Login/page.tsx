"use client";

import "flowbite";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiFetch } from "../../../lib/api";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 async function handleVerifyCredentials(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password.some((c) => c === "")) {
      setError("Preencha todos os dígitos do código de acesso");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password.join("")); // junta os dígitos do PIN     

      try {
        const data = await apiFetch("/auth/login", { method: "POST", body: formData });
        
        if (data.user.role === "Pacient") {
          router.push("/Pacients/consults");
        } else if (data.user.role === "Psy") {
          router.push("/Psy/consults");
        } else {
          router.push("/dashboard");
        }
        } catch (err: any) {
            setError(err.message || "Erro ao criar conta");
        }

    } catch (err: any) {
      setError(err.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  }


  function handlepasswordChange(value: string, index: number) {
    if (!/^\d?$/.test(value)) return;

    const newPassword = [...password];
    newPassword[index] = value;
    setPassword(newPassword);

    const nextInput = document.getElementById(`password-${index + 1}`);
    if (value && nextInput) nextInput.focus();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-xl p-7 dark:bg-gray-800">
        
        {/* Logo */}
        <div className="flex justify-center">
          <img
            className="rounded-full w-60 p-3"
            src="/images/Logo_png.png"
            alt="Logo"
          />
        </div>

        <h1 className="text-2xl font-extrabold text-center text-blue-800 dark:text-white mb-6">
          Código de acesso
        </h1>

        <form onSubmit={handleVerifyCredentials} className="flex flex-col items-center space-y-6">
          
          {/* EMAIL */}
          <input
            type="email"
            required
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          {/* CÓDIGO */}
          <div className="flex space-x-2">
            {password.map((digit, i) => (
              <input
                key={i}
                id={`password-${i}`}
                type="password"
                maxLength={1}
                value={digit}
                onChange={(e) => handlepasswordChange(e.target.value, i)}
                className="w-12 h-12 text-center text-lg border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            ))}
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Introduz o código de 6 dígitos enviado ao teu e-mail.
          </p>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={loading}
            className="text-white lg:text-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
              focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium
              rounded-xl text-sm px-20 py-3 text-center leading-5"
          >
            {loading ? "A autenticar..." : "Entrar"}
          </button>

          {/* REGISTO */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Ainda não tens uma conta?{" "}
            <Link
              href="/Auth/signup"
              className="text-blue-700 hover:underline font-medium dark:text-blue-400"
            >
              Regista-te aqui
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
