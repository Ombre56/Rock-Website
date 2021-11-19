import './style.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Articles from '../Articles/Articles';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <nav className="navigation">
          <Navigation />
        </nav>
        <section className="slider">
          <Slider />
        </section>
        <section className="articles">
          <Articles />
        </section>
      </main>
    </div>
  );
}

export default App;
