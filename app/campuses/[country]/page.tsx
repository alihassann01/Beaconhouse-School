"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2, Users, MapPin, School, GraduationCap } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";

interface Campus {
    name: string;
    city: string;
    type: 'school' | 'preschool' | 'college' | 'partner';
}

interface CountryInfo {
    name: string;
    flag: string;
    description: string;
    totalStudents: string;
    regions?: {
        name: string;
        cities: string[];
        campuses: Campus[];
    }[];
    campuses: Campus[];
}

const countryData: Record<string, CountryInfo> = {
    pakistan: {
        name: "Pakistan",
        flag: "🇵🇰",
        description: "The birthplace of Beaconhouse. Over 146 schools in more than 30 cities serving 280,000+ students.",
        totalStudents: "280,000+",
        regions: [
            {
                name: "North Region",
                cities: ["Islamabad", "Rawalpindi", "Peshawar", "Abbottabad", "Quetta"],
                campuses: [
                    { name: "Beaconhouse-Newlands Islamabad", city: "Islamabad", type: "school" },
                    { name: "Margalla Campus", city: "Islamabad", type: "school" },
                    { name: "E-11 Campus", city: "Islamabad", type: "school" },
                    { name: "F-7/3 Campus", city: "Islamabad", type: "school" },
                    { name: "F-11/4 Campus", city: "Islamabad", type: "school" },
                    { name: "BIC H-11 Campus", city: "Islamabad", type: "college" },
                    { name: "G-10 Campus", city: "Islamabad", type: "school" },
                    { name: "I-8 Campus", city: "Islamabad", type: "school" },
                    { name: "Potohar Campus (Bahria Town)", city: "Rawalpindi", type: "school" },
                    { name: "Tipu Sultan Senior Campus", city: "Rawalpindi", type: "school" },
                    { name: "Peshawar Road Campus", city: "Rawalpindi", type: "school" },
                    { name: "Chaklala Campus", city: "Rawalpindi", type: "school" },
                    { name: "Satellite Town Campus", city: "Rawalpindi", type: "school" },
                    { name: "Hayatabad Campus", city: "Peshawar", type: "school" },
                    { name: "University Road Campus", city: "Peshawar", type: "school" },
                    { name: "Frontier Campus", city: "Peshawar", type: "school" },
                    { name: "Jinnahabad Campus", city: "Abbottabad", type: "school" },
                    { name: "Mandian Campus", city: "Abbottabad", type: "school" },
                    { name: "Quetta Campus", city: "Quetta", type: "school" },
                ]
            },
            {
                name: "Central Region",
                cities: ["Lahore", "Faisalabad", "Multan", "Gujranwala", "Sialkot", "Bahawalpur", "Sahiwal"],
                campuses: [
                    { name: "Defence Campus", city: "Lahore", type: "school" },
                    { name: "Johar Town Boys Campus", city: "Lahore", type: "school" },
                    { name: "Liberty Campus (Girls)", city: "Lahore", type: "school" },
                    { name: "Allama Iqbal Town Campus", city: "Lahore", type: "school" },
                    { name: "Canal Side Campus", city: "Lahore", type: "school" },
                    { name: "TNS Beaconhouse", city: "Lahore", type: "school" },
                    { name: "Beaconhouse-Newlands DHA Phase VI", city: "Lahore", type: "school" },
                    { name: "BIC Gulberg Campus", city: "Lahore", type: "college" },
                    { name: "Model Town Campus", city: "Lahore", type: "school" },
                    { name: "Garden Town Campus", city: "Lahore", type: "school" },
                    { name: "Walton Campus", city: "Lahore", type: "school" },
                    { name: "Gulberg Campus", city: "Lahore", type: "school" },
                    { name: "DHA Phase 5 Campus", city: "Lahore", type: "school" },
                    { name: "Cavalry Ground Campus", city: "Lahore", type: "school" },
                    { name: "Valencia Campus", city: "Lahore", type: "school" },
                    { name: "Askari X Campus", city: "Lahore", type: "school" },
                    { name: "Bahria Town Campus", city: "Lahore", type: "school" },
                    { name: "LDA Avenue Campus", city: "Lahore", type: "school" },
                    { name: "Wapda Town Campus", city: "Lahore", type: "school" },
                    { name: "Township Campus", city: "Lahore", type: "school" },
                    { name: "Civil Lines Campus", city: "Faisalabad", type: "school" },
                    { name: "BIC Faisalabad (W Canal Rd)", city: "Faisalabad", type: "college" },
                    { name: "Peoples Colony Campus", city: "Faisalabad", type: "school" },
                    { name: "Beaconhouse-Newlands Multan", city: "Multan", type: "school" },
                    { name: "Officers Colony Campus", city: "Multan", type: "school" },
                    { name: "Bosan Road Campus", city: "Multan", type: "school" },
                    { name: "Satellite Town Campus", city: "Gujranwala", type: "school" },
                    { name: "Cantt Campus", city: "Sialkot", type: "school" },
                    { name: "Model Town Campus", city: "Bahawalpur", type: "school" },
                    { name: "Sahiwal Campus", city: "Sahiwal", type: "school" },
                ]
            },
            {
                name: "South Region",
                cities: ["Karachi", "Hyderabad", "Sukkur"],
                campuses: [
                    { name: "Defence Campus", city: "Karachi", type: "school" },
                    { name: "PECHS Campus", city: "Karachi", type: "school" },
                    { name: "Gulshan Campus", city: "Karachi", type: "school" },
                    { name: "Clifton Campus", city: "Karachi", type: "school" },
                    { name: "Jubilee Campus", city: "Karachi", type: "school" },
                    { name: "North Nazimabad I", city: "Karachi", type: "school" },
                    { name: "North Nazimabad II", city: "Karachi", type: "school" },
                    { name: "North Nazimabad III", city: "Karachi", type: "school" },
                    { name: "Discovery Centre Smart School", city: "Karachi", type: "school" },
                    { name: "Tariq Road Campus", city: "Karachi", type: "school" },
                    { name: "DHA Phase VI Campus", city: "Karachi", type: "school" },
                    { name: "KG III PECHS Block 2", city: "Karachi", type: "preschool" },
                    { name: "Gulshan Primary IV", city: "Karachi", type: "school" },
                    { name: "Jauhar Primary Campus", city: "Karachi", type: "school" },
                    { name: "Korangi Campus", city: "Karachi", type: "school" },
                    { name: "Malir Campus", city: "Karachi", type: "school" },
                    { name: "Latifabad Campus", city: "Hyderabad", type: "school" },
                    { name: "Qasimabad Campus", city: "Hyderabad", type: "school" },
                    { name: "Sukkur Campus", city: "Sukkur", type: "school" },
                ]
            }
        ],
        campuses: []
    },
    malaysia: {
        name: "Malaysia",
        flag: "🇲🇾",
        description: "12 schools in Kuala Lumpur and Selangor serving the diverse international community.",
        totalStudents: "8,000+",
        campuses: [
            { name: "Beaconhouse-Newlands Kuala Lumpur", city: "Cheras", type: "school" },
            { name: "Beaconhouse Sri Inai International School", city: "Petaling Jaya", type: "school" },
            { name: "Beaconhouse Bangsar", city: "Bangsar", type: "school" },
            { name: "Sri Murni Private National School", city: "Cheras", type: "school" },
            { name: "Sri Lethia", city: "Klang", type: "school" },
            { name: "BNEY Bangsar (Preschool)", city: "Bangsar", type: "preschool" },
            { name: "BNEY SS2 (Preschool)", city: "SS2", type: "preschool" },
            { name: "BNEY Subang (Preschool)", city: "Subang", type: "preschool" },
            { name: "BNEY Damansara (Preschool)", city: "Damansara", type: "preschool" },
            { name: "BNEY Mont Kiara (Preschool)", city: "Mont Kiara", type: "preschool" },
            { name: "BNEY Ampang (Preschool)", city: "Ampang", type: "preschool" },
            { name: "BNEY TTDI (Preschool)", city: "TTDI", type: "preschool" },
        ]
    },
    "united-kingdom": {
        name: "United Kingdom",
        flag: "🇬🇧",
        description: "Headquartered in London with primary operations in East Sussex, Yorkshire, and Hull.",
        totalStudents: "2,500+",
        campuses: [
            { name: "Newlands School (Day & Boarding)", city: "Seaford, East Sussex", type: "school" },
            { name: "Cherub Nursery Leeds", city: "Leeds, Yorkshire", type: "preschool" },
            { name: "Cherub Nursery York", city: "York, Yorkshire", type: "preschool" },
            { name: "Cherub Nursery Harrogate", city: "Harrogate, Yorkshire", type: "preschool" },
            { name: "Pocklington Montessori Nursery", city: "Pocklington", type: "preschool" },
            { name: "Educational Services Hull", city: "Hull", type: "school" },
            { name: "Hull Management Centre", city: "Hull", type: "school" },
            { name: "Corporate Headquarters", city: "London", type: "school" },
        ]
    },
    uae: {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        description: "Operations in Dubai and Sharjah serving the cosmopolitan UAE community.",
        totalStudents: "5,000+",
        campuses: [
            { name: "Beaconhouse Newlands Dubai", city: "Dubai - Al Warqa", type: "school" },
            { name: "Management Office", city: "Dubai Knowledge Park", type: "school" },
            { name: "Beaconhouse Al Khaleej International School", city: "Sharjah", type: "school" },
            { name: "Beaconhouse Abu Dhabi", city: "Abu Dhabi", type: "school" },
        ]
    },
    thailand: {
        name: "Thailand",
        flag: "🇹🇭",
        description: "3 Beaconhouse Yamsaard (BYS) schools in Bangkok and surrounding areas.",
        totalStudents: "1,500+",
        campuses: [
            { name: "BYS Ladprao", city: "Bangkok", type: "school" },
            { name: "BYS Rangsit", city: "Pathum Thani", type: "school" },
            { name: "BYS Hua Hin", city: "Hua Hin", type: "school" },
        ]
    },
    philippines: {
        name: "Philippines",
        flag: "🇵🇭",
        description: "Partner schools in Cebu and Manila serving Filipino and international families.",
        totalStudents: "1,200+",
        campuses: [
            { name: "St. Paul Learning Center", city: "Cebu City", type: "partner" },
            { name: "Angels in Heaven School", city: "Manila South", type: "partner" },
        ]
    },
    oman: {
        name: "Oman",
        flag: "🇴🇲",
        description: "Joint venture primary school in Muscat combining international standards with Omani heritage.",
        totalStudents: "800+",
        campuses: [
            { name: "Beaconhouse Primary School Muscat", city: "Muscat", type: "school" },
        ]
    },
    belgium: {
        name: "Belgium",
        flag: "🇧🇪",
        description: "Education and training services including Gymboree Play & Music programs.",
        totalStudents: "500+",
        campuses: [
            { name: "Gymboree Play & Music Brussels", city: "Brussels", type: "preschool" },
            { name: "Gymboree Play & Music Antwerp", city: "Antwerp", type: "preschool" },
        ]
    },
    canada: {
        name: "Canada",
        flag: "🇨🇦",
        description: "OSSD curriculum programs in Ontario preparing students for Canadian universities.",
        totalStudents: "300+",
        campuses: [
            { name: "Beaconhouse Canada (OSSD)", city: "Mississauga, Ontario", type: "school" },
        ]
    },
    indonesia: {
        name: "Indonesia",
        flag: "🇮🇩",
        description: "Strategic partner schools in major Indonesian cities.",
        totalStudents: "600+",
        campuses: [
            { name: "Beaconhouse Partner School Jakarta", city: "Jakarta", type: "partner" },
            { name: "Beaconhouse Partner School Bandung", city: "Bandung", type: "partner" },
        ]
    },
};

