import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Globe } from '@phosphor-icons/react';

const navTransition = { duration: 0.7, ease: [0.32, 0.72, 0, 1] };

const Navbar = ({ t, toggleLang, lang, onOpenModal }) => {
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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? 'glass-nav py-3' : 'py-5 bg-gradient-overlay'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex justify-between items-center">
                    {/* left: nav links (desktop) */}
                    <div className="hidden lg:flex flex-1 items-center gap-7 text-[11px] font-bold tracking-[0.18em] text-ivory-200 uppercase">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-ivory-50 transition-colors duration-500 relative group py-1"
                            >
                                {link.label}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-brass-400 group-hover:w-full transition-all duration-500" />
                            </a>
                        ))}
                    </div>

                    {/* center: brand logo */}
                    <div className="flex-1 lg:flex-none flex justify-start lg:justify-center items-center">
                        <a href="#hero" className="block w-12 h-12 md:w-14 md:h-14">
                            <img
                                src="/images/logo.png"
                                alt="Crimson & Cardinal"
                                className="w-full h-full object-contain"
                                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}
                            />
                        </a>
                    </div>

                    {/* right: actions */}
                    <div className="flex-1 flex justify-end items-center gap-3">
                        <button
                            onClick={toggleLang}
                            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-charcoal-700 hover:border-brass-500/40 transition-all duration-500 active:scale-95 cursor-pointer"
                        >
                            <Globe size={14} weight="light" className="text-ivory-300 group-hover:text-brass-400 transition-colors" />
                            <span className="text-[10px] font-bold tracking-[0.15em] text-ivory-300 group-hover:text-ivory-50 uppercase transition-colors">
                                {t.nav.switchLang}
                            </span>
                        </button>

                        <button
                            onClick={onOpenModal}
                            className="hidden md:flex btn-gold px-5 py-2 rounded-lg text-[10px] tracking-[0.12em] cursor-pointer"
                        >
                            {t.nav.acquireNow}
                        </button>

                        {/* mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-lg border border-charcoal-700 hover:border-brass-500/40 transition-all cursor-pointer"
                            aria-label="Menu"
                        >
                            {menuOpen ? (
                                <X size={18} weight="light" className="text-ivory-100" />
                            ) : (
                                <List size={18} weight="light" className="text-ivory-100" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* mobile menu overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="fixed inset-0 z-40 bg-charcoal-950/96 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                className="text-xl font-light tracking-[0.2em] text-ivory-100 hover:text-brass-400 transition-colors uppercase"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={() => { closeMenu(); onOpenModal(); }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ delay: links.length * 0.07, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                            className="mt-4 btn-gold px-8 py-3 rounded-lg text-xs tracking-[0.2em] cursor-pointer"
                        >
                            {t.nav.acquireNow}
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
