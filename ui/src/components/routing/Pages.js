import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import React from "react";
import HomePage from "../homepage/HomePage";
import Header from "../Header";

const Pages = () => {
    return (
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </Router>
    )
}

export default Pages;