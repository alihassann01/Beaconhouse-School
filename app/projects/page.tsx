"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Atom, Code, Award, ExternalLink } from "lucide-react";

const projectCategories = [
    { name: "All", count: 500 },
    { name: "Science", count: 150 },
    { name: "Technology", count: 120 },
    { name: "Art & Design", count: 100 },
    { name: "Social Impact", count: 80 },
    { name: "Engineering", count: 50 },
];

const featuredProjects = [
    {
        title: "Solar-Powered Water Purifier",
        student: "Ahmed Hassan, Grade 11",
        campus: "Defence Campus, Lahore",
        category: "Science",
        description: "A low-cost water purification system using solar energy for rural communities",
        award: "National Science Fair Gold",
        icon: "☀️"
    },
    {
        title: "AI Traffic Management System",
        student: "Sara Khan, Grade 12",
        campus: "Margalla Campus, Islamabad",
        category: "Technology",
        description: "Machine learning-based traffic optimization reducing congestion by 40%",
        award: "Google Science Fair Finalist",
        icon: "🚗"
    },
    {
        title: "Climate Change Awareness Mural",
        student: "Fatima Ali, Grade 10",
        campus: "Clifton Campus, Karachi",
        category: "Art & Design",
        description: "10-meter collaborative mural raising awareness about environmental issues",
        award: "National Art Competition Winner",
        icon: "🎨"
    },
    {
        title: "Smart Agriculture Monitoring",
        student: "Bilal Ahmed, Grade 11",
        campus: "Liberty Campus, Lahore",
        category: "Engineering",
        description: "IoT sensors for crop monitoring and automated irrigation",
        award: "Young Innovator Award",
        icon: "🌾"
    },
    {
        title: "Mental Health App for Teens",
        student: "Ayesha Malik, Grade 12",
        campus: "Jubilee Campus, Karachi",
        category: "Social Impact",
        description: "Mobile app providing mental health resources and peer support",
        award: "Social Innovation Prize",
        icon: "💚"
    },
    {
        title: "Biodegradable Packaging",
        student: "Usman Shah, Grade 11",
        campus: "TNS Beaconhouse, Lahore",
        category: "Science",
        description: "Eco-friendly packaging made from agricultural waste",
        award: "Environmental Excellence Award",
        icon: "♻️"
    },
];

const stats = [
    { value: "500+", label: "Projects Annually" },
    { value: "50+", label: "National Awards" },
    { value: "12", label: "International Competitions" },
    { value: "185", label: "Campuses Participating" },
];

export default function ProjectsPage() {
    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Lightbulb size={16} />
                        Student Innovation
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Student <span className="text-gold">Projects</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Showcasing creativity, innovation, and problem-solving from our talented students across the globe.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <motion.div key={stat.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <p className="text-3xl font-bold text-gold">{stat.value}</p>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="section-padding pb-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {projectCategories.map((cat, idx) => (
                            <button
                                key={cat.name}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${idx === 0 ? "bg-yellow-500 text-slate-900" : "glass text-slate-300 hover:text-white"
                                    }`}
                            >
                                {cat.name} ({cat.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        Featured <span className="text-gold">Projects</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass rounded-xl p-6 group cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-4xl">{project.icon}</span>
                                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                                <div className="border-t border-white/10 pt-3">
                                    <p className="text-slate-300 text-sm">{project.student}</p>
                                    <p className="text-slate-500 text-xs">{project.campus}</p>
                                </div>
                                {project.award && (
                                    <div className="mt-3 flex items-center gap-1 text-xs text-yellow-400">
                                        <Award size={12} /> {project.award}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submit Project CTA */}
            <section className="py-16 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        Have a Project to Showcase?
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Submit your innovative project to be featured on our platform.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                        <Lightbulb size={18} /> Submit Your Project
                    </button>
                </div>
            </section>
        </main>
    );
}
