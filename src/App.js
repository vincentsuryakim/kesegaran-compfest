import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import { Landing } from './pages/Landing'
import { Saved } from './pages/Saved'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            key={"/"}
            component={Landing}
            exact={true}
            path={"/"}
          />
          <Route 
            key={"/saved"}
            component={Saved}
            exact={true}
            path={"/saved"}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
