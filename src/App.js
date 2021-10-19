import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Result from './Result'
import Home from './Home'
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/step4" component={Step4} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
  )
}

export default App;
