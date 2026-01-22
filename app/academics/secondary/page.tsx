"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, FlaskConical, Calculator, Languages, Compass, ArrowLeft } from "lucide-react";

const subjects = [
    { icon: BookOpen, name: "English", description: "Literature analysis, essay writing, and advanced communication skills" },
    { icon: Calculator, name: "Mathematics", description: "Algebra, geometry, statistics, and problem-solving" },
    { icon: FlaskConical, name: "Sciences", description: "Physics, Chemistry, Biology - hands-on experiments and theory" },
    { icon: Languages, name: "Languages", description: "Urdu, Arabic, French - building multilingual competence" },
    { icon: Compass, name: "Social Sciences", description: "History, Geography, Economics - understanding our world" },
];

const lifeSkills = [
    "Critical Thinking & Analysis",
    "Research & Study Skills",
    "Time Management",
    "Public Speaking & Debate",
    "Leadership & Teamwork",
    "Digital Citizenship",
];

export default function Secondary() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <Link href="/academics" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8 transition-colors">
                        <ArrowLeft size={20} /> Back to Academics
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        <span className="text-gold">Secondary</span> School
                    </h1>
                    <p className="text-yellow-400 text-lg mb-4">Ages 11-14 (Grades 6-8)</p>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Secondary school marks a pivotal transition where students develop deeper subject expertise, independent thinking, and the skills needed for advanced academic study. Our programme prepares students for O Level examinations.
                    </p>
                </motion.div>
            </section>

            {/* Subject Areas */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Subject <span className="text-gold">Areas</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((subject, index) => (
                            <motion.div
                                key={subject.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8"
                            >
                                <subject.icon className="w-10 h-10 text-yellow-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{subject.name}</h3>
                                <p className="text-slate-400 text-sm">{subject.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life Skills */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Life <span className="text-gold">Skills</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {lifeSkills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-4 p-4 glass rounded-xl"
                            >
                                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                                <span className="text-slate-300">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Guidance */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">Career <span className="text-gold">Guidance</span></h2>
                    <div className="glass rounded-2xl p-10">
                        <p className="text-slate-300 leading-relaxed">
                            Our dedicated career counselors help students explore their interests, understand different career paths, and make informed decisions about their O Level subject choices. Regular career fairs and university visits provide real-world exposure.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                    Build Their <span className="text-gold">Future</span>
                </h2>
                <Link href="/admissions" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105">
                    Apply Now
                </Link>
            </section>
        </main>
    );
}
