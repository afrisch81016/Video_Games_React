import React from 'react';
import { Chart } from "react-google-charts";

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
        title: "Sales by Platform in Millions (Enter Search Criteria to display Chart) ",
        is3D: true,
      }



    return (
        <div>
          
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