export default function ExFilter() {
  return (
    <div id="unloading__ex-filter" className="article unloading__ex-filter">
      <p className="article__title">ДОПОЛНИТЕЛЬНЫЙ ФИЛЬТР ДЛЯ ПОИСКА В EXCEL</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Чтобы найти в одной таблице данные по нужным параметрам из другой
            таблицы (например, по номеру плавки и номеру листа поставщика).
            НАДО:
          </li>
          <li className="article__subtitle">
            Сделать заголовки таблиц одинаковыми. Т.е. скопировать{" "}
            <span className="bold">ЗАГОЛОВКИ</span> из таблицы,{" "}
            <span className="bold">в которой вы хотите найти данные</span>, и
            вставить скопированные названия в нужные колонки в таблице,{" "}
            <span className="bold">
              в которой указаны данные по которым вы хотите искать
            </span>
            .
          </li>
          <li className="article__subtitle">
            Вкладка <span className="bold">Данные → Дополнительно</span>
          </li>
          <li className="article__subtitle">
            Ячейку <span className="bold">Диапазон условий</span> выделить и
            после выбрать в черновике <span className="bold">ЧТО ИСКАТЬ</span>{" "}
            (нужные колонки вместе с заголовками) и{" "}
            <span className="bold">OK</span>
          </li>
          <li className="article__subtitle">
            После сформирования проверить количество в обоих этих таблицах (
            <span className="bold">ГДЕ ИСКАТЬ</span> и{" "}
            <span className="bold">ЧТО ИСКАТЬ</span>). Должно быть одинаково.
          </li>
          <li className="article__subtitle">
            Если кол-во не сходится, то искать по партии САП
          </li>
          <li className="article__subtitle">
            Если кол-во не сходится, то проверить с помощью условного
            форматирования. Если есть лишние, то забрать в черновик и удалить
            ненужное
          </li>
        </ol>
      </div>
    </div>
  );
}
