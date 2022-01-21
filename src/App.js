import './App.css';
import Navigation from './components/NavBar';
import Home from './components/Home'
import About from './components/About'
import Tba from './components/Tba'
import Garage from './components/Garage'
import Manual from './components/Manual'
import Progress from './components/Progress'
import Crew from './assets/Crew.png'
import Roadmap from './assets/Roadmap.png'
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
      <img src={Crew} alt='Crew Tab' style={{ margin: '350px auto' }} />
      <img src={Roadmap} alt='Roadmap' style={{ margin: '200px auto' }} />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
