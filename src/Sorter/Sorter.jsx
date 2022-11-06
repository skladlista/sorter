import CheckSsz from "./components/CheckSsz";
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
import UnloadingSkladL027 from "./components/UnloadingSkladL027";

export default function Sorter(props) {
    window.scrollTo(0,0)
    props.setActivePage('Сортировщик-сдатчик')

    return (
    <div className="main">
      <CheckSsz />
      <Unloading />
      <UnloadingExternal />
      <UnloadingStorno />
      <UnloadingAsutl />
      <ZhdRequest />
      <Activate />
      <CreateNewTask />
      <FindSheets />
      <MoveSheets />
      <LetterReport />
      <ExFilter />
      <AutoUnloading />
      <Sklad3037 />
      <IssuanceOfCards />
      <OrderOfSheets />
      <UnloadingSkladL027 />
    </div>
  );
}
