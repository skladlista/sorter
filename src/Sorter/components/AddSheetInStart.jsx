import addSheetInStart from "../../assets/addSheetInStart.png"
export default function AddSheetInStart() {
  return (
    <div id="add__sheet__in__start" className="article add__sheet__in__start">
      <p className="article__title">ЗАДАТЬ ЛИСТ ВНЕ ОЧЕРЕДИ </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            В 1С &#8594; Рабочий стол оператора (валковая формовка) &#8594;
            Посмотреть какой лист не сформован и запомнить время (до красной
            полосы)
          </li>
          <li className="article__subtitle">
            В 1С &#8594; Документы &#8594; Задача листа в производство &#8594;
            Найти документ с этим листом &#8594; Отменить его и все после него
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>На данном этапе доступно 2 варианта</p>
              </summary>
              <ol className="article__list sublist">
                <li>
                  Задать в 1С лист самостоятельно, а в SAP лист перекинуть на
                  склад 3037
                  <ul>
                    <li>Чтобы задать лист в 1С самостоятельно нужно</li>
                    <li>Зайти в 1С  Задача листа в производство</li>
                    <li>«Создать» → Указать свою смену</li>
                    <li>Подразделение – Склад листа</li>
                    <li>Основание – выбрать ПЗ, под которое будет задаваться лист</li>
                    <li>добавить из таб документа →
                    в таблицу внести необходимые параметры</li>
                    <li>«провести и закрыть»</li>
                    <img src={addSheetInStart} alt=""/>

                  </ul>
                </li>
                <li>
                  Задать лист по SAP вручную (Сделать задание, запланировать,
                  переместить в карман, отправить в производство)
                </li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            В 1С восстановить очередь (для этого нужно перепроводить отменённые
            документы по порядку, генерируя для них новый номер листа ТЭСЦ)
          </li>
        </ol>
      </div>
    </div>
  );
}
