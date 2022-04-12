
import { useEffect, useState } from 'react'
import './AllGroup.css'

function AllGroup({allGroup,nextButtonClick,words,nowPleyer,setWiner,setNowPleyer,setGameStart,scoreValue}){


    useEffect(()=>{

        (nowPleyer < allGroup.length-1 )
            ?
            setNowPleyer((prev) => prev+1)
            :
            setNowPleyer(0)
        

        if(words.length < 3){
            setWiner(Math.random())
        }

        allGroup.forEach((elem)=>{
            if(elem[1] >= scoreValue ){
                setGameStart('GameOver')
                setWiner(elem)
            }
        })
        
    },[])


    return(

        <div className='AllGroupList default'>
            <h2 className='title a'> Խմբերի Միավորները</h2>
            <ol className='ol'>
            {
                allGroup.map((elem,index)=><li className='GroupList' key={index}><span>{elem[0]}</span> <span>{elem[1]}</span></li>)
            }
            </ol>
            <div className='NextButtonNameDiv'>
                <button onClick={nextButtonClick} className='NextButtonName'>{allGroup[nowPleyer]?allGroup[nowPleyer][0]+' '+'>':"" }</button>
            </div>
        </div>
    )

}

export default AllGroup