import CheckSsz from "./components/CheckSsz";
import Recertification from "./components/Recertification";
import ProductionSheet from "./components/ProductionSheet";
import Unloading from "./components/Unloading";
import UnloadingExternal from "./components/UnloadingExternal";
import UnloadingStorno from "./components/UnloadingStorno";
import UnloadingAsutl from "./components/UnloadingAsutl";
import ZhdRequest from "./components/ZhdRequest";
import Activate from "./components/Activate";
import CreateNewTask from "./components/CreateNewTask";
import FindSheets from "./components/FindSheets";
import MoveSheets from "./components/MoveSheets";
import LetterReport from "./components/LetterReport";
import ExFilter from "./components/ExFilter";
import AutoUnloading from "./components/AutoUnloading";
import Sklad3037 from "./components/Sklad3037";
import IssuanceOfCards from "./components/IssuanceOfCards";
import OrderOfSheets from "./components/OrderOfSheets";
import UnloadingCardsFrom3044 from "./components/UnloadingCardsFrom3044";
import AddCards from "./components/AddCards";
import ComebackSheet from "./components/ComebackSheet";
import AddSheetInStart from "./components/AddSheetInStart";
import CheckCastTest from "./components/CheckCastTest";
import {Route, Router, Routes} from "react-router-dom";
import TableOfListSorter from "./components/TableOfListSorter";
import menuToggle3 from "../scripts/MenuToggle3";
import React from "react";
import CountRemainderToProduction from "./components/CountRemainderToProduction";
import LoadingExternal from "./components/LoadingExternal";
import PhoneNumbers from "./components/PhoneNumbers";
import SapRecertification from "./components/SapRecertification";
import UpdateClassificationInSapEwm from "./components/UpdateClassificationInSapEwm";
import CreateWorkProduction from "./components/CreateWorkProduction";

export default function Sorter(props) {
    window.scrollTo(0, 0);
    props.setActivePage("Сортировщик-сдатчик");

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <CheckSsz />
                }
            />
            <Route
                path="/check-ssz"
                element={
                    <CheckSsz />
                }
            />
            <Route
                path="/create_work_production"
                element={
                    <CreateWorkProduction />
                }
            />
            <Route
                path="/recertification-1C"
                element={
                    <Recertification />
                }
            />
            <Route
                path="/recertification-sap"
                element={
                    <SapRecertification />
                }
            />
            <Route
            path="/production__sheet"
            element={
                <ProductionSheet />
            }
            />
            <Route
                path="/unloading"
                element={
                    <Unloading />
                }
            />
            <Route
                path="/unloading_external"
                element={
                    <UnloadingExternal />
                }
            />
            <Route
                path="/storno"
                element={
                    <UnloadingStorno />
                }
            />
            <Route
                path="/asutl"
                element={
                    <UnloadingAsutl />
                }
            />
            <Route
            path="/zhd-request"
            element={
                <ZhdRequest />
            }
        />

            <Route
                path="/activate"
                element={
                    <Activate />
                }
            />
            <Route
                path="/create-new-task"
                element={
                    <CreateNewTask />
                }
            />
            <Route
                path="/find_sheets"
                element={
                    <FindSheets />
                }
            />

            <Route
                path="/move_sheets"
                element={
                    <MoveSheets />
                }
            />
            <Route
                path="/letter_report"
                element={
                    <LetterReport />
                }
            />
            <Route
                path="/filter"
                element={
                    <ExFilter />
                }
            />

            <Route
                path="/auto_unloading"
                element={
                    <AutoUnloading />
                }
            />
            <Route
                path="/sklad_erp"
                element={
                    <Sklad3037 />
                }
            />
            <Route
                path="/issuance_of_cards"
                element={
                    <IssuanceOfCards />
                }
            />
            <Route
                path="/add_cards"
                element={
                    <AddCards />
                }
            />
            <Route
                path="/order_of_sheets"
                element={
                    <OrderOfSheets />
                }
            />
            <Route
                path="/cards_unloading"
                element={
                    <UnloadingCardsFrom3044 />
                }
            />
            <Route
                path="/comeback_sheet"
                element={
                    <ComebackSheet />
                }
            />
            <Route
                path="/add_sheet_in_start"
                element={
                    <AddSheetInStart />
                }
            />
            <Route
                path="/check_cast_test"
                element={
                    <CheckCastTest />
                }
            />

            <Route
                path="/count_remainder_to_production"
                element={
                    <CountRemainderToProduction />
                }
            />

            <Route
                path="/loading_external"
                element={
                    <LoadingExternal />
                }
            />
            <Route
                path="/phone_numbers"
                element={
                    <PhoneNumbers />
                }
            />
            <Route
                path="/update_classification_in_sap_ewm"
                element={
                    <UpdateClassificationInSapEwm />
                }
            />
        </Routes>
    );
}
