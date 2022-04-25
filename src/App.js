import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./compnents/Home/index";
import Addcomponent from "./compnents/Home/addcomponent";
import Itemlist from "./compnents/Home/Itemlist";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='Addcomponent' component={Addcomponent} />
        <Route path='Itemlist' component={Itemlist} />
      </Switch>
    </Router>
  );
}

export default App;
