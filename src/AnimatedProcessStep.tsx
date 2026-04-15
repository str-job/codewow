import { Video as LucideIcon } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

interface AnimatedProcessStepProps {
  icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
  index: number;
}

export const AnimatedProcessStep = ({ icon: Icon, number, title, desc, index }: AnimatedProcessStepProps) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`relative group w-full max-w-2xl transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)'
      }}
    >
      <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-black/80 to-[#1a0510]/80 border-2 border-[#ff4d6d]/40 hover:border-[#ff4d6d] transition-all duration-500 hover:scale-[1.03] backdrop-blur-sm shadow-glow-lg hover:shadow-glow-xl">
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center glow-red-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 z-10">
            <Icon className="w-7 h-7" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-3xl font-bold bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] text-transparent bg-clip-text">{number}</span>
            <h3 className="text-xl font-bold group-hover:text-[#ff758f] transition-colors duration-300">{title}</h3>
          </div>
          <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] opacity-15 group-hover:opacity-25 blur-xl transition-opacity duration-500 -z-10"></div>
    </div>
  );
};
