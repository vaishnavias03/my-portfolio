import { BrowserRouter } from 'react-router-dom';
import { Switch} from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import IntroPage from './Components/IntroPage';
import NavBar from "./Components/NavBar"
import Project from './Components/Project';
import Skills from './Components/Skills';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
            <NavBar/>
            <IntroPage/>
            <Skills/>
            <Project/> 
            <AboutMe/>
        </div>
      </Switch>
    </BrowserRouter>
       
  );
}

export default App;
