import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Jessica Thompson',
            role: 'Perdeu 12kg',
            rating: 5,
            text: 'Ana Paula transformou minha relação com a comida. Sua abordagem personalizada fez toda a diferença. Nunca me senti tão bem!',
            image: '👩'
        },
        {
            name: 'Michael Chen',
            role: 'Maratonista',
            rating: 5,
            text: 'O programa de nutrição esportiva me ajudou a alcançar meus melhores tempos de corrida. A expertise da Ana Paula é incomparável.',
            image: '👨'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Cliente de Saúde Intestinal',
            rating: 5,
            text: 'Após anos de problemas digestivos, finalmente encontrei alívio através do programa de saúde intestinal da Ana Paula. Mudou minha vida!',
            image: '👩'
        },
        {
            name: 'David Wilson',
            role: 'Jornada de Perda de Peso',
            rating: 5,
            text: 'Profissional, conhecedora e genuinamente cuidadosa. O suporte que recebi tornou minha jornada sustentável e agradável.',
            image: '👨'
        },
    ];

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-white">
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
                        <span className="text-sm font-medium">Depoimentos</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Histórias de <span className="text-sage-500">Sucesso</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Resultados reais de pessoas reais que transformaram sua saúde
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-sage-50 to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sage-100"
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-between items-start mb-4">
                                <Quote className="text-sage-400" size={32} />
                                {/* Star Rating */}
                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-slate-700 mb-6 leading-relaxed italic">
                                "{testimonial.text}"
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center text-2xl">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
