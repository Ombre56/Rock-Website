import React from 'react';
import './App.css';
// import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Navbar from '../components/Navbar';
import Articles from '../Articles/Articles';
import Staff from '../Staff/Staff';

function App() {
  return (
    <div className="App">
      <header id="home">
        <Navbar />
        <Slider className="slider" />
      </header>
      <main>
        <section id="articles" className="articles_section">
          <Articles />
        </section>
        <section id="staff" className="staff_section">
          <Staff />
        </section>
      </main>
    </div>
  );
}

export default App;
