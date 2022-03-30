

const DisplayGames = (props) => {
  return (
    <div className='displayborder'>
        {props.games.map((games, index) => {
            return(
                <div key = {index}>
                    <div><p className='games.name'>{games.name}</p></div>
                </div>
            )
        }
        
        )}
    </div>
  )
}

export default DisplayGames