import React, {useEffect, useState} from 'react';

const WordAPI = () => {

    const [word, setWord] = useState("")
    const [callback, setCallback] = useState(false)

    const getWord = () => {
        setWord("world")
    }

    useEffect(() => { getWord() }, [callback]);


    return {
        wordOfTheDay: [word, setWord],
        callback: [callback, setCallback],
    }

}

export default WordAPI;
