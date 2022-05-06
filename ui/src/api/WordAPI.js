import React, {useEffect, useState} from 'react';
import axios from "axios";

const WordAPI = () => {

    const [word, setWord] = useState("")
    const [callback, setCallback] = useState(false)

    const getWord = async () => {
        const response = await axios.get('http://localhost:4000/api/words')
        return(response.data.word)
    }

    useEffect(() => { getWord().then(r => setWord(r)) }, [callback]);


    return {
        wordOfTheDay: [word, setWord],
        callback: [callback, setCallback],
    }

}

export default WordAPI;
