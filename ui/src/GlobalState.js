import {createContext, useState} from "react";

export const GlobalState = createContext();

export const DataProvider = ({children}) => {

    const tiles = [
        {
            id: 0,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 1,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 2,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 3,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 4,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 5,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 6,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 7,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 8,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 9,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 10,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 11,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 12,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 13,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 14,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 15,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 16,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 17,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 18,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 19,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 20,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 21,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 22,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 23,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 24,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 25,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 26,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 27,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 28,
            char: '',
            isInWord: false,
            isInPosition: false
        },{
            id: 29,
            char: '',
            isInWord: false,
            isInPosition: false
        }
    ]

    const [gameBoard, setGameBoard] = useState(tiles)

    const statedData = {
        gameBoard: [gameBoard, setGameBoard]
    }

    return (
        <GlobalState.Provider value={statedData}>
            {children}
        </GlobalState.Provider>
    )
}