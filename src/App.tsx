import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import { SignIn } from './pages/SingIn'

function App() {
  return (
      <div className="App">
          <Switch>
              <Route path="/singin" component={SignIn} />
              <Route path="/" component={Home} />
          </Switch>

      </div>

  );
}

export default App;
