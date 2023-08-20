import 'charts.css';
import '../styles/Dashboard.css'
import { useContext, useEffect, useState } from 'react';
import { addHabitToUser, checkUserHabits, getAllHabits } from '../Api/Api';
import { UserContext } from '../Context/Auth';




function Dashboard() {

    const { id, first_name } = useContext(UserContext)
    const [hasHabits, setHasHabits] = useState(false)
    const [allHabits, setAllHabits] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [habitsToAdd, setHabitsToAdd] = useState([])
    const date = new Date();

    //TODO: Add habits to user with map function, to create a fetch call multiple times, until all habits had been added, then window.refresh
    
    async function fetchUserHabits(){
        try {
            const userHabits = await checkUserHabits(id);
            if(userHabits.data[0]){
                setHasHabits(true)
                setIsLoading(false)
            }else{
                const getHabits = await getAllHabits();
                setHasHabits(false)
                setAllHabits(getHabits.data)
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

    useEffect(() => {
        fetchUserHabits()
    }, [])


    if(isLoading){
        return <p>Loading...</p>
    }
    if(hasHabits){
        return(
            <div id="dashboard-div">
                <p>HELLO</p>
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