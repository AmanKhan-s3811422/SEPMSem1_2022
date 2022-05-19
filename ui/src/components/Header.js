import React, {useContext} from "react";
import {GlobalState} from "../GlobalState";

const Header = () => {
    const state = useContext(GlobalState);
    const [pageState, setPageState] = state.pageState;

    const handleStats = () => {
        setPageState({...pageState, stats: true})
    }

    return (
        <header>
            <div className="header-menu">
                <div class="container">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            <div className="header-stats" onClick={handleStats}>
                <i className="fa fa-bar-chart"></i>{" "}
            </div>

            <div className="header-settings">
                <i className="fa fa-gear"></i>
            </div>

            <div className="header-title"> Wordle </div>
        </header>
    );

};

export default Header;
