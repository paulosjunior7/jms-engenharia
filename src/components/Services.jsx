import { FileText, Scale, Building, CheckCircle2, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12" style={{color: '#67769a'}} />,
      title: "Laudos Técnicos",
      description: "Elaboração de laudos técnicos especializados para avaliação de estruturas, instalações e conformidade técnica.",
      features: [
        "Avaliação estrutural",
        "Análise de conformidade",
        "Relatórios detalhados",
        "Documentação técnica"
      ]
    },
    {
      icon: <Scale className="w-12 h-12" style={{color: '#67769a'}} />,
      title: "Perícias Judiciais",
      description: "Perícias técnicas para processos judiciais com rigor científico e imparcialidade técnica.",
      features: [
        "Perícias de engenharia",
        "Avaliação de danos",
        "Assistência técnica",
        "Pareceres especializados"
      ]
    },
    {
      icon: <Building className="w-12 h-12" style={{color: '#67769a'}} />,
      title: "Entrega Pós-Obra",
      description: "Acompanhamento e validação técnica do processo de entrega de obras e empreendimentos.",
      features: [
        "Vistoria final",
        "Check-list técnico",
        "Relatório de entrega",
        "Certificação de qualidade"
      ]
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
      title: "Precisão Técnica",
      description: "Análises detalhadas com base em normas técnicas e metodologias científicas."
    },
    {
      icon: <Clock className="w-8 h-8" style={{color: '#67769a'}} />,
      title: "Agilidade",
      description: "Prazos otimizados sem comprometer a qualidade e rigor técnico."
    },
    {
      icon: <Shield className="w-8 h-8" style={{color: '#8c7d94'}} />,
      title: "Confiabilidade",
      description: "Profissionais certificados com experiência comprovada no mercado."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em engenharia técnica, com foco em qualidade, 
            precisão e atendimento personalizado para cada projeto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Saiba Mais
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher nossos serviços?
            </h3>
            <p className="text-lg text-gray-600">
              Combinamos experiência técnica, tecnologia avançada e atendimento personalizado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

