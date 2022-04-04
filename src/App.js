import React, {useState, useEffect} from "react";
import NavBar from './Components/NavBar/NavBar.jsx';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import axios from "axios";
import DisplayGames from "./Components/DisplayGames/DisplayGames.jsx";
import SalesChart from "./Components/SalesChart/SalesChart.jsx";
import CustomChart from "./Components/CustomChart/CustomChart.jsx";



function App() {

  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState([]);
  const [videoGames, setVideoGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e){

    e.preventDefault()
    filteredGames(searchTerm)
}

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

const filteredGames = (searchTerm) => {
  console.log(searchTerm);
  let matchingGames = games.filter((game) => {
    if (game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // game.rank.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    // game.year.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.publisher.toLowerCase().includes(searchTerm.toLowerCase())){
      return true

    }
    else return false
  })
  setVideoGames(matchingGames);
  console.log(matchingGames);

}


  return (
    <div>
      <EntriesChartTracker games = {games}/>
      <form onSubmit={handleSubmit}>
      <input value = {searchTerm} type="text" onChange={(e)=> setSearchTerm(e.target.value)} />
      <button type="submit">Search Games</button>
      </form>
       <SalesChart videoGames = {videoGames}/>
       <CustomChart games = {games} />
       <h3>Top 5 <span>Games</span> Search Results!</h3>
      <DisplayGames videoGames  = {videoGames}/>
    </div>
  );
}

export default App;
