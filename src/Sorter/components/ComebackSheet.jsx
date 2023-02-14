import sklad30372 from "../../assets/sklad3037-2.jpg";
import sklad3037 from "../../assets/sklad3037.jpg";
import comeback1 from "../../assets/comeback1.png";
import comeback2 from "../../assets/comeback2.png";
import comeback3 from "../../assets/comeback3.png";
import comeback4 from "../../assets/comeback4.png"



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
          <img src={comeback1} alt=""/>
          <li className="article__subtitle">
            В SAP &#8594; EWM: Передача ЛП в производство &#8594; Выделить
            нужную строку &#8594; Вернуть из производства
          </li>
          <img src={comeback2} alt=""/>
          <li className="article__subtitle">
            Перейти в транзакцию Активное планирование для производства &#8594;
            В левом нижнем окне найти по ПАРТИИ лист &#8594; Выделить её &#8594;
            Отправить в производство
          </li>
          <img src={comeback3} alt=""/>
          <li className="article__subtitle">
            Восстановить очередь (для этого нужно перепроводить отменённые
            документы по порядку, генерируя для них новый номер листа ТЭСЦ)
            <br/><br/>*заходим в каждый из отмененных документов по порядку, удаляем номер листа (1) → сгенерировать номер (2) → «провести и закрыть» (3)
          </li>
          <img src={comeback4} alt=""/>
        </ol>
      </div>
    </div>
  );
}
