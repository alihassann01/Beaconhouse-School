"use client";

import { motion } from "framer-motion";

export default function Leadership() {
    return (
        <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
            {/* Video Background Placeholder */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            >
                <source src="https://media.istockphoto.com/id/1363640237/video/portrait-of-confident-mature-businessman-working-on-laptop-computer-in-office-looking-at.mp4?s=mp4-640x640-is&k=20&c=K5R8E-T6K9aK5fT6d-K1-q3J5o_X-C3g7-X6_d3_N2g=" type="video/mp4" />
                {/* Using a placeholder stock video of a professional setting */}
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-bss-blue/90 via-bss-blue/50 to-bss-blue/90" />

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-cinzel text-white mb-8 leading-tight">
                        "We are not just building schools;<br />
                        we are building the <span className="text-bss-gold">future</span>."
                    </h2>
                    <div className="w-20 h-1 bg-bss-gold mx-auto mb-8" />

                    <h3 className="text-2xl font-bold text-white mb-2">Mrs. Nasreen Kasuri</h3>
                    <p className="text-gray-400 font-dm-sans uppercase tracking-widest">Chairperson</p>
                </motion.div>
            </div>
        </section>
    );
}
