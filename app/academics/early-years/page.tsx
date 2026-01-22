"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Heart, Palette, Music, BookOpen, ArrowLeft } from "lucide-react";

const learningAreas = [
    { icon: Sparkles, title: "Personal, Social & Emotional", description: "Building confidence, self-awareness, and positive relationships with peers and adults." },
    { icon: BookOpen, title: "Communication & Language", description: "Developing speaking, listening, and early literacy through songs, stories, and conversations." },
    { icon: Palette, title: "Expressive Arts & Design", description: "Exploring creativity through art, music, movement, and imaginative play." },
    { icon: Heart, title: "Physical Development", description: "Motor skills, coordination, and healthy habits through active play and movement." },
];

const dailyRoutine = [
    { time: "8:00 AM", activity: "Morning Circle & Welcome" },
    { time: "8:30 AM", activity: "Learning Centers & Free Play" },
    { time: "10:00 AM", activity: "Snack Time & Outdoor Play" },
    { time: "11:00 AM", activity: "Guided Learning Activities" },
    { time: "12:00 PM", activity: "Story Time & Rest" },
    { time: "1:00 PM", activity: "Creative Arts" },
    { time: "2:00 PM", activity: "Dismissal" },
];

export default function EarlyYears() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <Link href="/academics" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8 transition-colors">
                        <ArrowLeft size={20} /> Back to Academics
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Early <span className="text-gold">Years</span>
                    </h1>
                    <p className="text-yellow-400 text-lg mb-4">Ages 3-5</p>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Our Early Years programme provides a nurturing environment where young learners develop through play-based, inquiry-driven experiences. We follow the Montessori approach combined with international early childhood best practices.
                    </p>
                </motion.div>
            </section>

            {/* Philosophy */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">Our <span className="text-gold">Philosophy</span></h2>
                    <div className="glass rounded-2xl p-10">
                        <p className="text-xl text-slate-300 leading-relaxed italic">
                            "Every child is a unique learner. We believe in nurturing curiosity, encouraging exploration, and celebrating each child's individual journey of discovery."
                        </p>
                    </div>
                </div>
            </section>

            {/* Learning Areas */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Key Learning <span className="text-gold">Areas</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {learningAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8"
                            >
                                <area.icon className="w-10 h-10 text-yellow-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                                <p className="text-slate-400">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Routine */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        A Day at <span className="text-gold">Early Years</span>
                    </h2>
                    <div className="space-y-4">
                        {dailyRoutine.map((item, index) => (
                            <motion.div
                                key={item.time}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors"
                            >
                                <span className="text-yellow-400 font-mono font-bold w-24 shrink-0">{item.time}</span>
                                <span className="text-slate-300">{item.activity}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-6">
                    Enroll Your <span className="text-gold">Little One</span>
                </h2>
                <Link href="/admissions" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105">
                    Apply Now
                </Link>
            </section>
        </main>
    );
}
