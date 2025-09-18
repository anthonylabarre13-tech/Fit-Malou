import React from "react";
import { motion } from "framer-motion";
// Using Tailwind CSS classes. This single-file React component is a ready-to-run
// landing + shop page for a vlogger who sells training programs.
// TODO: replace placeholder keys, images, and text with your real content.

// Note: the project should include Tailwind, framer-motion, shadcn/ui, lucide-react
// and Stripe (client & server) for payments. This file is a single-page app UI.

export default function FitMalouSite() {
  const programs = [
    {
      id: "p1",
      title: "Programme Débutant 6 semaines",
      price: 39,
      length: "6 semaines",
      bullets: [
        "3 séances/semaine",
        "Plans vidéo pas à pas",
        "Accès au groupe privé"
      ],
    },
    {
      id: "p2",
      title: "Programme Intermédiaire 12 semaines",
      price: 79,
      length: "12 semaines",
      bullets: ["4 séances/semaine", "Ateliers nutrition", "Suivi mensuel"],
    },
    {
      id: "p3",
      title: "Coaching VIP 1:1",
      price: 249,
      length: "1 mois",
      bullets: ["Séances hebdo 1:1", "Programme sur-mesure", "Support illimité"],
    },
  ];

  // Placeholder checkout function: integrate Stripe Checkout on your server.
  function handleBuy(programId) {
    // In production: call your backend to create a Stripe Checkout session and
    // redirect the user: window.location = session.url
    alert("Acheter: " + programId + " — remplacer par une intégration Stripe.");
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">F</div>
            <div>
              <h1 className="text-lg font-semibold">Fit Malou</h1>
              <p className="text-xs text-gray-500">Vidéos • Programmes • Coaching</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#programs" className="hover:underline">Programmes</a>
            <a href="#vlog" className="hover:underline">Vlog</a>
            <a href="#testimonials" className="hover:underline">Témoignages</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a
              href="#pricing"
              className="rounded-full px-4 py-2 bg-indigo-600 text-white text-sm shadow-sm"
            >
              Acheter
            </a>
          </nav>

          <div className="md:hidden">
            <button className="px-3 py-2 bg-indigo-600 text-white rounded">Menu</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Deviens plus fort, plus sain — avec mes programmes vidéo
            </h2>
            <p className="mt-4 text-gray-600">Des entraînements conçus pour les gens réels : pas d'équipements exotiques, juste des résultats.</p>

            <div className="mt-6 flex gap-3">
              <a href="#programs" className="px-5 py-3 bg-indigo-600 text-white rounded shadow">Voir les programmes</a>
              <a href="#vlog" className="px-5 py-3 border rounded">Regarder le Vlog</a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="font-bold">+10k</div>
                <div className="text-gray-500">Abonnés</div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="font-bold">4.9/5</div>
                <div className="text-gray-500">Note moyenne</div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="font-bold">100+</div>
                <div className="text-gray-500">Programmes vendus</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
              {/* Replace with an embedded promo video or image */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500">Vidéo promo (YouTube / MP4)</div>
            </div>
          </motion.div>
        </section>

        {/* Programs */}
        <section id="programs" className="mt-16">
          <h3 className="text-2xl font-bold">Programmes populaires</h3>
          <p className="text-gray-600 mt-2">Choisis le programme qui te convient — chaque programme contient des vidéos, un PDF récap, et un plan de progression.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-500">{p.length}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold">€{p.price}</div>
                    <div className="text-xs text-gray-500">paiement sécurisé</div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {p.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <button onClick={() => handleBuy(p.id)} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded">Acheter</button>
                  <a href="#" className="px-4 py-2 border rounded">En savoir plus</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Vlog section */}
        <section id="vlog" className="mt-16">
          <h3 className="text-2xl font-bold">Le Vlog</h3>
          <p className="text-gray-600 mt-2">Dernières vidéos et conseils gratuits publiés chaque semaine.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Replace src with your YouTube embed or thumbnails linking to YouTube */}
            <div className="bg-white rounded-2xl overflow-hidden shadow">
              <div className="aspect-video bg-black text-white flex items-center justify-center">YouTube video 1</div>
              <div className="p-4">
                <h4 className="font-semibold">Séance full-body express</h4>
                <p className="text-sm text-gray-500">20 min, aucun matériel</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow">
              <div className="aspect-video bg-black text-white flex items-center justify-center">YouTube video 2</div>
              <div className="p-4">
                <h4 className="font-semibold">Routines pour débutants</h4>
                <p className="text-sm text-gray-500">Progression semaine 1-6</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow">
              <div className="aspect-video bg-black text-white flex items-center justify-center">YouTube video 3</div>
              <div className="p-4">
                <h4 className="font-semibold">Recette protéinée rapide</h4>
                <p className="text-sm text-gray-500">Nutrition simple</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-16">
          <h3 className="text-2xl font-bold">Témoignages</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-700">"Je ne pensais pas pouvoir progresser aussi vite — le format vidéo m'a sauvé."</p>
              <footer className="mt-4 text-sm text-gray-500">— Clara, 28 ans</footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-700">"Programme super pratique pour ceux qui voyagent souvent."</p>
              <footer className="mt-4 text-sm text-gray-500">— Marc, 34 ans</footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-700">"Le coaching 1:1 a tout changé — recommandations claires."</p>
              <footer className="mt-4 text-sm text-gray-500">— Sophie, 41 ans</footer>
            </blockquote>
          </div>
        </section>

        {/* Pricing / FAQ / Contact */}
        <section id="pricing" className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold">Questions fréquentes</h4>
            <div className="mt-4 space-y-4 text-sm text-gray-600">
              <div>
                <strong>Quel matériel est nécessaire ?</strong>
                <p>Rien d'obligatoire — la plupart des séances utilisent le poids du corps. Options avec haltères indiquées.</p>
              </div>
              <div>
                <strong>Comment sont livrés les programmes ?</strong>
                <p>Accès à une plateforme vidéo privée + PDF téléchargeable.</p>
              </div>
              <div>
                <strong>Remboursement ?</strong>
                <p>14 jours, si vous n'êtes pas satisfait. Voir conditions.</p>
              </div>
            </div>
          </div>

          <div id="contact" className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold">Contact</h4>
            <p className="text-sm text-gray-600 mt-2">Pour les partenariats, coaching et questions : envoie un message ci-dessous.</p>

            <form className="mt-4 grid gap-3">
              <input className="border p-2 rounded" placeholder="Nom" />
              <input className="border p-2 rounded" placeholder="Email" />
              <textarea className="border p-2 rounded" placeholder="Message" rows={4} />
              <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded">Envoyer</button>
            </form>

            <div className="mt-6 text-sm text-gray-500">
              <div>Email: contact@fitmalou.example</div>
              <div>Instagram: @fitmalou</div>
            </div>
          </div>
        </section>

        <footer className="mt-16 py-8 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Fit Malou — Tous droits réservés
        </footer>
      </main>
    </div>
  );
}

/*
Deployment & integration notes (put these in your README):

1) Dependencies:
 - React (v18+)
 - Tailwind CSS configured
 - framer-motion
 - shadcn/ui (optional for advanced components)
 - lucide-react (optional icons)
 - Stripe (server + client) for payments

2) Payments (recommended flow):
 - Create products & prices in Stripe Dashboard.
 - Create an endpoint on your server (/api/create-checkout-session) that
   calls Stripe SDK to create a Checkout Session and returns session.url.
 - On button click, call that endpoint and redirect the user to session.url.
 - Use Stripe webhooks to grant access after successful payment.

3) Video hosting: YouTube (unlisted) or a VOD provider (Vimeo Pro, Mux).
   Use signed URLs or membership mechanism to protect paid content.

4) Hosting: Vercel, Netlify, or any provider supporting React.

5) Analytics & email: Add Google Analytics / Plausible and an email
   provider (SendGrid, Mailgun) for newsletters and receipts.

6) Legal: Privacy policy, terms, and refund policy pages.
*/
