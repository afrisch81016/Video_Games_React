import React, {useState, useEffect} from "react";
import NavBar from './Components/NavBar/NavBar.jsx';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
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


  return (
    <div>
      <SearchBar games = {games}/>
      <EntriesChartTracker games = {games}/>
      <DisplayGames games = {games}/>
      
     <h3>Hello World!</h3>
    </div>
  );
}

export default App;
