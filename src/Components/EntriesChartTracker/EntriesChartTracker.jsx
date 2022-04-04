

import React from 'react';
import { Chart } from "react-google-charts";
import "./EntriesChartTracker.css"

const EntriesChartTracker = (props) => {
  
  function generateDataforChart(){


    console.log(props.games);

    let filteredGames = props.games.filter(game => game.year >= 2013);
    
    console.log("Filtered Games", filteredGames)

    let platforms = filteredGames.map(game => {
      return game.platform;
    });
    console.log("Platform", platforms);  

    let distinctPlatforms = [...new Set(platforms)]

    console.log('Distinct Platforms', distinctPlatforms)

    let platformArrays = distinctPlatforms.map(platform => {
      let allGamesForPlatform = filteredGames.filter(game => game.platform === platform);
      let globalSales = allGamesForPlatform.reduce(function(sum, current){
        return sum + current.globalSales;
      },0)
      console.log(globalSales)

      return [platform, globalSales, "silver"]
    });

    console.log('Platform Arrays', platformArrays);

    const data = [
      ["Platform", "Sales", { role: "style" }],
      ...platformArrays
    ];
    console.log('Data', data)

    return data;
  }
  return (
       <div>
         <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          </style>
         <h1>Platform Global Sales in Millions since 2013</h1>
         <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataforChart()} />
       </div>
  );
   
};

export default EntriesChartTracker;