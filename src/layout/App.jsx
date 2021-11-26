import React from 'react';
import './App.css';
// import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Navbar from '../components/Navbar';
import Articles from '../Articles/Articles';
import Staff from '../Staff/Staff';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';

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
