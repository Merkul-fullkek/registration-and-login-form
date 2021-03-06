import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (<Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path="/sign-in" component={Login} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
