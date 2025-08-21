import React from "react";
import {
  MessageCircle,
  Activity,
  PhoneCall,
  MonitorSmartphone,
  Database,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

const PersonAtComputer = ({ className }) => (
  <svg
    viewBox="0 0 80 80"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="8" y="12" width="64" height="44" rx="4" />
    <circle cx="40" cy="32" r="8" />
    <path d="M28 48c2-6 20-6 24 0" />
    <rect x="28" y="60" width="24" height="4" fill="currentColor" stroke="none" />
    <rect x="20" y="64" width="40" height="4" fill="currentColor" stroke="none" />
  </svg>
);

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-24 text-center overflow-hidden">
  {/* Разделённый фон */}
  <div className="absolute inset-0">
    <div className="h-[35%] bg-white" />
    <div className="h-[65%] bg-purple-600" />
  </div>

  {/* Декоративный паттерн */}
  <div className="absolute inset-0 pointer-events-none">
    <svg
      className="w-full h-full opacity-10 text-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-pattern)" />
    </svg>
  </div>

  <div className="relative container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-center md:space-x-10">
    <div className="max-w-2xl text-center md:text-left">
      <h1 className="text-5xl font-bold mb-4">Scalable Human-Centered Tech Support</h1>
      <p className="text-lg mb-6">Remote-first L1 & L2 support for startups, SaaS & fintech companies</p>
      <a
        href="#contact"
        className="inline-block bg-white text-purple-700 font-semibold py-2 px-6 rounded-xl hover:bg-purple-100 transition"
      >
        Let’s Talk
      </a>
    </div>
    <div className="mt-10 md:mt-0">
      <PersonAtComputer className="w-32 h-32 text-white" />
    </div>
  </div>
</section>







      {/* Who We Are */}
      <section className="py-20 bg-gray-50 text-center">
  <div className="container mx-auto px-6 max-w-3xl">
    <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
    <p className="text-lg leading-relaxed">
      SUPPORA is a modern remote-first support agency delivering L1 and L2 technical support.
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
              <div key={idx} className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
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
    <h2 className="text-3xl font-bold mb-10">Why SUPPORA?</h2>
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
          <div key={idx} className="bg-white/10 p-6 rounded-xl shadow text-left backdrop-blur-sm">

          <p>{item}</p>
        </div>
      ))}
    </div>
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
                className={`p-6 rounded-xl shadow text-left border ${plan.highlight ? "border-purple-500 bg-purple-50" : "bg-white"}`}
              >
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p><strong>Coverage:</strong> {plan.coverage}</p>
                <p><strong>Agents:</strong> {plan.agents}</p>
                <p><strong>Channels:</strong> {plan.channels}</p>
                <p><strong>Level:</strong> {plan.level}</p>
                <p className="text-xl font-semibold mt-2">{plan.price}</p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition">
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
