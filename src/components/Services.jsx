import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Dumbbell, Activity, Heart } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Scale,
            title: 'Controle de Peso',
            description: 'Alcance seu peso ideal através de estratégias nutricionais sustentáveis e planejamento alimentar personalizado.',
            color: 'from-sage-400 to-sage-500',
            link: '/servicos/controle-de-peso'
        },
        {
            icon: Dumbbell,
            title: 'Nutrição Esportiva',
            description: 'Otimize desempenho e recuperação com nutrição direcionada para atletas e indivíduos ativos.',
            color: 'from-slate-400 to-slate-500',
            link: '/servicos/nutricao-esportiva'
        },
        {
            icon: Activity,
            title: 'Saúde Intestinal',
            description: 'Restaure o equilíbrio digestivo e melhore o bem-estar geral através de protocolos nutricionais focados no intestino.',
            color: 'from-sage-500 to-sage-600',
            link: '/servicos/saude-intestinal'
        },
        {
            icon: Heart,
            title: 'Equilíbrio Hormonal',
            description: 'Apoie a saúde hormonal naturalmente através de nutrição e modificações no estilo de vida.',
            color: 'from-slate-500 to-slate-600',
            link: '/servicos/equilibrio-hormonal'
        },
    ];

    return (
        <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block bg-sage-100 text-sage-700 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-medium">Nossos Serviços</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Programas Nutricionais{' '}
                        <span className="text-sage-500">Especializados</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Serviços nutricionais abrangentes projetados para atender seus objetivos específicos de saúde
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group"
                        >
                            <Link to={service.link} className="block h-full">
                                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 cursor-pointer">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="text-white" size={32} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Hover Indicator */}
                                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-sage-500 font-medium text-sm inline-flex items-center">
                                            Saber mais
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
