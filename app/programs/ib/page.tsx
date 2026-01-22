"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, BookOpen, Users, Globe, Award, ArrowLeft } from "lucide-react";

const features = [
    { icon: BookOpen, title: "Inquiry-Based Learning", description: "Students develop their own questions and explore answers through research and collaboration." },
    { icon: Users, title: "International Mindedness", description: "Fostering respect and understanding for diverse cultures and perspectives worldwide." },
    { icon: Globe, title: "Global Recognition", description: "IB qualifications are recognized by leading universities across 100+ countries." },
    { icon: Award, title: "Holistic Development", description: "CAS (Creativity, Activity, Service) ensures well-rounded personal growth." },
];

const programs = [
    { name: "Primary Years Programme (PYP)", ages: "Ages 3-12", description: "Inquiry-based learning that develops curious, caring young minds." },
    { name: "Middle Years Programme (MYP)", ages: "Ages 11-16", description: "Connecting academic study with real-world relevance and application." },
    { name: "Diploma Programme (DP)", ages: "Ages 16-19", description: "Rigorous pre-university course preparing students for global success." },
];

export default function IBProgram() {
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
                            <GraduationCap className="w-16 h-16 text-yellow-400" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        IB <span className="text-gold">World School</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Beaconhouse is proud to be an authorized IB World School, offering the prestigious International Baccalaureate curriculum that develops inquiring, knowledgeable and caring young people who help to create a better and more peaceful world.
                    </p>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        The IB <span className="text-gold">Advantage</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8 hover:border-yellow-400/30 transition-all"
                            >
                                <feature.icon className="w-10 h-10 text-yellow-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        IB <span className="text-gold">Programmes</span>
                    </h2>
                    <div className="space-y-6">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.name}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{program.name}</h3>
                                        <p className="text-yellow-400 text-sm">{program.ages}</p>
                                    </div>
                                    <p className="text-slate-400 md:max-w-md">{program.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                        Ready to Join Our <span className="text-gold">IB Community?</span>
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
