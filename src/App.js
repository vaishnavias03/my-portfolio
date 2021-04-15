
import './App.css';
import IntroPage from './Components/IntroPage';
import NavBar from "./Components/NavBar"
import Project from './Components/Project';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
     <NavBar />
     <IntroPage/>
     <Skills/>
     <Project/>
    </div>
  );
}

export default App;
