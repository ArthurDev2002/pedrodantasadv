
import { RevealOnScroll } from './RevealOnScroll';

const teamMembers = [
  {
    id: 1,
    name: 'Nome do Profissional',
    role: 'Advogada Associada',
    description: 'Especialista em Direito Previdenciário com foco em Aposentadorias e Planejamento Previdenciário.',
    image: '/assets/equipe/membro-01.jpg',
  },
  {
    id: 2,
    name: 'Nome do Profissional',
    role: 'Advogada Associada',
    description: 'Especialista em Benefícios por Incapacidade e Recursos Administrativos no INSS.',
    image: '/assets/equipe/membro-02.jpg',
  },
  {
    id: 3,
    name: 'Nome do Profissional',
    role: 'Assistente Jurídico',
    description: 'Responsável pelo atendimento ao cliente e acompanhamento processual diário.',
    image: '/assets/equipe/membro-03.jpg',
  },
  {
    id: 4,
    name: 'Nome do Profissional',
    role: 'Especialista',
    description: 'Atuação focada na análise estratégica de benefícios e cálculos previdenciários.',
    image: '/assets/equipe/membro-04.jpg',
  }
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-3">
            Nossa Equipe
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
            Profissionais dedicados ao seu direito
          </h3>
          <p className="text-lg text-slate-600">
            Trabalhamos em conjunto para analisar minuciosamente cada detalhe do seu caso, unindo expertise e atendimento humanizado.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <RevealOnScroll key={member.id} delay={(index % 4) + 1} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=0f2940&color=d4af37&size=400';
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-gold transition-colors">
                  {member.name}
                </h4>
                <p className="text-brand-gold font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Full Team Banner */}
        <RevealOnScroll delay={2} className="mt-16 bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
              Unidos por um único propósito: <span className="text-brand-gold">O seu direito.</span>
            </h4>
            <p className="text-slate-600 text-lg leading-relaxed">
              Trabalhamos de forma integrada. Enquanto um especialista analisa a documentação, outro planeja a melhor estratégia para a audiência. Essa soma de esforços e conhecimentos garante que nenhum detalhe passe despercebido no seu caso.
            </p>
          </div>
          <div className="w-full md:w-1/2 min-h-[400px] md:min-h-0 relative">
            <img 
              src="/assets/equipe/equipe-reunida.jpg" 
              alt="Equipe Pedro Dantas Advocacia reunida no escritório" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Team;
