
import "./DisplayGames.css";

const DisplayGames = (props) => {

  console.log(props.videoGames);
  return (
    <div className='container'>
       <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          </style>
        {props.videoGames.slice(0,5).map((videoGames, index) => {
            return(
                <div className="card" key={index}>
                    <p>Rank: {videoGames.rank}</p>
                    <p>Name: {videoGames.name}</p>
                    <p>Year: {videoGames.year}</p>
                    <p>Publisher: {videoGames.publisher}</p>
                    <p>Platform: {videoGames.platform}</p>
                </div>
            )
        }
        
        )}
    </div>
  )
}

export default DisplayGames