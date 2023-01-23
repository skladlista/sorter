import "./App.css";
import Sorter from "./Sorter/Sorter";
import Header from "./Header/Header";
import TableOfListSorter from "./Sorter/components/TableOfListSorter";
import "./basicStyles.scss";
import menuToggle2 from "./scripts/MenuToggle2";
import menuToggle3 from "./scripts/MenuToggle3";
import {MenuOnClick} from "./scripts/MenuOnClick";
import {Route, Routes, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

function App() {
    const [activePage, setActivePage] = useState()
    const navigate = useNavigate()

    useEffect( () => navigate("/sorter"),[])

    return (
        <div className="App">
            <Header menuToggle2={menuToggle2} MenuOnClick={MenuOnClick} activePage={activePage}/>
            <Routes>
                <Route
                    path="sorter/*"
                    element={
                        <div className="wrapper">
                            <Sorter className="first" setActivePage={setActivePage}/>
                            <TableOfListSorter className="two" menuToggle3={menuToggle3}/>
                        </div>
                    }
                />
            </Routes>
        </div>

    );
}

export default App;
