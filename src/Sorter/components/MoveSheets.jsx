export default function MoveSheets() {
  return (
    <div id="unloading__move-sheets" className="article unloading__move-sheets">
      <p className="article__title">
        ПЕРЕМЕЩЕНИЕ ЛИСТОВ ИЗ ОДНОГО МЕСТА В ДРУГОЕ С СОБЛЮДЕНИЕМ УРОВНЯ
      </p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй div внизу */}
          <li className="article__subtitle">
              В SAP EWM → ВХОД В СРЕДУ RF → Выбрать внутренний склад → Разгрузка
              и перемещение → Массово переместить ЛП между ячейками → Вписать
              место ОТКУДА переместить → Записать кол-во листов → Вписать место
              КУДА переместить → Нажать кнопку ВСЕ, чтобы переместить листы в
              том, же порядке
          </li>
        </ol>
      </div>
    </div>
  );
}
