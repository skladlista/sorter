import deletePicture from "../../assets/delete.jpg";
import otherMethods from "../../assets/other-methods.jpg";
import dopOthcet from "../../assets/dop-othcet.jpg";

export default function UnloadingStorno() {
  return (
    <div id="unloading__storno" className="article unloading__storno">
      <p className="article__title">
        СТОРНИРОВАНИЕ ВАГОНА, ЕСЛИ НАЗНАЧЕНО МЕСТО, НО ВЫГРУЗКА ОТМЕНЕНА
      </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Зайти в SAP EWM → Планирование приемки ЛП → Выбрать вагон и нажать
            ЗАГОЛОВОК → Скопировать ЕО → Перейти в МОНИТОР → Документы →
            Складская задача → В новом окне → Удалить значения → Установить
            галки{" "}<span className="bold">Откр. СЗ, Исходные данные, Целевые данные</span>{" "}
            → Добавить в ячейку скопированные ЕО через множественный выбор →{" "}
            <span>
              <img src={deletePicture} alt="" />
            </span>
            Выполнить (F8)
          </li>
          <li className="article__subtitle">
            После нахождения выделить все найденное
          </li>
          <li className="article__subtitle">
            Нажать Другие методы → Сторнировать складскую задачу
            <br />
            <span>
              <img src={otherMethods} alt="" />
            </span>
          </li>
          <li className="article__subtitle">
            <p>Убрать вагон с ворот</p>
            <ol className={"sublist"}>
              <li>Найти вагон в ZPRIEM (Планирование приемки ЛП)</li>
              <li>Зайти во входящую поставку (нажать на номер вагона)</li>
              <li>Открыть вкладку ЕО</li>
              <li>Выделить всю таблицу</li>
              <li>Нажать сторнировать ПМ</li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>
              В 1С отменить проведение у документов, которые относятся к вагонам
            </p>
            <ol className={"sublist"}>
              <li>
                Посмотреть номера документов можно в отчете
                <span className="bold">
                  {" "}
                  Групповое изменение поступление листа
                  <br />
                </span>{" "}
                <span>
                  <img src={dopOthcet} alt="" />
                </span>{" "}
              </li>
              <li>
                В этом отчете найти колонку документ. В ней указан номер и дата
                документа
              </li>
              <li>Найти эти номера в Документы → Поступление листа на склад</li>
              <li>
                Выделить их и в контекстном меню нажать отменить проведение
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
