import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Symptom from "./pages/Symptom";
import aboutus from "./pages/aboutus";
import world from "./pages/world";
import home from "./pages/home";
import indo from "./pages/indo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

    function App() {
        return ( 
          <Router>
          <div>
            <Nav />
            <Switch>
            <Route exact path="/" component={home} />
            <Route path="/world" component={world} />
            <Route path="/indo" component={indo} />
            <Route path="/Symptom" component={Symptom} />
            <Route path="/aboutus" component={aboutus} />
            </Switch>
          </div>
          </Router>
          );
    }

export default App;