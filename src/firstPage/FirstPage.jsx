import './firstPage.css'

function FirstPage({nextButtonClick}){

    return(
        <div className='firstPage default'>
            {/* <h1>ALIAS</h1> */}
            <div className='alias'></div>

            <button onClick={nextButtonClick} className='playButtnn'>Նոր խաղ</button>
        </div>

    )

}

export default FirstPage