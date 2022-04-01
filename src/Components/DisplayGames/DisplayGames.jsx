

const DisplayGames = (props) => {

  console.log(props.videoGames);
  return (
    <div className='displayborder'>
        {props.videoGames.map((videoGames, index) => {
            return(
                <div key={index}>
                    <p>{videoGames.rank}</p>
                    <p>{videoGames.name}</p>

                </div>
            )
        }
        
        )}
    </div>
  )
}

export default DisplayGames