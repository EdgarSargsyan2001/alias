import { useEffect,useState } from 'react'
import './gameProgress.css'

function GameProgress({words,playerGroup,TimeValue,setGameStart,allGroup,setAllGroup}){

    const [timeText,setTimeText] = useState(TimeValue)
    const [wordtext,setWordText] = useState('')
    const [count,setCount] = useState(0)
    const [flag,setflag] = useState('')

    const changeScore = (text)=>{

        if(text == "add"){
            setCount(prev=>prev+1)
            playerGroup[1]++
            setAllGroup([...allGroup]
            
            )

        }

        setflag(Math.random())
    }
    
    useEffect(()=>{

        let clear = setInterval(()=>{
            setTimeText((prev)=>prev-1)
        },1000)


        return ()=>{
            clearTimeout(clear)
        }

    },[])

    useEffect(()=>{
        const Random = (min,max) =>{
            const DEF = max - min + 1
            return Math.floor(Math.random() * DEF + min)
        
        }
        let value = Random(0,words.length-1)
        setWordText(words.splice(value,1))

    },[flag])

    useEffect(()=>{

        if(timeText === 0){
            setGameStart(3)
        }
    })

    return (
        <div className="gameProgress default">
            <h2 className='title uu'>{playerGroup[0]} </h2>
            <p className='TimeText'>{timeText}</p>
            

            <div >
                <div className='WordDiv' onClick={()=>changeScore('add')}>
                    {wordtext}
                    
                </div>

                <div className='ButtonDiv'>
                    <button className='Button rem' onClick={changeScore} >Անցնել</button>
                    <button className='Button em' onClick={()=>changeScore('add')} >Ճիշտ</button>
                </div>
            </div>

            <h2 className='title'>{count} </h2>


        </div>
    )

}

export default GameProgress