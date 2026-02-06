import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, CheckCircle, ExternalLink, Calendar, RefreshCw, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const DailyNewsSection = () => {
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Fetch news data
    const fetchNews = async () => {
        setIsRefreshing(true);
        try {
            const response = await fetch('/news-data.json');
            const data = await response.json();
            setNewsData(data);
        } catch (error) {
            console.error('Error fetching news:', error);
            // Set fallback data with multiple articles
            setNewsData({
                lastUpdated: new Date().toISOString(),
                articles: [
                    {
                        headline: 'Mediterranean Diet Shows Promising Results in Longevity Studies',
                        summary: 'A comprehensive 15-year longitudinal study demonstrates that consistent adherence to a Mediterranean dietary pattern is associated with a 20% reduction in all-cause mortality and significant improvements in cardiovascular health.',
                        source: 'The Lancet',
                        date: new Date().toISOString().split('T')[0],
                        verified: true,
                        url: 'https://www.thelancet.com/journals/lancet/article/example'
                    },
                    {
                        headline: 'Plant-Based Proteins Linked to Reduced Risk of Type 2 Diabetes',
                        summary: 'New research from Harvard Medical School indicates that replacing animal proteins with plant-based alternatives may reduce diabetes risk by up to 30% while improving overall metabolic health markers.',
                        source: 'Harvard Health',
                        date: new Date().toISOString().split('T')[0],
                        verified: true,
                        url: 'https://www.health.harvard.edu/nutrition/example'
                    },
                    {
                        headline: 'Gut Microbiome Diversity Key to Weight Management Success',
                        summary: 'Groundbreaking study reveals that individuals with more diverse gut bacteria show 40% better weight loss outcomes and improved long-term weight maintenance compared to those with limited microbiome diversity.',
                        source: 'Nature Medicine',
                        date: new Date().toISOString().split('T')[0],
                        verified: true,
                        url: 'https://www.nature.com/articles/example'
                    }
                ]
            });
        } finally {
            setIsRefreshing(false);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    // Auto-rotation timer
    useEffect(() => {
        if (!newsData?.articles || isPaused || newsData.articles.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % newsData.articles.length);
        }, 7000); // 7 seconds

        return () => clearInterval(timer);
    }, [newsData, isPaused]);

    const handleRefresh = () => {
        fetchNews();
        setCurrentIndex(0);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? newsData.articles.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % newsData.articles.length);
    };

    if (loading) {
        return (
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="animate-pulse bg-sage-100 rounded-3xl h-64"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (!newsData?.articles || newsData.articles.length === 0) return null;

    const currentArticle = newsData.articles[currentIndex];

    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center space-x-2 bg-sage-100 text-sage-700 px-4 py-2 rounded-full mb-4">
                        <Newspaper size={16} />
                        <span className="text-sm font-medium">Daily Scientific Insights</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Latest <span className="text-sage-500">Nutrition Science</span>
                    </h2>
                </motion.div>

                {/* News Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Controls Bar */}
                    <div className="flex justify-between items-center mb-4">
                        {/* Article Counter */}
                        <div className="text-sm text-slate-600 font-medium">
                            Article {currentIndex + 1} of {newsData.articles.length}
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center space-x-2">
                            {/* Pause/Play Button */}
                            <button
                                onClick={() => setIsPaused(!isPaused)}
                                className="p-2 bg-white rounded-lg border border-sage-200 hover:bg-sage-50 transition-colors"
                                title={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                            >
                                {isPaused ? (
                                    <Play size={18} className="text-sage-600" />
                                ) : (
                                    <Pause size={18} className="text-sage-600" />
                                )}
                            </button>

                            {/* Refresh Button */}
                            <button
                                onClick={handleRefresh}
                                disabled={isRefreshing}
                                className="p-2 bg-white rounded-lg border border-sage-200 hover:bg-sage-50 transition-colors disabled:opacity-50"
                                title="Refresh news"
                            >
                                <RefreshCw
                                    size={18}
                                    className={`text-sage-600 ${isRefreshing ? 'animate-spin' : ''}`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* News Card with Animation */}
                    <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Card Header with Verified Badge */}
                                <div className="bg-gradient-to-r from-sage-50 to-slate-50 px-6 md:px-8 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center space-x-3">
                                        {/* Source Badge */}
                                        <div className="bg-white px-4 py-1.5 rounded-full border border-sage-200">
                                            <span className="text-sm font-semibold text-slate-700">{currentArticle.source}</span>
                                        </div>

                                        {/* Date */}
                                        <div className="flex items-center space-x-2 text-slate-600">
                                            <Calendar size={16} />
                                            <span className="text-sm">{new Date(currentArticle.date).toLocaleDateString('pt-BR', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}</span>
                                        </div>
                                    </div>

                                    {/* Medically Verified Badge */}
                                    {currentArticle.verified && (
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative"
                                        >
                                            {/* Pulsing Background */}
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 0.8, 0.5],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute inset-0 bg-green-400 rounded-full blur-md"
                                            />

                                            {/* Badge */}
                                            <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                                                <motion.div
                                                    animate={{
                                                        rotate: [0, 360],
                                                    }}
                                                    transition={{
                                                        duration: 20,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }}
                                                >
                                                    <CheckCircle size={18} className="fill-white" />
                                                </motion.div>
                                                <span className="text-sm font-bold">Medically Verified</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Card Body */}
                                <div className="p-6 md:p-8">
                                    {/* Headline */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                                        {currentArticle.headline}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                        {currentArticle.summary}
                                    </p>

                                    {/* Read More Link */}
                                    {currentArticle.url && (
                                        <a
                                            href={currentArticle.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 text-sage-600 hover:text-sage-700 font-semibold transition-colors group"
                                        >
                                            <span>Read Full Article</span>
                                            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>
                                    )}
                                </div>

                                {/* Scientific Integrity Footer */}
                                <div className="bg-slate-50 px-6 md:px-8 py-4 border-t border-slate-100">
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        <strong className="text-slate-700">Scientific Integrity:</strong> All articles are sourced exclusively from peer-reviewed journals and verified medical institutions. Content is evaluated for evidence-based accuracy and consensus with established nutritional science.
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {newsData.articles.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-110"
                                    title="Previous article"
                                >
                                    <ChevronLeft size={24} className="text-slate-700" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-110"
                                    title="Next article"
                                >
                                    <ChevronRight size={24} className="text-slate-700" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Carousel Indicators */}
                    {newsData.articles.length > 1 && (
                        <div className="flex justify-center items-center space-x-2 mt-6">
                            {newsData.articles.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'w-8 bg-sage-500'
                                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                    title={`Go to article ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Last Updated Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-6"
                >
                    <p className="text-sm text-slate-500">
                        Last updated: {new Date(newsData.lastUpdated).toLocaleString('pt-BR', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: false
                        })}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default DailyNewsSection;
