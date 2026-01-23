"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Globe, Star, Quote, Linkedin } from "lucide-react";

const featuredAlumni = [
    {
        name: "Asad Umar",
        batch: "Class of 1980",
        position: "Former Federal Minister",
        company: "Government of Pakistan",
        achievement: "Former Finance Minister & Cabinet Member",
        campus: "Beaconhouse Lahore",
        image: "👔"
    },
    {
        name: "Sharmeen Obaid-Chinoy",
        batch: "Class of 1995",
        position: "Oscar-Winning Filmmaker",
        company: "SOC Films",
        achievement: "Two-time Academy Award Winner",
        campus: "Beaconhouse Karachi",
        image: "🎬"
    },
    {
        name: "Ali Sethi",
        batch: "Class of 2002",
        position: "Singer & Songwriter",
        company: "Coke Studio",
        achievement: "International Music Star, Pasoori Fame",
        campus: "Beaconhouse Lahore",
        image: "🎵"
    },
    {
        name: "Momina Mustehsan",
        batch: "Class of 2009",
        position: "Singer & Engineer",
        company: "Forbes 30 Under 30",
        achievement: "Multi-platinum Recording Artist",
        campus: "Beaconhouse Islamabad",
        image: "🎤"
    },
    {
        name: "Hamza Ali Abbasi",
        batch: "Class of 2001",
        position: "Actor & Producer",
        company: "Pakistani Film Industry",
        achievement: "Award-Winning Actor, Social Activist",
        campus: "Beaconhouse Islamabad",
        image: "🎭"
    },
    {
        name: "Dr. Sania Nishtar",
        batch: "Class of 1982",
        position: "Healthcare Leader",
        company: "WHO, Ehsaas Program",
        achievement: "Global Health Pioneer, Former Minister",
        campus: "Beaconhouse Lahore",
        image: "🏥"
    },
];

const alumniStats = [
    { value: "500K+", label: "Alumni Worldwide" },
    { value: "50+", label: "Countries" },
    { value: "100+", label: "CEOs & Founders" },
    { value: "200+", label: "Government Officials" },
];

const industries = [
    { name: "Technology", count: "15,000+", icon: "💻" },
    { name: "Finance", count: "12,000+", icon: "💰" },
    { name: "Healthcare", count: "8,000+", icon: "🏥" },
    { name: "Media & Arts", count: "5,000+", icon: "🎬" },
    { name: "Government", count: "3,000+", icon: "🏛️" },
    { name: "Education", count: "10,000+", icon: "📚" },
];

export default function AlumniPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Star size={16} />
                        Our Legacy
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Alumni <span className="text-gold">Hall of Fame</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Celebrating 50 years of producing leaders, innovators, and changemakers who are shaping the world.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {alumniStats.map((stat, idx) => (
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

            {/* Featured Alumni */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Featured <span className="text-gold">Alumni</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredAlumni.map((alumni, idx) => (
                            <motion.div
                                key={alumni.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass rounded-xl p-6 group cursor-pointer"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-600/20 flex items-center justify-center text-3xl">
                                        {alumni.image}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                                            {alumni.name}
                                        </h3>
                                        <p className="text-yellow-400 text-sm">{alumni.position}</p>
                                        <p className="text-slate-500 text-xs">{alumni.batch}</p>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-sm mb-3">{alumni.achievement}</p>
                                <div className="flex items-center justify-between text-xs text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <Briefcase size={12} /> {alumni.company}
                                    </span>
                                    <span>{alumni.campus}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Alumni by <span className="text-gold">Industry</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, idx) => (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass rounded-xl p-4 text-center"
                            >
                                <span className="text-3xl block mb-2">{industry.icon}</span>
                                <h3 className="font-bold text-white text-sm">{industry.name}</h3>
                                <p className="text-yellow-400 text-xs">{industry.count}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="section-padding">
                <div className="max-w-3xl mx-auto text-center">
                    <Quote className="w-12 h-12 text-yellow-400/30 mx-auto mb-6" />
                    <blockquote className="text-xl text-slate-300 italic mb-6">
                        &ldquo;Beaconhouse gave me the foundation to dream big and the skills to achieve those dreams.
                        The values I learned continue to guide me in everything I do.&rdquo;
                    </blockquote>
                    <div className="text-yellow-400 font-bold">Sharmeen Obaid-Chinoy</div>
                    <div className="text-slate-500 text-sm">Two-time Oscar Winner</div>
                </div>
            </section>

            {/* Alumni Network CTA */}
            <section className="py-16 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        Join the Alumni Network
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Connect with fellow Beaconhouse graduates worldwide.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                        <Linkedin size={18} /> Connect on LinkedIn
                    </button>
                </div>
            </section>
        </main>
    );
}
