export default function StornoSheets(props) {
  return (
    <div id="storno-sheets" className="article storno-sheets">
      <p className="article__title">
        Сторнирование листов (отдельные листы во входящей)
      </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">Переместить листы на ворота</li>
          <li className="article__subtitle">
            Зайти во входящую и выбрать ЕО во вкладке
          </li>
          <li className="article__subtitle">
            Выбрать <span className="bold">СТОРНИРОВАТЬ ПМ</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
