import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Products";
import SignUp from "./components/Pages/SignUp";
import fire from "./Config/fire";
import Login from "./components/Pages/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact={true} path="/login" component={Login}></Route>
            <Route path="/" exact component={Home}></Route>
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
