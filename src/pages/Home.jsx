import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    ArrowRight,
    MapPin,
    Drop,
    HandHeart,
    Wine,
    PaperPlaneRight,
    CaretRight
} from '@phosphor-icons/react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const Home = ({ t }) => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        setTimeout(() => setFormStatus(null), 4000);
    };

    return (
        <main className="w-full overflow-hidden bg-charcoal-950">

            {/* 1. HERO SECTION */}
            <section id="hero" className="relative min-h-[100dvh] pt-32 pb-20 px-6 flex items-center bg-gradient-to-b from-charcoal-900 to-charcoal-950">
                <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Copy */}
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        className="flex flex-col items-start pt-10 lg:pt-0 z-10"
                    >
                        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-brass-500"></div>
                            <span className="text-[10px] font-bold tracking-[0.3em] text-brass-400 uppercase">
                                {t.hero.eyebrow}
                            </span>
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-[72px] font-light leading-[1.05] tracking-tight text-ivory-50 mb-8 max-w-2xl">
                            {t.hero.title}
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-base md:text-lg text-ivory-300 font-light leading-relaxed max-w-lg mb-10">
                            {t.hero.body}
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                            <a href="#collection" className="btn-gold px-8 py-3.5 rounded-full text-xs tracking-[0.2em] flex items-center gap-2">
                                {t.hero.cta}
                                <ArrowRight size={16} />
                            </a>
                            <a href="#story" className="text-xs font-bold tracking-[0.2em] text-ivory-200 hover:text-brass-400 uppercase transition-colors flex items-center gap-2">
                                {t.hero.ctaSecondary}
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                        className="relative flex justify-center lg:justify-end items-center"
                    >
                        <div className="absolute w-full h-full bg-brass-500/5 blur-[120px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-[500px]">
                            <img
                                src="/images/bottle.png"
                                alt="Crimson & Cardinal Bottle"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. FEATURE CARDS STRIP (Story) */}
            <section id="story" className="section-pad px-6 bg-charcoal-950 overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-light text-ivory-50 mb-4">{t.features.title}</h2>
                            <p className="text-ivory-300 font-light">{t.metrics.sectionBody}</p>
                        </div>
                        <a href="#contact" className="text-brass-400 hover:text-brass-300 text-xs tracking-[0.1em] uppercase flex items-center gap-2 transition-colors">
                            {t.features.link} <CaretRight size={14} />
                        </a>
                    </div>

                    {/* Horizontal scroll on mobile, grid on desktop */}
                    <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 gap-6 snap-x snap-mandatory hide-scrollbar">
                        {t.features.cards.map((card, i) => (
                            <div key={i} className="card-dark min-w-[300px] sm:min-w-[350px] lg:min-w-0 flex flex-col p-8 snap-start shrink-0">
                                <div className="w-12 h-12 rounded-full border border-charcoal-700 bg-charcoal-800 flex items-center justify-center mb-8 text-brass-400">
                                    {i === 0 ? <MapPin size={20} /> : i === 1 ? <Drop size={20} /> : <HandHeart size={20} />}
                                </div>
                                <h3 className="text-xl font-light text-ivory-50 mb-4">{card.title}</h3>
                                <p className="text-sm font-light text-ivory-300 leading-relaxed flex-grow mb-8">{card.body}</p>
                                <span className="text-xs tracking-wider text-brass-400 flex items-center gap-2 uppercase group-hover:gap-3 transition-all relative">
                                    {card.link} <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PRODUCT SHOWCASE */}
            <section id="collection" className="section-pad px-6 bg-charcoal-900 border-y border-charcoal-800">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                    className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                >
                    {/* Left: Product Image in Card Container */}
                    <motion.div variants={fadeUp} className="card-dark relative aspect-[4/5] md:aspect-square flex items-center justify-center p-12 bg-gradient-to-tr from-charcoal-800 to-charcoal-900 group">
                        <div className="absolute inset-0 bg-brass-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <img
                            src="/images/bottle.png"
                            alt={t.collection.product.title}
                            className="h-[80%] lg:h-[90%] w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 right-6 bg-charcoal-950/80 backdrop-blur border border-charcoal-700 rounded-lg px-4 py-2">
                            <span className="text-brass-400 font-mono text-sm">{t.collection.product.price}</span>
                        </div>
                    </motion.div>

                    {/* Right: Info */}
                    <motion.div variants={fadeUp} className="flex flex-col items-start max-w-xl">
                        <span className="text-[10px] uppercase tracking-[0.3em] border border-charcoal-700 px-3 py-1 rounded-full text-ivory-400 mb-8 inline-block">
                            {t.collection.subtitle}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light text-ivory-50 mb-4">{t.collection.product.title}</h2>
                        <h3 className="text-lg text-brass-400 font-light mb-8">{t.collection.product.subtitle}</h3>
                        <p className="text-base text-ivory-300 font-light leading-relaxed mb-10">
                            {t.collection.product.body}
                        </p>

                        <div className="w-full divider-rule mb-10"></div>

                        <a href="#contact" className="btn-gold w-full md:w-auto px-10 py-4 rounded-full text-xs tracking-[0.2em] flex justify-center items-center gap-3">
                            {t.collection.product.cta}
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* 4. CTA BANNER (Vineyard Bg) */}
            <section className="relative py-32 md:py-48 px-6 flex items-center justify-center min-h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/vineyard-hero.jpg"
                        alt="Napa Valley Vineyard"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal-950/80"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ivory-50 text-balance mb-10">{t.ctaBanner.title}</h2>
                    <a href="#collection" className="btn-gold px-8 py-4 rounded-full text-xs tracking-[0.2em] inline-flex items-center gap-2">
                        {t.ctaBanner.cta} <ArrowRight size={16} />
                    </a>
                </div>
            </section>

            {/* 5. BRAND VALUES (4 Cols) */}
            <section className="section-pad px-6 bg-charcoal-950">
                <div className="max-w-[1440px] mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-ivory-50 mb-4">{t.values.title}</h2>
                    <p className="text-ivory-300 font-light">{t.values.subtitle}</p>
                </div>

                <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.values.items.map((item, i) => (
                        <div key={i} className="card-dark p-8 flex flex-col items-center text-center">
                            <div className="w-10 h-10 mb-6 text-brass-400">
                                {i === 0 ? <MapPin size={32} weight="light" /> :
                                    i === 1 ? <HandHeart size={32} weight="light" /> :
                                        i === 2 ? <Drop size={32} weight="light" /> :
                                            <Wine size={32} weight="light" />}
                            </div>
                            <h3 className="text-lg font-medium text-ivory-50 mb-3">{item.title}</h3>
                            <p className="text-sm font-light text-ivory-300 leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. NEWSLETTER */}
            <section className="py-24 px-6 border-t border-charcoal-800 bg-charcoal-900">
                <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-light text-ivory-50 mb-3">{t.newsletter.title}</h2>
                        <p className="text-sm text-ivory-300 font-light">{t.newsletter.body}</p>
                    </div>
                    <form className="w-full md:w-auto flex-1 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder={t.newsletter.placeholder}
                            className="flex-1 bg-charcoal-950 border border-charcoal-700 rounded-full px-6 py-3.5 text-sm text-ivory-100 placeholder:text-ivory-400/50 focus:outline-none focus:border-brass-500 transition-colors"
                        />
                        <button className="btn-gold px-8 py-3.5 rounded-full text-xs tracking-[0.1em] shrink-0 font-bold uppercase">
                            {t.newsletter.cta}
                        </button>
                    </form>
                </div>
            </section>

            {/* 7. INQUIRY FORM */}
            <section id="contact" className="section-pad px-6 bg-charcoal-950/50 border-t border-charcoal-800">
                <div className="max-w-[800px] mx-auto card-dark p-8 md:p-14">
                    <div className="text-center mb-10 text-balance">
                        <h2 className="text-3xl font-light text-ivory-50 mb-4">{t.inquiry.title}</h2>
                        <p className="text-sm text-ivory-300 font-light">{t.inquiry.body}</p>
                    </div>

                    {formStatus === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 rounded-full bg-brass-400/20 border border-brass-500/30 flex items-center justify-center mx-auto mb-6">
                                <PaperPlaneRight size={24} className="text-brass-400" />
                            </div>
                            <p className="text-ivory-100 text-lg font-light">Inquiry sent successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-ivory-400 mb-2">{t.newsletter.namePlaceholder}</label>
                                    <input
                                        type="text" required
                                        className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:border-brass-500 focus:outline-none transition-colors"
                                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-ivory-400 mb-2">{t.newsletter.placeholder}</label>
                                    <input
                                        type="email" required
                                        className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:border-brass-500 focus:outline-none transition-colors"
                                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-ivory-400 mb-2">{t.newsletter.subjectPlaceholder}</label>
                                <input
                                    type="text"
                                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:border-brass-500 focus:outline-none transition-colors"
                                    value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-ivory-400 mb-2">{t.newsletter.messagePlaceholder}</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:border-brass-500 focus:outline-none transition-colors resize-none"
                                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-gold w-full py-4 rounded-xl text-xs tracking-[0.2em] uppercase mt-4 flex justify-center items-center gap-2">
                                {t.inquiry.cta} <PaperPlaneRight size={16} />
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Home;
