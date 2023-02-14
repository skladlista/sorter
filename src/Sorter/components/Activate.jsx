import activate from "../../assets/activate.png"

export default function Activate() {
  return (
    <div id="unloading__activate" className="article unloading__activate">
      <p className="article__title">АКТИВАЦИЯ ЗАДАНИЯ НА ПРОИЗВОДСТВО</p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй div внизу */}
          <div className="article__subtitle">
              В определенный момент, когда предыдущее задание завершиться и в
              складском месте KARMAN не будет ни одного листа, необходимо будет
              работать по другому заданию, его надо будет его активировать
          </div>
          <li className="article__subtitle">
              Запускаем транзакцию SAP → ZPLP – EWM: Планирование производства
          </li>
            <li className="article__subtitle">
                Выбираем нужное нам задание → Задание → Активировать планирование для Произв.
            </li>
            <img src={activate} alt=""/>
        </ol>
      </div>
    </div>
  );
}
