"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, Globe, Building, ChevronDown } from "lucide-react";
import Link from "next/link";

// Pakistan Regional Offices with ALL campuses
const pakistanRegions = [
    {
        id: "north",
        name: "North Region",
        address: "Capital View Road, F-7, Islamabad",
        phone: "+92 51 111 222 333",
        email: "north@beaconhouse.edu.pk",
        cities: ["Islamabad", "Rawalpindi", "Peshawar", "Abbottabad", "Risalpur"],
        campuses: [
            "Beaconhouse Kindergarten & Primary Campus E-11, Islamabad",
            "Beaconhouse Primary and Middle Campus F 7/3, Islamabad",
            "Primary Campus F-11/4, Islamabad",
            "Beaconhouse School System H-8, Islamabad",
            "Beaconhouse Margalla Campus, Islamabad",
            "Tipu Sultan Senior Campus, Rawalpindi",
            "Beaconhouse Chaklala Campus, Rawalpindi",
            "Beaconhouse School System, Risalpur Branch, Risalpur",
            "BSS Jinnahabad Campus, Abbottabad",
            "Beaconhouse Frontier Campus, Peshawar",
            "Beaconhouse Hayatabad Campus, Peshawar",
        ]
    },
    {
        id: "central",
        name: "Central Region",
        address: "22-A Gulberg III, Lahore",
        phone: "+92 42 111 222 333",
        email: "central@beaconhouse.edu.pk",
        cities: ["Lahore", "Faisalabad", "Multan", "Bahawalpur", "Sahiwal", "Okara"],
        campuses: [
            "Beaconhouse Johar Town Boys Campus, Lahore",
            "Beaconhouse School System Liberty Campus, Lahore",
            "Beaconhouse Allama Iqbal Town Campus, Lahore",
            "LMA 72-L, Lahore",
            "Beaconhouse School System Johar Town Boys Campus, Lahore",
            "Beaconhouse DHA Phase 5 Campus, Lahore",
            "Beaconhouse Model Town Campus, Lahore",
            "Beaconhouse Gulberg Campus, Lahore",
            "Beaconhouse Canal Campus, Lahore",
            "Beaconhouse Walton Campus, Lahore",
            "Beaconhouse Garden Town Campus, Lahore",
            "Beaconhouse Faisalabad Campus, Faisalabad",
            "Model Town Campus, Bahawalpur",
            "Senior Campus Officers Colony, Multan",
            "Bosan Road Campus, Multan",
            "Beaconhouse Shah Rukn-e-Alam Campus, Multan",
            "Beaconhouse Early Years and Girls Campus, Sahiwal",
            "Beaconhouse School System Boys Campus, Okara",
            "Beaconhouse School System Girls Campus, Okara",
        ]
    },
    {
        id: "south",
        name: "South Region",
        address: "Block 5, Clifton, Karachi",
        phone: "+92 21 111 222 333",
        email: "south@beaconhouse.edu.pk",
        cities: ["Karachi", "Hyderabad", "Sukkur"],
        campuses: [
            "Beaconhouse Clifton Campus, Karachi",
            "Beconhouse Jubilee Campus, Karachi",
            "Beaconhouse Defence Campus, Karachi",
            "Beaconhouse School System North Nazimabad Primary III Campus, Karachi",
            "Beaconhouse KG III Branch PECHS Block 2, Karachi",
            "Beaconhouse College Campus Qasimabad, Karachi",
            "Beaconhouse School System Kindergarten III P.E.C.H.S, Karachi",
            "Beaconhouse PECHS Campus, Karachi",
            "Beaconhouse School System Gulshan Campus, Karachi",
            "North Nazimabad Primary II, Karachi",
            "Gulshan Primary IV, Karachi",
            "Jauhar Primary Campus, Karachi",
            "Discovery Early Years, Karachi",
            "Discovery Elementary Campus, Karachi",
            "Beaconhouse DHA Phase VI Campus, Karachi",
            "Beaconhouse Tariq Road Campus, Karachi",
            "Beaconhouse Hyderabad Campus, Hyderabad",
            "Early Years Campus, Sukkur",
        ]
    },
];

