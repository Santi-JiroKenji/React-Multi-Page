import React from 'react';
import Home from './Home';
import {Route, Switch} from "react-router-dom"
import Contact from './pages/Contact';
import Service from './pages/Service';
import About from './pages/About';
import Error from './pages/Error';

const App = () => {
  return (
  <>
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
    <Route path='/service' component={Service}></Route>
    {/* <Route path='/error' component={Error}></Route> */}
    <Route component={Error}></Route>
  </Switch>
  </>
  )
};

export default App;
