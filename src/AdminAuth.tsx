import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock } from 'lucide-react';

interface AdminAuthProps {
  onClose: () => void;
  onAuthenticated: () => void;
}

const ADMIN_PASSWORD = 'Csxcsx100!';

export function AdminAuth({ onClose, onAuthenticated }: AdminAuthProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onAuthenticated();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl bg-gradient-to-br from-[#1a0510]/95 via-[#2a0b14]/98 to-[#0d0507]/95 backdrop-blur-xl border-2 border-[#ff758f]/40 shadow-[0_20px_80px_rgba(255,77,109,0.4)] p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#ff4d6d]/20 hover:bg-[#ff4d6d]/40 border border-[#ff758f]/30 flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4 text-[#ff758f]" />
          </button>

          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center shadow-[0_0_30px_rgba(255,77,109,0.5)]">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff758f] to-[#ff4d6d] text-transparent bg-clip-text" style={{ fontFamily: "'Heebo', sans-serif" }}>
            ניהול מערכת
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#FFD1D6] text-sm mb-2" style={{ fontFamily: "'Heebo', sans-serif" }}>
                סיסמה
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#2a0b14]/60 border border-[#ff758f]/30 text-white placeholder-[#FFD1D6]/40 focus:outline-none focus:border-[#ff758f] transition-colors"
                style={{ fontFamily: "'Heebo', sans-serif" }}
                placeholder="הזן סיסמה"
                autoFocus
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[#ff4d6d] text-sm text-center"
                  style={{ fontFamily: "'Heebo', sans-serif" }}
                >
                  סיסמה שגויה
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] text-white font-bold shadow-[0_0_20px_rgba(255,77,109,0.4)] hover:shadow-[0_0_30px_rgba(255,77,109,0.6)] transition-all"
              style={{ fontFamily: "'Heebo', sans-serif" }}
            >
              כניסה
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
