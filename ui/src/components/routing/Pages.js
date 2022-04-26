import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import React from "react";
import HomePage from "../homepage/HomePage";

const Pages = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </Router>
    )
}

export default Pages;