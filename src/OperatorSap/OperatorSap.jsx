import Vd107 from "./Components/Vd107";
import Vd109 from "./Components/Vd109";
import Vd309 from "./Components/Vd309";
import Vd311 from "./Components/Vd311";
import Vd343 from "./Components/Vd343";
import Vd344 from "./Components/Vd344";
import Vd325 from "./Components/Vd325";
import ZadachaLista from "./Components/ZadachaLista";
import Zmm from "./Components/Zmm";
import Cards from "./Components/Cards";
import StornoManyCards from "./Components/StornoManyCards";
import StornoCard from "./Components/StornoCard";
import NumSF from "./Components/NumSF";
import Provider from "./Components/Provider";

export default function OperatorSap(props) {
    window.scrollTo(0,0)
  props.setActivePage('Оператор-SAP')


  return (
    <div className="main">
      <Vd107 />
      <Vd109 />
      <Vd309 />
      <Vd311 />
      <Vd343 />
      <Vd344 />
      <Vd325 />
      <ZadachaLista />
      <Zmm />
      <Cards />
      <StornoManyCards />
      <StornoCard />
      <NumSF />
      <Provider />
    </div>
  );
}
