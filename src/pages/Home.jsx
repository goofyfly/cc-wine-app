import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wine, Star, SealCheck } from '@phosphor-icons/react';

const Home = ({ t }) => {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-[100dvh] flex items-center pt-20 px-6 overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-8 order-2 lg:order-1"
                    >
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block text-[10px] font-bold tracking-[0.4em] text-red-900 border-l-2 border-red-900 pl-4 uppercase"
                            >
                                {t.hero.subtitle}
                            </motion.span>
                            <h1 className="text-5xl md:text-7xl font-serif font-light text-red-950 leading-[1.1] text-balance">
                                {t.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-stone-500 font-light max-w-sm">
                                {t.hero.price}
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <button className="group relative bg-red-950 border border-red-950 text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:pr-14 active:scale-95 shadow-xl shadow-red-950/20 overflow-hidden cursor-pointer hover:bg-transparent hover:text-red-950">
                                <span className="relative z-10 transition-colors">{t.hero.buyNow}</span>
                                <ArrowRight size={16} className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all z-10" />
                                <div className="absolute inset-0 bg-stone-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                            </button>
                            <a href="#story" className="text-xs font-bold tracking-widest text-stone-400 hover:text-red-900 transition-colors uppercase">
                                {t.nav.story}
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Asset */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center order-1 lg:order-2"
                    >
                        {/* Abstract Background Element */}
                        <div className="absolute inset-0 bg-red-900/5 rounded-3xl -rotate-6 scale-95 blur-2xl"></div>

                        {/* The Bottle - High end imagery */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-full max-w-[400px] h-full flex justify-center items-center"
                        >
                            <div className="w-64 h-full bg-stone-200 rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border border-stone-200 group">
                                <img
                                    src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop"
                                    alt="Cult Wine Bottle"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                                />
                                {/* Overlay gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                            </div>

                            {/* Product Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                                className="absolute -bottom-6 lg:-bottom-10 -right-4 lg:-right-10 w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full p-4 lg:p-6 shadow-2xl border border-stone-100 flex flex-col items-center justify-center text-center z-20"
                            >
                                <SealCheck size={32} className="text-red-900 mb-2" />
                                <span className="text-[9px] lg:text-[10px] font-bold text-red-950 uppercase tracking-tight">Napa Valley 2021 Vintage</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Collection Details Section */}
            <section id="collection" className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] text-red-900/40 uppercase mb-4 block">Craftsmanship</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-red-950 mb-6">{t.features.feature1.title}</h2>
                        <p className="text-stone-500 max-w-2xl mx-auto font-light leading-relaxed text-lg">{t.features.feature1.desc1}</p>
                    </motion.div>

                    {/* Asymmetric Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-12 lg:col-span-8 bg-stone-50 p-12 lg:p-16 rounded-[2.5rem] border border-stone-100 flex flex-col justify-between group transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <Wine size={40} className="text-red-900 mb-8 opacity-40 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl md:text-3xl font-serif text-red-950 mb-6">{t.features.feature2.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <p className="text-stone-600 text-sm font-light leading-loose">{t.features.feature2.desc1}</p>
                                    <p className="text-stone-600 text-sm font-light leading-loose">{t.features.feature2.desc3}</p>
                                </div>
                            </div>
                            <div className="mt-12 h-px bg-stone-200 w-24"></div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-12 lg:col-span-4 bg-red-950 p-12 rounded-[2.5rem] text-white flex flex-col justify-between overflow-hidden relative group"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative z-10">
                                <Star size={40} className="text-red-400 mb-8 opacity-40 group-hover:rotate-12 transition-transform" />
                                <h3 className="text-xl md:text-2xl font-serif mb-6">Limited Edition</h3>
                                <p className="text-red-100/60 text-[11px] uppercase tracking-widest leading-[2.5] font-medium">
                                    {t.features.feature3.desc}
                                </p>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-900/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section id="story" className="py-40 px-6 bg-stone-50 border-t border-stone-100">
                <div className="max-w-4xl mx-auto text-center space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-red-950 overflow-hidden"
                    >
                        <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase text-stone-400 mb-8 block font-sans">The Philosophy</h4>
                        <p className="text-3xl md:text-5xl font-serif font-light text-red-950 text-balance leading-[1.2] lg:leading-[1.4]">
                            {t.features.feature1.desc2}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="w-px h-16 bg-gradient-to-b from-stone-400 to-transparent"></div>
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-stone-950">Est. 2021 Napa Valley</span>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Home;
