"use client";

import { motion } from "framer-motion";
import { Users, Award, Mail, Linkedin, GraduationCap, Building } from "lucide-react";

const leadership = [
    {
        name: "Mrs. Nasreen Mahmud Kasuri",
        position: "Chairperson & Founder",
        description: "Founded Beaconhouse in 1975 and transformed it into Pakistan's largest private school network.",
        image: "👩‍💼"
    },
    {
        name: "Mr. Kasim Kasuri",
        position: "Chief Executive Officer",
        description: "Leading Beaconhouse's global expansion and digital transformation initiatives.",
        image: "👨‍💼"
    },
];

const principals = [
    { name: "Dr. Sarah Ahmed", campus: "Liberty Campus, Lahore", qualification: "PhD Education, Harvard", years: 15 },
    { name: "Mr. Imran Malik", campus: "Defence Campus, Lahore", qualification: "M.Ed, Cambridge", years: 12 },
    { name: "Ms. Fatima Hassan", campus: "Margalla Campus, Islamabad", qualification: "Ed.D, Columbia", years: 18 },
    { name: "Mr. Ahmed Khan", campus: "Jubilee Campus, Karachi", qualification: "M.Ed, Oxford", years: 14 },
    { name: "Dr. Ayesha Siddiqui", campus: "Defence Campus, Karachi", qualification: "PhD Curriculum, Stanford", years: 10 },
    { name: "Mr. Zain Abbas", campus: "TNS Beaconhouse, Lahore", qualification: "IB Certified", years: 8 },
];

const departments = [
    { name: "Academic Affairs", head: "Dr. Farhan Iqbal", staff: 150 },
    { name: "Student Affairs", head: "Ms. Rabia Nawaz", staff: 80 },
    { name: "Admissions", head: "Mr. Usman Ali", staff: 60 },
    { name: "Sports & Activities", head: "Mr. Tariq Mehmood", staff: 45 },
    { name: "IT & Technology", head: "Mr. Bilal Ahmed", staff: 35 },
    { name: "Human Resources", head: "Ms. Sana Malik", staff: 25 },
];

const stats = [
    { value: "15,000+", label: "Faculty Members" },
    { value: "5,000+", label: "Admin Staff" },
    { value: "100+", label: "PhDs" },
    { value: "95%", label: "Retention Rate" },
];

export default function StaffPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Users size={16} />
                        Our Team
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Leadership & <span className="text-gold">Staff</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Meet the dedicated team of educators and administrators shaping the future of education.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div key={stat.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <p className="text-3xl font-bold text-gold">{stat.value}</p>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Leadership */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Executive <span className="text-gold">Leadership</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {leadership.map((leader, idx) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-2xl p-8 text-center"
                            >
                                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-600/20 flex items-center justify-center text-5xl mb-4">
                                    {leader.image}
                                </div>
                                <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                                <p className="text-yellow-400 text-sm mb-3">{leader.position}</p>
                                <p className="text-slate-400 text-sm">{leader.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campus Principals */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Campus <span className="text-gold">Principals</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {principals.map((principal, idx) => (
                            <motion.div
                                key={principal.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass rounded-xl p-5"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                        <GraduationCap className="text-yellow-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">{principal.name}</h3>
                                        <p className="text-yellow-400 text-xs">{principal.qualification}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <Building size={12} /> {principal.campus}
                                    </span>
                                    <span>{principal.years} years</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Administrative <span className="text-gold">Departments</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {departments.map((dept, idx) => (
                            <motion.div
                                key={dept.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass rounded-xl p-5 text-center"
                            >
                                <h3 className="font-bold text-white mb-1">{dept.name}</h3>
                                <p className="text-yellow-400 text-sm">{dept.head}</p>
                                <p className="text-slate-500 text-xs">{dept.staff} staff members</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="py-16 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        Join Our Team
                    </h3>
                    <p className="text-slate-400 mb-6">
                        We&apos;re always looking for passionate educators to join the Beaconhouse family.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                        <Mail size={18} /> View Careers
                    </button>
                </div>
            </section>
        </main>
    );
}
