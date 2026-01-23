"use client";

import { motion } from "framer-motion";
import { Music, Palette, Users, Camera, Calendar, Star, Heart } from "lucide-react";

const clubs = [
    { name: "Drama Club", icon: "🎭", members: "2,500+", description: "Annual theatre productions and inter-school competitions" },
    { name: "Music Society", icon: "🎵", members: "3,000+", description: "Choir, orchestra, and Coke Studio-style performances" },
    { name: "Art & Design", icon: "🎨", members: "4,000+", description: "Painting, sculpture, and digital art workshops" },
    { name: "Debate Society", icon: "🎤", members: "5,000+", description: "MUN, parliamentary debates, and public speaking" },
    { name: "Science Club", icon: "🔬", members: "6,000+", description: "Robotics, experiments, and science fairs" },
    { name: "Photography", icon: "📷", members: "1,500+", description: "Campus journalism and photo exhibitions" },
    { name: "Community Service", icon: "🤝", members: "8,000+", description: "Volunteer work and social impact projects" },
    { name: "Environmental Club", icon: "🌱", members: "2,000+", description: "Sustainability initiatives and green campaigns" },
];

const events = [
    { name: "Annual Qawwali Night", date: "March", icon: "🎶", description: "Traditional Sufi music celebration" },
    { name: "Spring Concert", date: "April", icon: "🎸", description: "Student bands and musical performances" },
    { name: "Art Exhibition", date: "May", icon: "🖼️", description: "Showcase of student artwork" },
    { name: "Cultural Festival", date: "November", icon: "🎪", description: "Celebrating diversity through food, dance, and music" },
    { name: "Winter Gala", date: "December", icon: "❄️", description: "End of year celebration and awards" },
    { name: "Sports Day", date: "February", icon: "🏃", description: "Inter-house athletic competitions" },
];

const galleries = [
    { title: "Qawwali Night 2025", images: 45, category: "Cultural" },
    { title: "Science Fair 2025", images: 120, category: "Academic" },
    { title: "Sports Day 2025", images: 200, category: "Sports" },
    { title: "Art Exhibition", images: 80, category: "Arts" },
    { title: "Graduation 2025", images: 150, category: "Ceremony" },
    { title: "Field Trips", images: 90, category: "Adventure" },
];

export default function CampusLifePage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Heart size={16} />
                        Life at Beaconhouse
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Campus <span className="text-gold">Life</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Beyond academics, discover a vibrant community of clubs, events, and experiences that shape well-rounded individuals.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "50+", label: "Student Clubs" },
                        { value: "100+", label: "Annual Events" },
                        { value: "30K+", label: "Active Members" },
                        { value: "12", label: "Countries" },
                    ].map((stat, idx) => (
                        <motion.div key={stat.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <p className="text-3xl font-bold text-gold">{stat.value}</p>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Clubs */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Clubs & <span className="text-gold">Societies</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {clubs.map((club, idx) => (
                            <motion.div
                                key={club.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -3 }}
                                className="glass rounded-xl p-5 cursor-pointer group"
                            >
                                <span className="text-3xl block mb-2">{club.icon}</span>
                                <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                                    {club.name}
                                </h3>
                                <p className="text-yellow-400 text-xs mb-2">{club.members} members</p>
                                <p className="text-slate-400 text-xs">{club.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Annual Events */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                        Annual <span className="text-gold">Events</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event, idx) => (
                            <motion.div
                                key={event.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-xl p-6 text-center"
                            >
                                <span className="text-4xl block mb-3">{event.icon}</span>
                                <h3 className="font-bold text-white mb-1">{event.name}</h3>
                                <p className="text-yellow-400 text-sm mb-2">{event.date}</p>
                                <p className="text-slate-400 text-xs">{event.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Photo <span className="text-gold">Gallery</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {galleries.map((gallery, idx) => (
                            <motion.div
                                key={gallery.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className="relative h-48 rounded-xl overflow-hidden cursor-pointer group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                    <Camera className="text-yellow-400 mb-2" size={24} />
                                    <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                                        {gallery.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">{gallery.images} photos</p>
                                    <span className="mt-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                        {gallery.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
