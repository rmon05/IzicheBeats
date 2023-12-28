import React from "react";
import './output.css';
import {Routes, Route, useNavigate} from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Beats from "./pages/Beats";

function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/beats' element={<Beats/>}></Route>
            </Routes>
        </>
    )
}

export default App
