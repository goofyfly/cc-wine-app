import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from '@phosphor-icons/react';

const Navbar = ({ t, toggleLang, lang }) => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-[1400px] mx-auto flex justify-between items-center glass rounded-full px-8 py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-950 flex items-center justify-center text-white font-serif text-xs">
                        CC
                    </div>
                    <span className="font-serif font-bold tracking-[0.2em] text-red-950 hidden sm:block">
                        CRIMSON & CARDINAL
                    </span>
                </div>

                {/* Links & Lang Toggle */}
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] text-stone-500 uppercase">
                        <a href="#collection" className="hover:text-red-900 transition-colors">{t.nav.collection}</a>
                        <a href="#story" className="hover:text-red-900 transition-colors">{t.nav.story}</a>
                    </div>

                    <button
                        onClick={toggleLang}
                        className="group flex items-center gap-2 bg-stone-100 hover:bg-stone-200 px-4 py-1.5 rounded-full transition-all active:scale-95"
                    >
                        <Globe size={14} className="text-stone-400 group-hover:text-red-900 transition-colors" />
                        <span className="text-[10px] font-bold tracking-widest text-stone-600 uppercase">
                            {t.nav.switchLang}
                        </span>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
