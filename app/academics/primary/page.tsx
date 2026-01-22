"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Calculator, Globe2, Beaker, Palette, ArrowLeft } from "lucide-react";

const subjects = [
    { icon: BookOpen, title: "English Language & Literature", description: "Building strong reading, writing, and communication skills through engaging texts and creative writing." },
    { icon: Calculator, title: "Mathematics", description: "Developing problem-solving abilities and numerical fluency through hands-on activities and real-world applications." },
    { icon: Beaker, title: "Science", description: "Exploring the natural world through experiments, observations, and inquiry-based learning." },
    { icon: Globe2, title: "Social Studies", description: "Understanding communities, geography, history, and cultures around the world." },
    { icon: Palette, title: "Arts & Music", description: "Expressing creativity through visual arts, music, drama, and movement." },
];

const enrichment = [
    "Swimming & Physical Education",
    "Computer Lab & Digital Literacy",
    "Library & Reading Programs",
    "Field Trips & Outdoor Learning",
    "Community Service Projects",
];

export default function Primary() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <Link href="/academics" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8 transition-colors">
                        <ArrowLeft size={20} /> Back to Academics
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        <span className="text-gold">Primary</span> School
                    </h1>
                    <p className="text-yellow-400 text-lg mb-4">Ages 6-10 (Grades 1-5)</p>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Our Primary programme builds strong academic foundations while nurturing curiosity, creativity, and critical thinking. Students develop essential skills through an engaging, balanced curriculum.
                    </p>
                </motion.div>
            </section>

            {/* Core Subjects */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Core <span className="text-gold">Subjects</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((subject, index) => (
                            <motion.div
                                key={subject.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8"
                            >
                                <subject.icon className="w-10 h-10 text-yellow-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{subject.title}</h3>
                                <p className="text-slate-400 text-sm">{subject.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enrichment */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Enrichment <span className="text-gold">Activities</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {enrichment.map((activity, index) => (
                            <motion.div
                                key={activity}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-4 p-4 glass rounded-xl"
                            >
                                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                                <span className="text-slate-300">{activity}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assessment */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">Assessment <span className="text-gold">Approach</span></h2>
                    <div className="glass rounded-2xl p-10">
                        <p className="text-slate-300 leading-relaxed">
                            We use a balanced assessment approach including formative assessments, portfolio reviews, project-based evaluations, and standardized tests. Regular parent-teacher conferences ensure close collaboration in each child's educational journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                    Start Their <span className="text-gold">Journey</span>
                </h2>
                <Link href="/admissions" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105">
                    Apply Now
                </Link>
            </section>
        </main>
    );
}
