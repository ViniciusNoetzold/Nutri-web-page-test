import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Methodology', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Calculator', id: 'calculator' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">APN</span>
                        </div>
                        <span className="text-xl font-bold text-slate-800">Nutricionista Ana Paula Nogueira</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-slate-600 hover:text-sage-500 transition-colors duration-200 font-medium"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hidden md:block bg-sage-400 text-white px-6 py-2.5 rounded-full hover:bg-sage-500 transition-all duration-300 hover:scale-105 font-medium shadow-sm"
                    >
                        Book Consultation
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-slate-700"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        <nav className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-slate-600 hover:text-sage-500 transition-colors duration-200 font-medium text-left"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-sage-400 text-white px-6 py-2.5 rounded-full hover:bg-sage-500 transition-colors duration-300 font-medium text-center"
                            >
                                Book Consultation
                            </button>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;
