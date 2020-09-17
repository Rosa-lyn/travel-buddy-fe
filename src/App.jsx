import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Main from "./components/Main.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import SignUpSuccess from "./components/SignUpSuccess.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ExperienceScreen from "./components/ExperienceScreen";
import AddExperience from "./components/AddExperience";
import AddComment from "./components/AddComment";
import AddImage from "./components/AddImage";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <SignUpForm path="/signup" />
        <SignUpSuccess path="/signupsuccess" />
        <LoginForm path="/login" />
        <ExperienceScreen path="/experience" />
        <AddExperience path="/addexperience" />
        <AddComment path="/addcomment" />
        <AddImage path="/addimage" />
      </Router>{" "}
    </div>
  );
}

export default App;
