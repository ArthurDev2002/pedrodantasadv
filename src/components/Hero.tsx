import { ArrowRight, ShieldCheck, Scale, Clock } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero = ({ onOpenQuiz }: HeroProps) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/hero.jpg')",
          backgroundPosition: "center 80%" 
        }}
      >
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/30 to-transparent md:via-brand-navy/10 md:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/50 border border-brand-gold/30 text-brand-gold text-sm font-medium mb-6 opacity-0 animate-fade-in-up backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Especialistas em Direito Previdenciário</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up-delay-1 drop-shadow-lg">
            Benefício negado <br /> pelo <span className="text-brand-gold">INSS?</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl opacity-0 animate-fade-in-up-delay-1 drop-shadow-md">
            Não desista dos seus direitos. Nossa equipe especializada está pronta para analisar o seu caso e reverter a decisão do INSS. Você não está sozinho nessa luta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-fade-in-up-delay-2">
            <button
              onClick={onOpenQuiz}
              className="inline-flex justify-center items-center gap-2 bg-brand-gold text-brand-navy px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-brand-gold-light hover:scale-105 shadow-lg shadow-brand-gold/20"
            >
              Análise Gratuita do Caso
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20 opacity-0 animate-fade-in-up-delay-2 backdrop-blur-sm bg-brand-navy/30 p-6 rounded-2xl max-w-2xl">
            <div>
              <p className="text-3xl font-bold text-white mb-1">4.9</p>
              <div className="flex text-brand-gold mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-slate-300">Avaliações no Google</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Scale className="w-6 h-6 text-brand-gold" />
              </div>
              <p className="font-semibold text-white">Especialistas</p>
              <p className="text-xs text-slate-300">em causas complexas</p>
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-brand-gold" />
              </div>
              <p className="font-semibold text-white">Atendimento</p>
              <p className="text-xs text-slate-300">rápido e humanizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
