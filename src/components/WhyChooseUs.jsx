import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Award, Shield, BookOpen, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: Users,
            title: 'Personalized Plans',
            description: 'Custom nutrition strategies tailored to your unique needs and goals',
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Round-the-clock access to guidance and expert advice',
        },
        {
            icon: Award,
            title: 'Scientific Approach',
            description: 'Evidence-based methods backed by latest nutritional research',
        },
        {
            icon: Shield,
            title: 'Proven Results',
            description: 'Track record of transforming lives with sustainable outcomes',
        },
        {
            icon: BookOpen,
            title: 'Educational',
            description: 'Learn the principles behind healthy eating for lifelong wellness',
        },
        {
            icon: HeartHandshake,
            title: 'Compassionate Care',
            description: 'Supportive, non-judgmental approach to your health journey',
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
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
                        <span className="text-sm font-medium">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Your Success is{' '}
                        <span className="text-sage-500">Our Priority</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Comprehensive support and expertise to help you achieve your health goals
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <benefit.icon className="text-white" size={28} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