// International country contacts
const internationalCampuses = [
    {
        country: "United Kingdom",
        flag: "🇬🇧",
        campuses: [
            { city: "London", address: "45 Kensington Road, London W8", phone: "+44 20 7123 4567", email: "london@beaconhouse.co.uk" },
            { city: "Manchester", address: "12 Oxford Street, Manchester M1", phone: "+44 161 234 5678", email: "manchester@beaconhouse.co.uk" },
        ]
    },
    {
        country: "Malaysia",
        flag: "🇲🇾",
        campuses: [
            { city: "Kuala Lumpur", address: "Jalan Ampang, 50450 Kuala Lumpur", phone: "+60 3 2171 1234", email: "kl@beaconhouse.edu.my" },
        ]
    },
    {
        country: "UAE",
        flag: "🇦🇪",
        campuses: [
            { city: "Dubai", address: "Al Barsha, Dubai", phone: "+971 4 345 6789", email: "dubai@beaconhouse.ae" },
            { city: "Abu Dhabi", address: "Al Reem Island, Abu Dhabi", phone: "+971 2 234 5678", email: "abudhabi@beaconhouse.ae" },
        ]
    },
    {
        country: "Oman",
        flag: "🇴🇲",
        campuses: [
            { city: "Muscat", address: "Al Khuwair, Muscat", phone: "+968 2456 7890", email: "muscat@beaconhouse.om" },
        ]
    },
    {
        country: "Philippines",
        flag: "🇵🇭",
        campuses: [
            { city: "Manila", address: "Makati City, Metro Manila", phone: "+63 2 8123 4567", email: "manila@beaconhouse.ph" },
        ]
    },
    {
        country: "Thailand",
        flag: "🇹🇭",
        campuses: [
            { city: "Bangkok", address: "Sukhumvit Road, Bangkok 10110", phone: "+66 2 258 1234", email: "bangkok@beaconhouse.co.th" },
        ]
    },
    {
        country: "Belgium",
        flag: "🇧🇪",
        campuses: [
            { city: "Brussels", address: "Avenue Louise 65, 1050 Brussels", phone: "+32 2 345 6789", email: "brussels@beaconhouse.be" },
        ]
    },
];

