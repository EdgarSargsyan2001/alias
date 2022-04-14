import './GameOver.css'

function GameOver({setNowPleyer,setAllGroup,setGameStart,winer,scoreValue}){

    const GameStartButton = ()=>{
        setNowPleyer(-1)
        setGameStart(1)
        setAllGroup([
            {
                id:5,
                name:"Խումբ 1",
                score:0
              },
              {
                id:6,
                name:"Խումբ 2",
                score:0
              }
        ])
    }

    return (
        <div className='default GameOverDiv'>
            <h1 className='haxtox'>Հաղթող <p className='winnerText'>{winer.name}</p> </h1>
            <h2 className='title'>միավոր {winer.score+'/'+ scoreValue}</h2>

        <button className='GameStartButton playButtnn' onClick={GameStartButton}>Սկսել նորից</button>
        </div>
    )
}

export default GameOver