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
    //TODO: Fix buttons and reload

    function checkUserLogInStatus(){
        if(email){
            return(
                <>
                <button
                id='navbar-button'
                >Dashboard</button>
                <button
                id='navbar-button'
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
                id='navbar-button'
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