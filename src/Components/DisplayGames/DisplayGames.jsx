

const DisplayGames = (props) => {
  return (
    <div className='displayborder'>
        {props.gameId.map((gameId, index) => {
            return(
                <div key={index}>
                    <p>{gameId.rank}</p>
                    <p>{gameId.name}</p>

                </div>
            )
        }
        
        )}
    </div>
  )
}

export default DisplayGames