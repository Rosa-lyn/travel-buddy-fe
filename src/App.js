import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Main from "./components/Main.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import SignUpSuccess from "./components/SignUpSuccess.jsx";
import LoginForm from "./components/LoginForm.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <SignUpForm path="/signup" />
        <SignUpSuccess path="/signupsuccess" />
        <LoginForm path="/login" />
      </Router>
    </div>
  );
}

export default App;
