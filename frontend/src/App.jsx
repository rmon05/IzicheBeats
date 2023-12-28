import React from "react";
import './output.css';
import {Routes, Route, useNavigate} from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Beats from "./pages/Beats";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <>
            {/* Navigation bar component */}
            <Nav/>
            {/* Routes for different pages */}
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/beats' element={<Beats/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>

                {/* TESTING */}
                <Route path='/checkout' element={<Checkout/>}></Route>
            </Routes>
        </>
    )
}

export default App
