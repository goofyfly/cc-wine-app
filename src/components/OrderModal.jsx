import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from '@phosphor-icons/react';

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 260, damping: 28, delay: 0.05 },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: { duration: 0.25, ease: [0.32, 0.72, 0, 1] },
    },
};

const OrderModal = ({ isOpen, onClose, t }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | success
    const firstInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setStatus('idle');
            setFormData({ name: '', phone: '', email: '', message: '' });
            document.body.style.overflow = 'hidden';
            setTimeout(() => firstInputRef.current?.focus(), 350);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('success');
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 glass-overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.35 }}
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-lg bg-charcoal-900 border border-charcoal-700 rounded-xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 z-10 p-2 rounded-lg border border-charcoal-700 hover:border-charcoal-600 text-ivory-400 hover:text-ivory-100 transition-all cursor-pointer"
                            aria-label="Close"
                        >
                            <X size={18} weight="light" />
                        </button>

                        <div className="p-8 md:p-10">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                    className="flex flex-col items-center text-center py-8"
                                >
                                    <div className="w-16 h-16 rounded-full bg-brass-500/15 border border-brass-500/25 flex items-center justify-center mb-6">
                                        <CheckCircle size={32} weight="light" className="text-brass-400" />
                                    </div>
                                    <h3 className="text-xl font-light text-ivory-50 mb-3">{t.orderModal.successTitle}</h3>
                                    <p className="text-sm text-ivory-300 font-light leading-relaxed max-w-sm mb-8">
                                        {t.orderModal.successBody}
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="btn-gold px-8 py-3 rounded-lg text-xs tracking-[0.15em] cursor-pointer"
                                    >
                                        {t.orderModal.close}
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-light text-ivory-50 mb-3">{t.orderModal.title}</h2>
                                        <p className="text-sm text-ivory-300 font-light leading-relaxed">{t.orderModal.body}</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-[11px] uppercase tracking-[0.15em] text-ivory-400 mb-2 font-medium">
                                                {t.orderModal.namePlaceholder}
                                            </label>
                                            <input
                                                ref={firstInputRef}
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/40 focus:border-brass-500 focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-[0.15em] text-ivory-400 mb-2 font-medium">
                                                    {t.orderModal.phonePlaceholder}
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/40 focus:border-brass-500 focus:outline-none transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-[0.15em] text-ivory-400 mb-2 font-medium">
                                                    {t.orderModal.emailPlaceholder}
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/40 focus:border-brass-500 focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[11px] uppercase tracking-[0.15em] text-ivory-400 mb-2 font-medium">
                                                {t.orderModal.messagePlaceholder}
                                            </label>
                                            <textarea
                                                rows="3"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-ivory-100 placeholder:text-ivory-400/40 focus:border-brass-500 focus:outline-none transition-colors resize-none"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn-gold w-full py-3.5 rounded-lg text-xs tracking-[0.18em] mt-2 cursor-pointer"
                                        >
                                            {t.orderModal.submit}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OrderModal;
