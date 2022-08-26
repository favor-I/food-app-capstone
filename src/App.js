import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Home />} path='/'></Route>
        <Route element = {<Login />} path='/login'></Route>
        <Route element = {<SignUp />} path='/sign-up'></Route>
      </Routes>
    </Router>
  );
}

export default App;
