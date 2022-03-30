import React from 'react'

const SearchBar = (props) => {

    const handleSearch = (event) => {
        const keyword = event.target.value;
    
        if (keyword !== "") {
          const results = props.games.filter((games) => {
            return (
              props.games.rank.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.name.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.platform.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.year.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.genre.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.publisher.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.northAmericanSales.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.europeanSales.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.japanSales.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.otherSales.toLowerCase().includes(keyword.toLowerCase()) ||
              props.games.globalSales.toLowerCase().includes(keyword.toLowerCase()) 

            );
          });
          setGames(results);
        } else {
          setGames(games);
        }
      };
    

  return (
    <div>
        <input type="text" onChange={(event)=> handleSearch(event)} />
    </div>
    

  )
}

export default SearchBar