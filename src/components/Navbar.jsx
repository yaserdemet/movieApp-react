import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../auth/firebase';
import { AuthContext } from '../context/AuthContext';
import { BiCameraMovie } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';


const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  //* with custom hook
  // const { currentUser } = useAuthContext();
  // const currentUser = { displayName: 'felix franko' };
  // const currentUser = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4 className='text-dark'> <BiCameraMovie/> React Movie App  </h4>
          </Link>
          <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize ">
                  {currentUser.displayName}
                </h5>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => logOut()}
                >
                  Logout <FiLogOut />
                </button>
              </>
            ) : (
              <>
                <button
                  className="ms-2 btn btn-outline-dark"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button
                  className="ms-2 btn btn-outline-dark"
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
