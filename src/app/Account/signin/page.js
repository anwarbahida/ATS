"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// URL de ton backend
const API_URL = "http://localhost:8080";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg || "Erreur lors de l'inscription");
      }

      const data = await res.json();
      console.log("Réponse backend:", data);

      setMessage(`Inscription réussie ! Bienvenue ${data.username}`);
      
    } catch (err) {
      setMessage(err.message);
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
          Créez votre compte ✨
        </h1>
        <p className="text-center text-gray-500 mb-8">Rejoignez-nous</p>

        {message && (
          <div className="text-center text-red-500 mb-3">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom d&apos;utilisateur
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Entrez votre nom d'utilisateur"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemple@email.com"
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            S&apos;inscrire
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Vous avez déjà un compte ?{" "}
          <Link href="/Account/login" className="text-indigo-600 hover:underline">
            Se connecter
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
