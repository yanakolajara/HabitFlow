import { useEffect, useState } from "react";
import { getAllUsers } from '../Api/Api'


function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        const userEmail = (e.currentTarget.children[1].value)
        const userPassword = (e.currentTarget.children[3].value)
        try {
            let allUsers = await getAllUsers();
            allUsers = allUsers.data
            const userObj = allUsers.find((user) => user.email === userEmail && user.password === userPassword)
            console.log(!!userObj)
        } catch (error) {
            console.log(error)
        }
        console.log(userEmail)
        console.log(userPassword)
    }



    return(
        <div id="login-route">
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <label htmlFor="login-form-email">Email</label>
                <input
                type="email"
                className="login-form-email" 
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email"
                required/>

                <label htmlFor="login-form-password">Password</label>
                <input
                type="password"
                className="login-form-password" 
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Password"
                required/>

                <input
                type="submit"
                value='Log In'
                className="login-form-submit-button"/>
            </form>
        </div>
    )
}

export default Login;