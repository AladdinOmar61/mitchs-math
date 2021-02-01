import "./sass/main.scss";
import Programs from "./components/Programs.js";
import ProgramDetails from "./components/ProgramDetails.js";
import SelectTimes from "./components/SelectTimes.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Programs />
        </Route>
        <Route exact path="/programs">
          <ProgramDetails />
        </Route>
        <Route exact path="/program/date">
          <SelectTimes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
