import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './Sections/About/AboutMe';
import Contactme from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Fooer';
import Home from './Sections/Home/Home';
import Projects from './Sections/Projects/Project';
import Resume from './Sections/Resume/Resume';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Resume/>
        <Projects/>
        <Contactme/>
        <Footer/>
    </div>
  );
}

export default App;
