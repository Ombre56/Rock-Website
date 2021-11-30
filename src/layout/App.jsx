import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import Articles from '../components/Articles';
import Staff from '../components/Staff';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section id="home" className="slider">
          <Slider />
        </section>
        <section id="articles" className="articles_section">
          <Articles />
        </section>
        <section id="staff" className="staff_section">
          <Staff />
        </section>
        <section id="portfolio" className="portfolio_section">
          <Portfolio />
        </section>
        <section id="contact" className="contact_section">
          <Contact />
        </section>
        <section id="footer" className="footer_section">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
