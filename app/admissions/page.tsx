"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MapPin, Building2, Users, ArrowRight, X } from "lucide-react";

const WorldGlobe = dynamic(() => import("../components/3d/WorldGlobe"), { ssr: false });

interface Campus {
    country: string;
    city: string;
    lat: number;
    lng: number;
    campuses: number;
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
                        Explore our global network of campuses across 8 countries. Click on any location to discover more.
                    </p>
                </motion.div>
            </section>

            {/* Globe Section */}
            <section className="relative h-[70vh] min-h-[500px]">
                <WorldGlobe
                    onCampusSelect={setSelectedCampus}
                    selectedCampus={selectedCampus}
                />

                {/* Instructions */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-slate-400 text-sm">
                        <span className="text-yellow-400">Drag</span> to rotate • <span className="text-yellow-400">Scroll</span> to zoom • <span className="text-yellow-400">Click</span> markers to explore
                    </p>
                </div>

                {/* Selected Campus Panel */}
                <AnimatePresence>
                    {selectedCampus && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className="absolute top-6 right-6 w-80 glass rounded-2xl p-6"
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
                                    <span>{selectedCampus.campuses} Campus{selectedCampus.campuses > 1 ? 'es' : ''}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Users size={16} className="text-yellow-400" />
                                    <span>{(selectedCampus.campuses * 800).toLocaleString()}+ Students</span>
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
