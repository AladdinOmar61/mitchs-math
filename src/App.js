import "./sass/main.scss";
import Programs from "./components/Programs.js";
import Date from "./components/Date.js";
import SelectTimes from "./components/SelectTimes.js";
import Confirmation from "./components/Confirmation.js";
// import Landing from "./components/Landing.js";
import { Route, Switch } from "react-router-dom";
import GoogleLogin from 'react-google-login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <Landing /> */}
          <GoogleLogin />
        </Route>
        <Route exact path="/programs">
          <Programs />
        </Route>
        <Route exact path="/programs/date">
          <Date />
        </Route>
        <Route exact path="/programs/date/time">
          <SelectTimes />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
