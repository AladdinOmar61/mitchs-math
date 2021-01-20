import "./sass/main.scss";
import Home from "./components/Home.js";
import ProgramDetails from "./components/ProgramDetails.js";
import SelectTimes from "./components/SelectTimes.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details">
          <ProgramDetails />
        </Route>
        <Route exact path="/details/date">
          <SelectTimes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
