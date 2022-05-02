import React, {useContext} from 'react';
import {GlobalState} from "../../GlobalState";

const LetterBox = ({id, tileRef, callback}) => {

    const state = useContext(GlobalState)
    const [gameBoard, setGameBoard] = state.gameBoard
    const index = id

    const validateLetter = ch => {
        if (typeof ch !== 'string') {
            return false
        }
        if(ch.toLowerCase() === ch.toUpperCase()) {
            return false
        }
        return true
    }

    const handleChange = (e) => {
        const value = e.target.value
        if(validateLetter(value)){
            //updates the old tile in letter to the new letter
            setGameBoard(initialGameBoard => {
                return [
                    ...initialGameBoard.slice(0, index),
                    // tile,
                    {...initialGameBoard[index], char: value.toLowerCase()},
                    ...initialGameBoard.slice(index + 1)
                ]
            })
            callback(value)
        }

    }

    const handleDelete = e => {
        if (e.key === 'Backspace'){
            if(index % 5 != 0){
                if(gameBoard[index].char !== ''){
                    setGameBoard(initialGameBoard => {
                        return [
                            ...initialGameBoard.slice(0, index),
                            // tile,
                            {...initialGameBoard[index], char: ''},
                            ...initialGameBoard.slice(index+1)
                        ]
                    })
                    callback('invalidWordDel')
                } else {
                    setGameBoard(initialGameBoard => {
                        return [
                            ...initialGameBoard.slice(0, index-1),
                            // tile,
                            {...initialGameBoard[index-1], char: ''},
                            ...initialGameBoard.slice(index)
                        ]
                    })
                    callback('del')
                }
            }
        }
    }

    return (
        <div className={'letter-box'}>
            <input type="text" id={'char'} ref={tileRef} name={'char'} maxLength={1} size={1}
                   value={gameBoard[index].char} onChange={handleChange} onKeyDown={handleDelete}/>
        </div>
    );
};

export default LetterBox;
