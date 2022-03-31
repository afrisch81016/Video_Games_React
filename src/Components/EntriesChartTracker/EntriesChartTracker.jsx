import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState([]);
    const [filterData,setFilterData] = useState([]);
  

    
    
    const bestGames = () => {
        const results = props.games.filter((games) => {
            return (
                games.year >= 2013
            )
        })
        console.log(results)

    };

    


    useEffect(() => {
    let tempChartData = props.games.map(games => {
            return [games.name, games.platform, games.year];
        });
        setChartData(tempChartData)

        bestGames(results)
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

// import React from "react";
// import { Chart } from "react-google-charts";

// export function App() {
//   return (
//     <Chart
//       width={"100%"}
//       height={"100%"}
//       chartType="BarChart"
//       loader={<div>Loading Chart</div>}
//       data={[
//         ["Name", "Age"],
//         ["Michael", 12],
//         ["Elisa", 20],
//         ["Robert", 7],
//         ["John", 54],
//         ["Jessica", 22],
//         ["Aaron", 3],
//         ["Margareth", 42],
//         ["Miranda", 33],
//       ]}
//       rootProps={{ "data-testid": "6" }}
//       chartPackages={["corechart", "controls"]}
//       render={({ renderControl, renderChart }) => {
//         return (
//           <div style={{ display: "flex" }}>
//             <div style={{ width: "40%" }}>{renderControl(() => true)}</div>
//             <div style={{ width: "60%" }}>{renderChart()}</div>
//           </div>
//         );
//       }}
//       controls={[
//         {
//           controlType: "StringFilter",
//           options: {
//             filterColumnIndex: 0,
//             matchType: "any", // 'prefix' | 'exact',
//             ui: {
//               label: "Search by name",
//             },
//           },
//         },
//         {
//           controlType: "NumberRangeFilter",
//           controlID: "age-filter",
//           options: {
//             filterColumnIndex: 1,
//             ui: {
//               labelStacking: "vertical",
//               label: "Age Selection:",
//               allowTyping: false,
//               allowMultiple: false,
//             },
//           },
//         },
//       ]}
//     />
//   );
// }



