import React from 'react';
import Header from '../components/header';
import About from '../components/about-us';
import Companies from '../components/companies';
import Events from '../components/events';
import Reservations from '../components/reservations';
import FAQ from '../components/faq';
import Contact from '../components/contact';
import Footer from '../components/footer';
import '../styles/home.css';

function home() {
    return (
        <div className='Home'>
            <Header />
            <About />
            <Companies />
            <Events />
            <Reservations />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    )
}

export default home