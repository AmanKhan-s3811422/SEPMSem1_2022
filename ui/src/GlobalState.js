import {createContext, useState} from "react";
import WordAPI from "./api/WordAPI";

export const GlobalState = createContext();

export const DataProvider = ({children}) => {

    const tiles = [
        {
            id: 0,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 1,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 2,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 3,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 4,
            char: '',
            isInWord: false,
            checked: false,
            isInPosition: false
        },{
            id: 5,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 6,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 7,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 8,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 9,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 10,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 11,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 12,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 13,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 14,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 15,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 16,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 17,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 18,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 19,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 20,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 21,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 22,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 23,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 24,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 25,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 26,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 27,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 28,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        },{
            id: 29,
            char: '',
            checked: false,
            isInWord: false,
            isInPosition: false
        }
    ]

    const [gameBoard, setGameBoard] = useState(tiles)
    const [gameFin, setGameFin] = useState(false)

    const statedData = {
        gameBoard: [gameBoard, setGameBoard],
        gameFin: [gameFin, setGameFin],
        wordAPI: WordAPI()
    }

    return (
        <GlobalState.Provider value={statedData}>
            {children}
        </GlobalState.Provider>
    )
}