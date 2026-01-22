"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, Award } from "lucide-react";
import { notFound } from "next/navigation";

const journeyData: Record<string, {
    year: string;
    title: string;
    fullDescription: string;
    keyFacts: { icon: any; label: string; value: string }[];
    image?: string;
}> = {
    "1975": {
        year: "1975",
        title: "The Beginning - Les Anges Montessori Academy",
        fullDescription: `In 1975, Mrs. Nasreen Mahmud Kasuri, a visionary educator, established Les Anges Montessori Academy in Lahore, Pakistan. What began as a small Montessori school with just 15 students would eventually grow into one of the largest private school networks in the world.

Mrs. Kasuri's vision was revolutionary for its time: to create a nurturing environment where children could develop holistically - intellectually, emotionally, and socially. She believed that early childhood education laid the foundation for lifelong learning.

The name "Les Anges" (French for "The Angels") reflected her belief that children are pure and precious, deserving of the best possible start in life. The Montessori methodology, with its emphasis on child-centered learning and hands-on exploration, was carefully chosen to support this philosophy.

From the very beginning, the focus was on creating a safe, stimulating environment where children could learn at their own pace, develop independence, and cultivate a love for learning that would stay with them throughout their lives.`,
        keyFacts: [
            { icon: Calendar, label: "Founded", value: "1975" },
            { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
            { icon: Users, label: "Initial Students", value: "15" },
            { icon: Award, label: "Methodology", value: "Montessori" },
        ]
    },
    "1978": {
        year: "1978",
        title: "Beaconhouse is Born",
        fullDescription: `Just three years after establishing Les Anges, Mrs. Nasreen Kasuri took a bold step that would define the future of private education in Pakistan. In 1978, Beaconhouse Public School was founded, expanding beyond early childhood education to offer a full K-12 programme.

The name "Beaconhouse" was chosen deliberately - a beacon is a light that guides and illuminates the way. The school's motto, "Seek the Light," captured the essence of this vision: to guide students toward knowledge, wisdom, and enlightenment.

The first Beaconhouse campus was established in Model Town, Lahore. The curriculum combined the best of British educational traditions with local needs, preparing students for Cambridge examinations while instilling strong values and critical thinking skills.

From the start, Beaconhouse distinguished itself through its commitment to quality education, well-trained teachers, and modern facilities. The school quickly gained a reputation for academic excellence, and demand for admissions grew rapidly.

The success of this first campus laid the groundwork for what would become a national and eventually international expansion.`,
        keyFacts: [
            { icon: Calendar, label: "Year", value: "1978" },
            { icon: MapPin, label: "First Campus", value: "Model Town, Lahore" },
            { icon: Users, label: "Curriculum", value: "Cambridge International" },
            { icon: Award, label: "Motto", value: "Seek the Light" },
        ]
    },
    "1990": {
        year: "1990",
        title: "Going Global - International Expansion",
        fullDescription: `By 1990, Beaconhouse had firmly established itself as a leader in Pakistani education. With dozens of successful campuses across the country, the organization was ready to take its vision global.

The international expansion began with the United Kingdom, where Beaconhouse established schools to serve the growing Pakistani diaspora and international community. These schools maintained the same high standards while adapting to local contexts and regulations.

Shortly after, Beaconhouse entered Malaysia, marking its first venture into Southeast Asia. The Malaysian schools quickly became popular among families seeking quality international education with strong values.

This international expansion was not just about growth - it was about spreading the Beaconhouse educational philosophy to new communities and creating a global network of learners connected by shared values and experiences.

The move also brought new learning opportunities, as best practices from different educational systems were integrated into the Beaconhouse approach, enriching the curriculum and teaching methodologies across all campuses.`,
        keyFacts: [
            { icon: Calendar, label: "Year", value: "1990" },
            { icon: MapPin, label: "New Countries", value: "UK, Malaysia" },
            { icon: Users, label: "Total Campuses", value: "50+" },
            { icon: Award, label: "Achievement", value: "First International Schools" },
        ]
    },
    "2000": {
        year: "2000",
        title: "Digital Revolution - Embracing Technology",
        fullDescription: `The turn of the millennium brought a new era for Beaconhouse as the organization embraced the digital revolution. Recognizing that technology would transform education and prepare students for the 21st century, Beaconhouse made significant investments in digital infrastructure and innovation.

State-of-the-art computer laboratories were established across all campuses, ensuring that every student had access to modern technology. The curriculum was enhanced to include computer science education from primary levels, making Beaconhouse one of the first school systems in the region to prioritize digital literacy.

Beyond hardware, Beaconhouse pioneered the integration of technology into teaching and learning. Interactive whiteboards replaced traditional blackboards, online resources supplemented textbooks, and teachers received training in educational technology.

The Beaconhouse Management Information System (BMIS) was developed to streamline administrative processes and improve communication between schools, parents, and students. This early adoption of school management software set a new standard for educational institutions.

This commitment to technology would lay the groundwork for future innovations, including the seamless transition to online learning during challenging times.`,
        keyFacts: [
            { icon: Calendar, label: "Year", value: "2000" },
            { icon: MapPin, label: "Initiative", value: "Digital Infrastructure" },
            { icon: Users, label: "Labs Established", value: "200+" },
            { icon: Award, label: "Innovation", value: "BMIS System Launch" },
        ]
    },
    "2010": {
        year: "2010",
        title: "IB Authorization - World-Class Curriculum",
        fullDescription: `In 2010, Beaconhouse achieved a significant milestone by becoming an authorized International Baccalaureate (IB) World School. This authorization represented the culmination of years of dedication to educational excellence and global best practices.

The IB Diploma Programme, renowned worldwide for its rigorous academic standards and holistic approach to education, was introduced at select Beaconhouse campuses. This gave students access to a curriculum recognized by top universities across the globe.

The journey to IB authorization required extensive preparation, including curriculum development, teacher training, and facility upgrades. Beaconhouse teachers underwent intensive professional development to become certified IB educators, bringing new perspectives and methodologies to their classrooms.

The IB philosophy aligned perfectly with Beaconhouse values: developing inquiring, knowledgeable, and caring young people who contribute to creating a better world. The emphasis on critical thinking, international-mindedness, and holistic development resonated with the school's founding principles.

Since authorization, Beaconhouse IB students have achieved outstanding results, with many scoring in the top percentiles globally and gaining admission to prestigious universities including Oxford, Cambridge, and Ivy League institutions.`,
        keyFacts: [
            { icon: Calendar, label: "Year", value: "2010" },
            { icon: MapPin, label: "Programme", value: "IB Diploma" },
            { icon: Users, label: "IB Graduates", value: "1000+" },
            { icon: Award, label: "Average Score", value: "38/45" },
        ]
    },
    "2026": {
        year: "2026",
        title: "Future Ready - AI, Sustainability & Beyond",
        fullDescription: `As Beaconhouse enters its sixth decade, the organization continues to lead educational innovation while staying true to its founding values. The 2026 vision encompasses three key pillars: artificial intelligence integration, environmental sustainability, and global citizenship.

AI-Powered Learning: Beaconhouse has integrated artificial intelligence into personalized learning experiences. AI tutoring systems provide individualized support to students, while machine learning algorithms help teachers identify and address learning gaps more effectively. Robotics and AI labs are now standard across all secondary campuses.

Sustainable Campuses: Committed to environmental responsibility, Beaconhouse has launched an ambitious sustainability initiative. Solar panels power campuses, rainwater harvesting systems conserve water, and plastic-free policies reduce environmental impact. Students learn environmental stewardship through hands-on eco-projects.

Global Network: With presence in 8 countries and over 315,000 students worldwide, Beaconhouse now offers unparalleled opportunities for cross-cultural learning. Virtual exchange programs connect students across continents, while the Beaconhouse Global Scholars programme enables physical exchanges.

Looking ahead, Beaconhouse remains committed to its mission: providing world-class education that develops not just successful individuals, but responsible global citizens who will shape a better tomorrow.`,
        keyFacts: [
            { icon: Calendar, label: "Year", value: "2026" },
            { icon: MapPin, label: "Countries", value: "8" },
            { icon: Users, label: "Students", value: "315,000+" },
            { icon: Award, label: "Vision", value: "AI, Sustainability, Global" },
        ]
    }
};

import { use } from "react";

export default function JourneyDetail({ params }: { params: Promise<{ year: string }> }) {
    const resolvedParams = use(params);
    const journey = journeyData[resolvedParams.year];

    if (!journey) {
        notFound();
    }

    return (
        <main className="pt-32">
            {/* Hero */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/about" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 mb-8 transition-colors">
                            <ArrowLeft size={20} /> Back to Our Legacy
                        </Link>

                        <div className="text-6xl md:text-8xl font-[family-name:var(--font-cinzel)] font-bold text-gold/20 mb-4">
                            {journey.year}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-white mb-8">
                            {journey.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Key Facts */}
            <section className="py-12 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {journey.keyFacts.map((fact, index) => (
                            <motion.div
                                key={fact.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <fact.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{fact.label}</p>
                                <p className="text-white font-bold">{fact.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Story */}
            <section className="section-padding">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        {journey.fullDescription.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-slate-300 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Navigation */}
            <section className="section-padding border-t border-white/5">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link href="/about" className="text-slate-400 hover:text-yellow-400 transition-colors">
                        ← Back to Timeline
                    </Link>
                    <Link
                        href="/admissions"
                        className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105"
                    >
                        Join Our Legacy
                    </Link>
                </div>
            </section>
        </main>
    );
}
