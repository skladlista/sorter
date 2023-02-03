export default function SapRecertification(props) {
  return (
    <div id="sap-recertification" className="article recertification">
      <p className="article__title">ПЕРЕАТТЕСТАЦИЯ ЛИСТОВ В SAP EWM</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">Найти единицы обработки (ЕО) в мониторе</li>
          <li className="article__subtitle">
            Сверху выбрать <span className="bold">КЛАССИФИКАЦИЯ</span>
          </li>
          <li className="article__subtitle">
            Отфильтровать <span className="bold">НАЗВАНИЕ ПРИЗНАКА</span>
          </li>
          <li className="article__subtitle">
            Выделить всё и нажать <span className="bold">ОбнКласс</span>
          </li>
          <li className="article__subtitle">
            В графу <span className="bold">Значение признака 1</span> записать
            необходимую информацию
          </li>
        </ol>
      </div>
    </div>
  );
}
