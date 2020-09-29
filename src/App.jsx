import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Main from "./components/Main.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import SignUpSuccess from "./components/SignUpSuccess.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ExperienceScreen from "./components/ExperienceScreen";

class App extends Component {
  state = {
    loggedInUser: "rumblingCSharp",
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Router>
          <Main path="/" loggedInUser={loggedInUser} />
          <SignUpForm path="/signup" />
          <SignUpSuccess path="/signupsuccess" />
          <LoginForm path="/login" />
          <ExperienceScreen
            path="/experience/:experience_id"
            loggedInUser={loggedInUser}
          />
        </Router>
      </div>
    );
  }
}

export default App;
