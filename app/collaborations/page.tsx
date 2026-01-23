"use client";

import { motion } from "framer-motion";
import { Globe, Award, Handshake, Building2 } from "lucide-react";

const techPartners = [
    { name: "Google for Education", logo: "🔵", description: "Google Workspace, Chromebooks, and digital literacy programs", tier: "Premium" },
    { name: "Microsoft Education", logo: "🟦", description: "Microsoft 365, Teams, and certification programs", tier: "Premium" },
    { name: "Apple Education", logo: "🍎", description: "iPad classrooms and creative learning tools", tier: "Premier" },
    { name: "Amazon Web Services", logo: "🟠", description: "Cloud computing education and student credits", tier: "Partner" },
    { name: "Meta Education", logo: "🔵", description: "VR learning experiences and digital citizenship", tier: "Partner" },
    { name: "IBM SkillsBuild", logo: "🔷", description: "AI and technology skills training", tier: "Partner" },
];

const educationPartners = [
    { name: "Cambridge Assessment", logo: "📘", description: "O-Level and A-Level curriculum and examinations", since: 1985 },
    { name: "International Baccalaureate", logo: "🌍", description: "IB Diploma Programme at select campuses", since: 2005 },
    { name: "Pearson Edexcel", logo: "📕", description: "IGCSE and International A-Levels", since: 2000 },
    { name: "College Board", logo: "📗", description: "SAT preparation and AP courses", since: 2010 },
    { name: "British Council", logo: "🇬🇧", description: "English language certification and teacher training", since: 1990 },
];

const industryPartners = [
    { name: "PTA (Pakistan)", logo: "🇵🇰", category: "Telecom" },
    { name: "HBL", logo: "🏦", category: "Banking" },
    { name: "Engro Corporation", logo: "🏭", category: "Industry" },
    { name: "Jazz (Mobilink)", logo: "📱", category: "Telecom" },
    { name: "Nestle Pakistan", logo: "🥛", category: "FMCG" },
    { name: "Telenor", logo: "📶", category: "Telecom" },
];

export default function CollaborationsPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Handshake size={16} />
                        Global Partnerships
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Our <span className="text-gold">Collaborations</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Partnering with world-leading technology companies, education boards, and industry leaders to deliver excellence.
                    </p>
                </motion.div>
            </section>

            {/* Tech Partners */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Technology <span className="text-gold">Partners</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techPartners.map((partner, idx) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass rounded-xl p-6 relative overflow-hidden group"
                            >
                                <div className="absolute top-4 right-4 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                    {partner.tier}
                                </div>
                                <span className="text-4xl block mb-3">{partner.logo}</span>
                                <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                                    {partner.name}
                                </h3>
                                <p className="text-slate-400 text-sm mt-2">{partner.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Partners */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Education <span className="text-gold">Boards & Certifications</span>
                    </h2>
                    <div className="space-y-4">
                        {educationPartners.map((partner, idx) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-xl p-5 flex items-center gap-4"
                            >
                                <span className="text-3xl">{partner.logo}</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">{partner.name}</h3>
                                    <p className="text-slate-400 text-sm">{partner.description}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-yellow-400 text-sm font-bold">Since {partner.since}</p>
                                    <p className="text-slate-500 text-xs">{2026 - partner.since} years</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Partners */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Industry <span className="text-gold">Partners</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industryPartners.map((partner, idx) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass rounded-xl p-4 text-center"
                            >
                                <span className="text-3xl block mb-2">{partner.logo}</span>
                                <h3 className="font-bold text-white text-sm">{partner.name}</h3>
                                <p className="text-yellow-400 text-xs">{partner.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section className="py-16 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        Become a Partner
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Interested in partnering with Pakistan&apos;s leading education network?
                    </p>
                    <button className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                        <Building2 size={18} /> Contact Partnerships Team
                    </button>
                </div>
            </section>
        </main>
    );
}
