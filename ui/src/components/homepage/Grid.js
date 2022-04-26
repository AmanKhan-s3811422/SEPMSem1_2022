import React from 'react';
import Row from "./Row";

const Grid = () => {
    const rows = [0,1,2,3,4,5,6]

    return (
        <div className={'wordle-grid'}>
            {
                rows.map((id) => {
                    return(<Row key={id} />)
                })
            }
        </div>
    );
};

export default Grid;