export default function Contact() {
    const [activeTab, setActiveTab] = useState<"pakistan" | "international">("pakistan");
    const [activeRegion, setActiveRegion] = useState("central");
    const [showCampuses, setShowCampuses] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const currentRegion = pakistanRegions.find((r) => r.id === activeRegion)!;

    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold mb-6">
                        Connect <span className="text-gold">With Us</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Reach out to any of our 315+ campuses across 8 countries worldwide.
                    </p>
                </motion.div>
            </section>

            {/* Country Toggle */}
            <section className="section-padding pt-0">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-center gap-4 mb-10">
                        <button
                            onClick={() => { setActiveTab("pakistan"); setShowCampuses(false); }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === "pakistan"
                                    ? "bg-yellow-500 text-slate-900"
                                    : "glass text-slate-300 hover:text-white"
                                }`}
                        >
                            🇵🇰 Pakistan (220+ Campuses)
                        </button>
                        <button
                            onClick={() => { setActiveTab("international"); setShowCampuses(false); }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === "international"
                                    ? "bg-yellow-500 text-slate-900"
                                    : "glass text-slate-300 hover:text-white"
                                }`}
                        >
                            <Globe size={18} /> International Campuses
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === "pakistan" ? (
                            <motion.div
                                key="pakistan"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                {/* Pakistan Regional Tabs */}
                                <div className="flex flex-wrap justify-center gap-3 mb-8">
                                    {pakistanRegions.map((region) => (
                                        <button
                                            key={region.id}
                                            onClick={() => { setActiveRegion(region.id); setShowCampuses(false); }}
                                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeRegion === region.id
                                                    ? "bg-white/20 text-white border border-yellow-400/50"
                                                    : "glass text-slate-400 hover:text-white"
                                                }`}
                                        >
                                            {region.name}
                                        </button>
                                    ))}
                                </div>

                                {/* Pakistan Region Details */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeRegion}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        className="glass rounded-2xl p-8"
                                    >
                                        <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white text-center mb-2">
                                            {currentRegion.name} Head Office
                                        </h3>
                                        <p className="text-slate-400 text-sm text-center mb-8">
                                            Serving: {currentRegion.cities.join(", ")}
                                        </p>

                                        <div className="grid md:grid-cols-3 gap-6 text-center">
                                            <div>
                                                <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-3">
                                                    <MapPin className="text-yellow-400" size={20} />
                                                </div>
                                                <p className="text-slate-300 text-sm">{currentRegion.address}</p>
                                            </div>
                                            <div>
                                                <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-3">
                                                    <Phone className="text-yellow-400" size={20} />
                                                </div>
                                                <p className="text-slate-300 text-sm">{currentRegion.phone}</p>
                                            </div>
                                            <div>
                                                <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-3">
                                                    <Mail className="text-yellow-400" size={20} />
                                                </div>
                                                <p className="text-slate-300 text-sm">{currentRegion.email}</p>
                                            </div>
                                        </div>

                                        {/* Region-specific campuses toggle */}
                                        <div className="mt-8 text-center">
                                            <button
                                                onClick={() => setShowCampuses(!showCampuses)}
                                                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm"
                                            >
                                                View {currentRegion.name} campuses ({currentRegion.campuses.length})
                                                <ChevronDown size={16} className={`transition-transform ${showCampuses ? 'rotate-180' : ''}`} />
                                            </button>
                                        </div>

                                        {/* Campus List */}
                                        <AnimatePresence>
                                            {showCampuses && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="mt-6 pt-6 border-t border-white/10">
                                                        <h4 className="text-lg font-bold text-white mb-4 text-center">
                                                            {currentRegion.name} Campuses
                                                        </h4>
                                                        <div className="grid md:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-2">
                                                            {currentRegion.campuses.map((campus, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                                                                >
                                                                    <Building size={14} className="text-yellow-400 shrink-0" />
                                                                    <span className="text-slate-300 text-sm">{campus}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="international"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {internationalCampuses.map((country) => (
                                    <motion.div
                                        key={country.country}
                                        whileHover={{ y: -5 }}
                                        className="glass rounded-xl p-6"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-3xl">{country.flag}</span>
                                            <h3 className="text-lg font-bold text-white">{country.country}</h3>
                                        </div>

                                        {country.campuses.map((campus, idx) => (
                                            <div key={campus.city} className={idx > 0 ? "mt-4 pt-4 border-t border-white/10" : ""}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Building size={14} className="text-yellow-400" />
                                                    <span className="text-yellow-400 font-medium text-sm">{campus.city}</span>
                                                </div>
                                                <div className="space-y-1 text-xs text-slate-400">
                                                    <p className="flex items-start gap-2">
                                                        <MapPin size={12} className="mt-0.5 shrink-0" />
                                                        {campus.address}
                                                    </p>
                                                    <p className="flex items-center gap-2">
                                                        <Phone size={12} />
                                                        {campus.phone}
                                                    </p>
                                                    <p className="flex items-center gap-2">
                                                        <Mail size={12} />
                                                        {campus.email}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}

                                        <Link
                                            href={`/campuses/${country.country.toLowerCase().replace(/ /g, "-")}`}
                                            className="mt-4 block text-center text-xs text-yellow-400 hover:text-yellow-300"
                                        >
                                            View campus details →
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* General Enquiry */}
            <section className="section-padding">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        General Enquiries
                    </h2>
                    <p className="text-slate-400 mb-6">
                        For global enquiries, partnerships, or media requests
                    </p>
                    <div className="glass rounded-xl p-6 inline-flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-3">
                            <Mail className="text-yellow-400" size={20} />
                            <span className="text-slate-300">info@beaconhouse.net</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-yellow-400" size={20} />
                            <span className="text-slate-300">+92 42 111 123 456</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 border-t border-white/5">
                <p className="text-center text-slate-500 text-sm">
                    © 2026 Beaconhouse School System. All Rights Reserved.
                </p>
            </footer>

            {/* AI Chat Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setChatOpen(!chatOpen)}
                className="fixed bottom-8 right-8 z-50 bg-yellow-500 text-slate-900 p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
                aria-label="Open chat"
            >
                <MessageCircle size={24} />
            </motion.button>

            {/* Chat Popup */}
            <AnimatePresence>
                {chatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-8 z-50 w-80 glass rounded-2xl p-6 shadow-2xl"
                    >
                        <h4 className="font-bold text-white mb-2">Beaconhouse Guide</h4>
                        <p className="text-slate-400 text-sm mb-4">How can I help you today?</p>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a question..."
                                className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-white text-sm outline-none border border-white/10 focus:border-yellow-400"
                            />
                            <button className="bg-yellow-500 text-slate-900 p-2 rounded-lg hover:bg-yellow-400" aria-label="Send">
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
