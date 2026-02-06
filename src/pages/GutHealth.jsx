import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, ArrowLeft, CheckCircle, Calendar, Shield, Smile, Sparkles, RefreshCw } from 'lucide-react';

const GutHealth = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link to="/" className="inline-flex items-center space-x-2 text-sage-600 hover:text-sage-700 font-medium">
                        <ArrowLeft size={20} />
                        <span>Voltar para Home</span>
                    </Link>
                </div>
            </div>

            <section className="py-20 bg-gradient-to-br from-sage-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Activity className="text-white" size={40} />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                            Saúde <span className="text-sage-600">Intestinal</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Restaure o equilíbrio do seu intestino e transforme sua saúde digestiva e imunológica
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">O Intestino: Seu Segundo Cérebro</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                            O intestino abriga trilhões de bactérias que influenciam desde a digestão até o humor, imunidade e até mesmo o controle de peso. Um intestino desbalanceado pode causar desconfortos, inflamação e comprometer toda sua saúde.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Nosso programa foca em restaurar seu microbioma intestinal através de alimentação estratégica, probióticos e mudanças no estilo de vida.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Benefícios</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: Shield, title: 'Imunidade Fortalecida', desc: '70% do sistema imune está no intestino' },
                                { icon: Smile, title: 'Digestão Saudável', desc: 'Elimine inchaço, gases e desconfortos' },
                                { icon: Sparkles, title: 'Mais Energia', desc: 'Melhor absorção de nutrientes' },
                                { icon: RefreshCw, title: 'Corpo Equilibrado', desc: 'Redução de inflamação sistêmica' }
                            ].map((benefit, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-md">
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

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sage-500 to-sage-600 rounded-3xl p-12 text-white">
                        <Calendar size={48} className="mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Pronto para restaurar sua saúde intestinal?
                        </h2>
                        <p className="text-lg mb-8">
                            Agende sua consulta e descubra como melhorar sua digestão e qualidade de vida
                        </p>
                        <Link to="/#contact" className="inline-block bg-white text-sage-600 px-8 py-4 rounded-full font-bold hover:bg-sage-50 transition-all duration-300 hover:scale-105 shadow-lg">
                            Agendar Consulta
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GutHealth;
