import TableOfListMenuClick from "../../scripts/TableOfListMenuClick";
import { NavLink } from "react-router-dom";

export default function TableOfListSorter(props) {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    TableOfListMenuClick();
  }
  return (
    <section className="table-of-list">
      <ul className="ul">
        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="check-ssz">
            ПРОВЕРКА ССЗ
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="create_work_production">
            Сделать задание на задачу
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="recertification-1C">
            Переаттестация листов в 1С
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="recertification-SAP">
            Переаттестация листов в SAP
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="activate">
            АКТИВАЦИЯ ЗАДАНИЯ НА ПРОИЗВОДСТВО
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink
            className="tableOfList__link"
            to="count_remainder_to_production"
          >
            Подсчёт остатка листа к задаче
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="production__sheet">
            Добавление задачи листа
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="comeback_sheet">
            Вернуть лист из производства
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="add_sheet_in_start">
            Задать лист вне очереди
          </NavLink>
        </li>

        <hr />

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="unloading">
            ВЫГРУЗКА ОТ ПОСТАВЩИКА
          </NavLink>
        </li>
        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="asutl">
            ВЫГРУЗКА ВАГОНОВ ПО АСУ ТЛ
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="auto_unloading">
            ВЫГРУЗКА ВАГОНА БЕЗ ПЛАНШЕТА
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="storno">
            СТОРНИРОВАНИЕ ВАГОНА
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="zhd-request">
            СОЗДАНИЕ ЖД ЗАЯВКИ
          </NavLink>
        </li>

        <hr />

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="unloading_external">
            ПЕРЕМЕЩЕНИЕ С ВНЕШНЕГО СКЛАДА
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="cards_unloading">
            ПРИЕМ КАРТ ИЗ ЦСК
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="sklad_erp">
            ПЕРЕДАЧА НА ERP склад
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="loading_external">
            Перемещение на внешний склад
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="move_sheets">
            ПЕРЕМЕЩЕНИЕ с уровнем
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="create-new-task">
            перемещение без уровня
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="order_of_sheets">
            ИЗМЕНЕНИЕ УРОВНЯ В ШТАБЕЛЕ
          </NavLink>
        </li>

        <hr />

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="letter_report">
            ФОРМИРОВАНИЕ ПИСЬМА-ОТЧЕТА
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="add_cards">
            ДОБАВЛЕНИЕ КАРТ В EXCEL
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="find_sheets">
            КАК НАХОДИТЬ ЛИСТЫ В SAP
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="update_classification_in_sap_ewm">
            лист без ширины, толщины и т.п.
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="filter">
            КАК НАХОДИТЬ ЛИСТЫ В Excel
          </NavLink>
        </li>

        <hr />

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="check_cast_test">
            Плавки "разведчики"
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="phone_numbers">
            Номера телефонов
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="issuance_of_cards">
            ВЫПУСК КАРТ В 1С
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
