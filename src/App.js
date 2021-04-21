import { BrowserRouter } from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';
import './App.css';

import IntroPage from './Components/IntroPage';
import NavBar from "./Components/NavBar"
import Project from './Components/Project';
import Skills from './Components/Skills';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">
      <NavBar/>
      <IntroPage/>
      
      <Skills/>
     
      <Project/>
     
    </div>
    </Switch>
    </BrowserRouter>
       
  );
}

export default App;
