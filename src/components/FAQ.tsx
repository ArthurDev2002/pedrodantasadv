import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      id: 0,
      question: 'Meu benefício foi negado pelo INSS. O que devo fazer?',
      answer: 'O primeiro passo é não aceitar a negativa passivamente. Procure um advogado especialista imediatamente. Temos um prazo para entrar com recurso administrativo no próprio INSS ou, na maioria das vezes, a melhor solução é entrar com uma ação na Justiça Federal.',
    },
    {
      id: 1,
      question: 'Quanto tempo demora um processo contra o INSS?',
      answer: 'O tempo varia bastante de acordo com o caso e a região. Processos de auxílio-doença costumam ser mais rápidos por causa da perícia médica urgente. Nossa equipe trabalha com estratégias para acelerar ao máximo a implantação do seu benefício.',
    },
    {
      id: 2,
      question: 'Quais documentos preciso para a primeira consulta?',
      answer: 'Para a análise inicial, tenha em mãos seu RG, CPF, comprovante de residência, a carta de indeferimento do INSS, seu CNIS (extrato previdenciário) e os principais laudos médicos atualizados (no caso de auxílio-doença ou BPC).',
    },
    {
      id: 3,
      question: 'Eu preciso pagar a consulta inicial?',
      answer: 'Não. A nossa primeira análise do seu caso é gratuita. Avaliamos a viabilidade do seu direito sem custo, para que você tenha segurança antes de iniciar qualquer procedimento.',
    },
    {
      id: 4,
      question: 'Moro em outra cidade/estado, posso ser atendido?',
      answer: 'Sim! Nosso atendimento inicial é 100% digital via WhatsApp. Os processos hoje são todos eletrônicos, o que nos permite atender clientes de qualquer lugar com a mesma agilidade e eficiência.',
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Respostas claras para as principais perguntas sobre seus direitos.
          </p>
        </RevealOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={faq.id} delay={(index % 4) + 1} className={`bg-white rounded-2xl border transition-all duration-300 ${openId === faq.id ? 'border-brand-gold shadow-md' : 'border-slate-200 shadow-sm hover:border-brand-navy/30'}`}>
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <h3 className={`font-semibold pr-8 ${openId === faq.id ? 'text-brand-navy' : 'text-slate-700'}`}>
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'transform rotate-180 text-brand-gold' : 'text-slate-400'}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.answer}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
