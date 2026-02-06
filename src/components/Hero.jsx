import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-50 via-white to-slate-50 pt-20"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #8BA888 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-sage-100 text-sage-700 px-4 py-2 rounded-full mb-6"
                    >
                        <Sparkles size={16} />
                        <span className="text-sm font-medium">Nutricionista Certificada & Especialista em Bem-Estar</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight"
                    >
                        Transforme sua vida
                        <br />
                        <span className="text-sage-500">através da nutrição.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto"
                    >
                        Planos nutricionais baseados em evidências, personalizados para seus objetivos específicos.
                        Comece hoje mesmo sua jornada rumo à saúde ideal.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group bg-sage-400 text-white px-8 py-4 rounded-full hover:bg-sage-500 transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-xl flex items-center space-x-2"
                        >
                            <span>Comece sua jornada</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="bg-transparent border-2 border-sage-400 text-sage-600 px-8 py-4 rounded-full hover:bg-sage-50 transition-all duration-300 hover:scale-105 font-semibold"
                        >
                            Saber mais
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-600"
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
                            <span className="text-sm font-medium">Mais de 500 clientes satisfeitos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
                            <span className="text-sm font-medium">Mais de 15 anos de experiência</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
                            <span className="text-sm font-medium">Certificado pelo Conselho</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-200 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-slate-200 rounded-full filter blur-3xl opacity-20 -mr-48"></div>
        </section>
    );
};

export default Hero;
