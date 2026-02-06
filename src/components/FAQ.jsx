import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is the cost of nutrition consultation?',
            answer: 'Initial consultations are $150 for a comprehensive 60-minute session. Follow-up sessions are $100 for 45 minutes. Package deals are available for multiple sessions at discounted rates.'
        },
        {
            question: 'Do you accept insurance?',
            answer: 'Yes, we accept most major insurance plans. We can provide superbills for insurance reimbursement. Please contact your insurance provider to verify coverage for nutrition services.'
        },
        {
            question: 'How long does it take to see results?',
            answer: 'Results vary by individual and goals. Most clients notice positive changes within 2-4 weeks of following their personalized nutrition plan. Sustainable, long-term results typically develop over 3-6 months.'
        },
        {
            question: 'Do you offer virtual consultations?',
            answer: 'Absolutely! We offer both in-person and virtual consultations via secure video conferencing. Virtual sessions are just as effective and allow for greater flexibility in scheduling.'
        },
        {
            question: 'What should I bring to my first appointment?',
            answer: 'Please bring any recent lab work, a list of current medications and supplements, and a 3-day food diary. We\'ll discuss your health history, goals, and create a customized plan together.'
        },
        {
            question: 'Can you help with specific medical conditions?',
            answer: 'Yes, I specialize in medical nutrition therapy for various conditions including diabetes, cardiovascular disease, digestive disorders, and hormonal imbalances. All plans are coordinated with your healthcare provider.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
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
                        <span className="text-sm font-medium">FAQ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Frequently Asked{' '}
                        <span className="text-sage-500">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about our services
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-sage-50 transition-colors duration-200"
                            >
                                <span className="text-lg font-semibold text-slate-800 pr-8">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0 w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                                    {openIndex === index ? (
                                        <Minus className="text-sage-600" size={18} />
                                    ) : (
                                        <Plus className="text-sage-600" size={18} />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
