"use client";

import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("Accueil");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenu principal */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          {activeSection}
        </h1>

        {/* Exemple de sections */}
        {activeSection === "Accueil" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="font-semibold text-lg mb-2">Candidatures récentes</h2>
              <p className="text-gray-500 text-sm">Liste des 5 dernières candidatures...</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="font-semibold text-lg mb-2">Statistiques</h2>
              <p className="text-gray-500 text-sm">Résumé des performances du recrutement...</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="font-semibold text-lg mb-2">Notifications</h2>
              <p className="text-gray-500 text-sm">Nouvelles alertes et messages...</p>
            </div>
          </div>
        )}

        {activeSection === "Profil" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Mon profil</h2>
            <p className="text-gray-500">Informations personnelles et paramètres du compte...</p>
          </div>
        )}

        {activeSection === "Candidatures" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Candidatures</h2>
            <p className="text-gray-500">Gestion et suivi des candidatures reçues...</p>
          </div>
        )}

        {activeSection === "Paramètres" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Paramètres</h2>
            <p className="text-gray-500">Configuration de votre compte et notifications...</p>
          </div>
        )}
      </main>
    </div>
  );
}
