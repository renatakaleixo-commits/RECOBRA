/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/99Hm2LnB/Recobra-Logo.png" 
              alt="Recobra Facilities Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-xl text-slate-950">Recobra Facilities</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#inicio" className="hover:text-amber-700 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-amber-700 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-amber-700 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-amber-700 transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      <section id="inicio" className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl mb-6">Eficiência que move sua operação</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">Soluções operacionais que unem agilidade, controle e eficiência para empresas que precisam de resultados concretos.</p>
            <a href="#servicos" className="inline-block bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-amber-700 transition">Conheça nossos serviços</a>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        <section id="sobre" className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-950">Sobre a Recobra Facilities</h2>
              <div className="prose text-gray-700 space-y-4">
                <p>Há mais de 5 anos, a Recobra Facilities atua entregando soluções operacionais que unem agilidade, controle e eficiência para empresas que precisam de resultados concretos.</p>
                <p>Acreditamos que grandes resultados são alcançados quando pessoas, processos e tecnologia trabalham de forma integrada.</p>
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <img 
                src="https://i.ibb.co/99Hm2LnB/Recobra-Logo.png" 
                alt="Recobra Facilities" 
                className="max-h-[500px] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="font-bold text-slate-950 mb-4">Missão</h3>
              <p className="text-gray-700">Oferecer soluções operacionais com agilidade e eficiência, conectando pessoas e processos para garantir controle, produtividade e qualidade nos serviços prestados.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="font-bold text-slate-950 mb-4">Visão</h3>
              <p className="text-gray-700">Ser reconhecida como referência nacional em soluções operacionais integradas, destacando-se pela eficiência, confiabilidade e capacidade de execução.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="font-bold text-slate-950 mb-4">Valores</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Agilidade com responsabilidade</li>
                <li>Organização e controle</li>
                <li>Trabalho em equipe</li>
                <li>Evolução contínua</li>
                <li>Compromisso com resultados</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
            <p className="text-center font-medium text-slate-500 mb-8">Parceiros estratégicos que confiam em nossa atuação:</p>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {[
                { name: 'Localiza', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_Localiza.png' },
                { name: 'Movida', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Movida_logo.svg' },
                { name: 'Unidas', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Unidas_logo.svg' }
              ].map(parceiro => (
                <img key={parceiro.name} src={parceiro.url} alt={parceiro.name} className="h-24 w-auto object-contain" referrerPolicy="no-referrer" />
              ))}
            </div>
          </div>
        </section>

        <section id="servicos">
          <h2 className="text-3xl font-semibold text-slate-950 text-center mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Soluções operacionais integradas, desenhadas para gerar eficiência e resultado em cada etapa do seu negócio.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-xl hover:border-amber-500 transition-all space-y-4">
              <h3 className="text-xl font-medium text-slate-950">Recuperação de Ativos</h3>
              <p className="text-gray-600">Processos estruturados para localização, negociação e recuperação de ativos com eficiência, segurança jurídica e agilidade operacional.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-xl hover:border-amber-500 transition-all space-y-4">
              <h3 className="text-xl font-medium text-slate-950">Suporte Operacional</h3>
              <p className="text-gray-600">Apoio completo às operações do cliente — desde planejamento até execução — garantindo continuidade, controle e entregas dentro do prazo.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-xl hover:border-amber-500 transition-all space-y-4">
              <h3 className="text-xl font-medium text-slate-950">Gestão de Processos</h3>
              <p className="text-gray-600">Mapeamento, estruturação e otimização de fluxos operacionais para reduzir retrabalho, eliminar gargalos e aumentar a produtividade.</p>
            </div>
          </div>
        </section>

        <section id="clientes" className="bg-slate-50 py-16 px-6 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-slate-950 mb-10">Parceiros Estratégicos</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
                {[
                  { name: 'Localiza', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_Localiza.png' },
                  { name: 'Movida', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Movida_logo.svg' },
                  { name: 'Unidas', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Unidas_logo.svg' }
                ].map(parceiro => (
                  parceiro.url ? (
                    <img 
                      key={parceiro.name} 
                      src={parceiro.url} 
                      alt={parceiro.name} 
                      className="h-32 w-auto object-contain bg-white p-6 rounded-lg shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div 
                      key={parceiro.name} 
                      className={`w-32 h-16 ${parceiro.color} flex items-center justify-center text-white font-bold rounded-lg shadow-sm`}
                    >
                      {parceiro.name}
                    </div>
                  )
                ))}
            </div>
        </section>

        <section id="contato" className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-950 text-center mb-8">Entre em Contato</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Seu Nome" className="w-full p-3 border border-slate-300 rounded-lg" />
            <input type="email" placeholder="Seu E-mail" className="w-full p-3 border border-slate-300 rounded-lg" />
            <textarea placeholder="Sua Mensagem" className="w-full p-3 border border-slate-300 rounded-lg h-32"></textarea>
            <button type="submit" className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition">Enviar</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 mt-16 bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
                <img src="https://i.ibb.co/99Hm2LnB/Recobra-Logo.png" alt="Logo" className="h-8 w-auto" />
                <span className="font-bold text-lg">Recobra Facilities</span>                
            </div>
            <p>Conectando pessoas, processos e resultados.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <p>contato@recobra.com.br</p>
            <p>(11) 99999-9999</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} Recobra Facilities. Todos os direitos reservados.
        </div>
      </footer>
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
