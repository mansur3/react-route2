
import './App.css';
import {Switch, Route} from "react-router-dom";
import {Home} from "./Components/Home";
import {Dashboard} from "./Components/Dashboard";
import {Login} from "./Components/Login";
import {Setting} from "./Components/Setting";

import {Navbar} from "./Components/Navbar";
import {PrivateRoute} from "./Components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <PrivateRoute path = "/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path = "/login">
          <Login />
        </Route>
        <PrivateRoute path = "/setting" >
          <Setting />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
