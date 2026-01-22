"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl"
            >
                <nav className="glass rounded-full px-8 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold font-[family-name:var(--font-cinzel)] text-white tracking-wider">
                            BEACONHOUSE
                        </span>
                        <span className="text-yellow-400 text-2xl font-bold">.</span>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        "text-sm font-medium uppercase tracking-widest transition-all duration-300 relative",
                                        pathname === link.href
                                            ? "text-yellow-400"
                                            : "text-slate-300 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    {pathname === link.href && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                        href="/admissions"
                        className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105"
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
                        className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-8 right-8 text-white hover:text-yellow-400"
                        >
                            <X size={32} />
                        </button>

                        <nav className="flex flex-col items-center gap-8">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-3xl font-[family-name:var(--font-cinzel)] text-white hover:text-yellow-400 transition-colors"
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
