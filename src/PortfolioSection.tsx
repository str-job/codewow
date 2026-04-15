import { useState, useEffect } from 'react';
import { Eye, ExternalLink } from 'lucide-react';
import { supabase } from './supabaseClient';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  link: string;
  order_index: number;
}

export function PortfolioSection() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    loadPortfolioItems();

    const handlePortfolioUpdate = () => {
      loadPortfolioItems();
    };

    window.addEventListener('portfolio-updated', handlePortfolioUpdate);

    return () => {
      window.removeEventListener('portfolio-updated', handlePortfolioUpdate);
    };
  }, []);

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

  const defaultItem = {
    title: 'tzadikim1.org',
    description: 'אתר מודרני ומרשים המשלב עיצוב ייחודי עם חווית משתמש מעולה',
    link: 'https://tzadikim1.org/'
  };

  const allItems = [defaultItem, ...portfolioItems.map(item => ({
    title: item.title || '',
    description: item.description || '',
    link: item.link
  }))];

  return (
    <section id="portfolio" className="relative py-12 px-6 bg-gradient-to-b from-black via-[#590d22]/5 to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#ff4d6d]/20 rounded-full blur-3xl animate-float-glow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#ff758f]/15 rounded-full blur-3xl animate-float-glow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff0a54]/10 rounded-full blur-3xl animate-float-glow-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 premium-reveal">
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#ff758f] to-[#ff4d6d] text-transparent bg-clip-text" style={{ fontFamily: "'Varela Round', sans-serif", fontWeight: 700 }}>
            {['ת', 'י', 'ק', ' ', 'ע', 'ב', 'ו', 'ד', 'ו', 'ת'].map((letter, index) => (
              <span
                key={index}
                className="stagger-fade-up"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] mx-auto rounded-full glow-red shadow-glow"></div>
          <p className="text-gray-300 text-xl mt-6 max-w-2xl mx-auto">
            פרויקטים מובילים שבאוויר
          </p>
        </div>

        <div className={`grid gap-6 ${allItems.length === 1 ? 'md:grid-cols-1 max-w-xl mx-auto' : 'md:grid-cols-2 justify-items-center'}`}>
          {allItems.map((item, index) => (
            <div
              key={index}
              className="group relative premium-reveal w-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#ff4d6d]/50 hover:border-[#ff4d6d] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(255,70,100,0.35)] transform-gpu backdrop-blur-sm shadow-glow-lg will-change-transform h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d]/10 to-[#c9184a]/10 group-hover:from-[#ff4d6d]/20 group-hover:to-[#c9184a]/20 transition-all duration-500"></div>

                <div className="bg-gradient-to-br from-black/95 to-[#1a0510]/95 flex items-center justify-center relative overflow-hidden" style={{ minHeight: '280px' }}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsNzcsNjksMC4yKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-grid-move"></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                  <div className="relative z-10 text-center p-6">
                    <div className="inline-block p-4 rounded-full bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] mb-4 glow-red shadow-glow-xl group-hover:scale-[1.15] group-hover:rotate-[8deg] group-hover:shadow-[0_0_50px_rgba(255,77,109,0.8)] transition-all duration-500 animate-breathe will-change-transform">
                      <Eye className="w-10 h-10" aria-hidden="true" />
                    </div>
                    {item.title && (
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#ff758f] via-[#ff4d6d] to-[#ff0a54] text-transparent bg-clip-text drop-shadow-lg">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-gray-200 mb-4 leading-relaxed text-sm font-medium px-2">
                        {item.description}
                      </p>
                    )}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#ff4d6d] via-[#ff0a54] to-[#c9184a] rounded-lg font-bold text-sm hover:scale-[1.08] hover:shadow-[0_0_35px_rgba(255,80,120,0.7)] transition-all duration-300 glow-red shadow-glow-xl group/btn will-change-transform"
                      aria-label={`כניסה לאתר ${item.title}`}
                    >
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">כניסה לאתר</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-4 bg-gradient-radial from-[#ff4d6d] to-[#c9184a] rounded-2xl opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
