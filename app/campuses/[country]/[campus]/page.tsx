"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MapPin, Building2, Users, Award, Calendar, CreditCard, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

// Campus Data for all countries
const campusData: Record<string, Record<string, {
    name: string;
    city: string;
    country: string;
    countryName: string;
    flag: string;
    address: string;
    phone: string;
    email: string;
    established: string;
    students: string;
    programs: string[];
    description: string;
    highlights: string[];
    fees: { program: string; annual: string }[];
}>> = {
    pakistan: {
        lahore: {
            name: "Beaconhouse Lahore",
            city: "Lahore",
            country: "pakistan",
            countryName: "Pakistan",
            flag: "🇵🇰",
            address: "10-C, FCC, Gulberg-IV, Lahore",
            phone: "+92 42 3587 1234",
            email: "lahore@beaconhouse.edu.pk",
            established: "1978",
            students: "80,000+",
            programs: ["Early Years", "Primary", "Secondary", "O Levels", "A Levels", "IB Diploma"],
            description: "The flagship campus of Beaconhouse, Lahore has been the heart of our educational mission since 1978. With over 80 branches across the city, we serve the largest student population in our network.",
            highlights: ["IB World School", "Cambridge Excellence Centre", "State-of-art Science Labs", "Olympic-size Swimming Pool"],
            fees: [
                { program: "Early Years", annual: "PKR 180,000" },
                { program: "Primary", annual: "PKR 220,000" },
                { program: "O Levels", annual: "PKR 320,000" },
                { program: "A Levels", annual: "PKR 380,000" },
            ]
        },
        karachi: {
            name: "Beaconhouse Karachi",
            city: "Karachi",
            country: "pakistan",
            countryName: "Pakistan",
            flag: "🇵🇰",
            address: "Block 7, Clifton, Karachi",
            phone: "+92 21 3587 5678",
            email: "karachi@beaconhouse.edu.pk",
            established: "1985",
            students: "60,000+",
            programs: ["Early Years", "Primary", "Secondary", "O Levels", "A Levels"],
            description: "Beaconhouse Karachi brings world-class education to Pakistan's largest city. Our campuses across Clifton, Defence, and North Nazimabad serve diverse communities with consistent excellence.",
            highlights: ["Cambridge Partner School", "Robotics Innovation Hub", "Sports Excellence Program", "Music & Arts Academy"],
            fees: [
                { program: "Early Years", annual: "PKR 200,000" },
                { program: "Primary", annual: "PKR 250,000" },
                { program: "O Levels", annual: "PKR 350,000" },
                { program: "A Levels", annual: "PKR 420,000" },
            ]
        },
        islamabad: {
            name: "Beaconhouse Islamabad",
            city: "Islamabad",
            country: "pakistan",
            countryName: "Pakistan",
            flag: "🇵🇰",
            address: "Margalla Road, F-7, Islamabad",
            phone: "+92 51 2654 3210",
            email: "islamabad@beaconhouse.edu.pk",
            established: "1990",
            students: "40,000+",
            programs: ["Early Years", "Primary", "Secondary", "O Levels", "A Levels", "IB Diploma"],
            description: "Nestled in the scenic capital, Beaconhouse Islamabad combines academic excellence with beautiful campus settings. Our spacious facilities near the Margalla Hills provide an inspiring learning environment.",
            highlights: ["IB Authorized School", "Environmental Education Center", "International Exchange Programs", "Diplomatic Community Partner"],
            fees: [
                { program: "Early Years", annual: "PKR 190,000" },
                { program: "Primary", annual: "PKR 230,000" },
                { program: "O Levels", annual: "PKR 340,000" },
                { program: "A Levels", annual: "PKR 400,000" },
            ]
        },
        multan: {
            name: "Beaconhouse Multan",
            city: "Multan",
            country: "pakistan",
            countryName: "Pakistan",
            flag: "🇵🇰",
            address: "Bosan Road, Multan",
            phone: "+92 61 6780 1234",
            email: "multan@beaconhouse.edu.pk",
            established: "1998",
            students: "25,000+",
            programs: ["Early Years", "Primary", "Secondary", "O Levels", "A Levels"],
            description: "Beaconhouse Multan serves the City of Saints with dedication to educational excellence. Our campuses provide quality education while respecting the rich cultural heritage of South Punjab.",
            highlights: ["Cambridge Partner School", "Modern Science Labs", "Sports Facilities", "Cultural Programs"],
            fees: [
                { program: "Early Years", annual: "PKR 150,000" },
                { program: "Primary", annual: "PKR 180,000" },
                { program: "O Levels", annual: "PKR 280,000" },
                { program: "A Levels", annual: "PKR 340,000" },
            ]
        },
        peshawar: {
            name: "Beaconhouse Peshawar",
            city: "Peshawar",
            country: "pakistan",
            countryName: "Pakistan",
            flag: "🇵🇰",
            address: "University Road, Peshawar",
            phone: "+92 91 5702 1234",
            email: "peshawar@beaconhouse.edu.pk",
            established: "2000",
            students: "15,000+",
            programs: ["Early Years", "Primary", "Secondary", "O Levels"],
            description: "Beaconhouse Peshawar brings quality education to the frontier region. Our campus combines modern teaching methods with respect for local traditions and values.",
            highlights: ["Cambridge Curriculum", "Pashto Language Support", "Community Engagement", "Safe Learning Environment"],
            fees: [
                { program: "Early Years", annual: "PKR 140,000" },
                { program: "Primary", annual: "PKR 170,000" },
                { program: "O Levels", annual: "PKR 260,000" },
            ]
        },
    },
    malaysia: {
        "kuala-lumpur": {
            name: "Beaconhouse Malaysia",
            city: "Kuala Lumpur",
            country: "malaysia",
            countryName: "Malaysia",
            flag: "🇲🇾",
            address: "Jalan Ampang, Kuala Lumpur",
            phone: "+60 3 2161 1234",
            email: "kl@beaconhouse.edu.my",
            established: "1992",
            students: "3,500+",
            programs: ["Early Years", "Primary", "Secondary", "IGCSE", "A Levels"],
            description: "Beaconhouse Malaysia serves the international community in Kuala Lumpur with a British-style curriculum adapted for multicultural learners. Our diverse student body represents over 40 nationalities.",
            highlights: ["International Curriculum", "Multicultural Environment", "Mandarin Programme", "Sports Complex"],
            fees: [
                { program: "Early Years", annual: "MYR 25,000" },
                { program: "Primary", annual: "MYR 35,000" },
                { program: "IGCSE", annual: "MYR 45,000" },
                { program: "A Levels", annual: "MYR 55,000" },
            ]
        },
    },
    "united-kingdom": {
        london: {
            name: "Beaconhouse London",
            city: "London",
            country: "united-kingdom",
            countryName: "United Kingdom",
            flag: "🇬🇧",
            address: "Kensington, London W8",
            phone: "+44 20 7937 1234",
            email: "london@beaconhouse.co.uk",
            established: "1995",
            students: "800+",
            programs: ["Early Years", "Primary", "GCSE", "A Levels"],
            description: "Beaconhouse London provides premium education in the heart of Kensington. Our intimate campus offers personalized attention while maintaining the highest British educational standards.",
            highlights: ["Central London Location", "Small Class Sizes", "Oxbridge Preparation", "British Values Curriculum"],
            fees: [
                { program: "Early Years", annual: "£18,000" },
                { program: "Primary", annual: "£22,000" },
                { program: "GCSE", annual: "£28,000" },
                { program: "A Levels", annual: "£32,000" },
            ]
        },
        manchester: {
            name: "Beaconhouse Manchester",
            city: "Manchester",
            country: "united-kingdom",
            countryName: "United Kingdom",
            flag: "🇬🇧",
            address: "Didsbury, Manchester",
            phone: "+44 161 445 1234",
            email: "manchester@beaconhouse.co.uk",
            established: "2002",
            students: "400+",
            programs: ["Early Years", "Primary", "GCSE"],
            description: "Beaconhouse Manchester serves the vibrant Northern community with the same excellence as our London campus. Our Didsbury location provides a nurturing environment in a family-friendly area.",
            highlights: ["Northern England Hub", "Community Focus", "Sports Excellence", "Arts Programs"],
            fees: [
                { program: "Early Years", annual: "£14,000" },
                { program: "Primary", annual: "£17,000" },
                { program: "GCSE", annual: "£22,000" },
            ]
        },
    },
    uae: {
        dubai: {
            name: "Beaconhouse Dubai",
            city: "Dubai",
            country: "uae",
            countryName: "United Arab Emirates",
            flag: "🇦🇪",
            address: "Al Barsha, Dubai",
            phone: "+971 4 338 1234",
            email: "dubai@beaconhouse.ae",
            established: "2005",
            students: "3,000+",
            programs: ["Early Years", "Primary", "Secondary", "IGCSE", "A Levels"],
            description: "Beaconhouse Dubai brings quality education to the UAE's cosmopolitan hub. Our modern campus in Al Barsha features state-of-the-art facilities and serves a vibrant international community.",
            highlights: ["KHDA Rated 'Very Good'", "Modern Smart Campus", "Arabic Programme", "Global Citizenship Education"],
            fees: [
                { program: "Early Years", annual: "AED 35,000" },
                { program: "Primary", annual: "AED 45,000" },
                { program: "IGCSE", annual: "AED 55,000" },
                { program: "A Levels", annual: "AED 65,000" },
            ]
        },
        "abu-dhabi": {
            name: "Beaconhouse Abu Dhabi",
            city: "Abu Dhabi",
            country: "uae",
            countryName: "United Arab Emirates",
            flag: "🇦🇪",
            address: "Al Reem Island, Abu Dhabi",
            phone: "+971 2 556 1234",
            email: "abudhabi@beaconhouse.ae",
            established: "2010",
            students: "1,500+",
            programs: ["Early Years", "Primary", "Secondary", "IGCSE"],
            description: "Beaconhouse Abu Dhabi brings quality education to the UAE capital. Located on Al Reem Island, our modern campus serves the diplomatic and business communities.",
            highlights: ["ADEK Licensed", "Capital Location", "Arabic Excellence", "International Community"],
            fees: [
                { program: "Early Years", annual: "AED 38,000" },
                { program: "Primary", annual: "AED 48,000" },
                { program: "IGCSE", annual: "AED 58,000" },
            ]
        },
    },
    oman: {
        muscat: {
            name: "Beaconhouse Muscat",
            city: "Muscat",
            country: "oman",
            countryName: "Oman",
            flag: "🇴🇲",
            address: "Al Khuwair, Muscat",
            phone: "+968 2469 1234",
            email: "muscat@beaconhouse.edu.om",
            established: "2001",
            students: "2,000+",
            programs: ["Early Years", "Primary", "Secondary", "IGCSE"],
            description: "Beaconhouse Oman provides excellent education in the beautiful Sultanate. Our partnership with the Omani community emphasizes cultural respect alongside international academic standards.",
            highlights: ["MOE Accredited", "Arabic Heritage Program", "Eco-Friendly Campus", "Community Partnerships"],
            fees: [
                { program: "Early Years", annual: "OMR 2,500" },
                { program: "Primary", annual: "OMR 3,200" },
                { program: "Secondary", annual: "OMR 4,000" },
                { program: "IGCSE", annual: "OMR 4,800" },
            ]
        },
    },
    philippines: {
        manila: {
            name: "Beaconhouse Manila",
            city: "Manila",
            country: "philippines",
            countryName: "Philippines",
            flag: "🇵🇭",
            address: "Makati City, Metro Manila",
            phone: "+63 2 8845 1234",
            email: "manila@beaconhouse.edu.ph",
            established: "2008",
            students: "1,800+",
            programs: ["Early Years", "Primary", "Secondary", "IGCSE"],
            description: "Beaconhouse Philippines offers British-style education with Filipino warmth. Located in the heart of Makati, we serve the international and local business community.",
            highlights: ["DepEd Recognized", "British Curriculum", "Filipino Cultural Studies", "Technology Integration"],
            fees: [
                { program: "Early Years", annual: "PHP 280,000" },
                { program: "Primary", annual: "PHP 350,000" },
                { program: "Secondary", annual: "PHP 420,000" },
                { program: "IGCSE", annual: "PHP 500,000" },
            ]
        },
    },
    thailand: {
        bangkok: {
            name: "Beaconhouse Bangkok",
            city: "Bangkok",
            country: "thailand",
            countryName: "Thailand",
            flag: "🇹🇭",
            address: "Sukhumvit, Bangkok",
            phone: "+66 2 258 1234",
            email: "bangkok@beaconhouse.co.th",
            established: "2012",
            students: "800+",
            programs: ["Early Years", "Primary", "Secondary"],
            description: "Beaconhouse Thailand brings our educational philosophy to the Land of Smiles. Our Sukhumvit campus serves expat families and internationally-minded Thai families.",
            highlights: ["International Curriculum", "Thai Language Studies", "Mindfulness Programme", "Green Campus Initiative"],
            fees: [
                { program: "Early Years", annual: "THB 350,000" },
                { program: "Primary", annual: "THB 450,000" },
                { program: "Secondary", annual: "THB 550,000" },
            ]
        },
    },
    belgium: {
        brussels: {
            name: "Beaconhouse Brussels",
            city: "Brussels",
            country: "belgium",
            countryName: "Belgium",
            flag: "🇧🇪",
            address: "European Quarter, Brussels",
            phone: "+32 2 234 1234",
            email: "brussels@beaconhouse.eu",
            established: "2015",
            students: "500+",
            programs: ["Early Years", "Primary", "Secondary"],
            description: "Beaconhouse Brussels serves the EU capital's diverse international community. Our multilingual approach prepares students for global citizenship in the heart of Europe.",
            highlights: ["EU Quarter Location", "Trilingual Programme", "European Studies", "Diplomatic Community Focus"],
            fees: [
                { program: "Early Years", annual: "€15,000" },
                { program: "Primary", annual: "€18,000" },
                { program: "Secondary", annual: "€22,000" },
            ]
        },
    },
};

