"use client";

import "flowbite";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "../../../lib/api";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [role] = useState("Pacient")

  const [password, setPassword] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
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
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("password", password.join("")); // junta os dígitos do PIN
      formData.append("role", role);
      formData.append("gender", gender);

      if (file) {
        formData.append("file", file);
      }

      

      try {
        const res = await apiFetch("/auth/register", { method: "POST", body: formData });
        // sucesso
        router.push("/Login");
        } catch (err: any) {
            setError(err.message || "Erro ao criar conta");
        }

    } catch (err: any) {
      setError(err.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  }

  function handleCodeChange(value: string, index: number) {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...password];
    newCode[index] = value;
    setPassword(newCode);

    const next = document.getElementById(`code-${index + 1}`);
    if (value && next) (next as HTMLInputElement).focus();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 dark:bg-gray-800">
        <h1 className="text-3xl font-extrabold text-center text-blue-800 dark:text-white mb-6">
          Registro
        </h1>

        <form className="max-w-sm mx-auto" onSubmit={handleRegister}>
          <div className="mb-5">
            
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="name@flowbite.com" required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome Completo</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Solange Maria" required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contacto</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="+258 8X XXX XXXX" required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Morada</label>
            <select id="address" value={address} onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">---selecionar---</option>
              <option value="Maputo Cidade">Maputo Cidade</option>
              <option value="Maputo Provincia">Maputo Provincia</option>
              <option value="Gaza">Gaza</option>
              <option value="Inhambane">Inhambane</option>
              <option value="Manica">Manica</option>
              <option value="Sofala">Sofala</option>
              <option value="Zambezia">Zambezia</option>
              <option value="Tete">Tete</option>
              <option value="Nampula">Nampula</option>
              <option value="Cabo Delgado">Cabo Delgado</option>
              <option value="Niassa">Niassa</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero</label>
            <select id="address" value={gender} onChange={(e) => setGender(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">---selecionar---</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>             
            </select>
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-heading" htmlFor="file">Perfil</label>
            <input type="file" id="file" onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="cursor-pointer shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-5 mt-5">
            <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Código de Acesso</label>
            <div className="flex justify-center space-x-2">
              {password.map((digit, i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  maxLength={1}
                  type="password"
                  value={digit}
                  onChange={(e) => handleCodeChange(e.target.value, i)}
                  className="w-10 h-10 text-center text-lg border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              ))}
            </div>
          </div>

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <button type="submit" disabled={loading} className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 py-3 rounded-xl">
            {loading ? "A enviar..." : "Submeter"}
          </button>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-5">
            Já tens uma conta?{" "}
            <Link href="/(auth)/Login" className="text-blue-700 hover:underline font-medium dark:text-blue-400">
              Clique aqui
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
