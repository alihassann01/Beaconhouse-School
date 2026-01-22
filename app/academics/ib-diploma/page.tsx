"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Globe, Heart, BookOpen, Lightbulb, ArrowLeft } from "lucide-react";

const ibComponents = [
    { icon: BookOpen, title: "Theory of Knowledge (TOK)", description: "Exploring the nature of knowledge and how we know what we claim to know." },
    { icon: Lightbulb, title: "Extended Essay (EE)", description: "Independent research resulting in a 4,000-word academic paper on a topic of choice." },
    { icon: Heart, title: "Creativity, Activity, Service (CAS)", description: "Hands-on experiences that develop well-rounded, socially responsible individuals." },
];

const subjectGroups = [
    { group: "Group 1", name: "Studies in Language & Literature", subjects: ["English A Literature", "English A Language & Literature"] },
    { group: "Group 2", name: "Language Acquisition", subjects: ["French B", "Spanish Ab Initio", "Urdu B"] },
    { group: "Group 3", name: "Individuals & Societies", subjects: ["Economics", "History", "Psychology", "Business Management"] },
    { group: "Group 4", name: "Sciences", subjects: ["Physics", "Chemistry", "Biology", "Computer Science"] },
    { group: "Group 5", name: "Mathematics", subjects: ["Mathematics: Analysis & Approaches", "Mathematics: Applications"] },
    { group: "Group 6", name: "The Arts", subjects: ["Visual Arts", "Theatre", "Music"] },
];

export default function IBDiploma() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <Link href="/academics" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8 transition-colors">
                        <ArrowLeft size={20} /> Back to Academics
                    </Link>
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                            <GraduationCap className="w-12 h-12 text-yellow-400" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        IB <span className="text-gold">Diploma</span>
                    </h1>
                    <p className="text-yellow-400 text-lg mb-4">Ages 16-19 (International Baccalaureate)</p>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        The IB Diploma Programme is a rigorous, internationally recognized curriculum that prepares students for success at university and beyond. Our IB students consistently achieve outstanding results and gain admission to top universities worldwide.
                    </p>
                </motion.div>
            </section>

            {/* Core Components */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        The DP <span className="text-gold">Core</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {ibComponents.map((component, index) => (
                            <motion.div
                                key={component.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8 text-center"
                            >
                                <component.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{component.title}</h3>
                                <p className="text-slate-400 text-sm">{component.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subject Groups */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Subject <span className="text-gold">Groups</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjectGroups.map((group, index) => (
                            <motion.div
                                key={group.group}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass rounded-2xl p-6"
                            >
                                <span className="text-yellow-400 text-sm font-bold">{group.group}</span>
                                <h3 className="text-lg font-bold text-white mt-1 mb-4">{group.name}</h3>
                                <div className="space-y-2">
                                    {group.subjects.map((subject) => (
                                        <p key={subject} className="text-slate-400 text-sm flex items-center gap-2">
                                            <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                                            {subject}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">Our <span className="text-gold">Results</span></h2>
                    <div className="grid grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-gold">100%</div>
                            <p className="text-slate-400 text-sm">Pass Rate</p>
                        </div>
                        <div>
                            <div className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-gold">38</div>
                            <p className="text-slate-400 text-sm">Average Score</p>
                        </div>
                        <div>
                            <div className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-gold">45</div>
                            <p className="text-slate-400 text-sm">Highest Score (Perfect)</p>
                        </div>
                    </div>
                    <div className="glass rounded-2xl p-8">
                        <p className="text-slate-300">
                            Our IB graduates have been accepted to Oxford, Cambridge, Harvard, MIT, Stanford, and other world-leading universities.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                    Join Our IB <span className="text-gold">Community</span>
                </h2>
                <Link href="/admissions" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105">
                    Apply Now
                </Link>
            </section>
        </main>
    );
}
