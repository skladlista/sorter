export default function DeleteCar(props) {
  return (
    <div id="delete-car" className="article delete-car">
      <p className="article__title">Убрать вагон с ворот</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Найти вагон в ZPRIEM (Планирование приемки ЛП)
          </li>
          <li className="article__subtitle">
            Зайти во входящую поставку (нажать на номер вагона)
          </li>
          <li className="article__subtitle">Открыть вкладку ЕО</li>
          <li className="article__subtitle">
            Выделить всю таблицу и нажать{" "}
            <span className="bold">СТОРНИРОВАТЬ ПМ</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
