import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Articles from '../Articles/Articles';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <section className="slider">
            <Slider />
          </section>
          <section id="articles" className="articles">
            <Articles />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
