
import "./DisplayGames.css";

const DisplayGames = (props) => {

  console.log(props.videoGames);
  return (
    <div className='container'>
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