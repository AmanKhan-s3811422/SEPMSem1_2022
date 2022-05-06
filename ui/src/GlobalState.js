import {createContext, useEffect, useState} from "react";
import WordAPI from "./api/WordAPI";
import { useCookies } from "react-cookie";

export const GlobalState = createContext();

export const DataProvider = ({children}) => {

    const initialState = {
        gameBoard: [
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
        ],
        gameData: {
            currentWord: "",
            guess: 0,
            gameFin: false,
            date: ""
        }
    }

    const hasCurrentGame = () => {
        let cookieDate = ""
        const today = new Date()
        if ("userCookies" in cookies) {
            cookieDate = new Date(cookies.userCookies.gameData.date)
            if(cookieDate.getDate() === today.getDate()
                && cookieDate.getMonth() === today.getMonth()
                && cookieDate.getFullYear() === today.getFullYear()) {

                return true
            }
        }
        return false
    }

    const [cookies, setCookies] = useCookies(["userCookies"])

    // conditionally set state of game based on cookies
    const [gameBoard, setGameBoard] = useState(() => {
        if(hasCurrentGame()) {
            return cookies.userCookies.gameBoard
        } else{
            return initialState.gameBoard
        }
    })
    const [gameData, setGameData] = useState(() => {
        if(hasCurrentGame()) {
            return cookies.userCookies.gameData
        } else{
            return { ...initialState.gameData, date: new Date() }
        }
    })
    useEffect(() => {
        setCookies("userCookies",
            {...cookies.userCookies, gameBoard: gameBoard, gameData: gameData,}
            )
    }, [gameBoard, gameData])

    const statedData = {
        gameBoard: [gameBoard, setGameBoard],
        gameData: [gameData, setGameData],
        wordAPI: WordAPI()
    }

    return (
        <GlobalState.Provider value={statedData}>
            {children}
        </GlobalState.Provider>
    )
}