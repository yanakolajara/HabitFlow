import 'charts.css';
import { useEffect } from 'react';


function Dashboard() {

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