import sklad30372 from "../../assets/sklad3037-2.jpg";
import sklad3037 from "../../assets/sklad3037.jpg";

export default function ComebackSheet() {
  return (
    <div id="comeback__sheet" className="article comeback__sheet">
      <p className="article__title">ВЕРНУТЬ ЛИСТ ИЗ ПРОИЗВОДСТВА</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            В 1С &#8594; Рабочий стол оператора (валковая формовка)
          </li>
          <li className="article__subtitle">
            Если там нет нужного нам листа, то уже ничего вернуть нельзя
          </li>
          <li className="article__subtitle">
            Если данный лист там есть, то в 1С &#8594; Документы &#8594; Задача
            листа в производство &#8594; Отменить документы до нужного листа
          </li>
          <li className="article__subtitle">
            В SAP &#8594; EWM: Передача ЛП в производство &#8594; Выделить
            нужную строку &#8594; Вернуть из производства
          </li>
          <li className="article__subtitle">
            Перейти в транзакцию Активное планирование для производства &#8594;
            В левом нижнем окне найти по ПАРТИИ лист &#8594; Выделить её &#8594;
            Отправить в производство
          </li>
          <li className="article__subtitle">
            Восстановить очередь (для этого нужно перепроводить отменённые
            документы по порядку, генерируя для них новый номер листа ТЭСЦ)
          </li>
        </ol>
      </div>
    </div>
  );
}
