import React, { useState } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState([]);
    
    useEffect(() => {
        let tempChartData = props.parentEntries.map(entry => {
            return [entry.date, entry.weight];
        });
        setChartData(tempChartData)
    },[])

    return (
        <Chart
        chartType="ScatterChart"
        data={[["Name", "Weight"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
        />
     );
}
 
export default EntriesChartTracker;
