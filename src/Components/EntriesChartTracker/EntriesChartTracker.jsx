import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = ({games}) => {
  console.log(games)

  

    const [chartData, setChartData] = useState([]);   
    
    
        const filteredGames = games.filter(element => element.year >= 2013).map(entry => {
          return [entry.platform];
        })
        setChartData(filteredGames)
        console.log(filteredGames);
    

    return (
    <Chart
              width={"100%"}
              // height={"200%"}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
      data={[
          ["Name","Year"],...chartData]}     //{[["Date", "Weight"], ...chartData]},
          // ["Andy",80],
          // ["Elisa", 20],
          // ["Robert", 7],
          // ["John", 54],
          // ["Jessica", 22],
          // ["Aaron", 3],
          // ["Margareth", 42],
          // ["Miranda", 33],
      // ]}
      rootProps={{ "data-testid": "6" }}
      chartPackages={["corechart", "controls"]}
      render={({ renderControl, renderChart }) => {
          return (
          <div style={{ display: "flex" }}>
            <div style={{ width: "40%" }}>{renderControl(() => true)}</div>
            <div style={{ width: "60%" }}>{renderChart()}</div>
          </div>
        );
      }}
      controls={[
          {
          controlType: "StringFilter",
          options: {
              filterColumnIndex: 0,
              matchType: "any", // 'prefix' | 'exact',
              ui: {
                  label: "Search by name",
            },
          },
        },
        {
            controlType: "NumberRangeFilter",
            controlID: "age-filter",
            options: {
                filterColumnIndex: 1,
                ui: {
                    labelStacking: "vertical",
              label: "Age Selection:",
              allowTyping: false,
              allowMultiple: false,
            },
          },
        },
      ]}
    />
  );
}



export default EntriesChartTracker;