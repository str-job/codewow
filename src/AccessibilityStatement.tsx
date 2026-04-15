import React from 'react';
import { X, Eye, Mail } from 'lucide-react';

interface AccessibilityStatementProps {
  onClose: () => void;
}

export function AccessibilityStatement({ onClose }: AccessibilityStatementProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-3xl mx-4 my-8 max-h-[90vh] overflow-y-auto">
        <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#1a0510]/98 via-[#2a0b14]/98 to-[#1a0510]/98 border-2 border-[#ff4d6d]/50 shadow-[0_0_60px_rgba(255,77,109,0.4)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d]/5 via-transparent to-[#c9184a]/5 rounded-3xl pointer-events-none"></div>

          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#ff4d6d]/20 hover:bg-[#ff4d6d]/40 border border-[#ff758f]/40 hover:border-[#ff758f]/80 transition-all duration-300 hover:scale-110 group z-10"
            aria-label="סגור"
          >
            <X className="w-5 h-5 text-[#ff758f] group-hover:text-white transition-colors" />
          </button>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] rounded-full glow-red">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#ff758f] via-[#ff4d6d] to-[#ff0a54] text-transparent bg-clip-text">
                הצהרת נגישות
              </h2>
            </div>

            <div className="w-32 h-1 bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] mx-auto rounded-full mb-8 shadow-glow"></div>

            <div className="space-y-6 text-white">
              <div className="bg-[#2a0b14]/60 rounded-2xl p-6 border border-[#ff4d6d]/20">
                <h3 className="text-xl font-bold text-[#ff758f] mb-4">Code WOW - מחויבות לנגישות</h3>
                <p className="text-gray-200 leading-relaxed text-base">
                  בסטודיו Code WOW אנו רואים חשיבות עליונה במתן שירות שוויוני לכלל הגולשים. השקענו מאמצים רבים בהנגשת האתר בהתאם לתקן הישראלי ת"י 5568 וברמה AA של תקן WCAG 2.1.
                </p>
              </div>

              <div className="bg-[#2a0b14]/60 rounded-2xl p-6 border border-[#ff4d6d]/20">
                <h3 className="text-xl font-bold text-[#ff758f] mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#ff758f] rounded-full"></div>
                  מה בוצע באתר
                </h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4d6d] mt-1">✓</span>
                    <span className="leading-relaxed">התאמה לניווט באמצעות מקלדת לכלל תפריטי האתר והפעולות.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4d6d] mt-1">✓</span>
                    <span className="leading-relaxed">תמיכה מלאה בטכנולוגיות מסייעות כמו קוראי מסך (NVDA, JAWS).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4d6d] mt-1">✓</span>
                    <span className="leading-relaxed">אפשרות לשינוי ניגודיות צבעים, הגדלת טקסט והדגשת קישורים דרך תפריט הנגישות.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4d6d] mt-1">✓</span>
                    <span className="leading-relaxed">תיוג תמונות עם טקסט חלופי (Alt text) לשיפור הבנת התוכן.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4d6d] mt-1">✓</span>
                    <span className="leading-relaxed">מבנה סמנטי נכון של דפי האתר לשיפור הניווט והנגישות.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4d6d] mt-1">✓</span>
                    <span className="leading-relaxed">ניגודיות צבעים מתאימה בין הטקסט לרקע לקריאה נוחה.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#2a0b14]/60 rounded-2xl p-6 border border-[#ff4d6d]/20">
                <h3 className="text-xl font-bold text-[#ff758f] mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  פרטי רכזת הנגישות
                </h3>
                <div className="space-y-2 text-gray-200">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-[#ff758f]">שם:</span> Code WOW
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-[#ff758f]">אימייל:</span>{' '}
                    <a
                      href="mailto:codewow100@gmail.com"
                      className="text-[#ff4d6d] hover:text-[#ff758f] underline transition-colors"
                    >
                      codewow100@gmail.com
                    </a>
                  </p>
                  <p className="leading-relaxed mt-4 text-sm text-gray-300">
                    במידה ונתקלתם בבעיית נגישות באתר, אנא פנו אלינו ונשתדל לטפל בבעיה בהקדם האפשרי.
                  </p>
                </div>
              </div>

              <div className="bg-[#2a0b14]/60 rounded-2xl p-6 border border-[#ff4d6d]/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-semibold text-[#ff758f]">תאריך עדכון ההצהרה:</span> מרץ 2026
                </p>
                <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                  הצהרה זעה עודכנה לאחרונה במרץ 2026 ומשקפת את מצב הנגישות הנוכחי של האתר.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] hover:from-[#ff0a54] hover:to-[#ff4d6d] text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                סגור
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
