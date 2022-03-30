import React, {useState, useEffect} from "react";
import NavBar from './Components/NavBar/NavBar.jsx';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import axios from "axios";
import DisplayGames from "./Components/DisplayGames/DisplayGames.jsx";



function App() {

  const [games, setGames] = useState([])

  async function getAllGames(){
    let response = await axios.get("https://localhost:7260/api/games");
    setGames(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getAllGames();
  },[]);

  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (keyword !== "") {
      const results = games.filter((games) => {
        return (
          games.rank.toLowerCase().includes(keyword.toLowerCase()) ||
          games.name.toLowerCase().includes(keyword.toLowerCase()) ||
          games.platform.toLowerCase().includes(keyword.toLowerCase()) ||
          games.year.toLowerCase().includes(keyword.toLowerCase()) ||
          games.genre.toLowerCase().includes(keyword.toLowerCase()) ||
          games.publisher.toLowerCase().includes(keyword.toLowerCase()) ||
          games.northAmericanSales.toLowerCase().includes(keyword.toLowerCase()) ||
          games.europeanSales.toLowerCase().includes(keyword.toLowerCase()) ||
          games.japanSales.toLowerCase().includes(keyword.toLowerCase()) ||
          games.otherSales.toLowerCase().includes(keyword.toLowerCase()) ||
          games.globalSales.toLowerCase().includes(keyword.toLowerCase()) 

        );
      });
      setGames(results);
    } else {
      setGames(games);
    }
  };


  return (
    <div>
      <EntriesChartTracker games = {games}/>
      
      <input type="text" onChange={(event)=> handleSearch(event)} />
      <DisplayGames games = {games}/>
     <h3>Hello World!</h3>
    </div>
  );
}

export default App;
