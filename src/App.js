import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Main from "./components/Main.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import LoginForm from "./components/LoginForm.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <SignUpForm path="/signup" />
        <LoginForm path="/login" />
      </Router>
    </div>
  );
}

export default App;
