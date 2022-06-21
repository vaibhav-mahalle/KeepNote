
import React, { useState } from "react";
import './Auth.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

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

  const handleLoginFunction = async() => {
    try{
      const res = await axios.post("/api/auth/login", loginData);

      if(res.status === 200)
      {
        console.log("response ok",res.data);
      }
      else{
        console.log("some error with response",res.status);
      }
  }catch(error){
    console.log(loginData);
    console.error("this error occured", error);
  }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    handleLoginFunction(); 
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
        <p className="guestDetails" onClick={setLogin}>
          Login with guest credentials?
        </p>
        <button className="btn btn-primary" onClick={handleLogin}>
          Sign In
        </button>
        <button className="btn btn-outline-secondary">
          <Link to="/signup">New User? Sign-Up</Link>
        </button>
      </main>
    </div>
  );
}
