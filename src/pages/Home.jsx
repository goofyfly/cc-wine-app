import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    MapPin,
    Drop,
    HandHeart,
    Wine,
    PaperPlaneRight,
    Leaf,
    Timer,
    Crown,
} from '@phosphor-icons/react';

/* ── animation presets ── */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const featureIcons = [MapPin, Drop, HandHeart];
const valueIcons = [MapPin, Timer, Leaf, Crown];

const Home = ({ t, onOpenModal }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        setTimeout(() => setFormStatus(null), 5000);
    };

    return (
        <main className="w-full overflow-x-hidden bg-charcoal-950">

            {/* ═══════════════ 1. HERO ═══════════════ */}
            <section
                id="hero"
                className="relative min-h-[100dvh] pt-28 pb-16 px-5 md:px-10 flex items-center"
            >
                {/* bg image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/vineyard-hero.jpg"
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/80 to-charcoal-950" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
                    {/* left: copy */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="flex flex-col items-start pt-8 lg:pt-0"
                    >
                        <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-brass-500" />
                            <span className="text-[10px] font-bold tracking-[0.25em] text-brass-400 uppercase">
                                {t.hero.eyebrow}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-[60px] font-light leading-[1.1] tracking-tight text-ivory-50 mb-7 max-w-xl text-balance"
                        >
                            {t.hero.title}
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-base md:text-lg text-ivory-300 font-light leading-relaxed max-w-lg mb-9"
                        >
                            {t.hero.body}
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
                            <a
                                href="#collection"
                                className="btn-gold px-7 py-3 rounded-lg text-[11px] tracking-[0.15em] flex items-center gap-2"
                            >
                                {t.hero.cta}
                                <ArrowRight size={15} />
                            </a>
                            <a
                                href="#story"
                                className="btn-outline px-6 py-3 rounded-lg text-[11px] tracking-[0.15em]"
                            >
                                {t.hero.ctaSecondary}
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* right: bottle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
                        className="relative flex justify-center lg:justify-end items-center"
                    >
                        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-brass-500/6 blur-[100px] rounded-full" />
                        <div className="relative z-10 w-full max-w-[420px]">
                            <img
                                src="/images/bottle.png"
                                alt="Crimson & Cardinal 2021 Oakville Cabernet Sauvignon"
                                className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ 2. METRICS ═══════════════ */}
            <section className="py-14 md:py-20 px-5 md:px-10 border-y border-charcoal-800/40">
                <div className="max-w-[1400px] mx-auto">
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                        className="text-center text-sm md:text-base text-ivory-300 font-light mb-12 max-w-2xl mx-auto"
                    >
                        {t.metrics.sectionTitle}
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={stagger}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
                    >
                        {t.metrics.items.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-light text-ivory-50 font-mono tracking-tight mb-2">
                                    {item.value}
                                </p>
                                <p className="text-[11px] uppercase tracking-[0.15em] text-ivory-400 font-medium">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ 3. OUR STORY / FEATURES ═══════════════ */}
            <section id="story" className="section-pad px-5 md:px-10">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                        className="mb-14"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-light text-ivory-50 mb-3"
                        >
                            {t.features.title}
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-ivory-300 font-light max-w-xl">
                            {t.features.subtitle}
                        </motion.p>
                    </motion.div>

                    {/* horizontal scroll mobile / grid desktop */}
                    <div className="flex overflow-x-auto pb-6 -mx-5 px-5 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 gap-5 snap-x snap-mandatory hide-scrollbar">
                        {t.features.cards.map((card, i) => {
                            const Icon = featureIcons[i];
                            return (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-60px' }}
                                    variants={fadeUp}
                                    className="card-dark min-w-[280px] sm:min-w-[320px] lg:min-w-0 flex flex-col p-7 snap-start shrink-0"
                                >
                                    <div className="w-11 h-11 rounded-lg border border-charcoal-700 bg-charcoal-800 flex items-center justify-center mb-7 text-brass-400">
                                        <Icon size={20} weight="light" />
                                    </div>
                                    <h3 className="text-lg font-medium text-ivory-50 mb-3 leading-snug">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm font-light text-ivory-300 leading-relaxed">
                                        {card.body}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ 4. WINEMAKER ═══════════════ */}
            <section
                id="winemaker"
                className="relative py-28 md:py-40 px-5 md:px-10"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/vineyard.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal-950/82" />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={stagger}
                    className="relative z-10 max-w-[900px] mx-auto"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-brass-500" />
                        <span className="text-[10px] font-bold tracking-[0.25em] text-brass-400 uppercase">
                            {t.winemaker.eyebrow}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-light text-ivory-50 mb-6"
                    >
                        {t.winemaker.title}
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-base text-ivory-200 font-light leading-[1.8] max-w-3xl"
                    >
                        {t.winemaker.bio}
                    </motion.p>
                </motion.div>
            </section>

            {/* ═══════════════ 5. PRODUCT SHOWCASE ═══════════════ */}
            <section id="collection" className="section-pad px-5 md:px-10 bg-charcoal-900 border-y border-charcoal-800/40">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={stagger}
                    className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* left: bottle card */}
                    <motion.div
                        variants={fadeUp}
                        className="card-dark relative aspect-[4/5] md:aspect-square flex items-center justify-center p-10 bg-gradient-to-tr from-charcoal-800 to-charcoal-900 group"
                    >
                        <div className="absolute inset-0 bg-brass-500/4 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <img
                            src="/images/bottle.png"
                            alt={t.collection.title}
                            className="h-[80%] lg:h-[88%] w-auto object-contain drop-shadow-2xl group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        <div className="absolute bottom-5 right-5 bg-charcoal-950/75 backdrop-blur-sm border border-charcoal-700 rounded-lg px-4 py-2">
                            <span className="text-brass-400 font-mono text-sm">{t.collection.price}</span>
                            <span className="text-ivory-400 text-[10px] ml-1.5">/{t.collection.priceLabel}</span>
                        </div>
                    </motion.div>

                    {/* right: info */}
                    <motion.div variants={fadeUp} className="flex flex-col items-start max-w-xl">
                        <span className="text-[10px] uppercase tracking-[0.25em] border border-charcoal-700 px-3 py-1 rounded-lg text-ivory-400 mb-7 inline-block font-medium">
                            {t.collection.eyebrow}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-ivory-50 mb-3">
                            {t.collection.title}
                        </h2>
                        <h3 className="text-base text-brass-400 font-light mb-7">
                            {t.collection.subtitle}
                        </h3>
                        <p className="text-sm md:text-base text-ivory-300 font-light leading-relaxed mb-9">
                            {t.collection.body}
                        </p>

                        <div className="w-full divider-rule mb-9" />

                        <button
                            onClick={onOpenModal}
                            className="btn-gold w-full md:w-auto px-10 py-3.5 rounded-lg text-[11px] tracking-[0.18em] flex justify-center items-center gap-2 cursor-pointer"
                        >
                            {t.collection.cta}
                            <ArrowRight size={15} />
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════ 6. CTA BANNER ═══════════════ */}
            <section className="relative py-28 md:py-40 px-5 md:px-10 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/bottles-dark.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal-950/78" />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="relative z-10 max-w-2xl mx-auto text-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl md:text-5xl font-light text-ivory-50 text-balance mb-9"
                    >
                        {t.ctaBanner.title}
                    </motion.h2>
                    <motion.div variants={fadeUp}>
                        <a
                            href="#collection"
                            className="btn-gold px-8 py-3.5 rounded-lg text-[11px] tracking-[0.18em] inline-flex items-center gap-2"
                        >
                            {t.ctaBanner.cta}
                            <ArrowRight size={15} />
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════ 7. VALUES ═══════════════ */}
            <section className="section-pad px-5 md:px-10 bg-charcoal-950">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="max-w-[1400px] mx-auto"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl md:text-4xl font-light text-ivory-50 mb-12 text-center"
                    >
                        {t.values.title}
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {t.values.items.map((item, i) => {
                            const Icon = valueIcons[i];
                            return (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="card-dark p-7 flex flex-col items-start"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center mb-5 text-brass-400">
                                        <Icon size={20} weight="light" />
                                    </div>
                                    <h3 className="text-base font-medium text-ivory-50 mb-2">{item.title}</h3>
                                    <p className="text-sm font-light text-ivory-300 leading-relaxed">
                                        {item.body}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════ 8. NEWSLETTER ═══════════════ */}
            <section className="py-20 px-5 md:px-10 border-t border-charcoal-800/40 bg-charcoal-900">
                <div className="max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-light text-ivory-50 mb-2">
                            {t.newsletter.title}
                        </h2>
                        <p className="text-sm text-ivory-300 font-light">{t.newsletter.body}</p>
                    </div>
                    <form
                        className="w-full md:w-auto flex-1 flex flex-col sm:flex-row gap-3"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder={t.newsletter.placeholder}
                            className="flex-1 bg-charcoal-950 border border-charcoal-700 rounded-lg px-5 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/40 focus:outline-none focus:border-brass-500 transition-colors"
                        />
                        <button className="btn-gold px-7 py-3 rounded-lg text-[11px] tracking-[0.12em] shrink-0 cursor-pointer">
                            {t.newsletter.cta}
                        </button>
                    </form>
                </div>
            </section>

            {/* ═══════════════ 9. CONTACT FORM ═══════════════ */}
            <section id="contact" className="section-pad px-5 md:px-10 bg-charcoal-950">
                <div className="max-w-[720px] mx-auto card-dark p-7 md:p-12">
                    <div className="text-center mb-9">
                        <h2 className="text-2xl md:text-3xl font-light text-ivory-50 mb-3">
                            {t.contact.title}
                        </h2>
                        <p className="text-sm text-ivory-300 font-light">{t.contact.body}</p>
                    </div>

                    {formStatus === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                            className="text-center py-10"
                        >
                            <div className="w-14 h-14 rounded-full bg-brass-400/15 border border-brass-500/25 flex items-center justify-center mx-auto mb-5">
                                <PaperPlaneRight size={22} className="text-brass-400" />
                            </div>
                            <p className="text-ivory-100 text-lg font-light">
                                {t.orderModal.successTitle}
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.12em] text-ivory-400 mb-2 font-medium">
                                        {t.contact.namePlaceholder}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-ivory-100 focus:border-brass-500 focus:outline-none transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.12em] text-ivory-400 mb-2 font-medium">
                                        {t.contact.emailPlaceholder}
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-ivory-100 focus:border-brass-500 focus:outline-none transition-colors"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.12em] text-ivory-400 mb-2 font-medium">
                                    {t.contact.phonePlaceholder}
                                </label>
                                <input
                                    type="tel"
                                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-ivory-100 focus:border-brass-500 focus:outline-none transition-colors"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.12em] text-ivory-400 mb-2 font-medium">
                                    {t.contact.messagePlaceholder}
                                </label>
                                <textarea
                                    rows="3"
                                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-ivory-100 focus:border-brass-500 focus:outline-none transition-colors resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn-gold w-full py-3.5 rounded-lg text-[11px] tracking-[0.18em] mt-2 flex justify-center items-center gap-2 cursor-pointer"
                            >
                                {t.contact.submit}
                                <PaperPlaneRight size={15} />
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Home;
