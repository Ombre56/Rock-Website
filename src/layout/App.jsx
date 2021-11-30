import React from 'react';
import './App.css';
import Slider from '../components/Slider'
import Navbar from '../components/Navbar';
<<<<<<< HEAD
import Articles from '../components/Articles';
import Staff from '../components/Staff';
=======
import Articles from '../Articles/Articles';
import Staff from '../Staff/Staff';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
>>>>>>> d4fc6770dd39557936bde87fa49572ab65d90429

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
