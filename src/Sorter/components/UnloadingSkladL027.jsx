import L027 from "../../assets/L027.jpg";

export default function UnloadingSkladL027() {
  return (
    <div
      id="unloading__unloading-sklad-l027"
      className="article unloading__unloading-sklad-l027"
    >
      <p className="article__title">ПРИЕМ КАРТ С ВНЕШНЕГО СКЛАДА</p>
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
            Скопировать плавку и номер (или ЕО)
          </li>
          <li className="article__subtitle">
            Найти скопированные листы в складе листа
          </li>
          <li className="article__subtitle">
            Изменить у них склад и в колонке{" "}
            <span className="bold">Дата поступления с ВС/ЦТИ</span> указать
            смену с буквой смены
          </li>
          <li className="article__subtitle">
            Указать в отчете по выгрузке и в дневном отчете
          </li>
        </ol>
      </div>
    </div>
  );
}
