import '../styles/AddHabit.css'
import { useContext, useEffect, useState } from "react"
import { addHabitToUser, checkUserHabits, getAllHabits } from "../Api/Api";
import { UserContext } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';

function AddHabit(){
    const navigate = useNavigate()
    const { id } = useContext(UserContext)
    const [allHabits, setAllHabits] = useState({})
    const [userHabits, setUserHabits] = useState()
    const [habitsToAdd, setHabitsToAdd] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchHabits(){
        try {
            const getHabits = await getAllHabits();
            const userHabitsObj = await checkUserHabits(id);
            setAllHabits(getHabits.data)
            setUserHabits(userHabitsObj.data)
            setIsLoading(false)
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
        navigate('/dashboard')
        window.location.reload();
    }

    function getHabitCards(){
        return allHabits.map((habit) => {
            if(!!userHabits.length){
                const currentHabit = userHabits.find((x) => habit.id === x.habit_id)
                if(currentHabit){
                    return
                }
            }

            return(
                <div className="add-new-habit-card" habitId={habit.id}>
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
        fetchHabits()
    }, [])
    

    if(isLoading){
        return <p>Loading...</p>
    }

    return(
        <div id="new-habits">
            <button
            id='add-habits-button'
            onClick={(e) => addAllSelectedHabits(e)}
            >Add habits</button>
            {getHabitCards()}
        </div>
    )
}

export default AddHabit;