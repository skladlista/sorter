import createTask2 from "../../assets/create-task.jpg";
import sapRecertification from "../../assets/sapRecertification.png";
import zerp from "../../assets/zerp.png";

export default function SapRecertification(props) {
  return (
    <div id="sap-recertification" className="article recertification">
      <p className="article__title">ПЕРЕАТТЕСТАЦИЯ ЛИСТОВ В SAP EWM</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Найти необходимы нам листы в SAP → /SCWM/MON – Монитор управлениями
            складами
          </li>
          <li className="article__subtitle">
            Сверху выбрать <span className="bold">КЛАССИФИКАЦИЯ </span>(1)
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Отфильтровать НАЗВАНИЕ ПРИЗНАКА(2)</p>
              </summary>
              <ol>
                <li className="article__subtitle">
                  Если у листа не хватает какого-либо признака (марки стали,
                  например), его нужно обновить из SAP ERP
                </li>
                <li className="article__subtitle">
                  Для этого необходимо в мониторе выделить данный лист → Другие
                  методы
                  <span>
                    <img src={createTask2} alt="" />
                  </span>{" "}
                  → Z:ERP&nbsp;-&nbsp;Обновить классификацию
                  <div>
                    <img src={zerp} alt="" />
                  </div>
                </li>
                <li className="article__subtitle">
                  Отфильтровать НАЗВАНИЕ ПРИЗНАКА повторно
                </li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            Выделить всё (3) и нажать <span className="bold">ОбнКласс </span>(4)
          </li>
          <li className="article__subtitle">
            В графу <span className="bold">Значение признака 1</span> записать
            необходимую информацию (5)
          </li>
          <li className="article__subtitle">Сохранить изменения (6)</li>
          <img src={sapRecertification} alt="" />
        </ol>
      </div>
    </div>
  );
}
