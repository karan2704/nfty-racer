import './App.css';
import Navigation from './components/NavBar';
import Home from './components/Home'
import About from './components/About'
import Tba from './components/Tba'
import Garage from './components/Garage'
import Manual from './components/Manual'
import Progress from './components/Progress'
import Crew from './components/Crew'
import Track from './components/Track'
import Faq from './components/Faq'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Tba />
      <Garage />
      <Manual />
      <Progress />
      <Crew />
      <Track />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
