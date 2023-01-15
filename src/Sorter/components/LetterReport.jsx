import letterReport1 from "../../assets/letter-report1.jpg";
import letterReport3 from "../../assets/letter-report3.jpg";
import letterReport2 from "../../assets/letter-report2.jpg";

export default function LetterReport() {
  return (
    <div
      id="unloading__letter-report"
      className="article unloading__letter-report"
    >
      <p className="article__title">
        ФОРМИРОВАНИЕ ПИСЬМА-ОТЧЕТА СО ВСЕМИ НЕОБХОДИМЫМИ ДАННЫМИ
      </p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй div внизу */}
          <li className="article__subtitle">
            В это письмо надо вложить документы{" "}
            <span className="bold">
              ЖУРНАЛ ЗАЯВОК, СКЛАД ЛИСТА, ОТЧЕТ ПО ВЫГРУЗКЕ
            </span>
          </li>
          <li className="article__subtitle">
            В теме письма указать дату текущей смены + время смены (день или
            сутки)
          </li>
          <li className="article__subtitle">
            Если работа в день, указать в получателях того сортировщика,
            которому вы передадите смену.
          </li>
          <li className="article__subtitle">
            Общее количество листов на складе можно найти в документе{" "}
            <span className="bold">СКЛАД ЛИСТА</span> на листе
            <span className="bold"> ОТЧЕТ</span>. Там в самом низу есть такие
            значения (выделены зеленым).
            <br />
            <span>
              <img src={letterReport1} alt="..." />
            </span>
          </li>
          <li className="article__subtitle">
            Нужно сделать такую таблицу:
            <br />
            <span className="bold">
              <img src={letterReport2} alt="..." />
            </span>
          </li>
          <li className="article__subtitle">
            Выделить ее, и нажать:
            <br />
            <span>
              <img src={letterReport3} alt="..." />
            </span>
          </li>
          <li className="article__subtitle">
            После этого вставить в черновик{" "}
            <span className="bold">ДНЕВНОГО ОТЧЕТА</span> в самый низ
          </li>
          <li className="article__subtitle">
            Скопировать из черновика <span className="bold">ДНЕВНОЙ ОТЧЕТ</span>{" "}
            заготовку и вставить в тело письма и отправить
          </li>
        </ol>
      </div>
    </div>
  );
}
