import "./sass/main.scss";
import Programs from "./components/Programs.js";
import Date from "./components/Date.js";
import SelectTimes from "./components/SelectTimes.js";
import Confirmation from "./components/Confirmation.js";
// import Landing from "./components/Landing.js";
import { Route, Switch } from "react-router-dom";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <GoogleLogin
            clientId="476555932517-tb7g4js5krhljvaionc4o3vq3b06l47e.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="google-login"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img src="/Images/t-google-icon.png" alt="google-icon" />
                Sign in From Google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
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
