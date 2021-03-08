import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import { Navbar } from './components/Navbar';
import { Landing } from './pages/Landing'
import { Saved } from './pages/Saved'

function App() {
  return (
    <>
      {/* <Landing /> */}
      <Router>
        <Navbar />
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
