"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, User, FileText, Settings, LogOut } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Accueil", href: "/dashboard", icon: <Home size={20} /> },
    { name: "Profil", href: "/dashboard/profile", icon: <User size={20} /> },
    { name: "Candidatures", href: "/dashboard/candidatures", icon: <FileText size={20} /> },
    { name: "Paramètres", href: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white h-screen shadow-lg p-4 flex flex-col justify-between transition-all duration-300 sticky top-0`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ATS Recrutement Logo"
              width={isOpen ? 40 : 32}
              height={isOpen ? 40 : 32}
              className="object-contain"
            />
            {isOpen && (
              <h1 className="text-xl font-bold text-indigo-600">ATS</h1>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-600 focus:outline-none"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 text-gray-700 hover:bg-indigo-50 p-2 rounded-lg transition"
            >
              {item.icon}
              {isOpen && <span className="font-medium">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t pt-4">
        <button className="flex items-center gap-3 text-red-600 hover:bg-red-50 w-full p-2 rounded-lg transition">
          <LogOut size={20} />
          {isOpen && <span>Déconnexion</span>}
        </button>
      </div>
    </div>
  );
}
