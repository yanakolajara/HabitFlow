import '../styles/Navbar.css';
import { UserContext } from '../Context/Auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo/logo-title.png';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const { email } = useContext(UserContext);
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div id='navbar-box'>
      <div className='icon-div'>
        <img
          id='navbar-logo-icon'
          src={logoIcon}
          alt='logo'
          onClick={() => navigate('/')}
        />
      </div>
      <div id='navbar-buttons'>
        {(email && (
          <>
            <button
              id='navbar-dashboard-button'
              onClick={() => navigate('/addhabit')}
            >
              Add habit
            </button>
            <button id='navbar-account-button' onClick={() => logout()}>
              Log out
            </button>
          </>
        )) || (
          <>
            <button
              id='navbar-signup-button'
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>
            <button id='navbar-login-button' onClick={() => navigate('/login')}>
              Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
