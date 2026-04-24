import React from 'react';

const Footer = ({ t }) => {
    return (
        <footer className="bg-stone-950 text-stone-500 py-16 px-6 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <div className="font-serif font-bold tracking-[0.2em] text-stone-200 mb-2">
                        CRIMSON & CARDINAL
                    </div>
                    <p className="text-[10px] tracking-widest leading-loose max-w-sm">
                        纳帕山谷核心产区奥克维尔，匠心酿造顶级膜拜级赤霞珠。<br />
                        Deeply rooted in the fertile soils of Napa Valley.
                    </p>
                </div>

                <div className="text-[10px] tracking-widest text-stone-600 uppercase">
                    {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
