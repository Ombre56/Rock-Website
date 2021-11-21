import React from 'react';
import './style.css';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Articles from '../Articles/Articles';
import Staff from '../Staff/Staff';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
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
      </main>
    </div>
  );
}

export default App;
