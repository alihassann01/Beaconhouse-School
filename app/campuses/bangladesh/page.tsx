"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2, Users, MapPin, School, GraduationCap } from "lucide-react";

const campuses = [
    { name: "Banani Campus", city: "Dhaka", address: "House 8, Road 9, Block F, Banani", type: "school" as const },
];

export default function BangladeshPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/admissions" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8">
                            <ArrowLeft size={20} /> Back to Campus Finder
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl">🇧🇩</span>
                            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-white">
                                Bangladesh
                            </h1>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                            Beaconhouse Bangladesh serves the Dhaka community with quality British-curriculum education since our expansion into this vibrant nation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <Building2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-gold">1</p>
                        <p className="text-slate-400 text-sm">Campus</p>
                    </div>
                    <div className="text-center">
                        <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-gold">800+</p>
                        <p className="text-slate-400 text-sm">Students</p>
                    </div>
                    <div className="text-center">
                        <School className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-gold">1</p>
                        <p className="text-slate-400 text-sm">City</p>
                    </div>
                    <div className="text-center">
                        <GraduationCap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-gold">15+</p>
                        <p className="text-slate-400 text-sm">Years</p>
                    </div>
                </div>
            </section>

            {/* Campus List */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Our <span className="text-gold">Campus</span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-6"
                    >
                        <div className="grid md:grid-cols-1 gap-3">
                            {campuses.map((campus, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                        <MapPin className="text-yellow-400" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-medium">{campus.name}</p>
                                        <p className="text-slate-400 text-sm">{campus.address}</p>
                                        <p className="text-yellow-400 text-xs">{campus.city}</p>
                                    </div>
                                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                        🏫 School
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                        About Our <span className="text-gold">Bangladesh Campus</span>
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        Located in the prestigious Banani area of Dhaka, our Bangladesh campus offers a comprehensive
                        British curriculum education from Early Years through O-Levels. The campus features modern
                        facilities, experienced faculty, and a nurturing environment that promotes academic excellence
                        and personal growth.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-8">
                        <div className="glass rounded-xl p-4 text-center">
                            <p className="text-2xl mb-1">📚</p>
                            <p className="text-white font-medium">Cambridge Curriculum</p>
                            <p className="text-slate-500 text-xs">O-Level Program</p>
                        </div>
                        <div className="glass rounded-xl p-4 text-center">
                            <p className="text-2xl mb-1">🌍</p>
                            <p className="text-white font-medium">International Faculty</p>
                            <p className="text-slate-500 text-xs">Experienced Teachers</p>
                        </div>
                        <div className="glass rounded-xl p-4 text-center">
                            <p className="text-2xl mb-1">🏆</p>
                            <p className="text-white font-medium">Holistic Education</p>
                            <p className="text-slate-500 text-xs">Sports & Arts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-12 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        Interested in Admission?
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Contact our Dhaka campus for enrollment information.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
