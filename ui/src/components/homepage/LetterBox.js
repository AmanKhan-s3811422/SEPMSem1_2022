import React, {useContext} from 'react';
import {GlobalState} from "../../GlobalState";

const LetterBox = id => {

    const state = useContext(GlobalState)
    const [gameBoard, setGameBoard] = state.gameBoard
    const index = id.id

    const handleChange = (e) => {
        const value = e.target.value
        //updates the old tile in letter to the new letter
        setGameBoard(initialGameBoard => {
            return [
                ...initialGameBoard.slice(0, index),
                // tile,
                {...initialGameBoard[index], char: value},
                ...initialGameBoard.slice(index + 1)
            ]
        })
    }

    return (
        <div className={'letter-box'}>
            <input type="text" id={'char'} name={'char'} maxLength={1} size={1}
                   value={gameBoard[index].char} onChange={handleChange}/>
        </div>
    );
};

export default LetterBox;
