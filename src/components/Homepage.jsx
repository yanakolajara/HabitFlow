import '../styles/Homepage.css'
import { useState } from "react";
import { useParams } from "react-router-dom";

function Homepage(){
    const [activeHabits, setActiveHabits] = useState(false)
    
    if(!activeHabits){
        return(
            <div>
                <p>Homepage new user</p>
            </div>
        )
    }else if(activeHabits){
        return(
            <div>
                <p>Homepage habits</p>
            </div>
        )
    }
}

export default Homepage;