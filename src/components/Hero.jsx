import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import heroImage from '../assets/94qK0AjjzW2z.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-white py-15 lg:py-15">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Laudos Técnicos e 
                <span> Perícias Judiciais</span>
              </h1>      <p className="text-xl text-gray-600 leading-relaxed">
                Especialista em engenharia diagnóstica e desempenho das edificações, com mais de 5 anos de experiência em laudos técnicos, perícias judiciais e extrajudiciais, vistoria de recebimento de imóvel, recebimento de obras e reformas, fiscalização de obras residenciais, avaliação de imóveis e benfeitorias. Confiança e precisão técnica para cuidar do seu imóvel.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Laudos técnicos especializados</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Perícias judiciais e Assistência técnica</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Vistoria de recebimento de imóvel</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Atendimento personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Vistoria Cautelar de Vizinhança</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-white hover:opacity-90 text-lg px-8 py-3" style={{backgroundColor: '#67769a'}}>
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" style={{borderColor: '#67769a', color: '#67769a'}}>
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#67769a'}}>500+</div>
                <div className="text-sm text-gray-600">Laudos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#67769a'}}>15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#67769a'}}>98%</div>
                <div className="text-sm text-gray-600">Satisfação dos Clientes</div>
              </div>
            </div>          </div>
        </div>
      </div>
    </section>);
};

export default Hero;

