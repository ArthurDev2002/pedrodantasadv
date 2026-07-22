

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/assets/logo.png" 
                alt="PD Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none'; // Esconde se a imagem não existir ainda
                }}
              />
              <div>
                <h2 
                  className="font-bold text-2xl leading-tight tracking-tight text-white"
                  style={{ fontFamily: "'Libre Baskerville', serif" }}
                >
                  Pedro Dantas
                </h2>
                <p className="text-xs uppercase tracking-widest text-brand-gold-light">
                  Advocacia
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Especialistas em causas contra o INSS. Lutamos para garantir o benefício que é seu por direito, com humanidade e transparência.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-brand-gold transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-gold transition-colors text-sm">Sobre o Escritório</a></li>
              <li><a href="#servicos" className="hover:text-brand-gold transition-colors text-sm">Áreas de Atuação</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-gold transition-colors text-sm">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-brand-gold transition-colors text-sm">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h4>
            <ul className="space-y-3">
              <li className="text-sm">Auxílio-Doença Negado</li>
              <li className="text-sm">BPC/LOAS Indeferido</li>
              <li className="text-sm">Aposentadoria Recusada</li>
              <li className="text-sm">Pensão por Morte</li>
              <li className="text-sm">Salário-Maternidade</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-3">
              <li className="text-sm">(81) 99658-7795</li>
              <li className="text-sm">contato@pedrodantas.adv.br</li>
              <li className="text-sm mt-4">
                Av. Norte Miguel Arraes de Alencar, 4097<br/>
                Tamarineira, Recife - PE
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pedro Dantas Advocacia. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span>OAB/PE 12345</span>
            <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
