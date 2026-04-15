import React, { useState, useEffect } from 'react';
import { Eye, Plus, Minus, Contrast, Underline } from 'lucide-react';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (grayscale) {
      document.documentElement.style.filter = 'grayscale(100%)';
    } else {
      document.documentElement.style.filter = 'none';
    }
  }, [grayscale]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (underlineLinks) {
      document.documentElement.classList.add('underline-links');
    } else {
      document.documentElement.classList.remove('underline-links');
    }
  }, [underlineLinks]);

  const increaseFontSize = () => {
    if (fontSize < 150) setFontSize(fontSize + 10);
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) setFontSize(fontSize - 10);
  };

  const resetSettings = () => {
    setFontSize(100);
    setGrayscale(false);
    setHighContrast(false);
    setUnderlineLinks(false);
  };

  return (
    <>
      <style>
        {`
          .high-contrast * {
            filter: contrast(150%) !important;
          }
          .underline-links a {
            text-decoration: underline !important;
          }
        `}
      </style>
      <div className="fixed bottom-6 left-6 z-50" role="region" aria-label="תפריט נגישות">
        {isOpen && (
          <div className="absolute bottom-20 left-0 bg-gradient-to-br from-[#1a0510]/98 to-[#2a0b14]/98 backdrop-blur-md rounded-2xl shadow-2xl p-5 w-72 border-2 border-[#ff4d6d]/40">
            <h3 className="text-xl font-bold mb-5 text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#ff758f]" />
              נגישות
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-[#2a0b14]/60 rounded-xl p-3 border border-[#ff4d6d]/20">
                <span className="text-sm text-white font-medium">גודל טקסט</span>
                <div className="flex gap-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 bg-[#ff4d6d]/20 hover:bg-[#ff4d6d]/40 rounded-lg transition-colors text-white border border-[#ff4d6d]/30"
                    aria-label="הקטן טקסט"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3 py-2 bg-[#1a0510] rounded-lg text-sm font-bold text-[#ff758f] min-w-[60px] text-center border border-[#ff4d6d]/30">
                    {fontSize}%
                  </span>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 bg-[#ff4d6d]/20 hover:bg-[#ff4d6d]/40 rounded-lg transition-colors text-white border border-[#ff4d6d]/30"
                    aria-label="הגדל טקסט"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => setGrayscale(!grayscale)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  grayscale
                    ? 'bg-[#ff4d6d]/30 border-2 border-[#ff758f]'
                    : 'bg-[#2a0b14]/60 border border-[#ff4d6d]/20 hover:bg-[#ff4d6d]/10'
                }`}
                aria-pressed={grayscale}
              >
                <span className="text-sm font-medium text-white">גווני אפור</span>
                <div className={`w-5 h-5 rounded ${grayscale ? 'bg-[#ff758f]' : 'bg-gray-600'}`} />
              </button>

              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  highContrast
                    ? 'bg-[#ff4d6d]/30 border-2 border-[#ff758f]'
                    : 'bg-[#2a0b14]/60 border border-[#ff4d6d]/20 hover:bg-[#ff4d6d]/10'
                }`}
                aria-pressed={highContrast}
              >
                <span className="text-sm font-medium text-white flex items-center gap-2">
                  <Contrast size={16} />
                  ניגודיות גבוהה
                </span>
                <div className={`w-5 h-5 rounded ${highContrast ? 'bg-[#ff758f]' : 'bg-gray-600'}`} />
              </button>

              <button
                onClick={() => setUnderlineLinks(!underlineLinks)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  underlineLinks
                    ? 'bg-[#ff4d6d]/30 border-2 border-[#ff758f]'
                    : 'bg-[#2a0b14]/60 border border-[#ff4d6d]/20 hover:bg-[#ff4d6d]/10'
                }`}
                aria-pressed={underlineLinks}
              >
                <span className="text-sm font-medium text-white flex items-center gap-2">
                  <Underline size={16} />
                  הדגש קישורים
                </span>
                <div className={`w-5 h-5 rounded ${underlineLinks ? 'bg-[#ff758f]' : 'bg-gray-600'}`} />
              </button>

              <button
                onClick={resetSettings}
                className="w-full p-3 bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] hover:from-[#ff0a54] hover:to-[#ff4d6d] text-white rounded-xl transition-all text-sm font-bold shadow-lg hover:shadow-xl"
                aria-label="אפס הגדרות נגישות"
              >
                אפס הגדרות
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] hover:from-[#ff0a54] hover:to-[#ff4d6d] text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 border-2 border-[#ff758f]/50 hover:border-[#ff758f] glow-red"
          aria-label={isOpen ? 'סגור תפריט נגישות' : 'פתח תפריט נגישות'}
          aria-expanded={isOpen}
        >
          <Eye size={20} />
        </button>
      </div>
    </>
  );
}
