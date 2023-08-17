import '../styles/Homepage.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import logo from '../assets/logo/habit-flow-icon-hd.png'

function Homepage(){
    const [activeHabits, setActiveHabits] = useState(false)
    const [loggedin, setLoggedin] = useState(false)
    
    function checkHabits(){
        if(!activeHabits){
            return(
                <div>
                    <p>Add active habits</p>
                </div>
            )
        }else if(activeHabits){
            return(
                <div id='homepage-main-div'>
                    <p>Homepage habits</p>
                </div>
            )
        }

    }
    if(loggedin){
        return(
            <div id='homepage-main-div-logged-in'>
                <p>Welcome back</p>
                {checkHabits()}
            </div>
        )
    }else{
        return(
            <main id='homepage-main-div'>
                <h1 id="homepage-welcome-title-text">Welocome to</h1>
                <img id="homepage-main-icon" src={logo} alt="Logo"/>
                <section id='homepage-info'>
                    <article>
                        <h2>Reach your goals at your own peace</h2>
                    </article>
                    <div class="empty-grid-space"/>
                    <div class="empty-grid-space"/>
                    <article>
                        <h2>Failing is ok, it's part of growing</h2>
                    </article>
                </section>
            </main>
        )
    }
}

export default Homepage;