import { use } from "react";

export default function CampusDetail({ params }: { params: Promise<{ country: string; campus: string }> }) {
    const resolvedParams = use(params);
    const countryData = campusData[resolvedParams.country];
    if (!countryData) notFound();

    const campus = countryData[resolvedParams.campus];
    if (!campus) notFound();

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
                            <span className="text-5xl">{campus.flag}</span>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-white">
                                    {campus.city}
                                </h1>
                                <p className="text-yellow-400">{campus.countryName}</p>
                            </div>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed">
                            {campus.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <Calendar className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">{campus.established}</p>
                            <p className="text-slate-400 text-xs uppercase">Established</p>
                        </div>
                        <div className="text-center">
                            <Users className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">{campus.students}</p>
                            <p className="text-slate-400 text-xs uppercase">Students</p>
                        </div>
                        <div className="text-center">
                            <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">{campus.programs.length}</p>
                            <p className="text-slate-400 text-xs uppercase">Programs</p>
                        </div>
                        <div className="text-center">
                            <MapPin className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">{campus.city}</p>
                            <p className="text-slate-400 text-xs uppercase">Location</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">Campus <span className="text-gold">Highlights</span></h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {campus.highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 flex items-center gap-4"
                            >
                                <Award className="w-8 h-8 text-yellow-400 shrink-0" />
                                <span className="text-white">{highlight}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fee Structure */}
            <section className="section-padding bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8">Fee <span className="text-gold">Structure</span></h2>
                    <div className="space-y-4">
                        {campus.fees.map((fee, index) => (
                            <motion.div
                                key={fee.program}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass rounded-xl p-6 flex items-center justify-between"
                            >
                                <span className="text-white font-medium">{fee.program}</span>
                                <span className="text-yellow-400 font-bold">{fee.annual}/year</span>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-slate-400 text-sm mt-6 text-center">
                        * Fees are subject to change. Contact the admissions office for current rates.
                    </p>
                </div>
            </section>

            {/* Contact & Apply */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-2xl p-10">
                        <h2 className="text-3xl font-[family-name:var(--font-cinzel)] mb-8 text-center">
                            Ready to <span className="text-gold">Apply?</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h3 className="font-bold text-white mb-4">Contact Information</h3>
                                <div className="space-y-3 text-slate-300">
                                    <p className="flex items-start gap-3">
                                        <MapPin size={18} className="text-yellow-400 shrink-0 mt-1" />
                                        {campus.address}
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-yellow-400">📞</span>
                                        {campus.phone}
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="text-yellow-400">✉️</span>
                                        {campus.email}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-white mb-4">Admission Process</h3>
                                <ol className="space-y-2 text-slate-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400 font-bold">1.</span>
                                        Submit online application form
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400 font-bold">2.</span>
                                        Schedule campus tour & assessment
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400 font-bold">3.</span>
                                        Receive admission decision
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400 font-bold">4.</span>
                                        Complete enrollment & payment
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-2">
                                <CreditCard size={20} /> Pay Fees Online
                            </button>
                            <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                                Book Campus Tour
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
