import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Login />} path='/'></Route>
        <Route element = {<Home />} path='/home'></Route>
        <Route element = {<SignUp />} path='/sign-up'></Route>
        <Route element = {<Dashboard />} path='/dashboard'></Route>
      </Routes>
    </Router>
  );
}

export default App;
