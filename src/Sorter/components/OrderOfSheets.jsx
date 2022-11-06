import sheetOrder from "../../assets/sheet-order.jpg";

export default function OrderOfSheets() {
  return (
    <div
      id="unloading__order-of-sheets"
      className="article unloading__sheet-order"
    >
      <p className="article__title">
        ИЗМЕНЕНИЕ НОМЕРОВ ЛИСТОВ В ШТАБЕЛЕ (УРОВНЯ) В МЕСТЕ ХРАНЕНИЯ
      </p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй li внизу */}
          <li className="article__subtitle">
            Зайти в Монитор → Запас и место → Складское место и в новом окне
            вписать нужное место
          </li>
          <li className="article__subtitle">
            Выделить найденное место и нажать Другие методы
            <span>
              <img src={sheetOrder} alt="..." />
            </span>
          </li>
          <li className="article__subtitle">Нажать Изменить уровень ЛП</li>
          <li className="article__subtitle">
            Будет две колонки со старым уровнем и с новым незаполненным. Его
            надо заполнить полностью.
          </li>
          <li className="article__subtitle">
            И нажать кнопку <span className="bold">сохранить</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
