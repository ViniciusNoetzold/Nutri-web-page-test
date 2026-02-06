import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, ArrowLeft, CheckCircle, Calendar, Target, TrendingDown, Heart, Apple } from 'lucide-react';

const WeightManagement = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header com botão voltar */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link to="/" className="inline-flex items-center space-x-2 text-sage-600 hover:text-sage-700 font-medium">
                        <ArrowLeft size={20} />
                        <span>Voltar para Home</span>
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-sage-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-sage-400 to-sage-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Scale className="text-white" size={40} />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                            Controle de <span className="text-sage-500">Peso</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Alcance seu peso ideal de forma saudável e sustentável através de estratégias nutricionais baseadas em evidências científicas
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* O que é? */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">O que é o Programa de Controle de Peso?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                            Nosso programa de controle de peso é uma abordagem personalizada e científica para ajudá-lo a alcançar e manter seu peso ideal. Diferente de dietas da moda, focamos em mudanças sustentáveis que você pode manter a longo prazo.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Trabalhamos com análise completa do seu metabolismo, hábitos alimentares, estilo de vida e objetivos pessoais para criar um plano 100% personalizado.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefícios */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Benefícios do Programa</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: TrendingDown, title: 'Perda de Peso Sustentável', desc: 'Resultados duradouros sem efeito sanfona' },
                                { icon: Heart, title: 'Melhora da Saúde', desc: 'Redução de riscos cardiovasculares e metabólicos' },
                                { icon: Target, title: 'Metas Personalizadas', desc: 'Objetivos realistas adaptados ao seu ritmo' },
                                { icon: Apple, title: 'Educação Nutricional', desc: 'Aprenda a fazer escolhas saudáveis para a vida' }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-6 shadow-md"
                                >
                                    <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                                        <benefit.icon className="text-sage-600" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                                    <p className="text-slate-600">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Como funciona */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Como Funciona</h2>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Avaliação Inicial Completa', desc: 'Análise detalhada do seu histórico, exames, composição corporal e hábitos alimentares' },
                                { step: '02', title: 'Plano Nutricional Personalizado', desc: 'Cardápio elaborado especificamente para você, considerando suas preferências e rotina' },
                                { step: '03', title: 'Acompanhamento Semanal', desc: 'Ajustes contínuos no plano baseados na sua evolução e feedback' },
                                { step: '04', title: 'Suporte Contínuo', desc: 'Acesso direto para tirar dúvidas e receber orientações quando precisar' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-sage-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {item.step}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* O que está incluído */}
            <section className="py-16 bg-sage-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">O que está incluído</h2>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Consulta inicial de 60 minutos',
                                    'Plano alimentar personalizado',
                                    'Receitas adaptadas às suas preferências',
                                    'Lista de compras semanal',
                                    'Acompanhamento mensal',
                                    'Ajustes ilimitados no plano',
                                    'Suporte via WhatsApp',
                                    'Material educativo exclusivo'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="text-sage-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sage-400 to-sage-500 rounded-3xl p-12 text-white"
                    >
                        <Calendar size={48} className="mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Pronto para começar sua transformação?
                        </h2>
                        <p className="text-lg mb-8 text-sage-50">
                            Agende sua consulta inicial e dê o primeiro passo rumo ao seu peso ideal
                        </p>
                        <Link
                            to="/#contact"
                            className="inline-block bg-white text-sage-600 px-8 py-4 rounded-full font-bold hover:bg-sage-50 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Agendar Consulta
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WeightManagement;
