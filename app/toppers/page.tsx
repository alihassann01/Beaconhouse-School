"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy, Medal, GraduationCap, Target } from "lucide-react";

const categories = [
    { name: "All Toppers", icon: Star, count: 500 },
    { name: "Academic", icon: GraduationCap, count: 200 },
    { name: "Sports", icon: Trophy, count: 150 },
    { name: "Competitions", icon: Medal, count: 100 },
    { name: "Arts", icon: Target, count: 50 },
];

const academicToppers = [
    { name: "Ayesha Khan", subject: "O-Level", score: "8 A*s", campus: "Liberty Campus, Lahore", year: 2025, rank: "1st in Pakistan" },
    { name: "Ahmed Ali", subject: "A-Level", score: "4 A*s", campus: "Margalla Campus, Islamabad", year: 2025, rank: "World Topper" },
    { name: "Sara Malik", subject: "IB Diploma", score: "45/45", campus: "TNS Beaconhouse", year: 2025, rank: "Perfect Score" },
    { name: "Bilal Hassan", subject: "O-Level", score: "9 A*s", campus: "Defence Campus, Karachi", year: 2025, rank: "2nd in Pakistan" },
    { name: "Fatima Noor", subject: "A-Level", score: "4 A*s", campus: "Jubilee Campus, Karachi", year: 2025, rank: "Top 10 World" },
    { name: "Usman Shah", subject: "Cambridge", score: "Outstanding", campus: "BDC Lahore", year: 2025, rank: "High Achiever Award" },
];

const sportsChampions = [
    { name: "Ali Raza", sport: "Cricket", achievement: "U-19 National Team", campus: "Defence Campus, Lahore", icon: "🏏" },
    { name: "Hina Butt", sport: "Swimming", achievement: "3 National Gold Medals", campus: "Margalla Campus", icon: "🏊" },
    { name: "Kamran Ahmed", sport: "Football", achievement: "Regional Champion", campus: "Liberty Campus", icon: "⚽" },
    { name: "Sana Mirza", sport: "Badminton", achievement: "National Junior Champion", campus: "Clifton Campus", icon: "🏸" },
];

const competitionWinners = [
    { name: "Zainab Ali", competition: "National Debate Championship", position: "1st Place", campus: "TNS Beaconhouse", icon: "🎤" },
    { name: "Hassan Iqbal", competition: "Science Olympiad", position: "Gold Medal", campus: "Margalla Campus", icon: "🔬" },
    { name: "Maria Khan", competition: "Art Competition", position: "Grand Prize", campus: "Gulshan Campus", icon: "🎨" },
    { name: "Fahad Ali", competition: "Math Challenge", position: "National Winner", campus: "Jubilee Campus", icon: "🧮" },
];

export default function ToppersPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Award size={16} />
                        Hall of Fame
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Our <span className="text-gold">Toppers</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Celebrating excellence across academics, sports, and competitions - meet our brightest stars.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "100+", label: "World Toppers" },
                        { value: "500+", label: "National Ranks" },
                        { value: "1000+", label: "A* Grades Annually" },
                        { value: "50+", label: "Years of Excellence" },
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
                        {categories.map((cat, idx) => (
                            <button
                                key={cat.name}
                                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${idx === 0 ? "bg-yellow-500 text-slate-900" : "glass text-slate-300 hover:text-white"
                                    }`}
                            >
                                <cat.icon size={16} />
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Toppers */}
            <section className="section-padding pt-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 flex items-center gap-3">
                        <GraduationCap className="text-yellow-400" />
                        Academic <span className="text-gold">Toppers</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {academicToppers.map((topper, idx) => (
                            <motion.div
                                key={topper.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass rounded-xl p-5 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-bl-full" />
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-600/30 flex items-center justify-center text-xl">
                                        🎓
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">{topper.name}</h3>
                                        <p className="text-yellow-400 text-xs">{topper.subject} | {topper.score}</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm">{topper.campus}</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                        {topper.rank}
                                    </span>
                                    <span className="text-slate-500 text-xs">{topper.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sports Champions */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 flex items-center gap-3">
                        <Trophy className="text-yellow-400" />
                        Sports <span className="text-gold">Champions</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {sportsChampions.map((champ, idx) => (
                            <motion.div
                                key={champ.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-xl p-5 flex items-center gap-4"
                            >
                                <span className="text-4xl">{champ.icon}</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">{champ.name}</h3>
                                    <p className="text-yellow-400 text-sm">{champ.sport}</p>
                                    <p className="text-slate-400 text-xs">{champ.achievement}</p>
                                </div>
                                <span className="text-slate-500 text-xs">{champ.campus}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competition Winners */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 flex items-center gap-3">
                        <Medal className="text-yellow-400" />
                        Competition <span className="text-gold">Winners</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {competitionWinners.map((winner, idx) => (
                            <motion.div
                                key={winner.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-xl p-5 flex items-center gap-4"
                            >
                                <span className="text-4xl">{winner.icon}</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">{winner.name}</h3>
                                    <p className="text-yellow-400 text-sm">{winner.competition}</p>
                                    <p className="text-slate-400 text-xs">{winner.position}</p>
                                </div>
                                <span className="text-slate-500 text-xs">{winner.campus}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
