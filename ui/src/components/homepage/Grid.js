import React, {useEffect, useRef} from 'react';
import LetterBox from "./LetterBox";
import axios from "axios";

const Grid = () => {

    let currentFocus = 0
    let refs = useRef([]);
    let currentWord = ''
    let guess = 0
    refs.current = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ].map((ref, index) =>   refs.current[index] = React.createRef())

     useEffect(() => {
         refs.current[currentFocus].current.focus()
     }, []);

    const isTheWord = word => {
        console.log('isnt the word')
        return false
    }

    const checkWord = async word => {
        let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
        const response = await axios.get(url).catch(() => {return false})
        return (response.data.log > 0)
    }

    const nextInput = async value => {
        if (value === 'del') {
            currentWord = currentWord.slice(0, -1)
            currentFocus -= 1
            refs.current[currentFocus].current.focus()
        } else if(value === 'invalidWordDel'){
            currentWord = currentWord.slice(0, -1)
        } else {
            currentWord += value
            console.log(currentWord)
            if (currentWord.length < 5) {
                currentFocus += 1
                refs.current[currentFocus].current.focus()
            } else if (currentWord.length === 5) {
                let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + currentWord
                const response = await axios.get(url).catch(() => {
                    return false
                })
                if (response && response.data.length > 0) {
                    console.log('is a word')
                    if (isTheWord(currentWord)) {
                        console.log('You found the word!')
                    } else {
                        guess += 1
                        currentWord = ''
                        currentFocus += 1
                        refs.current[currentFocus].current.focus()
                    }
                } else {
                    console.log('Thats not a real word')
                }
            }
        }
    }


    return (
        <div className={'wordle-grid'}>
            <div className={'wordle-row'}>
                <LetterBox id={0} tileRef={refs.current[0]} callback={nextInput}/>
                <LetterBox id={1} tileRef={refs.current[1]} callback={nextInput}/>
                <LetterBox id={2} tileRef={refs.current[2]} callback={nextInput}/>
                <LetterBox id={3} tileRef={refs.current[3]} callback={nextInput}/>
                <LetterBox id={4} tileRef={refs.current[4]} callback={nextInput}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={5} tileRef={refs.current[5]} callback={nextInput}/>
                <LetterBox id={6} tileRef={refs.current[6]} callback={nextInput}/>
                <LetterBox id={7} tileRef={refs.current[7]} callback={nextInput}/>
                <LetterBox id={8} tileRef={refs.current[8]} callback={nextInput}/>
                <LetterBox id={9} tileRef={refs.current[9]} callback={nextInput}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={10} tileRef={refs.current[10]} callback={nextInput}/>
                <LetterBox id={11} tileRef={refs.current[11]} callback={nextInput}/>
                <LetterBox id={12} tileRef={refs.current[12]} callback={nextInput}/>
                <LetterBox id={13} tileRef={refs.current[13]} callback={nextInput}/>
                <LetterBox id={14} tileRef={refs.current[14]} callback={nextInput}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={15} tileRef={refs.current[15]} callback={nextInput}/>
                <LetterBox id={16} tileRef={refs.current[16]} callback={nextInput}/>
                <LetterBox id={17} tileRef={refs.current[17]} callback={nextInput}/>
                <LetterBox id={18} tileRef={refs.current[18]} callback={nextInput}/>
                <LetterBox id={19} tileRef={refs.current[19]} callback={nextInput}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={20} tileRef={refs.current[20]} callback={nextInput}/>
                <LetterBox id={21} tileRef={refs.current[21]} callback={nextInput}/>
                <LetterBox id={22} tileRef={refs.current[22]} callback={nextInput}/>
                <LetterBox id={23} tileRef={refs.current[23]} callback={nextInput}/>
                <LetterBox id={24} tileRef={refs.current[24]} callback={nextInput}/>
            </div>
            <div className={'wordle-row'}>
                <LetterBox id={25} tileRef={refs.current[25]} callback={nextInput}/>
                <LetterBox id={26} tileRef={refs.current[26]} callback={nextInput}/>
                <LetterBox id={27} tileRef={refs.current[27]} callback={nextInput}/>
                <LetterBox id={28} tileRef={refs.current[28]} callback={nextInput}/>
                <LetterBox id={29} tileRef={refs.current[29]} callback={nextInput}/>
            </div>
        </div>
    );
};

export default Grid;
