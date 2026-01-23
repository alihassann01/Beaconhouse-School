"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Building2, Users, ArrowRight, X } from "lucide-react";

// Use WorldGlobe for 3D visualization (works reliably)
const WorldGlobe = dynamic(() => import("../components/3d/WorldGlobe"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-yellow-400">Loading 3D Globe...</p>
            </div>
        </div>
    )
});

interface Campus {
    country: string;
    city: string;
    name: string;
    lat: number;
    lng: number;
}

const countryNames: Record<string, string> = {
    pakistan: "Pakistan",
    malaysia: "Malaysia",
    "united-kingdom": "United Kingdom",
    oman: "Oman",
    uae: "UAE",
    philippines: "Philippines",
    thailand: "Thailand",
    belgium: "Belgium",
    bangladesh: "Bangladesh",
};

const countryFlags: Record<string, string> = {
    pakistan: "🇵🇰",
    malaysia: "🇲🇾",
    "united-kingdom": "🇬🇧",
    oman: "🇴🇲",
    uae: "🇦🇪",
    philippines: "🇵🇭",
    thailand: "🇹🇭",
    belgium: "🇧🇪",
    bangladesh: "🇧🇩",
};

export default function Admissions() {
    const [selectedCampus, setSelectedCampus] = useState<Campus | null>(null);

    return (
        <main className="pt-32 min-h-screen">
            {/* Hero */}
            <section className="section-padding text-center pb-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Find Your <span className="text-gold">Campus</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Explore our global network of 185 flagship campuses across 9 countries. Zoom in to discover each campus around the world.
                    </p>
                </motion.div>
            </section>

            {/* Globe Section */}
            <section className="relative h-[75vh] min-h-[600px]">
                <WorldGlobe
                    onCampusSelect={setSelectedCampus}
                    selectedCampus={selectedCampus}
                />

                {/* Selected Campus Panel */}
                <AnimatePresence>
                    {selectedCampus && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className="absolute top-6 right-6 w-80 glass rounded-2xl p-6 z-20"
                        >
                            <button
                                onClick={() => setSelectedCampus(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="text-4xl mb-4">{countryFlags[selectedCampus.country]}</div>
                            <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-2">
                                {selectedCampus.city}
                            </h3>
                            <p className="text-yellow-400 text-sm mb-6">
                                {countryNames[selectedCampus.country]}
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Building2 size={16} className="text-yellow-400" />
                                    <span>{selectedCampus.name}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Users size={16} className="text-yellow-400" />
                                    <span>British Curriculum</span>
                                </div>
                            </div>

                            <Link
                                href={`/campuses/${selectedCampus.country}/${selectedCampus.city.toLowerCase().replace(" ", "-")}`}
                                className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 py-3 rounded-xl font-bold uppercase tracking-wider transition-all hover:scale-[1.02]"
                            >
                                Explore Campus <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Quick Links */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] text-center mb-12">
                        Browse by <span className="text-gold">Country</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {Object.entries(countryNames).map(([slug, name]) => (
                            <Link key={slug} href={`/campuses/${slug}`}>
                                <div className="glass rounded-xl p-6 text-center hover:border-yellow-400/30 transition-all group cursor-pointer">
                                    <div className="text-3xl mb-2">{countryFlags[slug]}</div>
                                    <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">{name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
