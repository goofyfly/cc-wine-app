import React, { useState, useEffect, useMemo } from 'react';
import zh from './i18n/zh.json';
import en from './i18n/en.json';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [lang, setLang] = useState('zh');
  const t = useMemo(() => (lang === 'zh' ? zh : en), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'zh' ? 'en' : 'zh'));

  return (
    <div className="min-h-[100dvh] flex flex-col bg-stone-50 selection:bg-red-900 selection:text-white font-sans">
      <Navbar t={t} toggleLang={toggleLang} lang={lang} />
      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <Home t={t} />
        </motion.div>
      </AnimatePresence>
      <Footer t={t} />
    </div>
  );
}

export default App;
