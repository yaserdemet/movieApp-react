import React, { useState } from "react";
import {  signIn } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email,password,navigate);
    navigate("/");
    
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src="https://picsum.photos/800/800" alt="random-image" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email name"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password name"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="link">Forgot Password</div>

          <input
            type="submit"
            className="btn form-control btn-primary"
            value="Login"
          />
        </form>
        <button className="btn btn-primary form-control">
          Contiune with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
