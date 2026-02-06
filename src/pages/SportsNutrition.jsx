import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft, CheckCircle, Calendar, Zap, Trophy, Battery, Flame } from 'lucide-react';

const SportsNutrition = () => {
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

            <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Dumbbell className="text-white" size={40} />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                            Nutrição <span className="text-slate-500">Esportiva</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Maximize seu desempenho atlético e accelere a recuperação com nutrição estratégica e baseada em evidências
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Para quem é esse programa?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                            Ideal para atletas amadores e profissionais, praticantes de musculação, crossfit, corrida, ciclismo e qualquer modalidade esportiva que busca otimizar resultados através da alimentação.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Trabalhamos com periodização nutricional, suplementação estratégica e timing de nutrientes para maximizar ganho de massa muscular, força, resistência e recuperação.
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
                                { icon: Zap, title: 'Maior Energia', desc: 'Aumente disposição e resistência nos treinos' },
                                { icon: Trophy, title: 'Melhor Performance', desc: 'Alcance novos recordes e supere limites' },
                                { icon: Battery, title: 'Recuperação Mais Rápida', desc: 'Reduza dores musculares e fadiga' },
                                { icon: Flame, title: 'Composição Corporal', desc: 'Ganhe massa magra e reduza gordura' }
                            ].map((benefit, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-md">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                        <benefit.icon className="text-slate-600" size={24} />
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
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-400 to-slate-500 rounded-3xl p-12 text-white">
                        <Calendar size={48} className="mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Pronto para elevar sua performance?
                        </h2>
                        <p className="text-lg mb-8">
                            Agende sua avaliação e descubra como a nutrição pode transformar seus resultados
                        </p>
                        <Link to="/#contact" className="inline-block bg-white text-slate-600 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 hover:scale-105 shadow-lg">
                            Agendar Consulta
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SportsNutrition;
