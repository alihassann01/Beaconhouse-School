"use client";

import { motion } from "framer-motion";
import { Calendar, Trophy, Bell, BookOpen, Users, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const featuredEvents = [
    {
        id: 1,
        title: "Annual Sports Day 2026",
        date: "Feb 15, 2026",
        time: "9:00 AM",
        location: "Lahore Sports Complex",
        category: "Sports",
        status: "upcoming",
        image: "🏆"
    },
    {
        id: 2,
        title: "Cambridge O-Level Results",
        date: "Jan 25, 2026",
        time: "10:00 AM",
        location: "All Campuses",
        category: "Results",
        status: "upcoming",
        image: "📊"
    },
    {
        id: 3,
        title: "Science Fair 2026",
        date: "Mar 1, 2026",
        time: "8:00 AM",
        location: "Defence Campus, Lahore",
        category: "Academic",
        status: "upcoming",
        image: "🔬"
    },
    {
        id: 4,
        title: "Inter-School Debate Championship",
        date: "Feb 20, 2026",
        time: "2:00 PM",
        location: "Margalla Campus, Islamabad",
        category: "Competition",
        status: "upcoming",
        image: "🎤"
    },
    {
        id: 5,
        title: "Parent-Teacher Meeting",
        date: "Jan 30, 2026",
        time: "3:00 PM",
        location: "All Campuses",
        category: "Meeting",
        status: "upcoming",
        image: "👨‍👩‍👧"
    },
    {
        id: 6,
        title: "Art Exhibition 2026",
        date: "Mar 10, 2026",
        time: "11:00 AM",
        location: "TNS Beaconhouse, Lahore",
        category: "Cultural",
        status: "upcoming",
        image: "🎨"
    },
];

const notifications = [
    { text: "Admissions Open for 2026-27 Session - Apply Now!", type: "admission", urgent: true },
    { text: "Cambridge O-Level Results to be announced on Jan 25", type: "results", urgent: false },
    { text: "Winter Break ends Jan 15 - Classes resume Jan 16", type: "notice", urgent: false },
    { text: "Sports Day registrations closing soon!", type: "event", urgent: true },
];

const categories = [
    { name: "All Events", icon: Calendar, count: 45 },
    { name: "Academic", icon: BookOpen, count: 12 },
    { name: "Sports", icon: Trophy, count: 15 },
    { name: "Cultural", icon: Users, count: 10 },
    { name: "Results", icon: Bell, count: 8 },
];

export default function EventsPage() {
    return (
        <main className="pt-32">
            {/* Notifications Ticker */}
            <div className="bg-yellow-500/10 border-y border-yellow-500/20 py-3 overflow-hidden">
                <div className="animate-marquee flex gap-12 whitespace-nowrap">
                    {[...notifications, ...notifications].map((notif, idx) => (
                        <span key={idx} className="flex items-center gap-2 text-sm">
                            {notif.urgent && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
                            <span className={notif.urgent ? "text-yellow-400 font-medium" : "text-slate-300"}>
                                {notif.text}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Events & <span className="text-gold">Updates</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Stay connected with the latest happenings across all Beaconhouse campuses worldwide.
                    </p>
                </motion.div>
            </section>

            {/* Admission Status Card */}
            <section className="px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass rounded-2xl p-8 text-center border-2 border-green-500/30 bg-green-500/5"
                    >
                        <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            ADMISSIONS OPEN
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">2026-27 Admissions Now Open</h2>
                        <p className="text-slate-400 mb-6">Enroll your child in Pakistan&apos;s leading school network</p>
                        <Link
                            href="/admissions"
                            className="inline-block bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                        >
                            Apply Now →
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat.name}
                                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${idx === 0
                                        ? "bg-yellow-500 text-slate-900"
                                        : "glass text-slate-300 hover:text-white"
                                    }`}
                            >
                                <cat.icon size={16} />
                                {cat.name}
                                <span className="text-xs opacity-70">({cat.count})</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Upcoming <span className="text-gold">Events</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredEvents.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass rounded-xl p-6 cursor-pointer group"
                            >
                                <div className="text-4xl mb-4">{event.image}</div>
                                <span className="text-xs text-yellow-400 font-medium uppercase tracking-wider">
                                    {event.category}
                                </span>
                                <h3 className="text-lg font-bold text-white mt-1 mb-3 group-hover:text-yellow-400 transition-colors">
                                    {event.title}
                                </h3>
                                <div className="space-y-2 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        {event.location}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calendar CTA */}
            <section className="py-16 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        Never Miss an Event
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Subscribe to get notifications for upcoming events and important announcements.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white w-64 focus:border-yellow-400 outline-none"
                        />
                        <button className="bg-yellow-500 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-400">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
