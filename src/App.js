import "./sass/main.scss";
import Home from "./components/Home.js";
import ProgramDetails from "./components/ProgramDetails.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/details">
        <ProgramDetails />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
