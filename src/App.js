import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/aboutme"} component={AboutMe}/>
                <Route path={"/project"} component={Projects}/>
                <Route path={"/resume"} component={Resume}/>
                <Route path={"/contact"} component={Contactme}/>
            </Switch>
            <Footer/>
        </BrowserRouter>    
    </div>
  );
}

export default App;
