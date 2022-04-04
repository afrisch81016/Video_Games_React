import React from 'react'
import { Chart } from "react-google-charts";

const CustomChart = (props) => {

function defineCustomChart(){

    let customFilter = props.games.filter(game => game.year >= 1980);

    let salesPerGenre = props.games.map(game => {
        return game.genre
    })

    console.log("mapped Genres", salesPerGenre);

    let specificGenres = [...new Set (salesPerGenre)]

    console.log("Distinct Genres", specificGenres);

    let genreArrays = specificGenres.map(specificGenres => {
        let allGamesInGenres = customFilter.filter(game => game.genre === specificGenres);
        let globalSales = allGamesInGenres.reduce(function(sum, current){
            return sum + current.globalSales;
        },0)

        console.log("Global Sales", globalSales)

        return [specificGenres, globalSales]
    });

    console.log("Genre Array", genreArrays);

    const data = [
        ["Genre", "Global Sales"],

        ...genreArrays
];

      console.log("Data", data);
      return data;
    }

    const options = {
        title: "Global Sales of Genres", 
      };

    return (
        <div>
  <Chart
      chartType="PieChart"
      data={defineCustomChart()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>
    )
}

export default CustomChart