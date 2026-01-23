"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Users, Target, Star, MapPin } from "lucide-react";

const sports = [
    { name: "Cricket", icon: "🏏", teams: "45+ School Teams", achievements: "National Champions 2025" },
    { name: "Football", icon: "⚽", teams: "38+ School Teams", achievements: "Regional Champions 2025" },
    { name: "Basketball", icon: "🏀", teams: "30+ School Teams", achievements: "Inter-School Champions" },
    { name: "Swimming", icon: "🏊", teams: "20+ Swim Teams", achievements: "12 National Medalists" },
    { name: "Tennis", icon: "🎾", teams: "25+ Teams", achievements: "Junior National Finalist" },
    { name: "Badminton", icon: "🏸", teams: "35+ Teams", achievements: "All-Pakistan Winners" },
    { name: "Table Tennis", icon: "🏓", teams: "28+ Teams", achievements: "Provincial Champions" },
    { name: "Athletics", icon: "🏃", teams: "All Campuses", achievements: "50+ District Medals" },
    { name: "Hockey", icon: "🏑", teams: "15+ Teams", achievements: "Zonal Champions" },
    { name: "Volleyball", icon: "🏐", teams: "22+ Teams", achievements: "Inter-School Winners" },
];

const achievements = [
    { year: "2025", title: "National Cricket Championship", winner: "Defence Campus Lahore", medal: "🥇" },
    { year: "2025", title: "All-Pakistan Swimming Gala", winner: "Margalla Campus Islamabad", medal: "🥇" },
    { year: "2024", title: "Inter-School Football League", winner: "Jubilee Campus Karachi", medal: "🥇" },
    { year: "2024", title: "National Badminton Championship", winner: "Liberty Campus Lahore", medal: "🥈" },
    { year: "2024", title: "Junior Tennis Open", winner: "Clifton Campus Karachi", medal: "🥉" },
    { year: "2023", title: "Pakistan Swimming Championship", winner: "BDC Lahore", medal: "🥇" },
];

const facilities = [
    { name: "Olympic Swimming Pools", count: "12", description: "Heated pools at major campuses" },
    { name: "Cricket Grounds", count: "45+", description: "Standard size grounds with nets" },
    { name: "Indoor Sports Halls", count: "60+", description: "Multi-purpose sports facilities" },
    { name: "Tennis Courts", count: "30+", description: "Professional grade courts" },
];

export default function SportsPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Trophy size={16} />
                        Excellence in Sports
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Sports & <span className="text-gold">Athletics</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Building champions on and off the field. Our comprehensive sports program nurtures talent across 10+ disciplines.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "10+", label: "Sports Disciplines" },
                        { value: "500+", label: "School Teams" },
                        { value: "200+", label: "Annual Tournaments" },
                        { value: "1000+", label: "Medals Won" },
                    ].map((stat, idx) => (
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

            {/* Sports Grid */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Our <span className="text-gold">Sports Programs</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {sports.map((sport, idx) => (
                            <motion.div
                                key={sport.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass rounded-xl p-4 text-center cursor-pointer group"
                            >
                                <span className="text-4xl block mb-2">{sport.icon}</span>
                                <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                                    {sport.name}
                                </h3>
                                <p className="text-xs text-slate-400 mt-1">{sport.teams}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Achievements */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Recent <span className="text-gold">Achievements</span>
                    </h2>
                    <div className="space-y-4">
                        {achievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-xl p-5 flex items-center gap-4"
                            >
                                <span className="text-3xl">{item.medal}</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">{item.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={12} /> {item.winner}
                                        </span>
                                        <span>{item.year}</span>
                                    </div>
                                </div>
                                <Trophy className="text-yellow-400" size={24} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        World-Class <span className="text-gold">Facilities</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((facility, idx) => (
                            <motion.div
                                key={facility.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-xl p-6 text-center"
                            >
                                <p className="text-4xl font-bold text-gold mb-2">{facility.count}</p>
                                <h3 className="font-bold text-white mb-1">{facility.name}</h3>
                                <p className="text-xs text-slate-400">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
