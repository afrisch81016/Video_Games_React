import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState([]);
    
    useEffect(() => {
        let tempChartData = props.games.map(games => {
            return [games.rank, games.name, games.platform];
        });
        setChartData(tempChartData)
    },[])

    return (
        <Chart
        chartType="ScatterChart"
        data={[["Rank", "Name", "Platform"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
        />
     );
}
 
export default EntriesChartTracker;
