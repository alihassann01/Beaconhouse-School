"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2, Users, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

const countryData: Record<string, {
    name: string;
    flag: string;
    description: string;
    totalStudents: string;
    totalCampuses: number;
    cities: { name: string; slug: string; campuses: number }[];
}> = {
    pakistan: {
        name: "Pakistan",
        flag: "🇵🇰",
        description: "The birthplace of Beaconhouse, Pakistan hosts our largest network with over 250 campuses across major cities.",
        totalStudents: "280,000+",
        totalCampuses: 250,
        cities: [
            { name: "Lahore", slug: "lahore", campuses: 80 },
            { name: "Karachi", slug: "karachi", campuses: 60 },
            { name: "Islamabad", slug: "islamabad", campuses: 40 },
            { name: "Multan", slug: "multan", campuses: 25 },
            { name: "Peshawar", slug: "peshawar", campuses: 15 },
        ]
    },
    malaysia: {
        name: "Malaysia",
        flag: "🇲🇾",
        description: "Beaconhouse Malaysia serves the diverse international community in Kuala Lumpur with a British-style curriculum.",
        totalStudents: "3,500+",
        totalCampuses: 5,
        cities: [
            { name: "Kuala Lumpur", slug: "kuala-lumpur", campuses: 5 },
        ]
    },
    "united-kingdom": {
        name: "United Kingdom",
        flag: "🇬🇧",
        description: "Our UK schools provide premium British education in major cities, preparing students for top universities.",
        totalStudents: "1,200+",
        totalCampuses: 3,
        cities: [
            { name: "London", slug: "london", campuses: 2 },
            { name: "Manchester", slug: "manchester", campuses: 1 },
        ]
    },
    oman: {
        name: "Oman",
        flag: "🇴🇲",
        description: "Beaconhouse Oman combines international standards with respect for Omani culture and heritage.",
        totalStudents: "2,000+",
        totalCampuses: 2,
        cities: [
            { name: "Muscat", slug: "muscat", campuses: 2 },
        ]
    },
    uae: {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        description: "Serving the cosmopolitan UAE community with world-class education in Dubai and Abu Dhabi.",
        totalStudents: "4,500+",
        totalCampuses: 4,
        cities: [
            { name: "Dubai", slug: "dubai", campuses: 3 },
            { name: "Abu Dhabi", slug: "abu-dhabi", campuses: 1 },
        ]
    },
    philippines: {
        name: "Philippines",
        flag: "🇵🇭",
        description: "Beaconhouse Philippines offers British education with Filipino warmth in Metro Manila.",
        totalStudents: "1,800+",
        totalCampuses: 2,
        cities: [
            { name: "Manila", slug: "manila", campuses: 2 },
        ]
    },
    thailand: {
        name: "Thailand",
        flag: "🇹🇭",
        description: "Our Bangkok campus serves expat families and internationally-minded Thai families.",
        totalStudents: "800+",
        totalCampuses: 1,
        cities: [
            { name: "Bangkok", slug: "bangkok", campuses: 1 },
        ]
    },
    belgium: {
        name: "Belgium",
        flag: "🇧🇪",
        description: "Beaconhouse Brussels serves the EU capital's diverse international community.",
        totalStudents: "500+",
        totalCampuses: 1,
        cities: [
            { name: "Brussels", slug: "brussels", campuses: 1 },
        ]
    },
};

import { use } from "react";

export default function CountryPage({ params }: { params: Promise<{ country: string }> }) {
    const resolvedParams = use(params);
    const country = countryData[resolvedParams.country];

    if (!country) {
        notFound();
    }

    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/admissions" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8 transition-colors">
                            <ArrowLeft size={20} /> Back to Campus Finder
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl">{country.flag}</span>
                            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-white">
                                {country.name}
                            </h1>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed">
                            {country.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="text-center">
                            <Building2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                            <p className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-gold">{country.totalCampuses}</p>
                            <p className="text-slate-400">Campuses</p>
                        </div>
                        <div className="text-center">
                            <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                            <p className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-gold">{country.totalStudents}</p>
                            <p className="text-slate-400">Students</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cities */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Our <span className="text-gold">Locations</span>
                    </h2>
                    <div className="space-y-4">
                        {country.cities.map((city, index) => (
                            <motion.div
                                key={city.slug}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/campuses/${resolvedParams.country}/${city.slug}`}>
                                    <div className="glass rounded-xl p-6 flex items-center justify-between group hover:border-yellow-400/30 transition-all cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <MapPin className="w-6 h-6 text-yellow-400" />
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                                    {city.name}
                                                </h3>
                                                <p className="text-slate-400 text-sm">{city.campuses} Campus{city.campuses > 1 ? 'es' : ''}</p>
                                            </div>
                                        </div>
                                        <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Details →
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
