import '../styles/Form.css'
import { useState } from "react";
import { login } from '../Api/Api'
import { useNavigate } from 'react-router-dom';


function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        try {
            let userToken = await login(email, password);
            if(!userToken.data.error){
                document.cookie = `authToken=${userToken.data}`    
                navigate('/dashboard');
                window.location.reload();
            }else{
                setError(userToken.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
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
                <div id='form-error'>
                    <p>{error}</p>
                </div>
        </>
    )
}

export default Login;