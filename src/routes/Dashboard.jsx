import 'charts.css';
import '../styles/Dashboard.css'
import { useContext, useEffect, useState } from 'react';
import { addHabitToUser, checkUserHabits, getAllHabits } from '../Api/Api';
import { UserContext } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';




function Dashboard() {

    const { id, first_name } = useContext(UserContext)
    const [hasHabits, setHasHabits] = useState(false)
    const [allHabits, setAllHabits] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [habitsToAdd, setHabitsToAdd] = useState([])
    const [userHabits, setUserHabits] = useState([])
    const navigate = useNavigate()
    if(!id){navigate('/')}
    
    async function fetchUserHabits(){
        try {
            const userHabits = await checkUserHabits(id);
            const getHabits = await getAllHabits();
            setAllHabits(getHabits.data)
            if(userHabits.data[0]){
                setUserHabits(userHabits.data)
                setHasHabits(true)
                setIsLoading(false)
            }else{
                setHasHabits(false)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    function addHabitButtonClicked(habitId){
        setHabitsToAdd([...habitsToAdd, habitId])
    }

    function addAllSelectedHabits(e){
        e.preventDefault()
        habitsToAdd.map(habit => addHabitToUser(id, habit))
        window.location.reload();
    }

    function getHabitCards(){
        return allHabits.map((habit) => {
            return(
                <div className="new-habit-card" habitId={habit.id}>
                    <h3>{habit.name}: {habit.difficulty}</h3>
                    <p>{habit.description}</p>
                    <button
                    onClick={(e) => {
                        addHabitButtonClicked(habit.id)
                        e.target.parentNode.remove()
                    }}
                    >Add</button>
                </div>
            )
        })
    }

    function getUserHabits(){
        return userHabits.map((habit) => {
            const habitObj = allHabits.find(x => habit.habit_id === x.id)
            return(
                <div className="habit-card" habitId={habitObj.habit_id}>
                    <h2>{habitObj.name}</h2>
                    <p>{habitObj.description}</p>
                    <div className='habit-card-button-block'>
                        <button
                        className='habit-log-history-button'
                        onClick={() => {navigate(`/dashboard/${habitObj.id}/stats`)}}
                        >Add data</button>
                        <button
                        className='habit-delete-button'
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )
        })
    }

    useEffect(() => {
        fetchUserHabits()
    },[])

    if(isLoading){
        return <p>Loading...</p>
    }
    if(hasHabits){
        return(
            <div id="dashboard-div">
                <div id="display-user-habits">
                    <h1>My habits</h1>
                    {getUserHabits()}
                    <div className='add-other-habits-buttons'>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div id="dashboard-div">
                <div id="no-habits-dashboard">
                    <h1>Start today {first_name}!</h1>
                    <h1>Add the habits that best fits to you.</h1>
                    <button
                    id="add-all-selected-habits"
                    onClick={(e) => addAllSelectedHabits(e)}
                    >Add habits</button>
                    <div id="new-habits-container">
                        {getHabitCards()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;