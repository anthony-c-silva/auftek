// src/pages/Home/HomePage.jsx
import React from 'react';
import { Box } from '@mui/material';

// Importa as seções divididas
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SolutionsSection from './SolutionsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import TeamSection  from './TeamSection';
import CtaSection from './CtaSection';
import PartnersSection from './PartnersSection';
// Este é o componente que você exportaria e usaria no seu App.js
export default function HomePage() {
    return (
        <Box>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <SolutionsSection />
                <TeamSection/>
                <CtaSection/>
                <ContactSection />
                <PartnersSection/>
            </main>
            <Footer />
        </Box>
    );
}
