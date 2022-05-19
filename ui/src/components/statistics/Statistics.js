import React, {useContext} from 'react';
import {GlobalState} from "../../GlobalState";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import quitIcon from "../../images/quitIcon.png";

const Statistics = () => {

    // games played
    const state = useContext(GlobalState);
    const [pageState, setPageState] = state.pageState;
    const [statistics, setStatistics] = state.statistics;

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        indexAxis: 'y',
    };

    const labels = ['1', '2', '3', '4', '5', '6'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Times guessed',
                data: statistics.guessDistribution,
                backgroundColor: '#008000',
            },
        ],
    };

    const closeStats = () => {
        setPageState({...pageState, stats: false})
    }

    return (
        <div className={'stats-container'}>
            <img className={'stats-exit'} src={quitIcon} onClick={closeStats}/>
            <div className={'stats-heading'}>STATISTICS</div>
            <span><div className={'stats-stat'}>{statistics.gamesPlayed}</div><p>Played</p></span>
            <span><div className={'stats-stat'}>{Math.round(statistics.gamesWon / statistics.gamesPlayed * 100)}</div><p>Win %</p></span>
            <span><div className={'stats-stat'}>{statistics.currentWinStreak}</div><p>Current Streak</p></span>
            <span><div className={'stats-stat'}>{statistics.maxWinStreak}</div><p>Max Streak</p></span>
            <div className={'guess-dist'}>GUESS DISTRIBUTION</div>
            <Bar options={options} data={data} />
        </div>
    );
};

export default Statistics;
