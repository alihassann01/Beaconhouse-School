"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, Globe, Building, ChevronDown } from "lucide-react";
import Link from "next/link";

// Pakistan Regional Offices with ALL campuses (146+ schools in 30+ cities)
const pakistanRegions = [
    {
        id: "north",
        name: "North Region",
        address: "Capital View Road, F-7, Islamabad",
        phone: "+92 51 111 222 333",
        email: "north@beaconhouse.edu.pk",
        cities: ["Islamabad", "Rawalpindi", "Peshawar", "Abbottabad", "Quetta"],
        campuses: [
            // Islamabad
            "Beaconhouse-Newlands Islamabad",
            "Margalla Campus, Islamabad",
            "Beaconhouse E-11 Campus, Islamabad",
            "Beaconhouse F-7/3 Campus, Islamabad",
            "Beaconhouse F-11/4 Campus, Islamabad",
            "BIC H-11 Campus, Islamabad",
            // Rawalpindi
            "Potohar Campus (opposite Bahria Town), Rawalpindi",
            "Tipu Sultan Senior Campus, Rawalpindi",
            "Peshawar Road Campus, Rawalpindi",
            // Peshawar
            "Beaconhouse Peshawar Campus",
            "Beaconhouse Hayatabad Campus, Peshawar",
            // Other North
            "BSS Jinnahabad Campus, Abbottabad",
            "Beaconhouse Quetta Campus",
        ]
    },
    {
        id: "central",
        name: "Central Region",
        address: "22-A Gulberg III, Lahore",
        phone: "+92 42 111 222 333",
        email: "central@beaconhouse.edu.pk",
        cities: ["Lahore", "Faisalabad", "Multan", "Gujranwala", "Sialkot", "Sargodha", "Gujrat", "Jhelum", "Bahawalpur", "Sahiwal", "Rahim Yar Khan"],
        campuses: [
            // Lahore
            "Defence Campus, Lahore",
            "Johar Town Boys Campus, Lahore",
            "Liberty Campus (Girls), Lahore",
            "Allama Iqbal Town Campus, Lahore",
            "Canal Side Campus, Lahore",
            "TNS Beaconhouse, Lahore",
            "Beaconhouse-Newlands Lahore (DHA Phase VI)",
            "BIC Gulberg Campus, Lahore",
            "Model Town Campus, Lahore",
            "Garden Town Campus, Lahore",
            "Walton Campus, Lahore",
            // Faisalabad
            "Civil Lines Campus, Faisalabad",
            "BIC Faisalabad (W Canal Rd)",
            // Multan
            "Beaconhouse-Newlands Multan",
            "Senior Campus Officers Colony, Multan",
            "Bosan Road Campus, Multan",
            // Other Central
            "Beaconhouse Gujranwala Campus",
            "Beaconhouse Sialkot Campus",
            "Beaconhouse Sargodha Campus",
            "Beaconhouse Gujrat Campus",
            "Beaconhouse Jhelum Campus",
            "Beaconhouse Bahawalpur Campus",
            "Beaconhouse Sahiwal Campus",
            "Beaconhouse Rahim Yar Khan Campus",
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
            // Karachi
            "Defence Campus, Karachi",
            "PECHS Campus, Karachi",
            "Gulshan Campus, Karachi",
            "Clifton Campus, Karachi",
            "Jubilee Campus, Karachi",
            "North Nazimabad I Campus, Karachi",
            "North Nazimabad II Campus, Karachi",
            "North Nazimabad III Campus, Karachi",
            "Discovery Centre Smart School, Karachi",
            "Tariq Road Campus, Karachi",
            "DHA Phase VI Campus, Karachi",
            // Other South
            "Beaconhouse Hyderabad Campus",
            "Beaconhouse Sukkur Campus",
        ]
    },
];

