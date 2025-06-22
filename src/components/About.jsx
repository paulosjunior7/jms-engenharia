import { Award, Users, Target, TrendingUp } from 'lucide-react';
import engineerImage from '../assets/skbR5x0LD83S.jpg';

const About = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" style={{color: '#67769a'}} />,
      number: "500+",
      label: "Projetos Concluídos"
    },
    {
      icon: <Users className="w-8 h-8" style={{color: '#67769a'}} />,
      number: "15+",
      label: "Anos de Experiência"
    },
    {
      icon: <Target className="w-8 h-8" style={{color: '#67769a'}} />,
      number: "98%",
      label: "Taxa de Aprovação"
    },
    {
      icon: <TrendingUp className="w-8 h-8" style={{color: '#67769a'}} />,
      number: "100%",
      label: "Clientes Satisfeitos"
    }
  ];

  const values = [
    {
      title: "Excelência Técnica",
      description: "Comprometimento com a mais alta qualidade técnica em todos os nossos serviços e análises."
    },
    {
      title: "Ética Profissional",
      description: "Conduta íntegra e transparente em todas as nossas atividades e relacionamentos."
    },
    {
      title: "Inovação Contínua",
      description: "Investimento constante em tecnologia e metodologias para oferecer soluções avançadas."
    },
    {
      title: "Atendimento Personalizado",
      description: "Cada projeto é único e recebe atenção especializada conforme suas necessidades específicas."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre Nossa Empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa especializada em engenharia técnica, com foco em laudos, 
            perícias e processos de entrega pós-obra, oferecendo soluções confiáveis e precisas.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Experiência e Confiabilidade em Engenharia
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com mais de 15 anos de atuação no mercado, nossa empresa se consolidou como 
              referência em laudos técnicos e perícias judiciais. Nossa equipe é formada por 
              engenheiros especializados e certificados, com vasta experiência em diferentes 
              segmentos da construção civil.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Utilizamos metodologias avançadas e tecnologia de ponta para garantir a precisão 
              e confiabilidade de nossos serviços. Nosso compromisso é oferecer soluções técnicas 
              que atendam às necessidades específicas de cada cliente, sempre com rigor científico 
              e ética profissional.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Atuamos em projetos residenciais, comerciais e industriais, oferecendo desde 
              laudos técnicos especializados até perícias judiciais complexas, sempre com 
              foco na qualidade e no atendimento personalizado.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={engineerImage}
              alt="Engenheiro profissional"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 text-white p-6 rounded-xl shadow-lg" style={{backgroundColor: '#67769a'}}>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="rounded-2xl p-8 lg:p-12" style={{background: `linear-gradient(to bottom right, #67769a20, #ffffff)`}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-lg text-gray-600">
              Os princípios que norteiam nossa atuação e garantem a qualidade de nossos serviços.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

