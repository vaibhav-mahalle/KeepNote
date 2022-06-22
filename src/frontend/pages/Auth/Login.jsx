
import React, { useState } from "react";
import './Auth.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/Auth/context";
import { handleLoginFunction } from "../../context/Auth/utils";
import { Toast } from "../../component";


export const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

   const {authDispatch} = useAuth();
   const location = useLocation();
   const navigate = useNavigate();

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [inputName]: value });
  };

  const testCredentials = {
    email: "vaibhavmahalle95@gmail.com",
    password: "vaibhavMahalle123",
  };

  const setLogin = () => {
    setLoginData(testCredentials);
  };

  

  const handleLogin = async (e) => {
    e.preventDefault();    
    handleLoginFunction(loginData, authDispatch, location, navigate);
     
  }
  return (
    <div className="loginPage">
      <main className="loginContainer">
        <h1 className="page-heading">Login</h1>
        <div className="input-wrapper m-b-1">
          <label htmlFor="input">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="on"
            required
            className="input-box font-xs"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        
        <div className="input-wrapper m-b-1">
          <label htmlFor="input">Enter Password</label>
          <input
            type="password"
            name="password"
            required
            className="input-box font-xs"
            placeholder="Enter password"
            value={loginData.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <p className="guestDetails" onClick={(e) =>setLogin(e)}>
          Login with guest credentials?
        </p>
        <button className="btn btn-primary" onClick={(e)=>handleLogin(e)}>
          Sign In
        </button>
        <button className="btn btn-outline-secondary">
          <Link to="/signup">New User? Sign-Up</Link>
        </button>
      </main>
    </div>
  );
}
