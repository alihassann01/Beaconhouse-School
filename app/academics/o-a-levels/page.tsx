"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Award, BookOpen, ArrowLeft } from "lucide-react";

const oLevelSubjects = [
    "English Language", "English Literature", "Mathematics", "Additional Mathematics",
    "Physics", "Chemistry", "Biology", "Computer Science", "Economics", "Business Studies",
    "Accounting", "History", "Geography", "Sociology", "Psychology", "Art & Design"
];

const aLevelSubjects = [
    "Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology",
    "Computer Science", "Economics", "Business", "Accounting", "Psychology",
    "Sociology", "Law", "English Literature", "History", "Art & Design"
];

const achievements = [
    { stat: "98%", label: "A*/A Grades in O Levels" },
    { stat: "95%", label: "A*/A Grades in A Levels" },
    { stat: "50+", label: "World Toppers" },
];

export default function OALevels() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <Link href="/academics" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8 transition-colors">
                        <ArrowLeft size={20} /> Back to Academics
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        O & A <span className="text-gold">Levels</span>
                    </h1>
                    <p className="text-yellow-400 text-lg mb-4">Ages 15-18 (Cambridge International)</p>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        The Cambridge O Level and A Level programmes offer internationally recognized qualifications that open doors to universities worldwide. Our exceptional track record of world toppers speaks to the quality of our teaching and student support.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-16 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-3 gap-8">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-gold mb-2">{item.stat}</div>
                                <p className="text-slate-400 text-sm">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* O Level Subjects */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        O Level <span className="text-gold">Subjects</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {oLevelSubjects.map((subject, index) => (
                            <motion.span
                                key={subject}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.02 }}
                                className="px-4 py-2 glass rounded-full text-sm text-slate-300"
                            >
                                {subject}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* A Level Subjects */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        A Level <span className="text-gold">Subjects</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {aLevelSubjects.map((subject, index) => (
                            <motion.span
                                key={subject}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.02 }}
                                className="px-4 py-2 glass rounded-full text-sm text-slate-300"
                            >
                                {subject}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* University Preparation */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">University <span className="text-gold">Preparation</span></h2>
                    <div className="glass rounded-2xl p-10">
                        <p className="text-slate-300 leading-relaxed mb-6">
                            Our dedicated University Counseling Center provides comprehensive support for applications to top universities including Oxford, Cambridge, Ivy League, and leading institutions across the UK, USA, Canada, and beyond.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-yellow-400">
                            <span>SAT/ACT Prep</span>
                            <span>•</span>
                            <span>IELTS/TOEFL Training</span>
                            <span>•</span>
                            <span>Personal Statement Workshops</span>
                            <span>•</span>
                            <span>Interview Preparation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                    Aim for <span className="text-gold">Excellence</span>
                </h2>
                <Link href="/admissions" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105">
                    Apply Now
                </Link>
            </section>
        </main>
    );
}
