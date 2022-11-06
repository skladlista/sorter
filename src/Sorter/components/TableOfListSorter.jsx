import TableOfListMenuClick from "../../scripts/TableOfListMenuClick";

export default function TableOfListSorter(props) {
  return (
    <section className="table-of-list">
      <ul className="ul">
        <li
          onClick={() => {
            TableOfListMenuClick("ssz-check");
          }}
        >
          <div className="tableOfList__link">ПРОВЕРКА ССЗ</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading");
          }}
        >
          <div className="tableOfList__link">ВЫГРУЗКА ОТ ПОСТАВЩИКА</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__from-external");
          }}
        >
          <div className="tableOfList__link">ПЕРЕМЕЩЕНИЕ С ВНЕШНЕГО СКЛАДА</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__storno");
          }}
        >
          <div className="tableOfList__link">СТОРНИРОВАНИЕ ВАГОНА</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__asutl");
          }}
        >
          <div className="tableOfList__link">ВЫГРУЗКА ВАГОНОВ ПО АСУ ТЛ</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__zhd-request");
          }}
        >
          <div className="tableOfList__link">СОЗДАНИЕ ЖД ЗАЯВКИ</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__activate");
          }}
        >
          <div className="tableOfList__link">
            АКТИВАЦИЯ ЗАДАНИЯ НА ПРОИЗВОДСТВО
          </div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__create-new-task");
          }}
        >
          <div className="tableOfList__link">СОЗДАНИЕ СКЛАДСКОЙ ЗАДАЧИ</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__find-sheets");
          }}
        >
          <div className="tableOfList__link">КАК НАХОДИТЬ ЛИСТЫ В SAP</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__move-sheets");
          }}
        >
          <div className="tableOfList__link">ПЕРЕМЕЩЕНИЕ ЛИСТОВ</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__letter-report");
          }}
        >
          <div className="tableOfList__link">ФОРМИРОВАНИЕ ПИСЬМА-ОТЧЕТА</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__ex-filter");
          }}
        >
          <div className="tableOfList__link">ДОПОЛНИТЕЛЬНЫЙ ФИЛЬТР</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__auto-unloading");
          }}
        >
          <div className="tableOfList__link">ВЫГРУЗКА ВАГОНА БЕЗ ПЛАНШЕТА</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__sklad-3037");
          }}
        >
          <div className="tableOfList__link">ПЕРЕДАЧА НА НЕ EWM склад</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__issuance-of-cards");
          }}
        >
          <div className="tableOfList__link">ВЫПУСК КАРТ В 1С</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__order-of-sheets");
          }}
        >
          <div className="tableOfList__link">ИЗМЕНЕНИЕ УРОВНЯ В ШТАБЕЛЕ</div>
        </li>

        <li
          onClick={() => {
            TableOfListMenuClick("unloading__unloading-sklad-l027");
          }}
        >
          <div className="tableOfList__link">ПРИЕМ КАРТ С ВНЕШНЕГО СКЛАДА</div>
        </li>
      </ul>
    </section>
  );
}
