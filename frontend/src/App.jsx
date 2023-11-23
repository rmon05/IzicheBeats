import React from "react";
import './output.css';
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
            </Routes>
        </>
    )
}

export default App
