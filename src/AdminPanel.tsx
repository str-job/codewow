import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Link as LinkIcon, Trash2, CreditCard as Edit } from 'lucide-react';
import { supabase } from './supabaseClient';

interface AdminPanelProps {
  onClose: () => void;
}

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  link: string;
  order_index: number;
}

export function AdminPanel({ onClose }: AdminPanelProps) {
  const [mode, setMode] = useState<'menu' | 'add' | 'edit'>('menu');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  useEffect(() => {
    if (mode === 'edit') {
      loadPortfolioItems();
    }
  }, [mode]);

  const loadPortfolioItems = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setPortfolioItems(data || []);
    } catch (error) {
      console.error('Error loading portfolio items:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק פרויקט זה?')) return;

    setIsDeleting(id);
    try {
      const { error } = await supabase
        .from('portfolio_items')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setPortfolioItems(prev => prev.filter(item => item.id !== id));
      setMessage({ type: 'success', text: 'הפרויקט נמחק בהצלחה!' });

      setTimeout(() => {
        setMessage(null);
      }, 2000);

      window.dispatchEvent(new Event('portfolio-updated'));
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
      setMessage({ type: 'error', text: 'שגיאה במחיקת הפרויקט' });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setIsDeleting(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!link.trim()) {
      setMessage({ type: 'error', text: 'יש להזין לינק' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: existingItems } = await supabase
        .from('portfolio_items')
        .select('order_index')
        .order('order_index', { ascending: false })
        .limit(1);

      const nextOrderIndex = existingItems && existingItems.length > 0
        ? existingItems[0].order_index + 1
        : 1;

      const { error } = await supabase
        .from('portfolio_items')
        .insert({
          title: title.trim() || '',
          description: description.trim() || '',
          link: link.trim(),
          order_index: nextOrderIndex
        });

      if (error) throw error;

      setMessage({ type: 'success', text: 'הפרויקט נוסף בהצלחה!' });
      setTitle('');
      setDescription('');
      setLink('');

      setTimeout(() => {
        setMessage(null);
        setMode('menu');
      }, 1500);

      window.dispatchEvent(new Event('portfolio-updated'));
    } catch (error) {
      console.error('Error adding portfolio item:', error);
      setMessage({ type: 'error', text: 'שגיאה בהוספת הפרויקט' });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setIsSubmitting(false);
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
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl bg-gradient-to-br from-[#1a0510]/95 via-[#2a0b14]/98 to-[#0d0507]/95 backdrop-blur-xl border-2 border-[#ff758f]/40 shadow-[0_20px_80px_rgba(255,77,109,0.4)] p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#ff4d6d]/20 hover:bg-[#ff4d6d]/40 border border-[#ff758f]/30 flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4 text-[#ff758f]" />
          </button>

          <AnimatePresence mode="wait">
            {mode === 'menu' && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#ff758f] to-[#ff4d6d] text-transparent bg-clip-text" style={{ fontFamily: "'Heebo', sans-serif" }}>
                  ניהול תיק עבודות
                </h2>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMode('add')}
                    className="w-full p-6 rounded-xl bg-[#2a0b14]/60 border border-[#ff758f]/30 hover:border-[#ff758f] transition-all flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center shadow-[0_0_20px_rgba(255,77,109,0.5)]">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right flex-1">
                      <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Heebo', sans-serif" }}>הוספת פרויקט חדש</h3>
                      <p className="text-sm text-[#FFD1D6]/70" style={{ fontFamily: "'Heebo', sans-serif" }}>הוסף פרויקט חדש לתיק העבודות</p>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMode('edit')}
                    className="w-full p-6 rounded-xl bg-[#2a0b14]/60 border border-[#ff758f]/30 hover:border-[#ff758f] transition-all flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center shadow-[0_0_20px_rgba(255,77,109,0.5)]">
                      <Edit className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right flex-1">
                      <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Heebo', sans-serif" }}>עריכה ומחיקה</h3>
                      <p className="text-sm text-[#FFD1D6]/70" style={{ fontFamily: "'Heebo', sans-serif" }}>נהל פרויקטים קיימים</p>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {mode === 'add' && (
              <motion.div
                key="add"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <button
                  onClick={() => setMode('menu')}
                  className="mb-4 text-[#ff758f] hover:text-[#ff4d6d] transition-colors flex items-center gap-2"
                  style={{ fontFamily: "'Heebo', sans-serif" }}
                >
                  <span>← חזור</span>
                </button>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center shadow-[0_0_30px_rgba(255,77,109,0.5)]">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff758f] to-[#ff4d6d] text-transparent bg-clip-text" style={{ fontFamily: "'Heebo', sans-serif" }}>
                  הוספת פרויקט לתיק עבודות
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#FFD1D6] text-sm mb-2" style={{ fontFamily: "'Heebo', sans-serif" }}>
                      כותרת (אופציונלי)
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#2a0b14]/60 border border-[#ff758f]/30 text-white placeholder-[#FFD1D6]/40 focus:outline-none focus:border-[#ff758f] transition-colors"
                      style={{ fontFamily: "'Heebo', sans-serif" }}
                      placeholder="שם הפרויקט"
                    />
                  </div>

                  <div>
                    <label className="block text-[#FFD1D6] text-sm mb-2" style={{ fontFamily: "'Heebo', sans-serif" }}>
                      תיאור (אופציונלי)
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-[#2a0b14]/60 border border-[#ff758f]/30 text-white placeholder-[#FFD1D6]/40 focus:outline-none focus:border-[#ff758f] transition-colors resize-none"
                      style={{ fontFamily: "'Heebo', sans-serif" }}
                      placeholder="תיאור קצר של הפרויקט"
                    />
                  </div>

                  <div>
                    <label className="block text-[#FFD1D6] text-sm mb-2" style={{ fontFamily: "'Heebo', sans-serif" }}>
                      לינק לפרויקט
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ff758f]/60" />
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full px-4 py-3 pr-12 rounded-xl bg-[#2a0b14]/60 border border-[#ff758f]/30 text-white placeholder-[#FFD1D6]/40 focus:outline-none focus:border-[#ff758f] transition-colors"
                        style={{ fontFamily: "'Heebo', sans-serif" }}
                        placeholder="https://example.com"
                        required
                      />
                    </div>
                  </div>

                  {message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center py-2 px-4 rounded-lg ${
                        message.type === 'success'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-[#ff4d6d]/20 text-[#ff4d6d] border border-[#ff4d6d]/30'
                      }`}
                      style={{ fontFamily: "'Heebo', sans-serif" }}
                    >
                      {message.text}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] text-white font-bold shadow-[0_0_20px_rgba(255,77,109,0.4)] hover:shadow-[0_0_30px_rgba(255,77,109,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'Heebo', sans-serif" }}
                  >
                    {isSubmitting ? 'מוסיף...' : 'הוסף פרויקט'}
                  </motion.button>
                </form>
              </motion.div>
            )}

            {mode === 'edit' && (
              <motion.div
                key="edit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <button
                  onClick={() => setMode('menu')}
                  className="mb-4 text-[#ff758f] hover:text-[#ff4d6d] transition-colors flex items-center gap-2"
                  style={{ fontFamily: "'Heebo', sans-serif" }}
                >
                  <span>← חזור</span>
                </button>

                <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff758f] to-[#ff4d6d] text-transparent bg-clip-text" style={{ fontFamily: "'Heebo', sans-serif" }}>
                  עריכה ומחיקת פרויקטים
                </h2>

                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center py-2 px-4 rounded-lg mb-4 ${
                      message.type === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-[#ff4d6d]/20 text-[#ff4d6d] border border-[#ff4d6d]/30'
                    }`}
                    style={{ fontFamily: "'Heebo', sans-serif" }}
                  >
                    {message.text}
                  </motion.div>
                )}

                {portfolioItems.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-[#FFD1D6]/60 text-lg" style={{ fontFamily: "'Heebo', sans-serif" }}>
                      אין פרויקטים להצגה
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {portfolioItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-[#2a0b14]/60 border border-[#ff758f]/30 flex items-center gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          {item.title && (
                            <h3 className="text-white font-bold mb-1 truncate" style={{ fontFamily: "'Heebo', sans-serif" }}>
                              {item.title}
                            </h3>
                          )}
                          <p className="text-[#FFD1D6]/70 text-sm truncate" style={{ fontFamily: "'Heebo', sans-serif" }}>
                            {item.link}
                          </p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(item.id)}
                          disabled={isDeleting === item.id}
                          className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 flex items-center justify-center transition-all disabled:opacity-50"
                        >
                          <Trash2 className="w-5 h-5 text-red-400" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
