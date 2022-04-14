import { useState ,useEffect} from 'react';
import AllGroup from './allGroup/AllGroup';
import FirstPage from './firstPage/FirstPage';
import GameProgress from './gameProgress/GameProgress';
import RegPage from './RegPage/RegPage';
import GameOver from './GameOver/GameOver';
import './App.css';

function App() {

  const [words,setWords] = useState('')
  const [allGroup,setAllGroup] = useState([
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

  
  const [gameStart,setGameStart] = useState(1)
  const [TimeValue,setTimeValue] = useState(60)
  const [scoreValue,setScoreValue] = useState(50)
  const [nowPleyer,setNowPleyer] = useState(-1)
  const [winer,setWiner] = useState('')
  
  
  const nextButtonClick = ()=>{
    
    if(gameStart === 2 && allGroup.length < 2) return
    setGameStart((prev)=>prev+1)
    
  }
  const deletePleyer = (id) => setAllGroup(allGroup.filter(el => el.id != id) )
    
  

  useEffect(()=>{

    setWords(
          [  
            'Փարիսեցի', 'բէեղզեբուղ', 'Թադեոս', 'արուսյակ', 'Երգ-երգոց', 'Ղուկաս', 'Գեթսեմանի', 'Ղևի', 'Եփեսոս',
            'Լավոդիկե', 'Փիլիպոս', 'Փիլիմոն', 'Հուդա(գիրք)', 'Սուրբ Հոգի', 'Տարսոն', 'Գամաղիել', 'Հովհաննես 3:16',
            'Սաղմոս 119', 'Մովսես', 'Դանիել', 'Սամսոն', 'Առակաց', 'Ժողովող', 'Բարսաբա', 'Բարրաբա', 'Պիղատոս', 'Ստեփանոս',
            'Նաթաել', 'Նիկոդեմիոս', 'Նազարեթ', 'Հուդա(մատնիչ)', 'Աբրահամ', 'Բարնաբաս', 'Շիղա', 'Տիմոթեոս', 'Ստեփանոս',
            'Հովսեփ', 'Էմմաոս', 'Ալֆա և Օմեգա', 'Սավուղ', 'Քամ', 'Մաթուսաղա', 'Եղիսե', 'Ամբակում', 'Սառա', 'Կորխ',
            'Ամաղեկ', 'Հակոբ(Իսրայել)', 'Հովսափատ', 'Ագաբոս', 'Եսթեր', 'Նոյ', 'Սիմեոն ծերունի', 'Հեղի', 'Գեդեոն',
            'Իքաբոթ','Աբիսողոմ', 'Եղկանա', 'Եփփաթա', 'Գողգոթա', 'Բարակ և Դեբորա', 'Ռաբբի', 'Հոբ', 'Բաղամ', 'Սիոն',
            'Պենտեկոստե', 'Զատիկ', 'Աբբա', 'Երեմիա', 'Գեզի', 'Դամասկոս', 'Զաքեոս', 'Մարթա', 'Մեղքող', 'Սելա', 'Եսավ',
            'Նեմիա', 'Սաբայի թագուհի', 'Վաշթի թագուհի', 'Հեզաբել', 'բահաղ', 'Անծանոթ աստված', 'Ոզիա', 'Ծննդոց 1:1',
            'Հոպպե', 'Այրվող մորենի', 'Պղնձե օձ', 'Հերովդես', 'Սողոս', 'Ապողոս', 'Մարկոս', 'Եղիմաս մոգ', 'Սիմոն մոգ',
            'Եղիա', 'Սոդոմ Գոմոր', 'Կորնելիոս', 'Աղքատ Ղազարոս', 'Եվա', 'Եդեմ', 'Սինա', 'Ուխտի տապանակ', 'Ծաղկած գավազան',
            'Տեռատես կին', 'Թեոփիլե', 'Այծեմնիկ', 'Մատաթիա', 'Ակեղդամա', 'Մաղքոս', 'Եվտիքոս', 'Գաբրիել', 'Հեսու և Քաղեբ',
            'Բաբելոն', 'Սաղմոս 23', 'Բաղդասասար', 'Նաբուգոդոնոսոր', 'Նաբուզարդան', 'Հորդանան(գետ)', 'Դալիլա', 'Հովնան',
            'Բարի Սամարացի', 'Լեգեոն', 'Ասֆերոս', 'Հայրոս', 'Մուրթքե', 'Տալիթա կումի'
          ]
        )

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
        deletePleyer={deletePleyer}
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
