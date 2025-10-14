"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

// URL de ton backend
const API_URL = "http://localhost:8080";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState(""); // <-- changer emailOrUsername en username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username, // <-- envoyer username au backend
          password,
        }),
      });

      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg || "Erreur lors de la connexion");
      }

      const data = await res.json();
      console.log("Réponse backend:", data);

      // Stocker le token dans le localStorage si le backend envoie un token
      if (data.token) localStorage.setItem("token", data.token);

      // Rediriger vers le dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("Erreur lors de la connexion");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          Bonjour 👋
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Connectez-vous pour accéder à votre tableau de bord personnalisé
        </p>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mb-3 text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom d&apos;utilisateur
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Entrez votre nom d'utilisateur"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-600" /> Se souvenir de moi
            </label>
            <Link
              href="/forgot-password"
              className="text-indigo-600 hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Vous nd&apos;avez pas de compte ?{" "}
          <Link href="/Account/signin" className="text-indigo-600 hover:underline">
            S&apos;inscrire
          </Link>
        </p>

        <div className="text-center mt-4">
          <Link
            href="/"
            className="text-gray-400 text-sm hover:text-indigo-600 transition"
          >
            ⬅ Revenir à l’accueil
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
