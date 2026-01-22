"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CurriculumSolarSystem = dynamic(() => import("../components/3d/SolarSystem"), { ssr: false });

const curricula = [
    { name: "Early Years", ages: "Ages 3-5", color: "from-green-400 to-emerald-600", href: "/academics/early-years" },
    { name: "Primary", ages: "Ages 6-10", color: "from-blue-400 to-blue-600", href: "/academics/primary" },
    { name: "Secondary", ages: "Ages 11-14", color: "from-purple-400 to-purple-600", href: "/academics/secondary" },
    { name: "O & A Levels", ages: "Ages 15-18", color: "from-pink-400 to-rose-600", href: "/academics/o-a-levels" },
    { name: "IB Diploma", ages: "Ages 16-19", color: "from-yellow-400 to-amber-600", href: "/academics/ib-diploma" },
];

const achievements = [
    "World Topper - Mathematics 2025",
    "Top in Pakistan - Economics",
    "100% IB Pass Rate",
    "Cambridge Outstanding Learner Awards",
];

export default function Academics() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Academic <span className="text-gold">Excellence</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A curriculum designed to nurture curiosity, creativity, and critical thinking at every stage of development.
                    </p>
                </motion.div>
            </section>

            {/* 3D Solar System */}
            <section className="relative h-[60vh] overflow-hidden">
                <CurriculumSolarSystem />
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                </div>
            </section>

            {/* Curricula List */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-[family-name:var(--font-cinzel)] text-center mb-16"
                    >
                        Our <span className="text-gold">Pathways</span>
                    </motion.h2>

                    <div className="space-y-4">
                        {curricula.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={item.href}>
                                    <div className="glass rounded-xl p-6 flex items-center justify-between group hover:border-yellow-400/30 transition-all cursor-pointer">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-3 h-12 rounded-full bg-gradient-to-b ${item.color}`} />
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                                    {item.name}
                                                </h3>
                                                <p className="text-slate-400 text-sm">{item.ages}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="text-slate-400 group-hover:text-yellow-400 group-hover:translate-x-2 transition-all" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Ticker */}
            <section className="py-8 bg-yellow-500 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...achievements, ...achievements, ...achievements].map((item, index) => (
                        <span key={index} className="mx-8 text-slate-900 font-bold uppercase tracking-widest">
                            ★ {item}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    );
}
