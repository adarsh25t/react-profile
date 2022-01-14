import './App.css';
import Curve from './components/Curve';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ScreenHeading from './components/ScreenHeading';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <Curve/>
        <ScreenHeading title={"About"} subHeading={"why you choose me"}/>
    </div>
  );
}

export default App;
