import React from 'react';
import LetterBox from "./LetterBox";

const Row = () => {

    const letterBoxes = [0,1,2,3,4]

    return (
        <div className={'wordle-row'}>
            {
                letterBoxes.map((position) => {
                    return(<LetterBox key={position} id={position}/>)
                })
            }
        </div>
    );
};

export default Row;
