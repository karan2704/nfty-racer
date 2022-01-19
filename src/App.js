import './App.css';
import Home from './components/Home'
import About from './components/About'
import Tba from './components/Tba'
import Garage from './components/Garage'
import Manual from './components/Manual'
import Progress from './components/Progress'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Tba />
      <Garage />
      <Manual />
      <Progress />
    </div>
  );
}

export default App;
