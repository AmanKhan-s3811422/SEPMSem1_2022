import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import React from "react";
import HomePage from "../homepage/HomePage";
import Header from "../Header";
import {DataProvider} from "../../GlobalState";

const Pages = () => {
    return (
        <DataProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </Router>
        </DataProvider>
    )
}

export default Pages;