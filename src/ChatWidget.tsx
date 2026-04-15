import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Heart } from 'lucide-react';

export function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 10 && !isVisible) {
        setIsVisible(true);
        setIsExpanded(true);
        setShowTyping(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    if (showTyping) {
      const timer = setTimeout(() => {
        setShowTyping(false);
        setShowContent(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showTyping]);


  const handleClose = () => {
    setIsExpanded(false);
    setShowContent(false);
    setShowTyping(false);
  };

  const handleBubbleClick = () => {
    setIsExpanded(true);
    setShowTyping(true);
  };

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50" dir="rtl">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.button
            key="bubble"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            onClick={handleBubbleClick}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#ff4d6d] via-[#ff0a54] to-[#c9184a] shadow-[0_0_40px_rgba(255,77,109,0.5)] hover:shadow-[0_0_60px_rgba(255,77,109,0.7)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff758f]/30 to-transparent rounded-full"></div>
            <MessageCircle className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2} />

            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-[#25d366] rounded-full border-2 border-black"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.button>
        ) : (
          <motion.div
            key="widget"
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            className="relative max-w-md w-[90vw] sm:w-96"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#1a0510]/95 via-[#2a0b14]/98 to-[#0d0507]/95 backdrop-blur-2xl border-2 border-[#ff758f]/40 shadow-[0_20px_80px_rgba(255,77,109,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d]/5 via-transparent to-[#c9184a]/5"></div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4d6d] via-[#ff758f] to-[#ff4d6d] shadow-[0_0_20px_rgba(255,77,109,0.6)]"></div>

              <button
                onClick={handleClose}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#ff4d6d]/20 hover:bg-[#ff4d6d]/40 border border-[#ff758f]/30 hover:border-[#ff758f]/60 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 group"
              >
                <X className="w-4 h-4 text-[#ff758f] group-hover:text-white transition-colors" />
              </button>

              <div className="relative p-6 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] rounded-full blur-md"></div>
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#ff758f] to-[#ff4d6d] flex items-center justify-center shadow-[0_0_20px_rgba(255,77,109,0.4)]">
                      <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#ff758f] mb-1" style={{ fontFamily: "'Heebo', sans-serif" }}>
                      CodeWOW
                    </h3>
                    <div className="w-2 h-2 bg-[#25d366] rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2a0b14]/60 to-[#1a0510]/60 backdrop-blur-sm rounded-2xl p-5 border border-[#ff758f]/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d]/5 to-transparent"></div>

                  <div className="relative z-10">
                    {showTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <div className="flex gap-1">
                          <motion.div
                            className="w-2 h-2 bg-[#ff758f] rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-[#ff758f] rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-[#ff758f] rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                          />
                        </div>
                        <span className="text-sm text-[#FFD1D6]/70" style={{ fontFamily: "'Heebo', sans-serif" }}>
                          מקליד...
                        </span>
                      </motion.div>
                    )}

                    {showContent && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h4 className="text-4xl mb-5 bg-gradient-to-r from-[#ff758f] via-[#ff4d6d] to-[#ff0a54] text-transparent bg-clip-text" style={{ fontFamily: "'Varela Round', sans-serif", fontWeight: 700 }}>
                          הצלחנו לתפוס את העין שלך?
                        </h4>

                        <p className="text-[#FFD1D6] text-xl mb-3 leading-relaxed font-medium" style={{ fontFamily: "'Heebo', sans-serif" }}>
                          אם האתר הזה תפס את תשומת הלב שלך{' '}
                          <Heart className="w-5 h-5 text-[#ff4d6d] fill-[#ff4d6d] inline-block animate-pulse" />
                          <br />
                          עכשיו נעבור לקדם גם לך אתר כזה!
                        </p>

                        <p className="text-[#FFD1D6]/80 text-sm mb-5 leading-relaxed" style={{ fontFamily: "'Heebo', sans-serif" }}>
                          אנחנו מתמחים בבניית אתרים, חוויית משתמש ובקרת איכות
                          כדי ליצור אתר שתופס את העין כבר ממבט ראשון.
                        </p>

                        <motion.button
                          onClick={handleCTAClick}
                          className="relative w-full py-4 px-6 rounded-xl font-bold text-white overflow-hidden group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{ fontFamily: "'Heebo', sans-serif" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d6d] via-[#ff0a54] to-[#c9184a] transition-transform duration-300 group-hover:scale-105"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#ff758f]/0 via-white/20 to-[#ff758f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          <span className="relative z-10 text-lg flex items-center justify-center gap-2">
                            אני רוצה אתר כזה
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              ←
                            </motion.span>
                          </span>
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#ff758f]/40"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#ff758f]/40"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#ff758f]/40"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4d6d]/20 via-[#ff758f]/20 to-[#ff4d6d]/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
