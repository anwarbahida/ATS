"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction générique pour scroll smooth
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo + Nom */}
      <div className="flex items-center gap-3">
        <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center overflow-hidden">
          <Image
            src="/logo.png"
            alt="ATS Recrutement Logo"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-indigo-600 whitespace-nowrap">
          ATS Recrutement
        </h1>
      </div>

      {/* Menu Desktop */}
      <nav className="space-x-6 hidden md:flex">
        {[
          { id: "features", label: "Fonctionnalités" },
          { id: "about", label: "À propos" },
          { id: "plans", label: "Plans" },
          { id: "testimonials", label: "Témoignages" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={(e) => handleScroll(e, id)}
            className="hover:text-indigo-600 transition"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Boutons Desktop */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="/Account/login"
          className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
        >
          Connexion
        </Link>
        <Link
          href="/Account/signin"
          className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
        >
          S'inscrire
        </Link>
      </div>

      {/* Bouton Hamburger (mobile) */}
      <button
        className="md:hidden text-indigo-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-5 py-6 md:hidden animate-slideDown">
          {[
            { id: "features", label: "Fonctionnalités" },
            { id: "about", label: "À propos" },
            { id: "plans", label: "Plans" },
            { id: "testimonials", label: "Témoignages" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScroll(e, id)}
              className="hover:text-indigo-600"
            >
              {label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-3 border-t w-3/4">
            <Link
              href="/Account/login"
              onClick={() => setIsOpen(false)}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-center font-medium hover:bg-indigo-700 transition"
            >
              Connexion
            </Link>
            <Link
              href="/Account/signin"
              onClick={() => setIsOpen(false)}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-center font-medium hover:bg-indigo-700 transition"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
