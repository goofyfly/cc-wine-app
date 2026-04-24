import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Globe } from '@phosphor-icons/react';

const navTransition = { duration: 0.7, ease: [0.32, 0.72, 0, 1] };

const Navbar = ({ t, toggleLang, lang }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    const links = [
        { href: '#hero', label: t.nav.home },
        { href: '#collection', label: t.nav.collection },
        { href: '#story', label: t.nav.story },
        { href: '#contact', label: t.nav.contact },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={navTransition}
                className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? 'pt-2' : 'pt-4 md:pt-6'
                    }`}
            >
                <div className={`max-w-[1400px] mx-auto flex justify-between items-center glass-nav rounded-full px-6 md:px-10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? 'py-2.5' : 'py-3.5'
                    }`}>
                    {/* Left: Nav Links (desktop) */}
                    <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-ivory-300 uppercase">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-ivory-50 transition-colors duration-500"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Center: Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full border border-brass-500/40 flex items-center justify-center">
                            <span className="text-brass-400 text-[9px] font-bold tracking-[0.1em]">CC</span>
                        </div>
                        <span className="font-bold tracking-[0.15em] text-ivory-50 text-xs hidden sm:block">
                            CRIMSON & CARDINAL
                        </span>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-charcoal-600 hover:border-ivory-300/30 transition-all duration-500 active:scale-95 cursor-pointer"
                        >
                            <Globe size={12} weight="light" className="text-ivory-400 group-hover:text-ivory-100 transition-colors" />
                            <span className="text-[9px] font-bold tracking-[0.15em] text-ivory-400 group-hover:text-ivory-100 uppercase transition-colors">
                                {t.nav.switchLang}
                            </span>
                        </button>

                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 bg-crimson-800 hover:bg-crimson-700 text-ivory-50 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-500 active:scale-95"
                        >
                            {t.nav.inquiry}
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-full border border-charcoal-600 hover:border-ivory-300/30 transition-all cursor-pointer"
                            aria-label="Menu"
                        >
                            <motion.div
                                animate={{ rotate: menuOpen ? 45 : 0 }}
                                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                            >
                                {menuOpen ? (
                                    <X size={16} weight="light" className="text-ivory-200" />
                                ) : (
                                    <List size={16} weight="light" className="text-ivory-200" />
                                )}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="fixed inset-0 z-40 bg-charcoal-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                className="text-2xl font-light tracking-[0.2em] text-ivory-100 hover:text-brass-400 transition-colors uppercase"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            onClick={closeMenu}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ delay: links.length * 0.08, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                            className="mt-6 bg-crimson-800 text-ivory-50 px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase"
                        >
                            {t.nav.inquiry}
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
