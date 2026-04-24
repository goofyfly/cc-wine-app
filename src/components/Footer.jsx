import React from 'react';
import { MapPin, EnvelopeSimple, InstagramLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react';

const Footer = ({ t }) => {
    return (
        <footer className="bg-charcoal-950 pt-24 pb-12 px-6 border-t border-charcoal-700/30">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Col 1: Brand */}
                    <div className="flex flex-col items-start gap-6">
                        <img
                            src="/images/logo.png"
                            alt="Crimson & Cardinal"
                            className="w-20 filter brightness-0 invert opacity-90"
                        />
                        <p className="text-ivory-300 text-xs leading-relaxed max-w-xs font-light">
                            Crafted in Napa Valley for the table, the cellar, and the moments worth remembering.
                        </p>
                    </div>

                    {/* Col 2: Contact */}
                    <div className="flex flex-col items-start gap-6">
                        <h4 className="text-ivory-50 text-[10px] font-bold tracking-[0.2em] uppercase">Contact</h4>
                        <div className="flex flex-col gap-4 text-ivory-300 text-xs font-light leading-relaxed">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} weight="light" className="text-brass-400 shrink-0 mt-0.5" />
                                <span>{t.footer.address}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <EnvelopeSimple size={16} weight="light" className="text-brass-400 shrink-0 mt-0.5" />
                                <span>{t.footer.email}</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 3: Navigation */}
                    <div className="flex flex-col items-start gap-6">
                        <h4 className="text-ivory-50 text-[10px] font-bold tracking-[0.2em] uppercase">Discover</h4>
                        <div className="flex flex-col gap-3 text-ivory-300 text-xs font-light uppercase tracking-wider">
                            <a href="#hero" className="hover:text-brass-400 transition-colors">Our Collection</a>
                            <a href="#story" className="hover:text-brass-400 transition-colors">Provenance & Craft</a>
                            <a href="#contact" className="hover:text-brass-400 transition-colors">Client Services</a>
                        </div>
                    </div>

                    {/* Col 4: Social */}
                    <div className="flex flex-col items-start gap-6">
                        <h4 className="text-ivory-50 text-[10px] font-bold tracking-[0.2em] uppercase">Connect</h4>
                        <div className="flex gap-5 text-ivory-300">
                            <a href="#" className="hover:text-brass-400 transition-colors" aria-label="Instagram">
                                <InstagramLogo size={20} weight="light" />
                            </a>
                            <a href="#" className="hover:text-brass-400 transition-colors" aria-label="Facebook">
                                <FacebookLogo size={20} weight="light" />
                            </a>
                            <a href="#" className="hover:text-brass-400 transition-colors" aria-label="Twitter">
                                <TwitterLogo size={20} weight="light" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="divider-rule mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.1em] text-ivory-400/60 uppercase font-light">
                    <p>{t.footer.copyright}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-ivory-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-ivory-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
