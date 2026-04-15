import { useState, useEffect } from 'react';
import { Eye, Code, Zap, Shield, TrendingUp, ExternalLink, Phone, Mail, MessageCircle, FileText, Palette, Code as CodeIcon, Rocket, Sparkles, CheckCircle, X, Settings } from 'lucide-react';
import { AnimatedServiceCard } from './AnimatedServiceCard';
import { AnimatedProcessStep } from './AnimatedProcessStep';
import { ChatWidget } from './ChatWidget';
import { PortfolioSection } from './PortfolioSection';
import { AdminAuth } from './AdminAuth';
import { AdminPanel } from './AdminPanel';
import { AnimatePresence } from 'framer-motion';
import AccessibilityMenu from './AccessibilityMenu';
import { AccessibilityStatement } from './AccessibilityStatement';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAdminAuth, setShowAdminAuth] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showAccessibilityStatement, setShowAccessibilityStatement] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/codewow100@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'הודעה חדשה מאתר CodeWOW',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" dir="rtl">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-1/4 animate-float">
          <Eye className="w-16 h-16 text-white opacity-10" strokeWidth={1} />
        </div>
        <div className="absolute top-40 left-1/3 animate-float-delayed">
          <Eye className="w-12 h-12 text-[#ff4d6d] opacity-20" strokeWidth={1} />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float-slow">
          <Eye className="w-20 h-20 text-white opacity-5" strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 left-20 animate-float">
          <Eye className="w-14 h-14 text-[#c9184a] opacity-15" strokeWidth={1} />
        </div>
        <div className="absolute bottom-20 left-1/2 animate-float-delayed">
          <Eye className="w-10 h-10 text-white opacity-10" strokeWidth={1} />
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#590d22]/30 py-4">
        <div className="flex items-center gap-3 justify-center">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center glow-red">
            <Code className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-wider logo-text">CodeWOW</h2>
        </div>
      </div>

      <section className="relative">
        <div className="text-center py-12 px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-[#ff758f] via-[#ff4d6d] to-[#c9184a] text-transparent bg-clip-text animate-gradient" style={{ fontFamily: "'Varela Round', sans-serif", fontWeight: 700 }}>
            רוצים אתר שתופס ת'עין?
          </h1>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-6 mb-8">
          <div className="grid grid-cols-2 gap-0">
            <div className="relative overflow-hidden rounded-r-none rounded-l-2xl border-2 border-r-0 border-[#ff4d6d]/40 glow-red-sm" style={{ height: '350px' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1) contrast(1.1) saturate(1.2)' }}
                aria-label="סרטון הדגמה של פרויקטים"
              >
                <source src="https://storage.googleapis.com/my-wordpress-media-files/VIDEO/MY%20VID/grok_video_2026-03-10-08-49-31.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative overflow-hidden rounded-l-none rounded-r-2xl border-2 border-l-0 border-[#ff4d6d]/40 glow-red-sm" style={{ height: '350px' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1) contrast(1.1) saturate(1.2)' }}
                aria-label="סרטון הדגמה של פרויקטים"
              >
                <source src="https://storage.googleapis.com/my-wordpress-media-files/VIDEO/MY%20VID/grok_video_2026-03-10-08-49-31.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-20">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#ff4d6d]/20 via-[#ff0a54]/15 to-[#c9184a]/20 border-2 border-[#ff4d6d]/40 backdrop-blur-sm glow-red shadow-glow-xl pop-in">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d6d]/10 to-[#ff0a54]/10 rounded-3xl blur-2xl -z-10"></div>

            <p className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ff758f] via-[#ff4d6d] to-[#ff0a54] text-transparent bg-clip-text leading-relaxed logo-text">
              CodeWOW
            </p>
            <p className="text-2xl md:text-3xl text-white mb-8 leading-relaxed font-semibold">
              בניית אתרים, דפי נחיתה ותחזוק אתרים ברמה אחרת!
            </p>
            <p className="text-xl md:text-2xl text-[#ff758f] mb-12 leading-relaxed">
              הופכים רעיונות למציאות דיגיטלית מרשימה שמושכת תשומת לב ומייצרת תוצאות
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-[#ff0a54] via-[#ff4d6d] to-[#ff0a54] rounded-xl font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-110 glow-red shadow-glow-lg hover:shadow-glow-xl"
              >
                <span className="relative z-10">צור קשר עכשיו</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d6d] to-[#ff0a54] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#portfolio"
                className="px-10 py-5 border-3 border-[#ff4d6d] rounded-xl font-bold text-xl hover:bg-[#ff4d6d]/20 transition-all duration-300 hover:scale-110 hover:shadow-glow-lg bg-black/50 backdrop-blur-sm"
              >
                צפה בתיק עבודות
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-20 w-[420px] h-[420px] rounded-full blur-[120px] animate-soft-float-1"
            style={{
              background: 'radial-gradient(circle, rgba(255,117,143,0.30) 0%, rgba(255,117,143,0.15) 40%, transparent 70%)'
            }}
          ></div>
          <div
            className="absolute top-40 right-32 w-[350px] h-[350px] rounded-full blur-3xl animate-soft-float-2"
            style={{
              background: 'radial-gradient(circle, rgba(255,77,109,0.25) 0%, rgba(255,77,109,0.12) 40%, transparent 70%)'
            }}
          ></div>
          <div
            className="absolute bottom-32 left-40 w-[500px] h-[500px] rounded-full blur-[160px] animate-soft-float-3"
            style={{
              background: 'radial-gradient(circle, rgba(255,10,84,0.20) 0%, rgba(255,10,84,0.10) 40%, transparent 70%)'
            }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-[380px] h-[380px] rounded-full blur-[120px] animate-soft-float-4"
            style={{
              background: 'radial-gradient(circle, rgba(201,24,74,0.25) 0%, rgba(201,24,74,0.12) 40%, transparent 70%)'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#ff758f] to-[#ff4d6d] text-transparent bg-clip-text" style={{ fontFamily: "'Varela Round', sans-serif", fontWeight: 700 }}>
              המומחיות שלנו
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] mx-auto rounded-full glow-red shadow-glow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
            {[
              { icon: Code, title: 'בניית אתרים', desc: 'אתרים מותאמים אישית עם עיצוב מיוחד חדשני וביצועים מעולים' },
              { icon: Zap, title: 'דפי נחיתה ממירים', desc: 'דפי נחיתה שמייצרים תוצאות והופכים מבקרים ללקוחות' },
              { icon: Shield, title: 'תחזוקת אתרים', desc: 'שמירה על האתר שלך מעודכן, חדשני וידידותי למשתמש' },
              { icon: Sparkles, title: 'UI / UX – חוויית משתמש ועיצוב ממשק', desc: 'חוויית משתמש אינטואיטיבית לצד עיצוב ויזואלי מוקפד והנגשה ידידותית' },
              { icon: CheckCircle, title: 'בקרת איכות', desc: 'בדיקות מקיפות End-to-End להבטחת אתר יציב, תקין וחוויית משתמש המבוצעות ע"י QA בעלת ניסיון עשיר במערכות' }
            ].map((service, index) => (
              <AnimatedServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative py-12 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-32 left-24 w-[420px] h-[420px] rounded-full blur-[120px] animate-soft-float-1"
            style={{
              background: 'radial-gradient(circle, rgba(255,77,109,0.20) 0%, rgba(255,77,109,0.10) 40%, transparent 70%)'
            }}
          ></div>
          <div
            className="absolute top-48 right-28 w-[380px] h-[380px] rounded-full blur-3xl animate-soft-float-3"
            style={{
              background: 'radial-gradient(circle, rgba(255,117,143,0.18) 0%, rgba(255,117,143,0.08) 40%, transparent 70%)'
            }}
          ></div>
          <div
            className="absolute bottom-28 left-36 w-[460px] h-[460px] rounded-full blur-[140px] animate-soft-float-2"
            style={{
              background: 'radial-gradient(circle, rgba(201,24,74,0.22) 0%, rgba(201,24,74,0.11) 40%, transparent 70%)'
            }}
          ></div>
          <div
            className="absolute bottom-32 right-24 w-[400px] h-[400px] rounded-full blur-[120px] animate-soft-float-4"
            style={{
              background: 'radial-gradient(circle, rgba(255,10,84,0.16) 0%, rgba(255,10,84,0.08) 40%, transparent 70%)'
            }}
          ></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16 zoom-in">
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#ff758f] to-[#ff4d6d] text-transparent bg-clip-text" style={{ fontFamily: "'Varela Round', sans-serif", fontWeight: 700 }}>
            איך זה עובד ?
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] mx-auto rounded-full glow-red shadow-glow"></div>
          </div>

          <div className="space-y-8 flex flex-col items-center">
            {[
              {
                icon: FileText,
                number: '01',
                title: 'אפיון האתר',
                desc: 'הבנת הצרכים והמטרות שלך'
              },
              {
                icon: Palette,
                number: '02',
                title: 'UI / UX – חוויית משתמש ועיצוב ממשק',
                desc: 'יצירת עיצוב ייחודי בדגש על חווית משתמש'
              },
              {
                icon: CodeIcon,
                number: '03',
                title: 'פיתוח ויישום  מקצועי',
                desc: 'דגש על פונקציונליות , UI UX וטכנולוגיות מתקדמות'
              },
              {
                icon: CheckCircle,
                number: '04',
                title: 'בקרת איכות',
                desc: 'בדיקות מקיפות להבטחת מוצר איכותי ויציב'
              },
              {
                icon: Rocket,
                number: '05',
                title: 'עלייה לאוויר',
                desc: 'השקה מוצלחת והדרכה מלאה'
              }
            ].map((step, index) => (
              <AnimatedProcessStep
                key={index}
                icon={step.icon}
                number={step.number}
                title={step.title}
                desc={step.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />

      <section id="contact" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#2b0008] via-[#6b0f1a] via-[#a81d3a] to-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6F8F]/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#FFB1B1]/15 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-radial from-[#ff788c]/15 to-transparent blur-2xl opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Varela Round', sans-serif" }}>
              <span className="text-[#FF9BB0]">
                {'בואו נדבר'.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="letter-animate"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      display: letter === ' ' ? 'inline' : 'inline-block',
                      marginLeft: letter === ' ' ? '0.3em' : '0'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </h2>
            <p className="subtitle-animate text-[#FFD1D6]/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light" style={{ fontFamily: "'Heebo', sans-serif" }}>
              תנו לנו להפוך את החזון שלכם למציאות דיגיטלית מרשימה
            </p>
            <div className="line-animate h-0.5 bg-gradient-to-r from-[#FF6F61] to-[#FF4F7A] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 scroll-fade-in">
              <div className="group relative">
                <div className="relative p-6 rounded-2xl bg-[#2a0b14]/80 backdrop-blur-md border border-[#ff8ea6]/30 hover:border-[#ff8ea6]/60 hover:shadow-[0_0_25px_rgba(255,120,150,0.25)] transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6F8F] to-[#FF3B6A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_12px_rgba(255,80,120,0.5)]">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[#FF9BB0] text-sm uppercase tracking-wider mb-1 font-semibold" style={{ fontFamily: "'Heebo', sans-serif" }}>טלפון</p>
                      <a href="tel:0556686216" className="text-xl font-bold text-white hover:text-[#FFD1D6] transition-colors" style={{ fontFamily: "'Heebo', sans-serif" }}>
                        055-668-6216
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="relative p-6 rounded-2xl bg-[#2a0b14]/80 backdrop-blur-md border border-[#ff8ea6]/30 hover:border-[#ff8ea6]/60 hover:shadow-[0_0_25px_rgba(255,120,150,0.25)] transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6F61] to-[#FF4F7A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_12px_rgba(255,111,97,0.5)]">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#FF9BB0] text-sm uppercase tracking-wider mb-1 font-semibold" style={{ fontFamily: "'Heebo', sans-serif" }}>אימייל</p>
                      <a href="mailto:codewow100@gmail.com" className="text-xl font-bold text-white hover:text-[#FFD1D6] transition-colors block truncate" style={{ fontFamily: "'Heebo', sans-serif" }}>
                        codewow100@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/972556686216"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div className="relative p-6 rounded-2xl bg-[#2a0b14]/80 backdrop-blur-md border border-[#ff8ea6]/30 hover:border-[#ff8ea6]/60 hover:shadow-[0_0_25px_rgba(255,120,150,0.25)] transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFB1B1] to-[#FF4F7A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_12px_rgba(255,177,177,0.5)]">
                      <MessageCircle className="w-7 h-7 text-white/95" />
                    </div>
                    <div>
                      <p className="text-xl font-bold mb-1 text-white" style={{ fontFamily: "'Heebo', sans-serif" }}>שלח הודעה בוואטסאפ</p>
                      <p className="text-[#FFD1D6]/80 text-sm" style={{ fontFamily: "'Heebo', sans-serif" }}>תגובה מהירה ומיידית</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="scroll-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-[#ff788c]/15 to-transparent blur-2xl rounded-3xl"></div>
                <div className="relative p-8 rounded-3xl bg-[#2a0b14]/80 backdrop-blur-md border border-[#ff8ea6]/40">
                  <div className="relative space-y-5">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-[#FF9BB0]" style={{ fontFamily: "'Varela Round', sans-serif" }}>
                        נשמח לשמוע מכם
                      </h3>
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="שם מלא"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        disabled={isSubmitting}
                        style={{ fontFamily: "'Heebo', sans-serif" }}
                        className="w-full px-5 py-4 rounded-xl bg-[#2a0b14] border border-[#ff8ea6]/40 focus:border-[#ff4f7a] focus:shadow-[0_0_10px_rgba(255,80,120,0.3)] outline-none transition-all duration-300 text-white text-lg placeholder-[#ffb8c4]/60 disabled:opacity-50 hover:border-[#ff8ea6]/60"
                      />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="כתובת אימייל"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        disabled={isSubmitting}
                        style={{ fontFamily: "'Heebo', sans-serif" }}
                        className="w-full px-5 py-4 rounded-xl bg-[#2a0b14] border border-[#ff8ea6]/40 focus:border-[#ff4f7a] focus:shadow-[0_0_10px_rgba(255,80,120,0.3)] outline-none transition-all duration-300 text-white text-lg placeholder-[#ffb8c4]/60 disabled:opacity-50 hover:border-[#ff8ea6]/60"
                      />
                    </div>

                    <div className="relative group">
                      <textarea
                        placeholder="ספרו לנו על הפרויקט שלכם..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        disabled={isSubmitting}
                        rows={6}
                        style={{ fontFamily: "'Heebo', sans-serif" }}
                        className="w-full px-5 py-4 rounded-xl bg-[#2a0b14] border border-[#ff8ea6]/40 focus:border-[#ff4f7a] focus:shadow-[0_0_10px_rgba(255,80,120,0.3)] outline-none transition-all duration-300 text-white text-lg placeholder-[#ffb8c4]/60 resize-none disabled:opacity-50 hover:border-[#ff8ea6]/60"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{ fontFamily: "'Varela Round', sans-serif" }}
                      className="w-full px-10 py-5 bg-gradient-to-r from-[#FF4F7A] to-[#FF1E42] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,80,120,0.6)] rounded-xl font-bold text-xl text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {isSubmitted && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
                <div className="relative max-w-lg mx-4 p-10 rounded-3xl bg-gradient-to-br from-[#2a0b14]/95 via-[#3d0e1c]/95 to-[#1a0510]/95 border-2 border-[#ff758f]/60 shadow-[0_0_60px_rgba(255,77,109,0.4)] backdrop-blur-xl animate-scale-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d]/10 via-transparent to-[#c9184a]/10 rounded-3xl"></div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#ff4d6d]/20 hover:bg-[#ff4d6d]/40 border border-[#ff758f]/40 hover:border-[#ff758f]/80 transition-all duration-300 hover:scale-110 group z-10"
                    aria-label="סגור"
                  >
                    <X className="w-5 h-5 text-[#ff758f] group-hover:text-white transition-colors" />
                  </button>

                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] rounded-full blur-xl animate-pulse"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-[#ff758f] to-[#ff4d6d] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,77,109,0.6)] animate-bounce-slow">
                          <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-3 mb-6">
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-[#ff758f] via-[#ff4d6d] to-[#ff0a54] text-transparent bg-clip-text animate-fade-in" style={{ fontFamily: "'Playpen Sans Hebrew', sans-serif" }}>
                        ההודעה נשלחה בהצלחה!
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] mx-auto rounded-full shadow-glow"></div>
                      <p className="text-xl text-[#FFD1D6] font-medium pt-2" style={{ fontFamily: "'Heebo', sans-serif" }}>
                        נחזור אליכם בהקדם האפשרי
                      </p>
                      <p className="text-base text-[#FFD1D6]/70" style={{ fontFamily: "'Heebo', sans-serif" }}>
                        תודה על פנייתכם אלינו
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <div className="relative w-full max-w-xs h-2 bg-[#2a0b14] rounded-full overflow-hidden border border-[#ff758f]/30">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d6d] via-[#ff758f] to-[#ff4d6d] animate-progress-bar shadow-[0_0_10px_rgba(255,77,109,0.5)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-[#590d22]/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center glow-red-sm">
              <Code className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold logo-text">CodeWOW</span>
          </div>
          <div className="mb-3">
            <button
              onClick={() => setShowAccessibilityStatement(true)}
              className="text-[#ff758f] hover:text-[#ff4d6d] transition-colors underline text-sm font-medium"
            >
              הצהרת נגישות
            </button>
          </div>
          <p className="text-gray-400">
            © 2026 CodeWOW. כל הזכויות שמורות.
          </p>
        </div>
      </footer>

      <button
        onClick={() => setShowAdminAuth(true)}
        className="fixed bottom-4 left-4 px-3 py-2 bg-black border border-gray-700 rounded-lg hover:border-[#ff758f]/50 transition-all duration-300 z-40 flex items-center gap-2 opacity-0 hover:opacity-100"
        aria-label="Admin"
      >
        <Settings className="w-4 h-4 text-gray-400" />
        <span className="text-xs text-gray-400" style={{ fontFamily: "'Heebo', sans-serif" }}>ניהול מערכת</span>
      </button>

      <ChatWidget />
      <AccessibilityMenu />

      <AnimatePresence>
        {showAdminAuth && !showAdminPanel && (
          <AdminAuth
            onClose={() => setShowAdminAuth(false)}
            onAuthenticated={() => {
              setShowAdminAuth(false);
              setShowAdminPanel(true);
            }}
          />
        )}
        {showAdminPanel && (
          <AdminPanel onClose={() => setShowAdminPanel(false)} />
        )}
      </AnimatePresence>

      {showAccessibilityStatement && (
        <AccessibilityStatement onClose={() => setShowAccessibilityStatement(false)} />
      )}
    </div>
  );
}

export default App;
