import logo from "./logo.svg";
import "./App.css";
import Sorter from "./Sorter/Sorter";
import Header from "./Header/Header";
import TableOfListSorter from "./Sorter/components/TableOfListSorter";
import TableOfListOperatorSap from "./OperatorSap/Components/TableOfListOperatorSap";
import "./basicStyles.scss";
import menuToggle2 from "./scripts/MenuToggle2";
import menuToggle3 from "./scripts/MenuToggle3";
import { MenuOnClick } from "./scripts/MenuOnClick";
import { Routes, Route } from "react-router-dom";
import OperatorSap from "./OperatorSap/OperatorSap";
import Secrets from "./Secrets/Secrets";
import Help from "./Help/Help";
import SapEwmSheet from "./SapEwmSheet/SapEwmSheet";
import TableOfListSapEwmSheet from "./SapEwmSheet/Components/TableOfListSapEwmSheet";
import React, {useState} from "react";

function App() {
    const [activePage, setActivePage] = useState()

    return (
    <div className="App">
      <Header menuToggle2={menuToggle2} MenuOnClick={MenuOnClick} activePage={activePage}/>
      <Routes>
          <Route
              path="/sorter"
              element={
                  <div className="wrapper">
                      <Sorter setActivePage={setActivePage}/>
                      <TableOfListSorter menuToggle3={menuToggle3}/>
                  </div>
              }
        />

        <Route
          path="/operator-sap"
          element={
            <div className="wrapper">
              <OperatorSap setActivePage={setActivePage}/>
              <TableOfListOperatorSap menuToggle3={menuToggle3} />
            </div>
          }
        />

        <Route
          path="/secrets"
          element={
            <div className="wrapper">
              <Secrets setActivePage={setActivePage}/>
            </div>
          }
        />

        <Route
          path="/help"
          element={
            <div className="wrapper">
              <Help setActivePage={setActivePage}/>
            </div>
          }
        />

        <Route
          path="/sap-ewm-sheet"
          element={
            <div className="wrapper">
              <SapEwmSheet setActivePage={setActivePage}/>
              <TableOfListSapEwmSheet menuToggle3={menuToggle3} />
            </div>
          }
        />

        <Route
          path="/"
          element={
            <div className="wrapper">
              <Sorter setActivePage={setActivePage}/>
              <TableOfListSorter menuToggle3={menuToggle3} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
