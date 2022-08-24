import React, { useState } from 'react';
import { forgotPassword, signIn, signUpProvider } from '../auth/firebase.js';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Module from '../components/Module.jsx';
import {Helmet} from "react-helmet"

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    // console.log(email, password);
  };
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (

    <div className="d-flex justify-content-center">

      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="login page" />
      </Helmet>


      <div className="form-image d-none d-md-block ">
        <img src={'https://picsum.photos/800/800'} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Login</h1>
        <form id="register" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
            
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
            
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="link" onClick={() => forgotPassword(email)}>
            Forgot Password?
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
            data-bs-target = "#deneme"
            data-bs-toggle="modal"
           
           
          />
        </form>
      <Module />
        <button
          className="btn btn-primary form-control"
          onClick={handleProviderLogin}
        >
          Continue with Google <FcGoogle size={ 30 } />
        </button>
      </div>
    </div>
  );
};

export default Login;

