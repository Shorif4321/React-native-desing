import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import DashboardScreen from './Components/DashboardScreen/DashboardScreen.js';
import GameView from './Components/GameView/GameView.js';
import Home from './Components/Home/Home.js';


function App() {
  return (
    <div className="App">
      {/* ====Route seting==== */}
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/dashbord'>
            <DashboardScreen></DashboardScreen>
          </Route>

          <Route exact path='/game'>
            <GameView></GameView>
          </Route>

        </Switch>
      </Router>
        
              
    </div>
  );
}

export default App;
