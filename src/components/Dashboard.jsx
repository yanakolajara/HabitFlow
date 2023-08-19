import 'charts.css';
import { useContext, useEffect } from 'react';
import { checkUserHabits } from '../Api/Api';
import { UserContext } from '../Context/Auth';


function Dashboard() {

    //TODO: Finish checkUserHabits function in API and backend
    const { id, name } = useContext(UserContext)
    function fetchUserHabits(){

    }

    useEffect(() => {
        fetchUserHabits()
    }, [])

    return(
        <div id="dashboard-div">
            <p>Dashboard</p>
            <table class="charts-css line" id="my-chart">
            <caption> Descriptive Chart Heading </caption>
            </table>
        </div>
    )    
}

export default Dashboard;