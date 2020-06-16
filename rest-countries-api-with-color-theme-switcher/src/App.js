import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Details } from './pages'

function App() {
  return (
    <Router basename={'/rest-countries-api-with-color-theme-switcher'}>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/details" component={Details}></Route>
    </Router>
  )
}

export default App;
