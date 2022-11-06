import { logDOM } from "@testing-library/react";
import "../OperatorSap.scss";
import TableOfListMenuClick from "../../scripts/TableOfListMenuClick";

export default function TableOfListOperatorSap(props) {
  return (
    <section className="table-of-list">
      <ul>
        <li
          onClick={() => {
            TableOfListMenuClick("vd107");
          }}
        >
          <div className="tableOfList__link">107 ВД</div>
        </li>
        <li
          onClick={() => {
            TableOfListMenuClick("vd109");
          }}
        >
          <div className="tableOfList__link">109 ВД</div>
        </li>
        <li
          onClick={() => {
            TableOfListMenuClick("vd309");
          }}
        >
          <div className="tableOfList__link">309 ВД</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("vd311");
          }}
        >
          <div className="tableOfList__link">311 ВД</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("vd343");
          }}
        >
          <div className="tableOfList__link">343 ВД</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("vd344");
          }}
        >
          <div className="tableOfList__link">344 ВД</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("vd325");
          }}
        >
          <div className="tableOfList__link">325 ВД</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("zadacha-lista");
          }}
        >
          <div className="tableOfList__link">Задача листа</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("zmm");
          }}
        >
          <div className="tableOfList__link">ZMM_MBC</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("cards");
          }}
        >
          <div className="tableOfList__link">Сварка карт</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("storno-many-cards");
          }}
        >
          <div className="tableOfList__link">Сторно карт</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("storno-card");
          }}
        >
          <div className="tableOfList__link">Сторно одной карты</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("num-sf");
          }}
        >
          <div className="tableOfList__link">Номер сф по партии</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("provider");
          }}
        >
          <div className="tableOfList__link">Поставщики</div>
        </li>
      </ul>
    </section>
  );
}
