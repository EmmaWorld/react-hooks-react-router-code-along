import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar"
import SignUp from "./SignUp";
import Messages from "./Messages";

function App() {
  return (
    <div>
        <Home />
        <NavBar />
        <Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <SignUp />
        </Route>
        <Route path="/messages">
            <Messages />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        </Route>
    </div>
  );
}

export default App; 