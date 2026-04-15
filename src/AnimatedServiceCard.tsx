import { Video as LucideIcon } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

interface AnimatedServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}

export const AnimatedServiceCard = ({ icon: Icon, title, desc, delay }: AnimatedServiceCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br from-black/80 to-[#1a0510]/80 border-2 border-[#ff4d6d]/30 hover:border-[#ff4d6d] transition-all duration-500 hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-glow-xl w-full ${
        isVisible ? 'pop-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d]/0 to-[#c9184a]/0 group-hover:from-[#ff4d6d]/20 group-hover:to-[#c9184a]/10 rounded-2xl transition-all duration-500"></div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 glow-red-sm shadow-glow">
          <Icon className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff758f] transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};
