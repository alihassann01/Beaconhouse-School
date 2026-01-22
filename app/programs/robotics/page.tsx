"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Cpu, Cog, Lightbulb, Trophy, ArrowLeft } from "lucide-react";

const labFeatures = [
    { icon: Cpu, title: "State-of-the-Art Labs", description: "Equipped with Arduino, Raspberry Pi, drones, and 3D printers for hands-on learning." },
    { icon: Cog, title: "STEM Curriculum", description: "Integrated Science, Technology, Engineering, and Mathematics education from early years." },
    { icon: Lightbulb, title: "AI & Machine Learning", description: "Introduction to artificial intelligence concepts and practical applications." },
    { icon: Trophy, title: "Competition Success", description: "Our students regularly win national and international robotics competitions." },
];

const competitions = [
    "First Lego League (FLL) Champions",
    "World Robot Olympiad Finalists",
    "NASA Space Apps Challenge Winners",
    "Google Code Jam Qualifiers",
];

export default function RoboticsProgram() {
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
                            <Bot className="w-16 h-16 text-yellow-400" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Robotics & <span className="text-gold">AI</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Preparing students for the future with cutting-edge technology education. Our robotics and AI program develops problem-solving skills, computational thinking, and innovation mindset.
                    </p>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Innovation <span className="text-gold">Hub</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {labFeatures.map((feature, index) => (
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

            {/* Achievements */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] mb-12">
                        Competition <span className="text-gold">Achievements</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {competitions.map((achievement, index) => (
                            <motion.div
                                key={achievement}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 flex items-center gap-4"
                            >
                                <Trophy className="w-8 h-8 text-yellow-400 shrink-0" />
                                <p className="text-white font-medium">{achievement}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                        Build the <span className="text-gold">Future</span>
                    </h2>
                    <Link
                        href="/admissions"
                        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105"
                    >
                        Join Our Labs
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
