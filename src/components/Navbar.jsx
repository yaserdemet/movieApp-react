import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  // const currentUser = {
  //   displayName: "Yaser Demet",
  // };
  const currentUser = false
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4 className="navbar-header">React Movie App</h4>
          </Link>

          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
                {" "}
                <h5 className="mb-0 text-capitalize">
                  {currentUser.displayName}
                </h5>
                <button className="ms-2 btn btn-dark btn-outline-light">Logout</button>
              </>
            ) : (
              <>
                <button className="ms-2 btn btn-dark btn-outline-light" onClick={() => navigate("/login")}>Login</button>

                <button className="ms-2 btn btn-dark btn-outline-light" onClick={() => navigate("/register")}>Register</button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
