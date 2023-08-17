import { useState } from 'react';
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo/logo-title.png'

function Navbar(){
    const [loggedin, setLoggedin] = useState(false)
    const navigate = useNavigate()

    function redirectToLogin(e){
        e.preventDefault()
        navigate('/login')
    }
    
    function redirectToSignup(e){
        e.preventDefault()
        navigate('/signup')
    }

    function checkUserLogInStatus(){
        if(loggedin){
            return(
                <>
                <button
                id='navbar-dashboard-dropdown'
                >Dashboard</button>
                <button
                id='navbar-dashboard-dropdown'
                >Account</button>
                </>
            )
        }else{
            return(
                <div id="navbar-logged-out-buttons">
                <button
                id='navbar-signup-button'
                onClick={(e) => redirectToSignup(e)}
                >Sign up</button>
                <button
                id='navbar-login-button'
                onClick={(e) => redirectToLogin(e)}
                >Log in</button>
                </div>
            )
        }
    }

    return(
        <div id='navbar-box'>
            <div className='icon-div'>
                <img id= "navbar-logo-icon"src={logoIcon} alt="logo" />
            </div>
            {checkUserLogInStatus()}
        </div>
    )
}

export default Navbar;