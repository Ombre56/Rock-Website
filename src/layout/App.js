import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Articles from '../Articles/Articles';
import Staff from '../Staff/Staff';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
