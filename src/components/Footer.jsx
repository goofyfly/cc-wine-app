import React from 'react';
import { MapPin, EnvelopeSimple } from '@phosphor-icons/react';

const Footer = ({ t }) => {
    return (
        <footer className="bg-charcoal-950 border-t border-charcoal-700/50 pt-20 pb-12 px-6">
            <div className="max-w-[1400px] mx-auto">

                {/* Upper: Brand + Info */}
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-brass-500/30 flex items-center justify-center">
                                <span className="text-brass-400 text-[11px] font-bold tracking-[0.1em]">CC</span>
                            </div>
                            <span className="font-bold tracking-[0.2em] text-ivory-100 text-sm uppercase">
                                Crimson & Cardinal
                            </span>
                        </div>
                        <p className="text-ivory-400 text-[11px] tracking-wider leading-relaxed max-w-xs">
                            Deeply rooted in Oakville, Napa Valley.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col sm:flex-row gap-10 text-[11px] tracking-wider text-ivory-400">
                        <div className="flex items-start gap-2">
                            <MapPin size={14} weight="light" className="text-brass-500/60 mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{t.footer.address}</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <EnvelopeSimple size={14} weight="light" className="text-brass-500/60 mt-0.5 shrink-0" />
                            <span>{t.footer.email}</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider-rule mb-8"></div>

                {/* Lower: Copyright */}
                <div className="text-center">
                    <p className="text-[10px] tracking-[0.2em] text-ivory-400/50 uppercase">
                        {t.footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
