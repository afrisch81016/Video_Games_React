import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = ({games}) => {
  
  function generateDataforChart(){

    console.log(games);

    let filteredGames = games.filter(game => game.year >= 2013);
    
    console.log("Filtered Games", filteredGames);

    let platforms = filteredGames.map(game => {
      return game.platform;
    });
    console.log("Platform", platforms);  

    let distinctPlatforms = [...new Set(platforms)]

    console.log('Distinct Platforms', distinctPlatforms)

    let platformArrays = distinctPlatforms.map(platform => {
      return [platform, 10, "silver"]
    });

    console.log('Platform Arrays', platformArrays);

    


    const data = [
      ["Platform", "Sales", { role: "style" }],
      ["PS4", 8.94, "#b87333"], 
      ["XBOX", 10.49, "silver"], 
      ["Nintendo", 19.3, "gold"],
      ["PC", 21.45, "color: #e5e4e2"], 
    ];

    return data;
  }





  return (
       <div>
         <h1>Platform by Global Sales in Millions!</h1>
         <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataforChart} />
       </div>
  );
   
};

export default EntriesChartTracker;