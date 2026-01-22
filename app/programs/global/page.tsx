"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, MapPin, Users, Building2, ArrowLeft } from "lucide-react";

const countries = [
    { name: "Pakistan", flag: "🇵🇰", campuses: 250, students: "280,000+", cities: ["Lahore", "Karachi", "Islamabad", "Multan", "Peshawar"] },
    { name: "Malaysia", flag: "🇲🇾", campuses: 5, students: "3,500+", cities: ["Kuala Lumpur", "Petaling Jaya"] },
    { name: "United Kingdom", flag: "🇬🇧", campuses: 3, students: "1,200+", cities: ["London", "Manchester", "Birmingham"] },
    { name: "Oman", flag: "🇴🇲", campuses: 2, students: "2,000+", cities: ["Muscat"] },
    { name: "UAE", flag: "🇦🇪", campuses: 4, students: "4,500+", cities: ["Dubai", "Abu Dhabi", "Sharjah"] },
    { name: "Philippines", flag: "🇵🇭", campuses: 2, students: "1,800+", cities: ["Manila", "Makati"] },
    { name: "Thailand", flag: "🇹🇭", campuses: 1, students: "800+", cities: ["Bangkok"] },
    { name: "Belgium", flag: "🇧🇪", campuses: 1, students: "500+", cities: ["Brussels"] },
];

export default function GlobalProgram() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8 transition-colors">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                    <div className="flex justify-center mb-6">
                        <div className="p-6 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                            <Globe className="w-16 h-16 text-yellow-400" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        8 <span className="text-gold">Countries</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        From Pakistan to Europe, Beaconhouse has established a global network of schools, bringing quality education to students across continents. Our international presence reflects our commitment to educational excellence worldwide.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-16 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-3 gap-8">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
                            <div className="text-4xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-gold mb-2">8</div>
                            <p className="text-slate-400 text-sm uppercase tracking-wider">Countries</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
                            <div className="text-4xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-gold mb-2">268+</div>
                            <p className="text-slate-400 text-sm uppercase tracking-wider">Campuses</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
                            <div className="text-4xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-gold mb-2">315K+</div>
                            <p className="text-slate-400 text-sm uppercase tracking-wider">Students</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Countries Grid */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Our Global <span className="text-gold">Presence</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {countries.map((country, index) => (
                            <motion.div
                                key={country.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link href={`/campuses/${country.name.toLowerCase().replace(" ", "-")}`}>
                                    <div className="glass rounded-2xl p-6 hover:border-yellow-400/30 transition-all h-full group cursor-pointer">
                                        <div className="text-4xl mb-4">{country.flag}</div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{country.name}</h3>
                                        <div className="mt-4 space-y-2 text-sm text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <Building2 size={14} />
                                                <span>{country.campuses} Campuses</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users size={14} />
                                                <span>{country.students} Students</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            Explore Campuses →
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                        Find Your <span className="text-gold">Campus</span>
                    </h2>
                    <Link
                        href="/admissions"
                        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105"
                    >
                        Explore All Campuses
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
