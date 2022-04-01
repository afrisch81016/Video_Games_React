import React, {useState, useEffect} from "react";
import NavBar from './Components/NavBar/NavBar.jsx';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import axios from "axios";
import DisplayGames from "./Components/DisplayGames/DisplayGames.jsx";
import EntriesChart2 from "./Components/EntriesChartTracker/EntriesChart2.jsx"


function App() {

  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState([]);
  const [gameSearch, setGameSearch] = useState();

  async function getAllGames(){
    let response = await axios.get("https://localhost:7260/api/games");
    setGames(response.data);
    console.log(response.data);
  }

  async function getGameById() {
    let response = await axios.get("https://localhost:7260/api/games/20");
    setGameId(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getAllGames();
    getGameById();
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
      setGameSearch(results);
    } else {
      setGameSearch(games);
    }
  };


  return (
    <div>
      <EntriesChartTracker games = {games}/>
      {/* <EntriesChart2 games ={games}/> */}
      
      
      <input type="text" onChange={(event)=> handleSearch(event)} />
      <DisplayGames gameSearch  = {gameSearch} gameId = {gameId}/>
    </div>
  );
}

export default App;
