import React, { useState, useEffect, useMemo } from 'react';
import zh from './i18n/zh.json';
import en from './i18n/en.json';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [lang, setLang] = useState('zh');
  const [modalOpen, setModalOpen] = useState(false);
  const t = useMemo(() => (lang === 'zh' ? zh : en), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-charcoal-950 font-sans">
      <Navbar t={t} toggleLang={toggleLang} lang={lang} onOpenModal={openModal} />

      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="flex-1"
        >
          <Home t={t} onOpenModal={openModal} />
        </motion.div>
      </AnimatePresence>

      <Footer t={t} />
      <OrderModal isOpen={modalOpen} onClose={closeModal} t={t} />
    </div>
  );
}

export default App;
