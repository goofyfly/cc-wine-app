import React from 'react';
import { MapPin, EnvelopeSimple } from '@phosphor-icons/react';

const Footer = ({ t }) => {
    const discoverHrefs = ['#collection', '#story', '#winemaker'];

    return (
        <footer className="bg-charcoal-950 pt-20 pb-10 px-5 md:px-10 border-t border-charcoal-800/50">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
                    {/* col 1: brand */}
                    <div className="flex flex-col items-start gap-5">
                        <img
                            src="/images/logo.png"
                            alt="Crimson & Cardinal"
                            className="w-16 opacity-85"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                        <p className="text-ivory-300 text-xs leading-relaxed max-w-xs font-light">
                            {t.footer.tagline}
                        </p>
                    </div>

                    {/* col 2: contact */}
                    <div className="flex flex-col items-start gap-5">
                        <h4 className="text-ivory-50 text-[10px] font-bold tracking-[0.2em] uppercase">
                            {t.footer.contactTitle}
                        </h4>
                        <div className="flex flex-col gap-3 text-ivory-300 text-xs font-light leading-relaxed">
                            <div className="flex items-start gap-2.5">
                                <MapPin size={15} weight="light" className="text-brass-400 shrink-0 mt-0.5" />
                                <span>{t.footer.address}</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <EnvelopeSimple size={15} weight="light" className="text-brass-400 shrink-0 mt-0.5" />
                                <span>{t.footer.email}</span>
                            </div>
                        </div>
                    </div>

                    {/* col 3: discover */}
                    <div className="flex flex-col items-start gap-5">
                        <h4 className="text-ivory-50 text-[10px] font-bold tracking-[0.2em] uppercase">
                            {t.footer.discoverTitle}
                        </h4>
                        <div className="flex flex-col gap-2.5 text-ivory-300 text-xs font-light uppercase tracking-wider">
                            {t.footer.discoverLinks.map((label, i) => (
                                <a key={i} href={discoverHrefs[i]} className="hover:text-brass-400 transition-colors duration-300">
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="divider-rule mb-6" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] tracking-[0.08em] text-ivory-400/50 font-light">
                    <p>{t.footer.copyright}</p>
                    {t.footer.icp && (
                        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:text-ivory-300 transition-colors">
                            {t.footer.icp}
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
