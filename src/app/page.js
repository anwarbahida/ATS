"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users, FileText, CheckCircle, Component } from "lucide-react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";

export default function HomePage() {
  const features = [
    { icon: <Users className="text-indigo-600 mb-3" />, title: "Gestion des candidats", desc: "Suivez facilement tous vos candidats depuis la candidature jusqu'à l'embauche." },
    { icon: <FileText className="text-indigo-600 mb-3" />, title: "Analyse des CV", desc: "Centralisez, filtrez et analysez les CV rapidement grâce à notre interface intelligente." },
    { icon: <CheckCircle className="text-indigo-600 mb-3" />, title: "Processus simplifié", desc: "Automatisez le suivi des candidatures et améliorez la collaboration entre recruteurs." },
  ];

  const plans = [
    { title: "Basique", price: "Gratuit", features: ["Gestion limitée des candidats", "Support standard"] },
    { title: "Pro", price: "29€/mois", features: ["Candidats illimités", "Analyse avancée", "Support prioritaire"] },
    { title: "Entreprise", price: "99€/mois", features: ["Toutes les fonctionnalités", "Support dédié", "Intégrations avancées"] },
  ];

  const testimonials = [
    { name: "an.bahida@gmail.com", text: "Cet ATS m'a fait gagner énormément de temps, interface simple et intuitive." },
    { name: "os.kezzo@gmail.com", text: "Gestion complète des candidats, je recommande fortement pour les recruteurs." },
    { name: "bi.Mchiche@gmail.com", text: "Très flexible et facile à utiliser, parfait pour notre équipe RH." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 flex flex-col items-center">

    <Navbar/>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-10 mt-20 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Gérez vos <span className="text-indigo-600">candidatures efficacement</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Notre ATS vous permet de suivre tous vos candidats, analyser les CV et automatiser votre processus de recrutement.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/Account/signin"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-indigo-700 transition"
            >
              Commencer <ArrowRight size={18} />
            </Link>
            <Link
              href="#features"
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition"
            >
              En savoir plus
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img src="/ats.jpg" alt="ATS Illustration" className="w-full max-w-md drop-shadow-xl" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-6xl px-10 mt-28 grid md:grid-cols-3 gap-8">
        <br/>
        <h3 className="text-3xl font-bold mb-8 text-indigo-600 text-center">Fonctionnalités</h3>
        <br/>
        
        {features.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition text-center"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
<section id="about" className="w-full max-w-6xl px-10 mt-32 flex flex-col md:flex-row items-center gap-10">
  {/* Image About */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex-1"
  >
    <img src="/ats.jpg" alt="À propos ATS" className="w-full rounded-2xl shadow-lg" />
  </motion.div>

  {/* Texte About */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex-1"
  >
    <h3 className="text-3xl font-bold mb-4 text-indigo-600">À propos de notre ATS</h3>
    <p className="text-gray-600 mb-4">
      Notre plateforme est conçue pour simplifier le recrutement : centralisation des CV, suivi des candidats et automatisation des processus pour gagner du temps.
    </p>
    <Link
      href="/account/signin"
      className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
    >
      Commencer maintenant
    </Link>
  </motion.div>
</section>

{/* Image Gallery Section */}
<section className="w-full max-w-6xl px-10 mt-16 flex flex-col items-center">

  <div className="relative w-full flex items-center">
    {/* Flèche gauche */}
    <button
      onClick={() => document.getElementById("gallery").scrollBy({ left: -300, behavior: "smooth" })}
      className="absolute left-0 z-10 bg-white p-2 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
    >
      &#8592;
    </button>

    {/* Images scrollables */}
    <div
      id="gallery"
      className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth py-4"
    >
      {["/entreprise.jpg", "/entreprise1.jpg", "/entreprise2.jpg", "/entreprise3.jpg"].map((src, i) => (
        <motion.img
          key={i}
          whileHover={{ rotate: i % 2 === 0 ? 10 : -10, scale: 1.05 }}
          src={src}
          alt={`Entreprise ${i + 1}`}
          className="w-64 h-40 object-cover rounded-2xl shadow-lg flex-shrink-0"
        />
      ))}
    </div>

    {/* Flèche droite */}
    <button
      onClick={() => document.getElementById("gallery").scrollBy({ left: 300, behavior: "smooth" })}
      className="absolute right-0 z-10 bg-white p-2 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
    >
      &#8594;
    </button>
  </div>
</section>


      {/* Plans Section */}
      <section id="plans" className="w-full max-w-6xl px-10 mt-32 text-center">
        <h3 className="text-3xl font-bold mb-12 text-indigo-600">Nos offres</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{plan.title}</h4>
              <p className="text-indigo-600 text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-600 mb-4 space-y-1">
                {plan.features.map((f, j) => <li key={j}>• {f}</li>)}
              </ul>
              <Link
                href="/account/signin"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
              >
                Choisir
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full max-w-6xl px-10 mt-32 text-center">
        <h3 className="text-3xl font-bold mb-12 text-indigo-600">Témoignages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-4">&quot;{t.text}&quot;</p>
              <h4 className="font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-6xl px-10 mt-32 py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-3xl font-bold mb-8 text-indigo-600 text-center">Contactez-nous</h3>
        
        <p className="text-gray-600 mb-8 text-center">
          Vous avez des questions ou souhaitez une démonstration ? Remplissez le formulaire ci-dessous.
        </p>

        <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Nom complète</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Votre message"
              className="border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Envoyer
            </button>
          </div>
        </form>
      </section>


      {/* Footer */}
      <footer className="mt-24 py-12 bg-gray-50 w-full border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-3 gap-8 items-start">
          
          {/* Texte et copyright */}
           <center>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ATS Recrutement. Tous droits réservés.
              <br/>By : <i>Anwar Bahida </i>
            </div>
          </center>
          
          {/* Liens réseaux sociaux */}
          <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>


          {/* Map - responsive */}
        <div className="w-full md:w-80"> {/* md:w-80 = largeur fixe sur desktop; change si besoin */}
          <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://maps.google.com/maps?q=Errachidia,Maroc&z=12&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Emplacement Errachidia"
            />
          </div>
        </div>

        </div>
      </footer>

    </main>
  );
}
