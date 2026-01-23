"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Award, MapPin, TrendingUp } from "lucide-react";

const featuredUniversities = [
    { name: "University of Oxford", country: "UK", logo: "🇬🇧", acceptedStudents: 45, ranking: "#1 World" },
    { name: "University of Cambridge", country: "UK", logo: "🇬🇧", acceptedStudents: 38, ranking: "#2 World" },
    { name: "Harvard University", country: "USA", logo: "🇺🇸", acceptedStudents: 12, ranking: "#3 World" },
    { name: "MIT", country: "USA", logo: "🇺🇸", acceptedStudents: 8, ranking: "#4 World" },
    { name: "Stanford University", country: "USA", logo: "🇺🇸", acceptedStudents: 15, ranking: "#5 World" },
    { name: "Imperial College London", country: "UK", logo: "🇬🇧", acceptedStudents: 65, ranking: "#6 World" },
    { name: "University of Toronto", country: "Canada", logo: "🇨🇦", acceptedStudents: 120, ranking: "#18 World" },
    { name: "National University Singapore", country: "Singapore", logo: "🇸🇬", acceptedStudents: 85, ranking: "#11 World" },
];

const regionalUniversities = [
    { name: "LUMS", city: "Lahore", students: 500, programs: "Business, Engineering, Law" },
    { name: "IBA Karachi", city: "Karachi", students: 350, programs: "Business, Computer Science" },
    { name: "NUST", city: "Islamabad", students: 280, programs: "Engineering, Technology" },
    { name: "GIKI", city: "Topi", students: 180, programs: "Engineering" },
    { name: "AKU", city: "Karachi", students: 150, programs: "Medicine, Nursing" },
    { name: "FAST-NUCES", city: "Multiple", students: 400, programs: "Computer Science" },
];

const acceptanceStats = [
    { country: "United Kingdom", students: 1200, icon: "🇬🇧" },
    { country: "United States", students: 450, icon: "🇺🇸" },
    { country: "Canada", students: 380, icon: "🇨🇦" },
    { country: "Australia", students: 320, icon: "🇦🇺" },
    { country: "Germany", students: 180, icon: "🇩🇪" },
    { country: "Singapore", students: 150, icon: "🇸🇬" },
];

export default function UniversitiesPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <GraduationCap size={16} />
                        University Destinations
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Partner <span className="text-gold">Universities</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Beaconhouse students gain admission to the world&apos;s top universities every year.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "3,500+", label: "Accepted Annually" },
                        { value: "500+", label: "Partner Universities" },
                        { value: "50+", label: "Countries" },
                        { value: "95%", label: "Acceptance Rate" },
                    ].map((stat) => (
                        <motion.div key={stat.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <p className="text-3xl font-bold text-gold">{stat.value}</p>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Top Universities */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Top <span className="text-gold">University Acceptances</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {featuredUniversities.map((uni, idx) => (
                            <motion.div
                                key={uni.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -3 }}
                                className="glass rounded-xl p-5 text-center group cursor-pointer"
                            >
                                <span className="text-3xl block mb-2">{uni.logo}</span>
                                <h3 className="font-bold text-white text-sm group-hover:text-yellow-400 transition-colors">
                                    {uni.name}
                                </h3>
                                <p className="text-slate-500 text-xs">{uni.country}</p>
                                <div className="mt-3 pt-3 border-t border-white/10">
                                    <p className="text-yellow-400 font-bold">{uni.acceptedStudents}+</p>
                                    <p className="text-slate-500 text-xs">Students Accepted</p>
                                </div>
                                <span className="mt-2 inline-block text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                    {uni.ranking}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* By Country */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Acceptances by <span className="text-gold">Country</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {acceptanceStats.map((country, idx) => (
                            <motion.div
                                key={country.country}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass rounded-xl p-4 text-center"
                            >
                                <span className="text-3xl block mb-2">{country.icon}</span>
                                <p className="text-2xl font-bold text-gold">{country.students}+</p>
                                <p className="text-slate-400 text-xs">{country.country}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional Universities */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Top <span className="text-gold">Local Universities</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {regionalUniversities.map((uni, idx) => (
                            <motion.div
                                key={uni.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass rounded-xl p-5"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-white">{uni.name}</h3>
                                    <span className="text-yellow-400 font-bold">{uni.students}+</span>
                                </div>
                                <div className="flex items-center gap-1 text-slate-400 text-sm mb-2">
                                    <MapPin size={12} /> {uni.city}
                                </div>
                                <p className="text-slate-500 text-xs">{uni.programs}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
