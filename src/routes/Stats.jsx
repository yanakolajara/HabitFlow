import '../styles/Stats.css'
import '../styles/Dashboard.css'
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Context/Auth";
import { createHabitStats, getHabitById, getHabitStats } from "../Api/Api";


function Stats(){
    const { id } = useContext(UserContext)
    const habitId = useParams().habitId
    const [habit, setHabit] = useState()
    const [stats, setStats] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const date = new Date();
    if(!id){navigate('/')}

    async function fetchHabitStats(){
        try {
            const habitStats = await getHabitStats(id, habitId);
            const habitObj = await getHabitById(habitId);
            console.log(habitObj.data)
            setHabit(habitObj.data);
            setStats(habitStats.data);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    function displayStats(){
        return stats.map(x => {
            function evualuateStats(){
                switch(Number(x.completion)){
                    case(1):
                        return <h2>Succeed</h2>
                    case(2):
                        return <h2>Tried</h2>
                    case(3):
                        return <h2>Failed</h2>
                }
            }
            let completionStatus = ''
            if(Number(x.completion) === 1){completionStatus = "#70ff6d"}
            else if(Number(x.completion) === 2){completionStatus = "#edff7a"}
            else if(Number(x.completion) === 3){completionStatus = "#ff6d6d"}
            return(
                <div className='stat-card' style={{background : completionStatus}}>
                    {evualuateStats()}
                    <p>{x.month}/{x.day}/{x.year}</p>
                </div>
            )
        })
    }

    function handleClickedButton(selection){
        createHabitStats(id, habitId ,date.getDate(),date.getMonth(),date.getFullYear(),selection,1)
        navigate(`/dashboard/${id}/stats`)
    }

    useEffect(() => {
        fetchHabitStats()
    }, [])

    if(isLoading){
        return(<p>Loading...</p>)
    }
    
    return(
        <div id="user-habit-stats">
            <h1>{habit[0].name}</h1>
            <div id='stats-buttons-div'>
                <button
                id="habit-stats-back-button"
                class="stats-buttons"
                onClick={() => navigate('/dashboard')}
                >Back</button>
                <button
                id="habit-stats-succeed-button"
                class="stats-buttons"
                onClick={() => handleClickedButton(1)}
                >Succeed</button>
                <button
                id="habit-stats-tried-button"
                class="stats-buttons"
                onClick={() => handleClickedButton(2)}
                >Tried</button>
                <button
                id="habit-stats-failed-button"
                class="stats-buttons"
                onClick={() => handleClickedButton(3)}
                >Failed</button>
            </div>
            <div id='list-of-stats'>
                {stats.length !== 0 ? displayStats() : <h2>No data available.</h2>}
            </div>
        </div>
    )
}

export default Stats;