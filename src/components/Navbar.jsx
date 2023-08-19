import '../styles/Navbar.css'
import { UserContext } from '../Context/Auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo/logo-title.png'

function Navbar(){
    const {email} = useContext(UserContext)
    const navigate = useNavigate()

    function redirectToLogin(e){
        e.preventDefault()
        navigate('/login')
    }
    
    function redirectToSignup(e){
        e.preventDefault()
        navigate('/signup')
    }

    function redirectToDashboard(e){
        e.preventDefault()
        navigate('/dashboard')
    }

    function redirectToAccount(e){
        e.preventDefault()
        navigate('/settings')
    }

    function checkUserLogInStatus(){
        if(email){
            return(
                <div id="navbar-buttons">
                <button
                id='navbar-dashboard-button'
                onClick={(e) => redirectToDashboard(e)}
                >Dashboard</button>
                <button
                id='navbar-account-button'
                onClick={(e) => redirectToAccount(e)}
                >Account</button>
                </div>
            )
        }else{
            return(
                <div id="navbar-buttons">
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
                <img id= "navbar-logo-icon"src={logoIcon} alt="logo" onClick={() => navigate('/')}/>
            </div>
            {checkUserLogInStatus()}
        </div>
    )
}

export default Navbar;