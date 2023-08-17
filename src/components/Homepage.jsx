import '../styles/Homepage.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import logo from '../assets/logo/habit-flow-icon-hd.png'

function Homepage(){
    const [activeHabits, setActiveHabits] = useState(false)
    
    function checkHabits(){
        if(!activeHabits){
            return(
                <div>
                    <img id="homepage-main-icon" src={logo} alt="Logo"/>
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

    return(
        <div id='homepage-main-div'>
            {checkHabits()}
        </div>
    )
}

export default Homepage;