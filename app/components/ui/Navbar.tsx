"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

const mainLinks = [
    { name: "Home", href: "/" },
    {
        name: "About",
        href: "/about",
        dropdown: [
            { name: "Our Story", href: "/about" },
            { name: "Leadership & Staff", href: "/staff" },
            { name: "Alumni Hall of Fame", href: "/alumni" },
            { name: "Collaborations", href: "/collaborations" },
        ]
    },
    {
        name: "Academics",
        href: "/academics",
        dropdown: [
            { name: "Curriculum", href: "/academics" },
            { name: "Student Projects", href: "/projects" },
            { name: "Toppers & Achievers", href: "/toppers" },
            { name: "Partner Universities", href: "/universities" },
        ]
    },
    {
        name: "Campus Life",
        href: "/campus-life",
        dropdown: [
            { name: "Clubs & Activities", href: "/campus-life" },
            { name: "Events & News", href: "/events" },
            { name: "Sports", href: "/sports" },
            { name: "Competitions", href: "/competitions" },
        ]
    },
    { name: "Admissions", href: "/admissions" },
    { name: "Scholarships", href: "/scholarships" },
];

const mobileLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Events", href: "/events" },
    { name: "Sports", href: "/sports" },
    { name: "Admissions", href: "/admissions" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Alumni", href: "/alumni" },
    { name: "Toppers", href: "/toppers" },
    { name: "Contact", href: "/contact" },
];

function DropdownMenu({ items, isOpen }: { items: { name: string; href: string }[]; isOpen: boolean }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 glass rounded-xl overflow-hidden"
                >
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (name: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpenDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
            >
                <nav className="glass rounded-full px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-lg font-bold font-[family-name:var(--font-cinzel)] text-white tracking-wider">
                            BEACONHOUSE
                        </span>
                        <span className="text-yellow-400 text-xl font-bold">.</span>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden lg:flex items-center gap-5">
                        {mainLinks.map((link) => (
                            <li
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        "text-xs font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-1",
                                        pathname === link.href || pathname.startsWith(link.href + "/")
                                            ? "text-yellow-400"
                                            : "text-slate-300 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={12} className={clsx(
                                        "transition-transform",
                                        openDropdown === link.name && "rotate-180"
                                    )} />}
                                </Link>
                                {link.dropdown && (
                                    <DropdownMenu items={link.dropdown} isOpen={openDropdown === link.name} />
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                        href="/admissions"
                        className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
                    >
                        Apply Now
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden text-white hover:text-yellow-400 transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center overflow-y-auto py-20"
                    >
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-8 right-8 text-white hover:text-yellow-400"
                        >
                            <X size={32} />
                        </button>

                        <nav className="flex flex-col items-center gap-5">
                            {mobileLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={clsx(
                                            "text-2xl font-[family-name:var(--font-cinzel)] transition-colors",
                                            pathname === link.href ? "text-yellow-400" : "text-white hover:text-yellow-400"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