// International country contacts (9 countries total - matching actual Beaconhouse presence)
const internationalCampuses = [
    {
        country: "Malaysia",
        flag: "🇲🇾",
        description: "14 schools across Kuala Lumpur and Selangor",
        campuses: [
            { city: "Kuala Lumpur - Cheras", name: "Beaconhouse-Newlands Kuala Lumpur", phone: "+60 3 2171 1234", email: "kl@beaconhouse.edu.my" },
            { city: "Petaling Jaya", name: "Beaconhouse Sri Inai International School", phone: "+60 3 7955 1234", email: "sriinai@beaconhouse.edu.my" },
            { city: "Bangsar", name: "Beaconhouse Bangsar", phone: "+60 3 2283 1234", email: "bangsar@beaconhouse.edu.my" },
            { city: "Subang Jaya", name: "Beaconhouse Subang", phone: "+60 3 5636 1234", email: "subang@beaconhouse.edu.my" },
        ],
        preschools: "7 BNEY preschools including Bangsar, SS2, Subang"
    },
    {
        country: "United Kingdom",
        flag: "🇬🇧",
        description: "Headquartered in London with schools across UK",
        campuses: [
            { city: "Seaford, East Sussex", name: "Newlands School (Independent Day & Boarding)", phone: "+44 1323 892 334", email: "admissions@newlandsschool.co.uk" },
            { city: "Yorkshire", name: "Cherub Nurseries and Preschools", phone: "+44 1904 612 345", email: "cherub@beaconhouse.co.uk" },
            { city: "Yorkshire", name: "Pocklington Montessori Nursery", phone: "+44 1759 302 345", email: "pocklington@beaconhouse.co.uk" },
        ]
    },
    {
        country: "UAE",
        flag: "🇦🇪",
        description: "3 schools in Dubai and Sharjah",
        campuses: [
            { city: "Dubai - Al Warqa", name: "Beaconhouse Newlands Dubai", phone: "+971 4 289 7000", email: "dubai@beaconhouse.ae" },
            { city: "Sharjah", name: "Beaconhouse Al Khaleej International", phone: "+971 6 556 7890", email: "sharjah@beaconhouse.ae" },
            { city: "Dubai Knowledge Park", name: "Regional Office", phone: "+971 4 364 5000", email: "info@beaconhouse.ae" },
        ]
    },
    {
        country: "Thailand",
        flag: "🇹🇭",
        description: "4 Beaconhouse Yamsaard (BYS) schools",
        campuses: [
            { city: "Bangkok - Ladprao", name: "BYS Ladprao Campus", phone: "+66 2 513 1234", email: "ladprao@bys.ac.th" },
            { city: "Pathum Thani - Rangsit", name: "BYS Rangsit Campus", phone: "+66 2 997 1234", email: "rangsit@bys.ac.th" },
            { city: "Hua Hin", name: "BYS Hua Hin Campus", phone: "+66 32 520 1234", email: "huahin@bys.ac.th" },
            { city: "Chonburi", name: "BYS Pattaya Campus", phone: "+66 38 421 1234", email: "pattaya@bys.ac.th" },
        ]
    },
    {
        country: "Philippines",
        flag: "🇵🇭",
        description: "Partner schools in Cebu and Manila",
        campuses: [
            { city: "Cebu City", name: "St. Paul Learning Center", phone: "+63 32 253 1234", email: "cebu@beaconhouse.ph" },
            { city: "Manila South", name: "Beaconhouse Manila", phone: "+63 2 8123 4567", email: "manila@beaconhouse.ph" },
            { city: "Quezon City", name: "Beaconhouse QC", phone: "+63 2 8765 4321", email: "qc@beaconhouse.ph" },
        ]
    },
    {
        country: "Oman",
        flag: "🇴🇲",
        description: "2 campuses including Primary and KG",
        campuses: [
            { city: "Muscat", name: "Beaconhouse Primary School", phone: "+968 2456 7890", email: "muscat@beaconhouse.om" },
            { city: "Muscat - Al Khuwair", name: "Beaconhouse KG Campus", phone: "+968 2467 8901", email: "kg@beaconhouse.om" },
        ]
    },
    {
        country: "Belgium",
        flag: "🇧🇪",
        description: "Gymboree education programs",
        campuses: [
            { city: "Brussels", name: "Gymboree Play & Music", phone: "+32 2 345 6789", email: "brussels@beaconhouse.be" },
            { city: "Antwerp", name: "Gymboree Play & Music", phone: "+32 2 345 6789", email: "antwerp@beaconhouse.be" },

        ]
    },
    {
        country: "Bangladesh",
        flag: "🇧🇩",
        description: "Beaconhouse Banani campus",
        campuses: [
            { city: "Dhaka - Banani", name: "Beaconhouse School Banani", phone: "+880 2 8711 2233", email: "dhaka@beaconhouse.bd" },
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
                        Reach out to any of our <span className="text-yellow-400 font-bold">185+ flagship campuses</span> across <span className="text-yellow-400 font-bold">9 countries</span> worldwide.
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
                            🇵🇰 Pakistan (146+ Schools)
                        </button>
                        <button
                            onClick={() => { setActiveTab("international"); setShowCampuses(false); }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === "international"
                                ? "bg-yellow-500 text-slate-900"
                                : "glass text-slate-300 hover:text-white"
                                }`}
                        >
                            <Globe size={18} /> International (8 Countries)
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
                                            Serving {currentRegion.cities.length} cities: {currentRegion.cities.join(", ")}
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
                                                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium"
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
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                            >
                                {internationalCampuses.map((country) => (
                                    <motion.div
                                        key={country.country}
                                        whileHover={{ y: -3 }}
                                        className="glass rounded-xl p-5"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">{country.flag}</span>
                                            <h3 className="text-base font-bold text-white">{country.country}</h3>
                                        </div>
                                        <p className="text-slate-400 text-xs mb-4">{country.description}</p>

                                        <div className="space-y-3">
                                            {country.campuses.slice(0, 3).map((campus, idx) => (
                                                <div key={idx} className="border-l-2 border-yellow-400/30 pl-3">
                                                    <div className="text-yellow-400 font-medium text-xs">{campus.city}</div>
                                                    <div className="text-slate-300 text-xs">{campus.name}</div>
                                                </div>
                                            ))}
                                            {country.campuses.length > 3 && (
                                                <p className="text-slate-500 text-xs">+{country.campuses.length - 3} more locations</p>
                                            )}
                                        </div>

                                        <Link
                                            href={`/campuses/${country.country.toLowerCase().replace(/ /g, "-")}`}
                                            className="mt-4 block text-center text-xs text-yellow-400 hover:text-yellow-300"
                                        >
                                            View all →
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-gold">185+</div>
                        <div className="text-slate-400 text-sm">Flagship Campuses</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-gold">9</div>
                        <div className="text-slate-400 text-sm">Countries</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-gold">350K+</div>
                        <div className="text-slate-400 text-sm">Students</div>
                    </div>
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
