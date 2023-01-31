import "./sass/main.scss";
import Programs from "./components/Programs.js";
import Date from "./components/Date.js";
import Confirmation from "./components/Confirmation.js";
// import Landing from "./components/Landing.js";
import { Route, Switch } from "react-router-dom";

const responseGoogle = (response) => {
  console.log(response);
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
        <Programs />
        </Route>
        <Route exact path="/programs/date">
          <Date />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
