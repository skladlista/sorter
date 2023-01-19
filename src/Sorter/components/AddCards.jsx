import dateZadacha from "../../assets/date-zadacha.jpg";
import sort from "../../assets/sort.jpg";

export default function AddCards() {
  return (
    <div id="add-cards" className="article add-cards">
      <p className="article__title">ДОБАВЛЕНИЕ КАРТ В EXCEL</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <p>Найти карты в 1С</p>
            <ol className="article__list sublist">
              <li>
                1С: Отчеты &#8594; Лист на складе онлайн &#8594; Проставить
                галочку "карта" &#8594; Проставить период (на неделю раньше и до
                конца месяца) &#8594; Копируем партию SAP
              </li>
              <li>Находим с помощью дополнительного фильтра карты в Excel</li>
              <li>
                С помощью условного форматирования по повторяющимся значениям
                находим карты, которых не хватает
              </li>
              <li>Копируем недостающие карты из 1С</li>
              <li>Вставляем только значения в таблицу склад листа</li>
              <li>Приемка &#8594; Лист на складе онлайн</li>
              <li>
                Проверяем марку стали, партию SAP, дату, склад/дату задачи
              </li>
            </ol>
          </li>

          <li className="article__subtitle">
            <p>Списать листы, из которых сварили карты</p>
            <ol className="article__list sublist">
              <li>
                1С: Отчеты &#8594; Сварка карт &#8594; Проставить период (на
                неделю раньше и до конца месяца)
              </li>
              <li>Копируем партию SAP1 и партию SAP2</li>
              <li>Вставляем в черновик в склад листа</li>
              <li>
                С помощью дополнительного фильтра находим листы и удаляем СКЛАД
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
