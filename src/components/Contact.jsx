import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        healthGoal: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [errorMessage, setErrorMessage] = useState('');

    const healthGoalOptions = [
        { value: '', label: 'Select your main health goal...' },
        { value: 'weight-management', label: 'Weight Management' },
        { value: 'sports-nutrition', label: 'Sports Nutrition' },
        { value: 'gut-health', label: 'Gut Health' },
        { value: 'hormonal-balance', label: 'Hormonal Balance' },
        { value: 'general-wellness', label: 'General Wellness' },
        { value: 'other', label: 'Other' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (formData.phone.trim().length < 10) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.healthGoal) {
            newErrors.healthGoal = 'Please select a health goal';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');

        try {
            // Get EmailJS configuration from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const calendlyLink = import.meta.env.VITE_CALENDLY_LINK || 'https://calendly.com/dr-sarah-green/intro-call';

            // Check if credentials are configured
            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS is not configured. Please set up environment variables.');
            }

            // Get health goal label for display
            const healthGoalLabel = healthGoalOptions.find(
                option => option.value === formData.healthGoal
            )?.label || formData.healthGoal;

            // Template parameters for both emails
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                health_goal: healthGoalLabel,
                timestamp: new Date().toLocaleString(),
                calendly_link: calendlyLink
            };

            // Send email to nutritionist
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            // Send auto-reply to user
            if (autoReplyTemplateId) {
                await emailjs.send(
                    serviceId,
                    autoReplyTemplateId,
                    templateParams,
                    publicKey
                );
            }

            // Success!
            setSubmitStatus('success');

            // Reset form after delay
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', healthGoal: '' });
                setSubmitStatus(null);
            }, 8000);

        } catch (error) {
            console.error('Email send error:', error);
            setSubmitStatus('error');
            setErrorMessage(
                error.text || error.message || 'Failed to send message. Please try again or contact us directly.'
            );

            // Auto-hide error after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
                setErrorMessage('');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-white">
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
                        <span className="text-sm font-medium">Entre em Contato</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Comece sua <span className="text-sage-500">Jornada Hoje</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Pronto para transformar sua saúde? Vamos nos conectar e criar seu plano nutricional personalizado
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Fill out the form and we'll get back to you within 24 hours. You'll receive an instant email with a link to schedule your complimentary intro call.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-sage-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Visit Us</h4>
                                    <p className="text-slate-600">123 Wellness Avenue<br />San Francisco, CA 94102</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-sage-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Call Us</h4>
                                    <p className="text-slate-600">(555) 123-4567<br />Mon-Fri, 9am-6pm PT</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-sage-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Email Us</h4>
                                    <p className="text-slate-600">hello@drsarahgreen.com<br />We'll respond within 24hrs</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-sage-100 h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.9706276301471!2d-52.92542322004991!3d-27.93754437555266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fcdb74c42a58d9%3A0x99091778bf7ac495!2sNutricionista%20Ana%20Paula%20Nogueira!5e0!3m2!1spt-BR!2sbr!4v1770382012068!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização Nutricionista Ana Paula Nogueira"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-sage-50 to-slate-50 rounded-3xl p-8 md:p-10 shadow-xl border border-sage-100">
                            <AnimatePresence mode="wait">
                                {submitStatus === 'success' ? (
                                    // Success Message Card
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="text-green-600" size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Message Sent Successfully!</h3>
                                        <p className="text-lg text-slate-600 mb-4">
                                            Thank you, <strong>{formData.name}</strong>! We've received your inquiry.
                                        </p>
                                        <div className="bg-white rounded-xl p-6 mb-6">
                                            <p className="text-slate-700 leading-relaxed">
                                                📧 <strong>Check your email!</strong> We've sent you a confirmation with a link to schedule your complimentary intro call.
                                            </p>
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            Didn't receive it? Check your spam folder or contact us at{' '}
                                            <a href="mailto:hello@drsarahgreen.com" className="text-sage-600 hover:text-sage-700 font-medium">
                                                hello@drsarahgreen.com
                                            </a>
                                        </p>
                                    </motion.div>
                                ) : (
                                    // Contact Form
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>

                                        {/* Name Field */}
                                        <div>
                                            <label className="block text-slate-700 font-semibold mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                disabled={isSubmitting}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white ${errors.name
                                                    ? 'border-red-400 focus:border-red-500'
                                                    : 'border-slate-200 focus:border-sage-400'
                                                    } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label className="block text-slate-700 font-semibold mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                disabled={isSubmitting}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white ${errors.email
                                                    ? 'border-red-400 focus:border-red-500'
                                                    : 'border-slate-200 focus:border-sage-400'
                                                    } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                            )}
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <label className="block text-slate-700 font-semibold mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="(555) 123-4567"
                                                disabled={isSubmitting}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white ${errors.phone
                                                    ? 'border-red-400 focus:border-red-500'
                                                    : 'border-slate-200 focus:border-sage-400'
                                                    } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                                            />
                                            {errors.phone && (
                                                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                            )}
                                        </div>

                                        {/* Health Goal Dropdown */}
                                        <div>
                                            <label className="block text-slate-700 font-semibold mb-2">
                                                Main Health Goal <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="healthGoal"
                                                value={formData.healthGoal}
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white ${errors.healthGoal
                                                    ? 'border-red-400 focus:border-red-500'
                                                    : 'border-slate-200 focus:border-sage-400'
                                                    } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                                            >
                                                {healthGoalOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.healthGoal && (
                                                <p className="mt-1 text-sm text-red-600">{errors.healthGoal}</p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-sage-400 text-white py-4 rounded-xl hover:bg-sage-500 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={20} />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send size={20} />
                                                </>
                                            )}
                                        </button>

                                        {/* Error Toast */}
                                        <AnimatePresence>
                                            {submitStatus === 'error' && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="flex items-start space-x-3 bg-red-50 border-2 border-red-200 rounded-xl p-4"
                                                >
                                                    <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                                                    <div>
                                                        <p className="text-red-800 font-medium">Failed to send message</p>
                                                        <p className="text-red-700 text-sm">{errorMessage}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <p className="text-xs text-slate-500 text-center">
                                            By submitting this form, you agree to receive emails from Nutricionista Ana Paula Nogueira.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default Contact;
