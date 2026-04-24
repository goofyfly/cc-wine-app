import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Globe } from '@phosphor-icons/react';

const navTransition = { duration: 0.7, ease: [0.32, 0.72, 0, 1] };

const Navbar = ({ t, toggleLang, lang }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    const links = [
        { href: '#hero', label: t.nav.home },
        { href: '#story', label: t.nav.story },
        { href: '#collection', label: t.nav.collection },
        { href: '#contact', label: t.nav.contact },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={navTransition}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? 'glass-nav py-3' : 'py-6 bg-gradient-overlay'
                    }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Left: Nav Links (desktop) */}
                    <div className="hidden lg:flex flex-1 items-center gap-8 text-[11px] font-bold tracking-[0.2em] text-ivory-200 uppercase">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-ivory-50 transition-colors duration-500 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brass-400 group-hover:w-full transition-all duration-500"></span>
                            </a>
                        ))}
                    </div>

                    {/* Center: Brand Logo */}
                    <div className="flex-1 lg:flex-none flex justify-start lg:justify-center items-center">
                        <a href="#hero" className="block w-14 h-14 md:w-16 md:h-16 relative">
                            <img
                                src="/images/logo.png"
                                alt="Crimson & Cardinal Logo"
                                className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 2px 10px rgba(0,0,0,0.5))' }}
                            />
                        </a>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex-1 flex justify-end items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-charcoal-700 hover:border-brass-500/50 transition-all duration-500 active:scale-95 cursor-pointer"
                        >
                            <Globe size={14} weight="light" className="text-ivory-300 group-hover:text-brass-400 transition-colors" />
                            <span className="text-[10px] font-bold tracking-[0.15em] text-ivory-300 group-hover:text-ivory-50 uppercase transition-colors">
                                {t.nav.switchLang}
                            </span>
                        </button>

                        <a
                            href="#contact"
                            className="hidden md:flex btn-gold px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase active:scale-95"
                        >
                            {t.nav.inquiry}
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-full border border-charcoal-700 hover:border-brass-500/50 transition-all cursor-pointer"
                            aria-label="Menu"
                        >
                            <motion.div
                                animate={{ rotate: menuOpen ? 45 : 0 }}
                                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                            >
                                {menuOpen ? (
                                    <X size={18} weight="light" className="text-ivory-100" />
                                ) : (
                                    <List size={18} weight="light" className="text-ivory-100" />
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
                            className="mt-6 btn-gold px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase"
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
