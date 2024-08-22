import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramCarousel from './InstagramCarousel';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <InstagramCarousel />
    </header>
  </div>
  );
}

export default App;
