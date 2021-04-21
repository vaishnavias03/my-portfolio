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
      <Route path="/" component={IntroPage} exact/>
      <Route path="/skills" component={Skills}/>
      <Route path ="/projects" component={Project}/>
     
    </div>
    </Switch>
    </BrowserRouter>
       
  );
}

export default App;
