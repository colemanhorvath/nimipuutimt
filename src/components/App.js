// import logo from './logo.svg';
import '../style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import HomeScreen from './HomeScreen'
import SelectScreen from './SelectScreen'
import InfoScreen from './InfoScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/select">
          <SelectScreen />
        </Route>
        <Route path="/info">
          <InfoScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
