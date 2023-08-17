import '../styles/Form.css'
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
        <div id="form-div">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <p class="title">Log In </p>
                <label> Email
                    <input
                    placeholder="Email"
                    type="email"
                    className="input" 
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    required/>
                </label>

                <label> Password
                    <input
                    placeholder="Password"
                    type="password"
                    className="input" 
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required/>
                </label>

                <input
                type="submit"
                value='Log In'
                className="submit"/>
            </form>
        </div>
    )
}

export default Login;