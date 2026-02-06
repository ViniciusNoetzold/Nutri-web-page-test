import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-slate-800 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">APN</span>
                            </div>
                            <span className="text-xl font-bold">Nutricionista Ana Paula Nogueira</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Transforming lives through evidence-based nutrition and personalized wellness plans.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => scrollToSection('hero')} className="text-slate-400 hover:text-sage-400 transition-colors">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-sage-400 transition-colors">
                                    Methodology
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-sage-400 transition-colors">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('testimonials')} className="text-slate-400 hover:text-sage-400 transition-colors">
                                    Testimonials
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Weight Management</li>
                            <li>Sports Nutrition</li>
                            <li>Gut Health</li>
                            <li>Hormonal Balance</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>123 Wellness Avenue</li>
                            <li>San Francisco, CA 94102</li>
                            <li>(555) 123-4567</li>
                            <li>hello@drsarahgreen.com</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-slate-700 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-sage-400 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-sage-400 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-sage-400 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-sage-400 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                            <span>© {currentYear} Nutricionista Ana Paula Nogueira. Made with</span>
                            <Heart size={14} className="text-sage-400 fill-sage-400" />
                            <span>All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
