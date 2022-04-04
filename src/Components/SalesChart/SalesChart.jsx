import React from 'react';
import { Chart } from "react-google-charts";
import "./SalesChart.css";

const SalesChart = (props) => {

    function generateSalesforChart(){

        let filteredGames = props.videoGames.filter(game => game.year >= 1980);

        let salesPerPlatform = props.videoGames.map(game => {
            return game.platform;
        })
        
        console.log("Mapped Platforms", salesPerPlatform);

        let distinctPlatforms = [...new Set(salesPerPlatform)]

        console.log('Distinct Platforms', distinctPlatforms)
    
        let platformArrays = distinctPlatforms.map(distinctPlatform => {
          let allGamesForPlatform = filteredGames.filter(game => game.platform === distinctPlatform);
          let globalSales = allGamesForPlatform.reduce(function(sum, current){
            return sum + current.globalSales;
          },0)
          console.log(globalSales)
    
          return [distinctPlatform, globalSales]
        });
    
        console.log('Platform Arrays', platformArrays);

    const data = [
        ["Platform", "Sales in Millions"],

       ...platformArrays
      ];

      console.log('Data', data);
      return data;
    }

    const options = {
        title: " ",
        is3D: true,
        
      }



    return (
        <div>
           <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          </style>
          <h3>Sales by Platform in Millions (Enter Search Criteria to display Chart)</h3>
          
  <Chart
      chartType="PieChart"
      data={generateSalesforChart()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>
    )
    
}



export default SalesChart;