import { useState } from "react";


function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        console.log(e.currentTarget.children[2])
    }

    return(
        <div id="login-route">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="login-form-email">Email</label>
                <input
                type="email"
                className="login-form-email" 
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email"/>

                <label htmlFor="login-form-password">Password</label>
                <input
                type="password"
                className="login-form-password" 
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Password"/>

                <input
                type="submit"
                value='Log In'
                className="login-form-submit-button"/>
            </form>
        </div>
    )
}

export default Login;