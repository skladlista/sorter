import TableOfListMenuClick from "../../scripts/TableOfListMenuClick";

export default function TableOfListSapEwmSheet(props) {
  return (
    <section className="table-of-list">
      <ul>
        <li
          onClick={() => {
            TableOfListMenuClick("queue");
          }}
        >
          <div className="tableOfList__link">Просмотр очереди</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("toggle-table");
          }}
        >
          <div className="tableOfList__link">Переключение RFUI</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("sap-recertification");
          }}
        >
          <div className="tableOfList__link">Переаттестация</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("move-sheets");
          }}
        >
          <div className="tableOfList__link">Переместить листы</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("zadacha-pack");
          }}
        >
          <div className="tableOfList__link">Задача через RPACK</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__sklad-3037");
          }}
        >
          <div className="tableOfList__link">Передача на ERP склад</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("allocation");
          }}
        >
          <div className="tableOfList__link">Распределение вагонов</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("storno-sheets");
          }}
        >
          <div className="tableOfList__link">Сторнирование листов</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("adaptation-supply");
          }}
        >
          <div className="tableOfList__link">Адаптация поставки</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("adaptation-sheet");
          }}
        >
          <div className="tableOfList__link">Адаптация листа</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("delete-car");
          }}
        >
          <div className="tableOfList__link">Снять с ворот</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("change-ozm");
          }}
        >
          <div className="tableOfList__link">Изменение номенклатуры</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("pack");
          }}
        >
          <div className="tableOfList__link">Упаковывание листа</div>
        </li>
      </ul>
    </section>
  );
}
