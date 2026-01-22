"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Star, Medal, Award, ArrowLeft } from "lucide-react";

const worldToppers = [
    { name: "Ayesha Khan", subject: "Mathematics", year: "2025", achievement: "World Topper" },
    { name: "Ahmed Ali", subject: "Physics", year: "2025", achievement: "Top in Pakistan" },
    { name: "Sara Malik", subject: "Economics", year: "2024", achievement: "World Topper" },
    { name: "Hassan Raza", subject: "Chemistry", year: "2024", achievement: "Top in Pakistan" },
    { name: "Fatima Zahra", subject: "English Literature", year: "2024", achievement: "High Distinction" },
    { name: "Omar Sheikh", subject: "Computer Science", year: "2023", achievement: "World Topper" },
];

const stats = [
    { value: "50+", label: "World Toppers" },
    { value: "98%", label: "A*/A Grades" },
    { value: "100+", label: "Cambridge Awards" },
];

export default function AchieversProgram() {
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
                            <Trophy className="w-16 h-16 text-yellow-400" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Global <span className="text-gold">Achievers</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Year after year, Beaconhouse students excel on the world stage, achieving top positions in Cambridge International Examinations and earning prestigious awards for academic excellence.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-16 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-gold mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Toppers List */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Recent <span className="text-gold">World Toppers</span>
                    </h2>
                    <div className="space-y-4">
                        {worldToppers.map((topper, index) => (
                            <motion.div
                                key={topper.name}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass rounded-xl p-6 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-yellow-500/10">
                                        {topper.achievement === "World Topper" ? (
                                            <Star className="w-6 h-6 text-yellow-400" />
                                        ) : (
                                            <Medal className="w-6 h-6 text-yellow-400" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{topper.name}</h3>
                                        <p className="text-slate-400 text-sm">{topper.subject} • {topper.year}</p>
                                    </div>
                                </div>
                                <span className="text-yellow-400 font-medium text-sm hidden md:block">{topper.achievement}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                        Join Our Hall of <span className="text-gold">Excellence</span>
                    </h2>
                    <Link
                        href="/admissions"
                        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105"
                    >
                        Apply Now
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
