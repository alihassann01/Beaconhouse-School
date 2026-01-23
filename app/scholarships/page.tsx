"use client";

import { motion } from "framer-motion";
import { Award, Users, Trophy, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const scholarships = [
    {
        title: "Merit Scholarship",
        icon: Award,
        discount: "Up to 100%",
        description: "For outstanding academic achievers with exceptional grades",
        criteria: [
            "90%+ aggregate in previous exams",
            "Strong academic record",
            "Recommendation from current school",
            "Written assessment & interview"
        ],
        color: "from-yellow-500 to-amber-600"
    },
    {
        title: "Sibling Discount",
        icon: Users,
        discount: "10-15%",
        description: "Special discount for families with multiple children enrolled",
        criteria: [
            "Second child: 10% discount",
            "Third child onwards: 15% discount",
            "Applicable on tuition fees",
            "Valid for same academic year"
        ],
        color: "from-blue-500 to-cyan-600"
    },
    {
        title: "Sports Scholarship",
        icon: Trophy,
        discount: "Up to 75%",
        description: "For exceptional athletes representing at national/international level",
        criteria: [
            "National/International representation",
            "Medals in recognized competitions",
            "Commitment to school sports team",
            "Maintain minimum academic standards"
        ],
        color: "from-green-500 to-emerald-600"
    },
    {
        title: "Need-Based Aid",
        icon: GraduationCap,
        discount: "Case by Case",
        description: "Financial assistance for deserving students from low-income families",
        criteria: [
            "Income documentation required",
            "Academic potential assessment",
            "Interview with committee",
            "Annual renewal based on performance"
        ],
        color: "from-purple-500 to-pink-600"
    },
];

const stats = [
    { value: "5,000+", label: "Students on Scholarship" },
    { value: "PKR 2B+", label: "Annual Aid Disbursed" },
    { value: "100%", label: "Maximum Coverage" },
    { value: "45+", label: "Years of Support" },
];

export default function ScholarshipsPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Award size={16} />
                        Supporting Excellence
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Scholarships & <span className="text-gold">Financial Aid</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Beaconhouse believes every talented student deserves quality education.
                        Explore our scholarship programs designed to support academic excellence.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <p className="text-3xl font-bold text-gold">{stat.value}</p>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Scholarship Types */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Our <span className="text-gold">Scholarship Programs</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {scholarships.map((scholarship, idx) => (
                            <motion.div
                                key={scholarship.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-2xl p-8 relative overflow-hidden group"
                            >
                                {/* Gradient accent */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${scholarship.color}`} />

                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${scholarship.color} flex items-center justify-center`}>
                                        <scholarship.icon className="text-white" size={24} />
                                    </div>
                                    <span className="text-2xl font-bold text-gold">{scholarship.discount}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{scholarship.title}</h3>
                                <p className="text-slate-400 text-sm mb-6">{scholarship.description}</p>

                                <h4 className="text-sm font-medium text-yellow-400 mb-3">Eligibility Criteria:</h4>
                                <ul className="space-y-2">
                                    {scholarship.criteria.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                            <CheckCircle size={14} className="text-green-400 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        How to <span className="text-gold">Apply</span>
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: 1, title: "Submit Application", desc: "Fill online form with documents" },
                            { step: 2, title: "Assessment Test", desc: "Aptitude & academic evaluation" },
                            { step: 3, title: "Interview", desc: "Panel interview with committee" },
                            { step: 4, title: "Award Decision", desc: "Scholarship offer within 2 weeks" },
                        ].map((item) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-500 text-slate-900 flex items-center justify-center font-bold text-lg mb-3">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        Ready to Apply?
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Applications for 2026-27 scholarships are now open.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                    >
                        Apply for Scholarship <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
