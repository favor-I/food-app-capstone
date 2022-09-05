import React, { useEffect, useState } from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { PublicRoutes } from "./components/PublicRoute/PublicRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const existingUser = sessionStorage.getItem('newUser')
  
  useEffect(() => {
    if(existingUser){
      setIsLoggedIn(true)
    }

  }, [existingUser])
  
  
  return (
    <>
      <ToastContainer />
      <Router>
      <Routes>
        <Route element = {<Home />} path='/'></Route>
        <Route element = {<PublicRoutes isLoggedIn={isLoggedIn}> <Login /> </PublicRoutes>} path='/login'></Route>
        <Route element = {<PublicRoutes isLoggedIn={isLoggedIn}> <SignUp /> </PublicRoutes>} path='/sign-up'></Route>
        <Route path='/dashboard' element = {<ProtectedRoute isLoggedIn={isLoggedIn}> <Dashboard /> </ProtectedRoute>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
