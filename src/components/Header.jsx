import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import jmsLogo from '../assets/JMSLOGOS-01.svg'; // Importar o novo logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="text-white py-2" style={{backgroundColor: '#67769a'}}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(62) 98300-2211</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>engenharia.julianams@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Atendimento: Segunda a Sexta, 8h às 18h</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={jmsLogo} alt="JMS Engenharia Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">JMS Engenharia</h1>
              <p className="text-sm text-gray-600">Laudos e Perícias</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
              Início
            </a>
            <a href="#servicos" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
              Serviços
            </a>
            <a href="#sobre" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
              Contato
            </a>
            <Button className="text-white hover:opacity-90" style={{backgroundColor: '#67769a'}}>
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#inicio" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
                Início
              </a>
              <a href="#servicos" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
                Serviços
              </a>
              <a href="#sobre" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#67769a'}}}>
                Contato
              </a>
              <Button className="text-white hover:opacity-90 w-full" style={{backgroundColor: '#67769a'}}>
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

