import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wine, Mountains, Timer, EnvelopeSimple, User, PaperPlaneTilt, TextT } from '@phosphor-icons/react';

const sectionReveal = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.32, 0.72, 0, 1] } },
};

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } },
};

const Home = ({ t }) => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 4000);
    };

    return (
        <main className="w-full overflow-hidden">

            {/* ═══════════════════════════════════════════════════ */}
            {/* HERO — Asymmetric split layout                     */}
            {/* ═══════════════════════════════════════════════════ */}
            <section id="hero" className="relative min-h-[100dvh] flex items-center pt-28 pb-20 px-6">
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left: Copy — 7 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                        className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1"
                    >
                        {/* Eyebrow */}
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="inline-block text-[10px] font-bold tracking-[0.4em] text-brass-400 border-l-2 border-brass-500 pl-4 uppercase"
                        >
                            {t.hero.eyebrow}
                        </motion.span>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-ivory-50 text-balance max-w-2xl">
                            {t.hero.title}
                        </h1>

                        {/* Body */}
                        <p className="text-base md:text-lg text-ivory-300 font-light leading-relaxed max-w-lg">
                            {t.hero.body}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <a
                                href="#collection"
                                className="group relative inline-flex items-center gap-3 bg-crimson-800 hover:bg-crimson-700 text-ivory-50 pl-7 pr-2.5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 active:scale-95"
                            >
                                <span>{t.hero.cta}</span>
                                <span className="w-8 h-8 rounded-full bg-crimson-900/50 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 transition-transform duration-500">
                                    <ArrowUpRight size={14} weight="bold" />
                                </span>
                            </a>
                            <a
                                href="#story"
                                className="text-[11px] font-bold tracking-[0.2em] text-ivory-400 hover:text-ivory-100 transition-colors duration-500 uppercase border-b border-ivory-400/20 hover:border-ivory-100/40 pb-0.5"
                            >
                                {t.hero.ctaSecondary}
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Visual — 5 columns */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                        className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2"
                    >
                        {/* Atmospheric glow */}
                        <div className="absolute w-80 h-80 bg-crimson-900/15 rounded-full blur-[100px] -top-10 -right-10"></div>
                        <div className="absolute w-60 h-60 bg-brass-500/8 rounded-full blur-[80px] bottom-0 left-0"></div>

                        {/* Bottle container — double bezel */}
                        <div className="relative p-2 bg-charcoal-800/40 rounded-[2.5rem] border border-charcoal-600/30">
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-56 md:w-72 h-[400px] md:h-[520px] bg-charcoal-800 rounded-[calc(2.5rem-8px)] overflow-hidden shadow-soft relative"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop"
                                    alt="Crimson Cardinal Wine Bottle"
                                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[3s] ease-out"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-charcoal-950/20 pointer-events-none"></div>
                            </motion.div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: 'spring', stiffness: 80, damping: 15 }}
                                className="absolute -bottom-4 -left-6 md:-left-10 bg-charcoal-900 border border-charcoal-600/40 rounded-2xl px-5 py-3.5 shadow-card"
                            >
                                <span className="font-mono text-brass-400 text-lg font-bold block">{t.product.price}</span>
                                <span className="text-[9px] uppercase tracking-[0.2em] text-ivory-400 font-medium">{t.product.subtitle}</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* LIMITED RELEASE METRICS                            */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 border-t border-charcoal-700/40">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="max-w-[1400px] mx-auto"
                >
                    <motion.div variants={staggerItem} className="mb-16 max-w-lg">
                        <h2 className="text-2xl md:text-3xl font-light text-ivory-50 mb-4 tracking-tight">{t.metrics.sectionTitle}</h2>
                        <p className="text-sm text-ivory-400 leading-relaxed font-light">{t.metrics.sectionBody}</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-700/30 rounded-2xl overflow-hidden">
                        {t.metrics.items.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                className="bg-charcoal-900 p-8 md:p-10 flex flex-col gap-3 group hover:bg-charcoal-800/60 transition-colors duration-700"
                            >
                                <span className="font-mono text-3xl md:text-4xl font-bold text-ivory-50 group-hover:text-brass-400 transition-colors duration-700">
                                    {item.value}
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-ivory-400 font-medium leading-relaxed">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* PRODUCT SPOTLIGHT                                   */}
            {/* ═══════════════════════════════════════════════════ */}
            <section id="collection" className="py-28 md:py-40 px-6">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                    {/* Left: Text — 7 columns */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-2">
                            <span className="inline-block text-[9px] font-bold tracking-[0.3em] text-crimson-500 uppercase rounded-full bg-crimson-900/20 px-3 py-1">
                                Limited Edition
                            </span>
                            <h2 className="text-3xl md:text-5xl font-light text-ivory-50 tracking-tight leading-[1.15]">{t.product.title}</h2>
                            <p className="text-sm text-brass-400 tracking-[0.1em] font-mono">{t.product.subtitle}</p>
                        </div>

                        <p className="text-base text-ivory-300 font-light leading-relaxed max-w-xl">
                            {t.product.body}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-2xl md:text-3xl font-mono font-bold text-ivory-50">{t.product.price}</span>
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-3 bg-crimson-800 hover:bg-crimson-700 text-ivory-50 pl-6 pr-2.5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 active:scale-95"
                            >
                                <span>{t.product.cta}</span>
                                <span className="w-7 h-7 rounded-full bg-crimson-900/50 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500">
                                    <ArrowUpRight size={13} weight="bold" />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Large image — 5 columns */}
                    <div className="lg:col-span-5">
                        <div className="p-1.5 bg-charcoal-800/30 rounded-[2rem] border border-charcoal-600/20">
                            <div className="aspect-[3/4] rounded-[calc(2rem-6px)] overflow-hidden bg-charcoal-800 relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop"
                                    alt="Wine close-up"
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[4s] ease-out"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* PROVENANCE — Oakville origin                       */}
            {/* ═══════════════════════════════════════════════════ */}
            <section id="story" className="py-28 md:py-40 px-6 border-t border-charcoal-700/40">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                    {/* Wide landscape image — 7 columns (visually heavier) */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="p-1.5 bg-charcoal-800/30 rounded-[2rem] border border-charcoal-600/20">
                            <div className="aspect-[16/10] rounded-[calc(2rem-6px)] overflow-hidden bg-charcoal-800 relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop"
                                    alt="Napa Valley vineyard landscape"
                                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-[4s] ease-out"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/40 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* Text — 5 columns */}
                    <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                        <Mountains size={36} weight="light" className="text-brass-500/40" />
                        <h2 className="text-2xl md:text-4xl font-light text-ivory-50 tracking-tight leading-[1.2]">{t.provenance.title}</h2>
                        <p className="text-sm md:text-base text-ivory-300 font-light leading-loose">{t.provenance.body}</p>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* WINEMAKING — Process, rules-driven                 */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-28 md:py-40 px-6">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
                >
                    {/* Text — 5 columns */}
                    <div className="lg:col-span-5 space-y-6">
                        <Timer size={36} weight="light" className="text-brass-500/40" />
                        <h2 className="text-2xl md:text-4xl font-light text-ivory-50 tracking-tight leading-[1.2]">{t.winemaking.title}</h2>
                        <p className="text-sm md:text-base text-ivory-300 font-light leading-loose">{t.winemaking.body}</p>
                    </div>

                    {/* Ruled list — 7 columns */}
                    <div className="lg:col-span-7">
                        <div className="border-t border-charcoal-600/40">
                            {t.winemaking.points.map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="flex items-center gap-6 py-6 border-b border-charcoal-600/40 group"
                                >
                                    <span className="font-mono text-[11px] text-ivory-400/40 w-6 shrink-0">0{i + 1}</span>
                                    <span className="text-sm md:text-base text-ivory-200 font-light group-hover:text-ivory-50 transition-colors duration-500">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* NEWSLETTER + INQUIRY FORM                          */}
            {/* ═══════════════════════════════════════════════════ */}
            <section id="contact" className="py-28 md:py-40 px-6 border-t border-charcoal-700/40">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20"
                >
                    {/* Left pitch — 5 columns */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                            <EnvelopeSimple size={36} weight="light" className="text-brass-500/40" />
                            <h2 className="text-2xl md:text-4xl font-light text-ivory-50 tracking-tight leading-[1.2]">{t.newsletter.title}</h2>
                            <p className="text-sm text-ivory-400 leading-relaxed font-light max-w-sm">{t.newsletter.body}</p>
                        </div>

                        {/* Newsletter mini form */}
                        <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder={t.newsletter.placeholder}
                                className="flex-1 bg-charcoal-800 border border-charcoal-600/50 rounded-full px-5 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/50 focus:outline-none focus:border-brass-500/50 transition-colors duration-500"
                            />
                            <button
                                type="submit"
                                className="bg-crimson-800 hover:bg-crimson-700 text-ivory-50 px-5 py-3 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-500 active:scale-95 shrink-0 cursor-pointer"
                            >
                                {t.newsletter.cta}
                            </button>
                        </form>
                    </div>

                    {/* Right inquiry form — 7 columns */}
                    <div className="lg:col-span-7">
                        <div className="p-1.5 bg-charcoal-800/30 rounded-[2rem] border border-charcoal-600/20">
                            <div className="bg-charcoal-900 rounded-[calc(2rem-6px)] px-8 md:px-12 py-10 md:py-14">
                                <div className="mb-8 space-y-2">
                                    <h3 className="text-xl md:text-2xl font-light text-ivory-50 tracking-tight">{t.inquiry.title}</h3>
                                    <p className="text-xs text-ivory-400 font-light">{t.inquiry.body}</p>
                                </div>

                                {formSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-crimson-800/20 border border-crimson-700/30 flex items-center justify-center mx-auto mb-4">
                                            <PaperPlaneTilt size={20} weight="light" className="text-crimson-500" />
                                        </div>
                                        <p className="text-ivory-100 text-sm font-light">Inquiry sent successfully.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-[0.2em] text-ivory-400 font-medium flex items-center gap-1.5">
                                                    <User size={10} weight="light" />
                                                    {t.newsletter.namePlaceholder}
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-charcoal-800 border border-charcoal-600/40 rounded-xl px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/30 focus:outline-none focus:border-brass-500/50 transition-colors duration-500"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-[0.2em] text-ivory-400 font-medium flex items-center gap-1.5">
                                                    <EnvelopeSimple size={10} weight="light" />
                                                    {t.newsletter.placeholder}
                                                </label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-charcoal-800 border border-charcoal-600/40 rounded-xl px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/30 focus:outline-none focus:border-brass-500/50 transition-colors duration-500"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-ivory-400 font-medium flex items-center gap-1.5">
                                                <TextT size={10} weight="light" />
                                                {t.newsletter.subjectPlaceholder}
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full bg-charcoal-800 border border-charcoal-600/40 rounded-xl px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/30 focus:outline-none focus:border-brass-500/50 transition-colors duration-500"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-ivory-400 font-medium">
                                                {t.newsletter.messagePlaceholder}
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-charcoal-800 border border-charcoal-600/40 rounded-xl px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/30 focus:outline-none focus:border-brass-500/50 transition-colors duration-500 resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="group inline-flex items-center gap-3 bg-crimson-800 hover:bg-crimson-700 text-ivory-50 pl-7 pr-2.5 py-3 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 active:scale-95 w-full md:w-auto justify-center cursor-pointer"
                                        >
                                            <span>{t.inquiry.cta}</span>
                                            <span className="w-8 h-8 rounded-full bg-crimson-900/50 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500">
                                                <PaperPlaneTilt size={14} weight="bold" />
                                            </span>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default Home;
