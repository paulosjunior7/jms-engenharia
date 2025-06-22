import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" style={{color: '#67769a'}} />,
      title: "Telefone",
      info: "(11) 9999-9999",
      description: "Ligue para nós"
    },
    {
      icon: <Mail className="w-6 h-6" style={{color: '#67769a'}} />,
      title: "E-mail",
      info: "contato@engenharia-laudos.com.br",
      description: "Envie sua mensagem"
    },
    {
      icon: <MapPin className="w-6 h-6" style={{color: '#67769a'}} />,
      title: "Endereço",
      info: "Rua das Engenharias, 123 - São Paulo/SP",
      description: "Visite nosso escritório"
    },
    {
      icon: <Clock className="w-6 h-6" style={{color: '#67769a'}} />,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h",
      description: "Horário de atendimento"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades em laudos técnicos e perícias. 
            Entre em contato conosco e solicite seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite seu Orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{'&:focus': {ringColor: '#67769a'}}}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="laudo-tecnico">Laudo Técnico</option>
                    <option value="pericia-judicial">Perícia Judicial</option>
                    <option value="entrega-pos-obra">Entrega Pós-Obra</option>
                    <option value="consultoria">Consultoria</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva detalhadamente sua necessidade..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full text-white hover:opacity-90 text-lg py-3" style={{backgroundColor: '#67769a'}}>
                <Send className="mr-2" size={20} />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg" style={{backgroundColor: '#67769a20'}}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-800 font-medium">
                        {item.info}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-2xl p-8 text-white" style={{background: `linear-gradient(to bottom right, #67769a, #8c7d94)`}}>
              <h3 className="text-2xl font-bold mb-4">
                Precisa de Atendimento Urgente?
              </h3>
              <p className="mb-6 opacity-90">
                Para casos urgentes, entre em contato diretamente por telefone. 
                Nossa equipe está pronta para atender suas necessidades.
              </p>
              <Button variant="secondary" className="bg-white hover:bg-gray-100" style={{color: '#67769a'}}>
                <Phone className="mr-2" size={20} />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

