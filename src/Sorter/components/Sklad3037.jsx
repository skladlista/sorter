import sklad30372 from "../../assets/sklad3037-2.jpg";
import sklad3037 from "../../assets/sklad3037.jpg";

export default function ExFilter() {
  return (
    <div id="unloading__sklad-3037" className="article unloading__sklad-3037">
      <p className="article__title">
        ПЕРЕДАЧА НА ERP склад (НАПРИМЕР НА 3044 ДЛЯ СВАРКИ КАРТ)
      </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Найти нужные листы и скопировать их ЕО (единица обработки)
          </li>
          <li className="article__subtitle">
            Переместить их в место:
            <br />
            <span className="bold">FOR_MOVING</span> - если они на внутреннем
            складе
            <br />
            <span className="bold">CSKA_GO</span> - если они на внешнем
          </li>
          <li className="article__subtitle">
            Зайти в транзакцию <span className="bold">ADGI</span>
          </li>
          <li className="article__subtitle">
            Выбрать процесс ОМ – <span className="bold">Не EWM склад</span>
          </li>
          <li className="article__subtitle">
            Не EWM склад -{" "}
            <span className="bold">(3044 - для ЦСК, 3037 - для ТЭСЦ)</span>
          </li>
          <li className="article__subtitle">
            Вписать ЕО и нажать{" "}
            <span className="bold">ВЫПОЛНИТЬ (F8) и выбрать всё</span>
          </li>
          <li className="article__subtitle">
            Выбрать <span className="bold">ПроводкаОМ</span>
          </li>
          <li className="article__subtitle">
            На почту придут ошибки (такое будет только со складом 3037 и это
            нормально)
          </li>
          <li className="article__subtitle">
            Найти скопированные до этого ЕО в мониторе (проставить отметку на
            ячейке
            <span className="bold"> «ЕО ПУСТАЯ»</span>)
          </li>
          <li className="article__subtitle">Выделить найденное</li>
          <li className="article__subtitle">
            Нажать кнопку другие методы{" "}
            <span>
              <img src={sklad3037} alt="..." />
            </span>
          </li>
          <li className="article__subtitle">
            Нажать кнопку{" "}
            <span className="bold">Удалить единицу обработки</span>
            <br />
            <span>
              <img src={sklad30372} alt="..." />
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
