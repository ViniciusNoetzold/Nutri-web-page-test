import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

const Calculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue);

            // Determine category
            if (bmiValue < 18.5) {
                setCategory('Underweight');
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setCategory('Normal');
            } else if (bmiValue >= 25 && bmiValue < 30) {
                setCategory('Overweight');
            } else {
                setCategory('Obese');
            }
        }
    };

    const getCategoryColor = () => {
        switch (category) {
            case 'Underweight':
                return 'text-blue-600 bg-blue-50 border-blue-200';
            case 'Normal':
                return 'text-green-600 bg-green-50 border-green-200';
            case 'Overweight':
                return 'text-orange-600 bg-orange-50 border-orange-200';
            case 'Obese':
                return 'text-red-600 bg-red-50 border-red-200';
            default:
                return '';
        }
    };

    const getCategoryIcon = () => {
        switch (category) {
            case 'Underweight':
                return <TrendingDown size={24} />;
            case 'Normal':
                return <TrendingUp size={24} className="rotate-90" />;
            case 'Overweight':
            case 'Obese':
                return <AlertCircle size={24} />;
            default:
                return null;
        }
    };

    return (
        <section id="calculator" className="py-20 md:py-32 bg-white">
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
                        <span className="text-sm font-medium">Health Tools</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        BMI <span className="text-sage-500">Calculator</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Calculate your Body Mass Index to understand your current health status
                    </p>
                </motion.div>

                {/* Calculator Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-sage-50 to-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-sage-100">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-16 bg-sage-400 rounded-2xl flex items-center justify-center">
                                <CalcIcon className="text-white" size={32} />
                            </div>
                        </div>

                        {/* Input Fields */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-slate-700 font-semibold mb-2">
                                    Height (cm)
                                </label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="170"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-sage-400 focus:outline-none transition-colors bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 font-semibold mb-2">
                                    Weight (kg)
                                </label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="70"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-sage-400 focus:outline-none transition-colors bg-white"
                                />
                            </div>
                        </div>

                        {/* Calculate Button */}
                        <button
                            onClick={calculateBMI}
                            className="w-full bg-sage-400 text-white py-4 rounded-xl hover:bg-sage-500 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl mb-8"
                        >
                            Calculate BMI
                        </button>

                        {/* Results */}
                        {bmi && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <div className="text-center mb-4">
                                    <p className="text-slate-600 font-medium mb-2">Your BMI</p>
                                    <p className="text-5xl font-bold text-slate-800">{bmi}</p>
                                </div>

                                <div className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border-2 ${getCategoryColor()}`}>
                                    {getCategoryIcon()}
                                    <span className="font-semibold text-lg">{category}</span>
                                </div>

                                <div className="mt-6 text-center">
                                    <p className="text-sm text-slate-600">
                                        {category === 'Normal'
                                            ? 'Great! Your BMI is in the healthy range.'
                                            : category === 'Underweight'
                                                ? 'Consider consulting with a nutritionist to achieve a healthy weight.'
                                                : 'A personalized nutrition plan could help you reach your health goals.'}
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* BMI Reference */}
                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <p className="text-sm text-slate-600 mb-3 font-medium">BMI Categories:</p>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-slate-600">Underweight: &lt; 18.5</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-slate-600">Normal: 18.5 - 24.9</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                    <span className="text-slate-600">Overweight: 25 - 29.9</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <span className="text-slate-600">Obese: ≥ 30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Calculator;
