import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Details } from './pages'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/details" component={Details}></Route>
    </Router>
  )
}

export default App;
