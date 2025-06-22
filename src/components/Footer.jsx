import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: '#67769a'}}>
                <span className="text-white font-bold text-lg">ET</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Engenharia Técnica</h3>
                <p className="text-sm text-gray-400">Laudos e Perícias</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em laudos técnicos, perícias judiciais e processos de entrega pós-obra. 
              Confiança e precisão técnica para seus projetos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Laudos Técnicos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Perícias Judiciais
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Entrega Pós-Obra
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria Técnica
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Avaliação Estrutural
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} style={{color: '#67769a'}} />
                <span className="text-gray-400">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} style={{color: '#67769a'}} />
                <span className="text-gray-400">contato@engenharia-laudos.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} style={{color: '#67769a'}} className="mt-1" />
                <span className="text-gray-400">
                  Rua das Engenharias, 123<br />
                  São Paulo/SP - CEP 01234-567
                </span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Horário de Atendimento</h5>
              <p className="text-sm text-gray-400">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Engenharia Técnica. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

