import { createContext, useEffect, useState } from "react";
import WordAPI from "./api/WordAPI";
import { useCookies } from "react-cookie";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    pageState: {
      settings: false,
      stats: false
    },
    gameBoard: [
      {
        id: 0,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 1,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 2,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 3,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 4,
        char: "",
        isInWord: false,
        checked: false,
        isInPosition: false,
      },
      {
        id: 5,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 6,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 7,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 8,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 9,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 10,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 11,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 12,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 13,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 14,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 15,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 16,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 17,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 18,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 19,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 20,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 21,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 22,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 23,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 24,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 25,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 26,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 27,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 28,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
      {
        id: 29,
        char: "",
        checked: false,
        isInWord: false,
        isInPosition: false,
      },
    ],
    gameData: {
      currentWord: "",
      guess: 0,
      gameFin: false,
      date: "",
    },
    statistics : {
      gamesPlayed: 0,
      gamesWon: 0,
      currentWinStreak: 0,
      maxWinStreak: 0,
      guessDistribution: [0,0,0,0,0,0]
    }
  };

  const [pageState, setPageState] = useState(initialState.pageState);

  const saved = localStorage.getItem("userData");
  const localStore = JSON.parse(saved);

  const hasCurrentGame = () => {
    let storedDate = "";
    const today = new Date();
    if (localStore !== null) {
      console.log("store: ", localStore)
      console.log(localStore.gameData)
      storedDate = new Date(localStore.gameData.date);
      if (
        storedDate.getDate() === today.getDate() &&
        storedDate.getMonth() === today.getMonth() &&
        storedDate.getFullYear() === today.getFullYear()
      ) {
        return true;
      }
    }
    return false;
  };

  // conditionally set state based on local storage
  const [statistics, setStatistics] = useState(() =>{
    if(localStore !==null && "statistics" in localStore) {
      return localStore.statistics
    } else {
      return initialState.statistics
    }
  })

  const [gameBoard, setGameBoard] = useState(() => {
    if (hasCurrentGame()) {
      return localStore.gameBoard;
    } else {
      return initialState.gameBoard;
    }
  });

  const [gameData, setGameData] = useState(() => {
    if (hasCurrentGame()) {
      return localStore.gameData;
    } else {
      return { ...initialState.gameData, date: new Date() };
    }
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify({
      ...localStore,
      gameBoard: gameBoard,
      gameData: gameData,
      statistics: statistics
    }));
    console.log("useEffect: ", localStore)
  }, [gameData, gameBoard, statistics]);

  useEffect(() => {
    // calculates the max win streak each time the currentWinStreak changes
    setStatistics({...statistics,
      maxWinStreak: statistics.currentWinStreak > statistics.maxWinStreak
          ? statistics.currentWinStreak
          : statistics.maxWinStreak})
  }, [statistics.currentWinStreak])

  const statedData = {
    pageState: [pageState, setPageState],
    gameBoard: [gameBoard, setGameBoard],
    gameData: [gameData, setGameData],
    statistics: [statistics, setStatistics],
    wordAPI: WordAPI(),
  };

  return (
    <GlobalState.Provider value={statedData}>{children}</GlobalState.Provider>
  );
};
