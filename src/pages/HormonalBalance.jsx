import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, CheckCircle, Calendar, Moon, Droplets, Wind, Sun } from 'lucide-react';

const HormonalBalance = () => {
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
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Heart className="text-white" size={40} />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                            Equilíbrio <span className="text-slate-600">Hormonal</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Restaure o equilíbrio hormonal naturalmente através de nutrição estratégica e estilo de vida
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Hormônios em Harmonia</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                            Desequilíbrios hormonais afetam humor, energia, sono, peso, pele e muito mais. Problemas como SOP, menopausa, TPM, tireoide e resistência à insulina podem ser manejados através da alimentação.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Trabalhamos com nutrição funcional para apoiar naturalmente a produção e metabolização de hormônios, restaurando o equilíbrio do seu corpo.
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
                                { icon: Sun, title: 'Mais Energia', desc: 'Redução de fadiga e disposição ao longo do dia' },
                                { icon: Moon, title: 'Melhor Sono', desc: 'Regulação do ritmo circadiano e melatonina' },
                                { icon: Droplets, title: 'Pele Saudável', desc: 'Redução de acne e inflamação cutânea' },
                                { icon: Wind, title: 'Humor Estável', desc: 'Menos variações de humor e ansiedade' }
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
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-500 to-slate-600 rounded-3xl p-12 text-white">
                        <Calendar size={48} className="mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Pronto para equilibrar seus hormônios?
                        </h2>
                        <p className="text-lg mb-8">
                            Agende sua consulta e descubra como a nutrição pode transformar seu bem-estar hormonal
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

export default HormonalBalance;
