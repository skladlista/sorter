import MoveSheets from "./Components/MoveSheets";
import Queue from "./Components/Queue";
import SapRecertification from "./Components/SapRecertification";
import ToggleTable from "./Components/ToggleTable";
import ZadachaPack from "./Components/ZadachaPack";
import Sklad3037 from "../Sorter/components/Sklad3037";
import Allocation from "./Components/Allocation";
import StornoSheets from "./Components/StornoSheets";
import AdaptationSupply from "./Components/AdaptationSupply";
import AdaptationSheet from "./Components/AdaptationSheet";
import DeleteCar from "./Components/DeleteCar";
import ChangeOzm from "./Components/ChangeOzm";
import Pack from "./Components/Pack";
import "./SapEwmSheet.scss";

export default function SapEwmSheet(props) {
    window.scrollTo(0,0)
    props.setActivePage('SAP EWM лист')


  return (
    <div className="main">
      <Queue />
      <ToggleTable />
      <SapRecertification />
      <MoveSheets />
      <ZadachaPack />
      <Sklad3037 />
      <Allocation />
      <StornoSheets />
      <AdaptationSupply />
      <AdaptationSheet />
      <DeleteCar />
      <ChangeOzm />
      <Pack />
    </div>
  );
}
