"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GraduationCap, Bot, Trophy, Globe, Sparkles } from "lucide-react";

const Hero3D = dynamic(() => import("./components/3d/Hero3D"), { ssr: false });

/* ===== BENTO GRID DATA ===== */
const bentoItems = [
  {
    title: "IB World School",
    description: "Developing inquiring, knowledgeable and caring young people who help create a better world.",
    icon: GraduationCap,
    span: "lg:col-span-2 lg:row-span-2",
    href: "/programs/ib",
    featured: true,
  },
  {
    title: "Robotics & AI",
    description: "Future-ready curriculum with advanced robotics labs.",
    icon: Bot,
    href: "/programs/robotics",
  },
  {
    title: "Global Achievers",
    description: "Consistently producing world toppers in O/A Levels.",
    icon: Trophy,
    href: "/programs/achievers",
  },
  {
    title: "8 Countries",
    description: "A global network spanning across continents.",
    icon: Globe,
    span: "lg:col-span-2",
    href: "/programs/global",
  },
];

/* ===== STATS DATA ===== */
const stats = [
  { value: "45+", label: "Years of Excellence" },
  { value: "315K+", label: "Students Worldwide" },
  { value: "8", label: "Countries" },
];

export default function Home() {
  return (
    <main className="relative">
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Hero3D />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-[family-name:var(--font-cinzel)] font-bold tracking-tight mb-6">
              <span className="text-gold drop-shadow-[0_0_40px_rgba(251,191,36,0.3)]">
                BEACONHOUSE
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-200 uppercase tracking-[0.4em] font-light mb-12"
          >
            Seek The Light
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/admissions"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.25)]"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all"
            >
              Explore Legacy
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-yellow-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ========== EXCELLENCE SECTION (BENTO GRID) ========== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold mb-4">
              Excellence <span className="text-gold">Redefined</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              For over four decades, Beaconhouse has been shaping the future through world-class education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  rotateY: 8,
                  rotateX: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className={`${item.span || ""}`}
              >
                <Link href={item.href} className="block h-full">
                  <div className="glass rounded-2xl p-8 h-full group hover:border-yellow-400/30 hover:glow-gold transition-all duration-500 cursor-pointer">
                    <item.icon className="w-10 h-10 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl md:text-2xl font-[family-name:var(--font-cinzel)] text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-400 uppercase tracking-[0.2em] text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
              Begin Your <span className="text-gold">Journey</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join the legacy of excellence. Discover a campus near you and take the first step towards a brighter future.
            </p>
            <Link
              href="/admissions"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.25)]"
            >
              Find Your Campus
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