function getTotalCampuses(country: CountryInfo): number {
    let total = country.campuses.length;
    if (country.regions) {
        total += country.regions.reduce((sum, r) => sum + r.campuses.length, 0);
    }
    return total;
}

function getTypeIcon(type: Campus['type']) {
    switch (type) {
        case 'preschool': return <span className="text-pink-400 text-xs">🎒</span>;
        case 'college': return <span className="text-blue-400 text-xs">🎓</span>;
        case 'partner': return <span className="text-green-400 text-xs">🤝</span>;
        default: return <span className="text-yellow-400 text-xs">🏫</span>;
    }
}

export default function CountryPage({ params }: { params: Promise<{ country: string }> }) {
    const resolvedParams = use(params);
    const country = countryData[resolvedParams.country];

    if (!country) {
        notFound();
    }

    const totalCampuses = getTotalCampuses(country);

    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/admissions" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8">
                            <ArrowLeft size={20} /> Back to Campus Finder
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl">{country.flag}</span>
                            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-white">
                                {country.name}
                            </h1>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                            {country.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <Building2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-gold">{totalCampuses}</p>
                        <p className="text-slate-400 text-sm">Campuses</p>
                    </div>
                    <div className="text-center">
                        <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-gold">{country.totalStudents}</p>
                        <p className="text-slate-400 text-sm">Students</p>
                    </div>
                    <div className="text-center">
                        <School className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-gold">{country.regions?.length || 1}</p>
                        <p className="text-slate-400 text-sm">Regions</p>
                    </div>
                    <div className="text-center">
                        <GraduationCap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-gold">50+</p>
                        <p className="text-slate-400 text-sm">Years</p>
                    </div>
                </div>
            </section>

            {/* Campus List */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">
                        All <span className="text-gold">Campuses</span>
                    </h2>

                    {/* Regional Layout for Pakistan */}
                    {country.regions ? (
                        <div className="space-y-10">
                            {country.regions.map((region, ridx) => (
                                <motion.div
                                    key={region.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: ridx * 0.1 }}
                                    className="glass rounded-2xl p-6"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-yellow-400">{region.name}</h3>
                                        <span className="text-slate-400 text-sm">{region.campuses.length} campuses</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4">
                                        Cities: {region.cities.join(", ")}
                                    </p>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                                        {region.campuses.map((campus, cidx) => (
                                            <div
                                                key={cidx}
                                                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                            >
                                                {getTypeIcon(campus.type)}
                                                <div className="overflow-hidden">
                                                    <p className="text-white text-sm truncate">{campus.name}</p>
                                                    <p className="text-slate-500 text-xs">{campus.city}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        /* Single list for other countries */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-6"
                        >
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {country.campuses.map((campus, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        {getTypeIcon(campus.type)}
                                        <div className="overflow-hidden">
                                            <p className="text-white text-sm font-medium truncate">{campus.name}</p>
                                            <p className="text-slate-400 text-xs">{campus.city}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Legend */}
            <section className="pb-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                        <span className="flex items-center gap-2">🏫 School</span>
                        <span className="flex items-center gap-2">🎒 Preschool</span>
                        <span className="flex items-center gap-2">🎓 College</span>
                        <span className="flex items-center gap-2">🤝 Partner School</span>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-12 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-4">
                        Interested in Admission?
                    </h3>
                    <p className="text-slate-400 mb-6">
                        Contact our regional office for enrollment information.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
