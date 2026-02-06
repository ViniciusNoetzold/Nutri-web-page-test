import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Jessica Thompson',
            role: 'Lost 25 lbs',
            rating: 5,
            text: 'Dr. Sarah transformed my relationship with food. Her personalized approach made all the difference. I\'ve never felt better!',
            image: '👩'
        },
        {
            name: 'Michael Chen',
            role: 'Marathon Runner',
            rating: 5,
            text: 'The sports nutrition program helped me achieve my best race times. Sarah\'s expertise is unmatched.',
            image: '👨'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Gut Health Client',
            rating: 5,
            text: 'After years of digestive issues, I finally found relief through Sarah\'s gut health program. Life-changing!',
            image: '👩'
        },
        {
            name: 'David Wilson',
            role: 'Weight Loss Journey',
            rating: 5,
            text: 'Professional, knowledgeable, and genuinely caring. The support I received made my journey sustainable and enjoyable.',
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
                        <span className="text-sm font-medium">Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Client <span className="text-sage-500">Success Stories</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Real results from real people who transformed their health
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
