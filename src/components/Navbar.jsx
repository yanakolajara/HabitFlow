import { useState } from 'react';
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const [loggedin, setLoggedin] = useState(false)
    const navigate = useNavigate()

    function redirectToLogin(e){
        e.preventDefault()
        console.log('LOGIN')
    }
    
    function redirectToSignup(e){
        e.preventDefault()
        console.log('SIGNUP')
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
                <>
                <button
                id='navbar-login-button'
                onClick={(e) => redirectToLogin(e)}
                >Log in</button>
                <button
                id='navbar-signup-button'
                onClick={(e) => redirectToSignup(e)}
                >Sign up</button>
                </>
            )
        }
    }

    return(
        <div id='navbar-box'>
            <img src="" alt="logo" />
            {checkUserLogInStatus()}
        </div>
    )
}

export default Navbar;