import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";

const LetterBox = ({ id, tileRef, callback, blurCallback }) => {
  const state = useContext(GlobalState);
  const [gameBoard, setGameBoard] = state.gameBoard;
  const [gameData] = state.gameData;
  const index = id;

  const validateLetter = (ch) => {
    if (typeof ch !== "string") {
      return false;
    }
    if (ch.toLowerCase() === ch.toUpperCase()) {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (validateLetter(value)) {
      //updates the old tile in letter to the new letter
      setGameBoard((initialGameBoard) => {
        return [
          ...initialGameBoard.slice(0, index),
          // tile,
          { ...initialGameBoard[index], char: value.toLowerCase() },
          ...initialGameBoard.slice(index + 1),
        ];
      });
      callback(value);
    }
  };

  const handleDelete = (e) => {
    if (e.key === "Enter") {
      callback("enter");
    } else if (e.key === "Backspace") {
      if (index % 5 != 0) {
        if (gameBoard[index].char !== "") {
          setGameBoard((initialGameBoard) => {
            return [
              ...initialGameBoard.slice(0, index),
              // tile,
              { ...initialGameBoard[index], char: "" },
              ...initialGameBoard.slice(index + 1),
            ];
          });
          callback("invalidWordDel");
        } else {
          setGameBoard((initialGameBoard) => {
            return [
              ...initialGameBoard.slice(0, index - 1),
              // tile,
              { ...initialGameBoard[index - 1], char: "" },
              ...initialGameBoard.slice(index),
            ];
          });
          callback("del");
        }
      }
    }
  };

  const handleBlur = () => {
    blurCallback();
  };

  const getColour = () => {
    if (gameBoard[index].checked) {
      if (gameBoard[index].isInWord) {
        if (gameBoard[index].isInPosition) {
          return "green-tile";
        } else return "yellow-tile";
      } else return "grey-tile";
    } else return "blank-tile";
  };

  return (
    <div className={"game-tile"}>
      <input
        className={getColour()}
        disabled={gameData.gameFin}
        type="text"
        id={"char"}
        ref={tileRef}
        name={"char"}
        maxLength={1}
        size={5}
        value={gameBoard[index].char}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleDelete}
      />
    </div>
  );

};

export default LetterBox;
