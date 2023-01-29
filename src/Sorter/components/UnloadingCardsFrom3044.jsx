import L027 from "../../assets/L027.jpg";

export default function UnloadingCardsFrom3044() {
  return (
    <div
      id="unloading__unloading-sklad-l027"
      className="article unloading__unloading-sklad-l027"
    >
      <p className="article__title">ПРИЕМ КАРТ ИЗ ЦСК</p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй li внизу */}
          <li className="article__subtitle">
            Оператор SAP создаст входящую поставку и напишет её номер
          </li>
          <li className="article__subtitle">
            Входящая поставка появится для разгрузки на воротах{" "}
            <span className="bold">CSKA</span> и можно их будет выгрузить по
            планшету
          </li>
          <li className="article__subtitle">
            Выделить строчку с входящей поставкой в окне{" "}
            <span className="bold">ЗОНЫ ПОДГОТОВКИ</span> и нажать показать
            запас
            <br />
            <span>
              <img src={L027} alt="..." />
            </span>
          </li>
          <li className="article__subtitle">
            Скопировать плавку и номер и ЕО (единица обработки)
          </li>
          <li className="article__subtitle">
            Найти скопированные листы в складе листа (через дополнительный
            фильтр)
          </li>
          <li className="article__subtitle">
            Изменить у них склад на 3027 и в колонке{" "}
            <span className="bold">Дата поступления с ВС/ЦТИ</span> указать
            смену с буквой смены
          </li>
          <li className="article__subtitle">
            Указать в отчете по выгрузке и в дневном отчете
          </li>
          <li className="article__subtitle">
            <p>Выгрузить на склад по планшету</p>
            <ol type="a" className="sublist">
              <li>
                SAP → Внутренний склад листа → Вход в среду RF → Цех сварки карт → Разгрузка карт →
                Вписать номер карты → Подтвердить (F4) → Вписать место → Подтвердить (F4)
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
