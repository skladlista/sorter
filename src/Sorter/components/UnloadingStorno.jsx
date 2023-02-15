import deletePicture from "../../assets/delete.jpg";
import otherMethods from "../../assets/other-methods.jpg";
import dopOthcet from "../../assets/dop-othcet.jpg";
import gatesDelete from "../../assets/gatesDelete.png";
import cancelProduction from "../../assets/cancelProduction.png";

export default function UnloadingStorno() {
  return (
    <div id="unloading__storno" className="article unloading__storno">
      <p className="article__title">
        СТОРНИРОВАНИЕ ВАГОНА, ЕСЛИ НАЗНАЧЕНО МЕСТО, НО ВЫГРУЗКА ОТМЕНЕНА
      </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Снять вагон с ворот в SAP</p>
              </summary>
              <ol>
                <li className="article__subtitle">
                  Найти нужный вагон в ZPRIEM (Планирование приемки ЛП)
                </li>
                <li className="article__subtitle">Выделить (1)</li>
                <li className="article__subtitle">
                  Нажать кнопку{" "}
                  <span className="bold">Снять вагон с ворот</span> (2)
                </li>
                <img src={gatesDelete} alt="..." />
                <li className="article__subtitle">
                  В появившемся информационном окне нажать{" "}
                  <span className="bold">Да</span>
                </li>
              </ol>
            </details>
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>
                  В 1С отменить проведение у документов, которые относятся к
                  вагонам
                </p>
              </summary>
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
                  В этом отчете найти колонку документ. В ней указан номер и
                  дата документа
                </li>
                <li>
                  Найти эти номера в Документы → Поступление листа на склад
                </li>
                <li>
                  Выделить их и в контекстном меню нажать отменить проведение
                </li>
                <img src={cancelProduction} alt="..." />
              </ol>
            </details>
          </li>
        </ol>
      </div>
    </div>
  );
}
