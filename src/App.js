import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <main>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/projects" exact>
            <Projects />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>
        </main>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
