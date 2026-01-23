"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Mic, Calculator, Globe, Zap, Calendar, MapPin } from "lucide-react";

const competitionCategories = [
    { name: "All", icon: Trophy, count: 200 },
    { name: "Debate", icon: Mic, count: 45 },
    { name: "Sports", icon: Medal, count: 80 },
    { name: "Academic", icon: Calculator, count: 50 },
    { name: "Science", icon: Zap, count: 25 },
];

const featuredCompetitions = [
    {
        title: "National Debate Championship",
        type: "Debate",
        date: "March 2026",
        location: "Lahore",
        participants: "500+ Students",
        status: "Upcoming",
        icon: "🎤",
        description: "All-Pakistan inter-school parliamentary debate competition"
    },
    {
        title: "Beaconhouse Sports League",
        type: "Sports",
        date: "Feb-Apr 2026",
        location: "All Campuses",
        participants: "10,000+ Athletes",
        status: "Ongoing",
        icon: "🏆",
        description: "Annual multi-sport competition across all campuses"
    },
    {
        title: "Science Olympiad",
        type: "Academic",
        date: "April 2026",
        location: "Islamabad",
        participants: "2,000+ Students",
        status: "Upcoming",
        icon: "🔬",
        description: "National science competition with international qualifiers"
    },
    {
        title: "Math Challenge",
        type: "Academic",
        date: "May 2026",
        location: "Karachi",
        participants: "3,000+ Students",
        status: "Upcoming",
        icon: "🧮",
        description: "Problem-solving and mathematical reasoning competition"
    },
    {
        title: "Model United Nations",
        type: "Debate",
        date: "November 2025",
        location: "Lahore",
        participants: "800+ Delegates",
        status: "Completed",
        icon: "🌍",
        description: "Simulation of UN proceedings on global issues"
    },
    {
        title: "Inter-School Cricket Cup",
        type: "Sports",
        date: "December 2025",
        location: "Multiple Cities",
        participants: "50+ Teams",
        status: "Completed",
        icon: "🏏",
        description: "Annual cricket tournament across Pakistan"
    },
];

const pastWinners = [
    { competition: "Debate Championship 2025", winner: "Liberty Campus, Lahore", prize: "🥇 Gold" },
    { competition: "Science Olympiad 2025", winner: "Margalla Campus, Islamabad", prize: "🥇 Gold" },
    { competition: "Sports League 2025", winner: "Defence Campus, Karachi", prize: "🏆 Champion" },
    { competition: "MUN Best Delegate 2025", winner: "TNS Beaconhouse", prize: "🎖️ Best Delegate" },
    { competition: "Math Challenge 2025", winner: "Jubilee Campus, Karachi", prize: "🥇 Gold" },
];

export default function CompetitionsPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Trophy size={16} />
                        Compete & Excel
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        <span className="text-gold">Competitions</span> & Contests
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        From debate to sports, academic olympiads to arts - discover opportunities to showcase your talents.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "200+", label: "Annual Competitions" },
                        { value: "50K+", label: "Participants" },
                        { value: "1000+", label: "Awards Given" },
                        { value: "12", label: "Countries" },
                    ].map((stat) => (
                        <motion.div key={stat.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <p className="text-3xl font-bold text-gold">{stat.value}</p>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="section-padding pb-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {competitionCategories.map((cat, idx) => (
                            <button
                                key={cat.name}
                                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${idx === 0 ? "bg-yellow-500 text-slate-900" : "glass text-slate-300 hover:text-white"
                                    }`}
                            >
                                <cat.icon size={16} />
                                {cat.name} ({cat.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitions Grid */}
            <section className="px-6 pb-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Upcoming & Recent <span className="text-gold">Competitions</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCompetitions.map((comp, idx) => (
                            <motion.div
                                key={comp.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass rounded-xl p-6 group cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-4xl">{comp.icon}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${comp.status === "Upcoming" ? "bg-green-500/20 text-green-400" :
                                            comp.status === "Ongoing" ? "bg-blue-500/20 text-blue-400" :
                                                "bg-slate-500/20 text-slate-400"
                                        }`}>
                                        {comp.status}
                                    </span>
                                </div>
                                <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors mb-1">
                                    {comp.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4">{comp.description}</p>
                                <div className="space-y-1 text-xs text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={12} /> {comp.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={12} /> {comp.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Trophy size={12} /> {comp.participants}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Winners */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Recent <span className="text-gold">Winners</span>
                    </h2>
                    <div className="space-y-3">
                        {pastWinners.map((winner, idx) => (
                            <motion.div
                                key={winner.competition}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-xl p-4 flex items-center justify-between"
                            >
                                <div>
                                    <h3 className="font-bold text-white">{winner.competition}</h3>
                                    <p className="text-slate-400 text-sm">{winner.winner}</p>
                                </div>
                                <span className="text-lg">{winner.prize}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
