import React, {useContext, useEffect, useRef, useState} from 'react';
import LetterBox from "./LetterBox";
import axios from "axios";
import {GlobalState} from "../../GlobalState";

const Grid = callback => {
    const state = useContext(GlobalState)
    const errorCallback = callback.callback
    const [currentWord, setCurrentWord] = useState('')
    const [guess, setGuess] = useState(0)
    const [word] = state.wordAPI.wordOfTheDay
    const [gameOver, setGameOver] = state.gameOver
    let refs = useRef([]);
    refs.current = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ].map((ref, index) =>   refs.current[index] = React.createRef())

    useEffect(() => {
        // focuses on correct input
        focusInput()
    }, [currentWord]);

    const focusInput = () => {
        let wl = currentWord.length
        let line = guess * 5
        if(wl < 5){
            refs.current[wl + line].current.focus()
        } else if (wl === 5){
            refs.current[wl-1 + line].current.focus()
        }
    }

    const blurCallback = () => {
        focusInput()
    }


    const isTheWord = word => {
        console.log('isnt the word')
        return false
    }

    const notEnoughLetters = async () => {
        console.log("not enough letters")
        await errorCallback("Not enough letter's", true)
    }
    const wordNotInList = async () => {
        console.log("Word not in the list")
        await errorCallback("Word not in the list", true)
    }

    const handleGameOver = async () => {
        // disable the board
        console.log("Game over :(")
        setGameOver(true)
        await errorCallback(word, false)
    }

    const nextInput = async value => {
        if (value === 'del') {
            setCurrentWord(currentWord.slice(0, -1))
        } else if(value === 'invalidWordDel'){
            setCurrentWord(currentWord.slice(0, -1))
        } else if(value === 'enter'){
            if (currentWord.length < 5) {
                await notEnoughLetters()
            } else if(currentWord.length === 5) {
                // check if word is in the English dictionary
                let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + currentWord
                const response = await axios.get(url).catch(() => {
                    return false
                })
                // case word is in list
                if (response && response.data.length > 0) {
                    console.log('is a word')
                    if (isTheWord(currentWord)) {
                        // case word is correct (game won!)
                        console.log('You found the word!')
                    } else {
                        // case word is wrong
                        if (guess < 5) {
                            setGuess(guess + 1)
                        } else {
                            await handleGameOver()
                        }
                        setCurrentWord("")
                    }
                } else {
                    // case word is not in the list
                    await wordNotInList()
                }
            }
        } else {
            setCurrentWord(currentWord + value)
        }
    }


    return (
        <div className={'wordle-grid'}>
            <div className={'wordle-row'}>
                <LetterBox id={0} tileRef={refs.current[0]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={1} tileRef={refs.current[1]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={2} tileRef={refs.current[2]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={3} tileRef={refs.current[3]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={4} tileRef={refs.current[4]} callback={nextInput} blurCallback={blurCallback}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={5} tileRef={refs.current[5]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={6} tileRef={refs.current[6]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={7} tileRef={refs.current[7]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={8} tileRef={refs.current[8]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={9} tileRef={refs.current[9]} callback={nextInput} blurCallback={blurCallback}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={10} tileRef={refs.current[10]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={11} tileRef={refs.current[11]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={12} tileRef={refs.current[12]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={13} tileRef={refs.current[13]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={14} tileRef={refs.current[14]} callback={nextInput} blurCallback={blurCallback}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={15} tileRef={refs.current[15]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={16} tileRef={refs.current[16]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={17} tileRef={refs.current[17]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={18} tileRef={refs.current[18]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={19} tileRef={refs.current[19]} callback={nextInput} blurCallback={blurCallback}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={20} tileRef={refs.current[20]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={21} tileRef={refs.current[21]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={22} tileRef={refs.current[22]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={23} tileRef={refs.current[23]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={24} tileRef={refs.current[24]} callback={nextInput} blurCallback={blurCallback}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={25} tileRef={refs.current[25]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={26} tileRef={refs.current[26]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={27} tileRef={refs.current[27]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={28} tileRef={refs.current[28]} callback={nextInput} blurCallback={blurCallback}/>
                <LetterBox id={29} tileRef={refs.current[29]} callback={nextInput} blurCallback={blurCallback}/>
            </div>
        </div>
    );
};

export default Grid;
