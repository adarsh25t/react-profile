import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './Sections/About/AboutMe';
import Home from './Sections/Home/Home';
import Resume from './Sections/Resume/Resume';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
     <AboutMe/>
     <Resume/>
    </div>
  );
}

export default App;
