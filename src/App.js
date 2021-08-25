import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Apple from "./components/Apple";
import Nav from './components/NavBar/Nav';
import TechCrunch from "./components/TechCrunch";
import Tesla from "./components/Tesla";
import TopBusiness from "./components/TopBusiness";
import WallStreet from './components/WallStreet';

function App() {
  return (
    <Router>
      <Nav />
      <div className="app">
        <Switch>
          <Route exact path='/wall-street' component={WallStreet} />
          <Route exact path='/tech-crunch' component={TechCrunch} />
          <Route exact path='/top-business' component={TopBusiness} />
          <Route exact path='/tesla' component={Tesla} />
          <Route exact path='/apple' component={Apple} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
