import { useState } from 'react'
import './RegPage.css'


function RegPage({nextButtonClick,TimeValue,setTimeValue,scoreValue,setScoreValue,allGroup,setAllGroup}){

    


    const [GroupName,SetGroupname] = useState('')


    return(
        <div className='RegPage default'>
            <div className='TimeDiv'>

                <h4 className='titleText'>Ժամանակ (վրկ)</h4>
                <h2 className='VALUE'>{TimeValue}</h2>
                <input 
                    type='range' 
                    value={TimeValue} 
                    onChange={(e)=>setTimeValue(e.target.value)}
                />
            
            </div>
            
            <div className='scoreDiv'>

                <h4 className='titleText'>Հաղթող միավոր</h4>
                <h2 className='VALUE' >{scoreValue}</h2>
                <input 
                    type='range' 
                    value={scoreValue} 
                    onChange={(e)=>setScoreValue(e.target.value)}
                />
            
            </div>


            <div className='GroupNameDiv'>
                <h3 className='title'>Ավելացնել Խումբ</h3>
                <form action="" onSubmit={(e)=>{
                    e.preventDefault()
                    if(GroupName === '' || allGroup.length===6) return
                    
                    setAllGroup(
                            [
                                ...allGroup,
                                [
                                   GroupName,
                                   0

                                ]
                            ]
                    )
                            
                    SetGroupname('')
                }}>

                    <input 
                        className='input'
                        type='text' 
                        value={GroupName}
                        onChange={(e)=>SetGroupname(e.target.value)}
                    />
                    <button className='Addbutton'>+</button>
                </form>

                <div className='GroupListDiv'>
                    <ol className='ol'>
                        {
                            allGroup?.map((elem,index)=><li key={index}>{elem[0]}</li>)
                        }
                    </ol>
                </div>
            </div>
            <div className='NextButtonDiv'>
                <button className='NextButton' onClick={nextButtonClick}>{'>'}</button>
            </div>



            
        </div>
    )
}

export default RegPage