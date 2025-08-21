import React from "react";
import { MessageCircle, Activity, PhoneCall, MonitorSmartphone, Database, ShieldCheck, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative text-white pt-[180px] pb-[120px] text-center">
  {/* Разделённый фон */}
  <div className="absolute inset-0">
    <div className="h-[35%] bg-white" />
    <div className="h-[65%] bg-purple-600" />
  </div>

  <div className="relative container mx-auto px-6 flex flex-col items-center">
    {/* ЛОГОТИП */}
    <div className="-mt-[180px] mb-6">
      <img src="/logo.png" alt="Suppora Logo" className="w-[180px] h-[180px]" />
    </div>

    {/* ТЕКСТ */}
    <div className="mt-10">
      <h1 className="text-5xl font-bold mb-4">Scalable Human-Centered Tech Support</h1>
      <p className="text-lg mb-6">Remote-first L1 & L2 support for startups, SaaS & fintech companies</p>
      <a
        href="#contact"
        className="inline-block bg-white text-purple-700 font-semibold py-2 px-6 rounded-xl hover:bg-purple-100 hover:-translate-y-1 transition transform"
      >
        Let’s Talk
      </a>
    </div>
  </div>
</section>







      {/* Who We Are */}
      <section className="py-20 bg-gray-50 text-center">
  <div className="container mx-auto px-6 max-w-3xl">
    <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
    <p className="text-lg leading-relaxed">
      Suppora is a modern remote-first support agency delivering L1 and L2 technical support.
      We combine tech expertise with a human-first attitude to help your users feel heard,
      understood, and supported — 24/7.
    </p>
  </div>
</section>


      {/* What We Do */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, label: "Level 1 & 2 Technical Support" },
              { icon: Activity, label: "24/7 Global Coverage" },
              { icon: PhoneCall, label: "Multichannel Support (Email, Chat, Calls)" },
              { icon: MonitorSmartphone, label: "Monitoring & Alert Response" },
              { icon: Database, label: "CRM & Helpdesk Integrations" },
              { icon: HelpCircle, label: "In-App Support Widget Integration" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition transform"
              >
                <item.icon className="w-8 h-8 mb-4 text-purple-600" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Suppora */}
      <section className="py-20 bg-purple-600 text-white text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-10">Why Suppora?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {[
        "Bilingual & Multilingual Agents (EN, UA, RU, ES*)",
        "Remote, Scalable Teams (1–10+ agents)",
        "Startup-Speed Onboarding (3–5 days)",
        "Tech-Savvy (API, logs, SQL)",
        "Flexible & Secure (GDPR-ready, VPN access, reports)",
        "Human-Centered Culture — Friendly, Empathetic, Real"
      ].map((item, idx) => (
        /*<div
          key={idx}
          className="bg-white/10 p-6 rounded-xl shadow text-left backdrop-blur-sm"
        >*/
          <div
            key={idx}
            className="bg-white/10 p-6 rounded-xl shadow text-left backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition transform"
          >

          <p>{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="py-20 text-center bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", desc: "Intro call (30 min)" },
              { step: "2", desc: "Access setup (Helpdesk / CRM)" },
              { step: "3", desc: "Agent training (1–2 days)" },
              { step: "4", desc: "Go live + monitoring (24/7)" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition transform"
              >
                <p className="text-4xl font-bold mb-2">{item.step}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          <div className="space-y-8">
            {[
              {
                quote: "They helped us scale support from day 1.",
                name: "John, SaaS Founder",
              },
              {
                quote: "Suppora feels like our in-house team.",
                name: "Stealth Client",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition transform"
              >
                <p className="italic mb-2">“{t.quote}”</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                name: "Dmytro",
                role: "Support Lead",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Olena",
                role: "Support Engineer",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Yurii",
                role: "Account Manager",
                img: "https://via.placeholder.com/150",
              },
            ].map((person, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-32 h-32 rounded-full mb-4"
                />
                <p className="font-semibold">{person.name}</p>
                <p className="text-sm text-gray-200">{person.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-200">Ukraine based team. Global mindset.</p>
        </div>
      </section>



      {/* Plans */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Choose Your Support Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                coverage: "8/5",
                agents: "1",
                channels: "Email, Chat",
                level: "L1",
                price: "$1000/mo"
              },
              {
                name: "Growth",
                coverage: "16/7",
                agents: "2",
                channels: "Email, Chat, Calls",
                level: "L1–L2",
                price: "$2000/mo"
              },
              {
                name: "Premium",
                coverage: "24/7",
                agents: "3",
                channels: "All + Monitoring",
                level: "L1–L2",
                price: "$3500/mo",
                highlight: true
              }
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow text-left border ${plan.highlight ? "border-purple-500 bg-purple-50" : "bg-white"} hover:shadow-lg hover:-translate-y-1 transition transform`}
              >
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p><strong>Coverage:</strong> {plan.coverage}</p>
                <p><strong>Agents:</strong> {plan.agents}</p>
                <p><strong>Channels:</strong> {plan.channels}</p>
                <p><strong>Level:</strong> {plan.level}</p>
                <p className="text-xl font-semibold mt-2">{plan.price}</p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 hover:-translate-y-1 transition transform">
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Let’s Talk</h2>
          <p>Email: <a href="mailto:contact@suppora.com" className="underline">contact@suppora.com</a></p>
          <p className="mt-2">LinkedIn: <a href="https://linkedin.com/company/suppora" className="underline">linkedin.com/company/suppora</a></p>
          <p className="mt-6">Or <a href="#" className="underline">fill out our contact form</a></p>
        </div>
      </section>
    </main>
  );
}
