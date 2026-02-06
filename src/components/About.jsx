import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Target } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-32 h-32 bg-sage-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <Heart size={64} className="text-white" />
                                    </div>
                                    <p className="text-sage-700 font-semibold text-lg">Nutricionista Ana Paula Nogueira</p>
                                    <p className="text-sage-600 text-sm">Nutricionista Certificada</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-200 rounded-2xl -z-10"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-sage-100 text-sage-700 px-4 py-2 rounded-full mb-4">
                            <span className="text-sm font-medium">Our Methodology</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                            A Holistic Approach to{' '}
                            <span className="text-sage-500">Your Health</span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            At our practice, we believe that optimal health is achieved through a comprehensive
                            understanding of your unique body, lifestyle, and goals. We don't believe in
                            one-size-fits-all solutions.
                        </p>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            With over 15 years of experience and advanced certifications in clinical nutrition,
                            I work with you to create personalized nutrition plans that are sustainable,
                            enjoyable, and scientifically proven to deliver results.
                        </p>

                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Target className="text-sage-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Personalized Plans</h3>
                                    <p className="text-slate-600">Tailored nutrition strategies based on your unique needs</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Leaf className="text-sage-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Natural & Sustainable</h3>
                                    <p className="text-slate-600">Focus on whole foods and long-term lifestyle changes</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Heart className="text-sage-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Compassionate Care</h3>
                                    <p className="text-slate-600">Supportive guidance throughout your wellness journey</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
