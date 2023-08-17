import { useState } from 'react'
import '../styles/Signup.css'


function Signup(){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState(null)
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(firstName)
        console.log(lastName)
        console.log(dob)
        console.log(gender)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
    }

    return(
        <div id='signup-route'>
            <form className="form" onSubmit={(e) => {handleSubmit(e)}}>
                <p class="title">Register </p>
                <div class="flex">
                    <label> First name
                        <input
                        placeholder="First name"
                        type="text"
                        class="input"
                        value={firstName}
                        onChange={(e) => setFirstName(e.currentTarget.value)}
                        required/>
                    </label>

                    <label> Last name
                        <input
                        placeholder="Last name"
                        type="text"
                        class="input"
                        value={lastName}
                        onChange={(e) => setLastName(e.currentTarget.value)}
                        required
                        />
                    </label>
                </div> 
                <div class="flex">
                    <label> Birthday
                        <input
                        type="date"
                        class="input"
                        value={dob}
                        onChange={(e) => setDob(e.currentTarget.value)}
                        required
                        />
                    </label>

                    <label> Gender
                        <select
                        value={gender}
                        onChange={(e) => setGender(e.currentTarget.value)}
                        required
                        >
                            <option>-- Select an option --</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-Binary</option>
                            <option>Other</option>
                        </select>
                    </label>
                </div>  
                    
                <label> Email
                    <input
                    placeholder="Email"
                    type="email"
                    class="input"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    required
                    />
                </label> 
                
                <label> Password
                    <input
                    placeholder="Password"
                    type="password"
                    class="input"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                    />
                </label>
                <label> Confirm password
                    <input
                    placeholder="Confirm password"
                    type="password"
                    class="input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                    required
                    />
                </label>
                <button class="submit">Submit</button>
                <p class="signin">Already have an acount ? <a href="/login">Log in</a> </p>
            </form>
        </div>
    )
}

export default Signup;