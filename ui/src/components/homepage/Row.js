import React from 'react';
import LetterBox from "./LetterBox";

const Row = ({id}) => {
    const firstTile = id*5
    return (

        <div className={'wordle-row'}>
            <LetterBox id={firstTile}/>
            <LetterBox id={firstTile+1}/>
            <LetterBox id={firstTile+2}/>
            <LetterBox id={firstTile+3}/>
            <LetterBox id={firstTile+4}/>
        </div>
    );
};

export default Row;
