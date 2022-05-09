import React, { useContext, useEffect, useRef, useState } from "react";
import LetterBox from "./LetterBox";
import axios from "axios";
import { GlobalState } from "../../GlobalState";

const Grid = (callback) => {
  const state = useContext(GlobalState);
  const errorCallback = callback.callback;
  const [word] = state.wordAPI.wordOfTheDay;
  const [gameData, setGameData] = state.gameData;
  const [gameBoard, setGameBoard] = state.gameBoard;
  let refs = useRef([]);
  refs.current = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ].map((ref, index) => (refs.current[index] = React.createRef()));

  useEffect(() => {
    // focuses on correct input
    focusInput();
  }, [gameData.currentWord, gameData.guess]);

  const focusInput = () => {
    try {
      let wl = gameData.currentWord.length;
      let line = gameData.guess * 5;
      if (wl < 5) {
        refs.current[wl + line].current.focus();
      } else if (wl === 5) {
        refs.current[wl - 1 + line].current.focus();
      }
    } catch (e) {}
  };

  const notEnoughLetters = async () => {
    await errorCallback("Not enough letter's", true);
  };
  const wordNotInList = async () => {
    await errorCallback("Word not in the list", true);
  };

  const handleGameOver = async () => {
    // disable the board
    console.log("Game over :(");
    setGameData({ ...gameData, gameFin: true });
    await errorCallback(word, false);
  };

  const checkLetter = (letter, position) => {
    let line = gameData.guess * 5;
    if (word.includes(letter)) {
      if (word[position] === letter) {
        setGameBoard((initialGameBoard) => {
          return [
            ...initialGameBoard.slice(0, position + line),
            // tile,
            {
              ...initialGameBoard[position + line],
              checked: true,
              isInWord: true,
              isInPosition: true,
            },
            ...initialGameBoard.slice(position + line + 1),
          ];
        });
      } else {
        setGameBoard((initialGameBoard) => {
          return [
            ...initialGameBoard.slice(0, position + line),
            // tile,
            {
              ...initialGameBoard[position + line],
              checked: true,
              isInWord: true,
            },
            ...initialGameBoard.slice(position + line + 1),
          ];
        });
      }
    } else {
      setGameBoard((initialGameBoard) => {
        return [
          ...initialGameBoard.slice(0, position + line),
          // tile,
          { ...initialGameBoard[position + line], checked: true },
          ...initialGameBoard.slice(position + line + 1),
        ];
      });
    }
  };

  const checkWord = async (wordToCheck) => {
    // assumes word is a valid 5 letter English word
    for (let i = 0; i < wordToCheck.length; i++) {
      checkLetter(wordToCheck[i], i);
    }
    if (wordToCheck === word) {
      setGameData({ ...gameData, gameFin: true });
    } else {
      // case word is wrong
      if (gameData.guess < 5) {
        setGameData({
          ...gameData,
          currentWord: "",
          guess: gameData.guess + 1,
        });
      } else {
        setGameData({ ...gameData, currentWord: "" });
        await handleGameOver();
      }
    }
  };

  const nextInput = async (value) => {
    if (value === "del") {
      setGameData({
        ...gameData,
        currentWord: gameData.currentWord.slice(0, -1),
      });
    } else if (value === "invalidWordDel") {
      setGameData({
        ...gameData,
        currentWord: gameData.currentWord.slice(0, -1),
      });
    } else if (value === "enter") {
      if (gameData.currentWord.length < 5) {
        await notEnoughLetters();
      } else if (gameData.currentWord.length === 5) {
        // check if word is in the English dictionary
        let url =
          "https://api.dictionaryapi.dev/api/v2/entries/en/" +
          gameData.currentWord;
        const response = await axios.get(url).catch(() => {
          return false;
        });
        if (response && response.data.length > 0) {
          // case word is in dictionary
          await checkWord(gameData.currentWord);
        } else {
          // case word is not in dictionary
          await wordNotInList();
        }
      }
    } else {
      setGameData({ ...gameData, currentWord: gameData.currentWord + value });
    }
  };

  return (
    <div className={"wordle-grid"}>
      <div className={"wordle-row"}>
        <LetterBox
          id={0}
          tileRef={refs.current[0]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={1}
          tileRef={refs.current[1]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={2}
          tileRef={refs.current[2]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={3}
          tileRef={refs.current[3]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={4}
          tileRef={refs.current[4]}
          callback={nextInput}
          blurCallback={focusInput}
        />
      </div>
      <div className={"wordle-row"}>
        <LetterBox
          id={5}
          tileRef={refs.current[5]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={6}
          tileRef={refs.current[6]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={7}
          tileRef={refs.current[7]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={8}
          tileRef={refs.current[8]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={9}
          tileRef={refs.current[9]}
          callback={nextInput}
          blurCallback={focusInput}
        />
      </div>
      <div className={"wordle-row"}>
        <LetterBox
          id={10}
          tileRef={refs.current[10]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={11}
          tileRef={refs.current[11]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={12}
          tileRef={refs.current[12]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={13}
          tileRef={refs.current[13]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={14}
          tileRef={refs.current[14]}
          callback={nextInput}
          blurCallback={focusInput}
        />
      </div>
      <div className={"wordle-row"}>
        <LetterBox
          id={15}
          tileRef={refs.current[15]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={16}
          tileRef={refs.current[16]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={17}
          tileRef={refs.current[17]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={18}
          tileRef={refs.current[18]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={19}
          tileRef={refs.current[19]}
          callback={nextInput}
          blurCallback={focusInput}
        />
      </div>
      <div className={"wordle-row"}>
        <LetterBox
          id={20}
          tileRef={refs.current[20]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={21}
          tileRef={refs.current[21]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={22}
          tileRef={refs.current[22]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={23}
          tileRef={refs.current[23]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={24}
          tileRef={refs.current[24]}
          callback={nextInput}
          blurCallback={focusInput}
        />
      </div>
      <div className={"wordle-row"}>
        <LetterBox
          id={25}
          tileRef={refs.current[25]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={26}
          tileRef={refs.current[26]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={27}
          tileRef={refs.current[27]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={28}
          tileRef={refs.current[28]}
          callback={nextInput}
          blurCallback={focusInput}
        />
        <LetterBox
          id={29}
          tileRef={refs.current[29]}
          callback={nextInput}
          blurCallback={focusInput}
        />
      </div>
    </div>
  );
};

export default Grid;
