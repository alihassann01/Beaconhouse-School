"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

const timelineEvents = [
    { year: "1975", title: "The Beginning", description: "Les Anges Montessori Academy was established by Mrs. Nasreen Kasuri." },
    { year: "1978", title: "Expansion", description: "Beaconhouse Public School was founded, marking the start of a new era." },
    { year: "1990", title: "Global Reach", description: "Expanded internationally, establishing a presence in the UK and Malaysia." },
    { year: "2000", title: "Digital Revolution", description: "Introduced advanced computer labs and digital learning initiatives." },
    { year: "2026", title: "Future Ready", description: "Leading the way with AI integration and sustainable campuses." }
];

const TimelineEvent = ({ event, index }: { event: typeof timelineEvents[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={clsx(
                "flex items-center justify-between w-full mb-32 relative px-4 md:px-0",
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
        >
            {/* Content Box */}
            <div className="w-5/12 group perspective">
                <div className="p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md shadow-2xl hover:shadow-bss-gold/10 hover:border-bss-gold/30 transition-all duration-500 transform hover:-translate-y-2">
                    <h3 className="text-6xl font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-bss-gold to-amber-800 mb-4 opacity-30 group-hover:opacity-100 transition-opacity duration-500 absolute -top-10 -right-4 z-0 pointer-events-none">
                        {event.year}
                    </h3>
                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold font-cinzel text-white mb-3 group-hover:text-bss-gold transition-colors">{event.title}</h4>
                        <p className="text-slate-400 font-dm-sans text-base leading-relaxed">{event.description}</p>
                    </div>
                </div>
            </div>

            {/* Center Dot */}
            <div className="w-2/12 flex justify-center relative">
                <div className="w-6 h-6 rounded-full bg-bss-blue border-2 border-bss-gold shadow-[0_0_20px_rgba(251,191,36,0.5)] z-10 relative">
                    <div className="absolute inset-0 bg-bss-gold opacity-50 blur-sm rounded-full animate-pulse" />
                </div>
            </div>

            {/* Empty space for alignment */}
            <div className="w-5/12" />
        </motion.div>
    );
};

export default function Timeline() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={ref} className="w-full py-40 bg-bss-blue relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <h2 className="text-5xl md:text-7xl font-cinzel text-center text-white mb-4">Our Legacy</h2>
                    <p className="text-slate-400 font-dm-sans uppercase tracking-[0.3em] text-sm">Half a century of excellence</p>
                </motion.div>

                {/* Continuous Center Line */}
                <motion.div
                    style={{ scaleY }}
                    className="absolute left-1/2 top-40 bottom-40 w-px bg-gradient-to-b from-transparent via-bss-gold to-transparent origin-top -translate-x-1/2 z-0 opacity-30"
                />

                <div className="relative z-10">
                    {timelineEvents.map((event, index) => (
                        <TimelineEvent key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
