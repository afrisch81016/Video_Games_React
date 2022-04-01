

const DisplayGames = (props) => {

  console.log(props.videoGames);
  return (
    <div className='displayborder'>
        {props.videoGames.map((videoGames, index) => {
            return(
                <div key={index}>
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