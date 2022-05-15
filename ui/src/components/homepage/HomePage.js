import React, {useContext, useState} from 'react';
import Grid from "./Grid";
import {GlobalState} from "../../GlobalState";
import Statistics from "../statistics/Statistics";

const HomePage = () => {
    const state = useContext(GlobalState);
    const [pageState, setPageState] = state.pageState
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
                {pageState.stats && <Statistics/>}
            </div>
        </div>
    );
};

export default HomePage;
