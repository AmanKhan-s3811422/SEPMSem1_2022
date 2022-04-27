import React from 'react';
import Grid from "./Grid";

const HomePage = () => {
    return (
        <div className={'home-page'}>
            <div className="wordle-grid-container">
                <Grid/>
            </div>
        </div>
    );
};

export default HomePage;
