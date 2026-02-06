import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';
import DailyNewsSection from '../components/DailyNewsSection';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Calculator />
            <Testimonials />
            <DailyNewsSection />
            <FAQ />
            <Contact />
        </>
    );
};

export default Home;
