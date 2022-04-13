import { useState ,useEffect} from 'react';
import AllGroup from './allGroup/AllGroup';
import FirstPage from './firstPage/FirstPage';
import GameProgress from './gameProgress/GameProgress';
import RegPage from './RegPage/RegPage';
import GameOver from './GameOver/GameOver';
import './App.css';

function App() {

  const [words,setWords] = useState('')

  
  const [gameStart,setGameStart] = useState(1)
  const [TimeValue,setTimeValue] = useState(60)
  const [scoreValue,setScoreValue] = useState(50)
  const [allGroup,setAllGroup] = useState([])  
  const [nowPleyer,setNowPleyer] = useState(-1)
  const [winer,setWiner] = useState('')
  
  
  const nextButtonClick = ()=>{
    
    if(gameStart === 2 && allGroup.length < 2) return
    setGameStart((prev)=>prev+1)
    
  }

  useEffect(()=>{

    setWords(['Համեղ','Գեր','Հաջողակ','Երանելի'])

  },[winer])

  return (
    <div className="App">

    {
      gameStart === 1 &&
      <FirstPage nextButtonClick={nextButtonClick}/>

    }
    {
      gameStart === 2 &&
      <RegPage
        TimeValue={TimeValue}
        setTimeValue={setTimeValue}
        scoreValue={scoreValue}
        setScoreValue={setScoreValue}
        allGroup={allGroup}
        setAllGroup={setAllGroup}
        nextButtonClick={nextButtonClick}
      
      />

    }
    {
      gameStart === 3 &&
      <AllGroup 
        allGroup={allGroup}
        nextButtonClick={nextButtonClick}
        nowPleyer={nowPleyer}
        setNowPleyer={setNowPleyer}
        scoreValue={scoreValue}
        setGameStart={setGameStart}
        setWiner={setWiner}
        words={words}
      />
    }

    {
      gameStart === 4 &&
      <GameProgress 

        words={words}
        playerGroup={allGroup[nowPleyer]}
        TimeValue={TimeValue}
        setGameStart={setGameStart}
      
      />
    }

    {
      gameStart === "GameOver" &&
      <GameOver 
        setGameStart={setGameStart}
        setAllGroup={setAllGroup}
        setNowPleyer={setNowPleyer}
        winer={winer}
        scoreValue={scoreValue}
      />
    }
    </div>

  );
}

export default App;
