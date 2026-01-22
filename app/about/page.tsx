"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const timelineEvents = [
    {
        year: "1975",
        title: "The Beginning",
        description: "Les Anges Montessori Academy was established by Mrs. Nasreen Kasuri in Lahore.",
        slug: "1975"
    },
    {
        year: "1978",
        title: "Beaconhouse is Born",
        description: "The first Beaconhouse Public School opened, marking the start of a new era in education.",
        slug: "1978"
    },
    {
        year: "1990",
        title: "Going Global",
        description: "Expanded internationally with schools established in the UK and Malaysia.",
        slug: "1990"
    },
    {
        year: "2000",
        title: "Digital Revolution",
        description: "Introduced advanced computer labs and pioneering digital learning initiatives.",
        slug: "2000"
    },
    {
        year: "2010",
        title: "IB Authorization",
        description: "Became an authorized IB World School, offering the prestigious International Baccalaureate.",
        slug: "2010"
    },
    {
        year: "2026",
        title: "Future Ready",
        description: "Leading the way with AI integration, sustainable campuses, and 315,000+ students globally.",
        slug: "2026"
    }
];

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Our <span className="text-gold">Legacy</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Almost five decades of educational excellence, shaping minds and transforming communities across the globe.
                    </p>
                </motion.div>
            </section>

            {/* Chairperson Message */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent" />
                        <div className="relative z-10">
                            <p className="text-2xl md:text-4xl font-[family-name:var(--font-cinzel)] text-white leading-relaxed mb-8 italic">
                                "We are not just building schools; we are building the <span className="text-gold">future</span>."
                            </p>
                            <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-6" />
                            <p className="text-xl font-bold text-white">Mrs. Nasreen Kasuri</p>
                            <p className="text-slate-400 uppercase tracking-widest text-sm">Chairperson, Beaconhouse</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section ref={containerRef} className="section-padding relative">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] text-center mb-20"
                    >
                        Our <span className="text-gold">Journey</span>
                    </motion.h2>

                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-40 bottom-40 w-px bg-white/10 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-yellow-400 to-transparent"
                        />
                    </div>

                    {/* Timeline Events */}
                    <div className="relative space-y-12 md:space-y-24">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                <div className="flex-1 w-full">
                                    <div className="glass rounded-2xl p-8 hover:border-yellow-400/30 transition-all group">
                                        <span className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] text-gold/30 font-bold">
                                            {event.year}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                                            {event.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed mb-4">
                                            {event.description}
                                        </p>
                                        <Link
                                            href={`/about/journey/${event.slug}`}
                                            className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium hover:gap-3 transition-all"
                                        >
                                            Learn More <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Center Dot - Desktop only */}
                                <div className="relative z-10 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(251,191,36,0.5)] shrink-0 hidden md:block" />

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
