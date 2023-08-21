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

    function redirectToAddHabit(e){
        e.preventDefault()
        navigate('/addhabit')
    }

    function logOut(e){
        e.preventDefault()
        document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
        navigate('/')
        window.location.reload();
    }

    function handleLogoClick(e){
        e.preventDefault()
        if(email){
            navigate('/dashboard')
        }else{
            navigate('/')
        }
    }

    function checkUserLogInStatus(){
        if(email){
            return(
                <div id="navbar-buttons">
                <button
                id='navbar-dashboard-button'
                onClick={(e) => redirectToAddHabit(e)}
                >Add habit</button>
                <button
                id='navbar-account-button'
                onClick={(e) => logOut(e)}
                >Log out</button>
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
                <img id= "navbar-logo-icon"src={logoIcon} alt="logo" onClick={(e) => handleLogoClick(e)}/>
            </div>
            {checkUserLogInStatus()}
        </div>
    )
}

export default Navbar;