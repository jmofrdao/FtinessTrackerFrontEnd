import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home, Header} from "./";




const App = () => {
    return (
        <div>
        <Header/>
        <Routes>
            <Route
            path = "/home"
            element={<Home/>}
            />
        </Routes>
        </div>
    )
}

export default App