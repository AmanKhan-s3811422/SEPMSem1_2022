import React from 'react';
import Row from "./Row";

const Grid = () => {
    return (
        <div className={'wordle-grid'}>
            <Row id={0}/>
            <Row id={1}/>
            <Row id={2}/>
            <Row id={3}/>
            <Row id={4}/>
            <Row id={5}/>
        </div>
    );
};

export default Grid;
