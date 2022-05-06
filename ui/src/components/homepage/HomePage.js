import React, {useState} from 'react';
import Grid from "./Grid";

const HomePage = () => {
    const [errorText, setErrorText] = useState("")
    const [errorActive, setErrorActive] = useState(false)

    const resetError = () => {
        setErrorText("")
        setErrorActive(false)
    }

    const errorCallback = async (error, isTimeout) => {
        console.log(error)
        setErrorText(error)
        setErrorActive(true)
        isTimeout && setTimeout(resetError, 2000)
    }


    return (
        <div className={'home-page'}>
            <div className="wordle-game-container">
                {errorActive && <div className={"wordle-error"}>{errorText}</div>}
                <Grid callback={errorCallback}/>
            </div>
        </div>
    );
};

export default HomePage;
