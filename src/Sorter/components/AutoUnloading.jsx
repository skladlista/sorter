import otherMethods from "../../assets/other-methods.jpg";
import unloading from "../../assets/unloading.png";

export default function ExFilter() {
  return (
    <div
      id="unloading__auto-unloading"
      className="article unloading__auto-unloading"
    >
      <p className="article__title">
        ВЫГРУЗКА ВАГОНА СРАЗУ В МЕСТО ХРАНЕНИЯ (БЕЗ ПРИЕМКИ ПО ПЛАНШЕТУ)
      </p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй li внизу */}
          <li className="article__subtitle">
            Выделить вагон в ПЛАНИРОВАНИИ ПРИЕМКИ ЛП, нажать ПОЗИЦИИ
            <img src={unloading} alt="..." />
          </li>
          <li className="article__subtitle">
            Скопировать ЕО (ЕДИНИЦА ОБРАБОТКИ)
          </li>
          <li className="article__subtitle">
            Открыть новое окно SAP → Монитор управления складами → Документы →
            Складская задача (два раза нажать) → Нажать удалить значения →
            Вставить в ячейку ЕДИНИЦА ОБРАБОТКИ скопированное
          </li>
          <li className="article__subtitle">
            Выставить галочку{" "}
            <span className="bold">
              ОТКР. Сз, Исходные данные, Целевые данные
            </span>
          </li>
          <li className="article__subtitle">Нажать выполнить (F8)</li>
          <li className="article__subtitle">
            Выделить найденное → <span className="bold">ДРУГИЕ МЕТОДЫ</span>{" "}
            <span>
              <img src={otherMethods} alt="..." />
            </span>{" "}
            → <span className="bold">ПОДТВЕРДИТЬ СЗ в ФОНОВОМ РЕЖИМЕ</span>
          </li>
          <li className="article__subtitle">
            После этого вагон будет выгружен весь в назначенное место хранения
          </li>
        </ol>
      </div>
    </div>
  );
}
