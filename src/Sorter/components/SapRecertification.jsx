import createTask2 from "../../assets/create-task2.jpg";

export default function SapRecertification(props) {
    return (
        <div id="sap-recertification" className="article recertification">
            <p className="article__title">ПЕРЕАТТЕСТАЦИЯ ЛИСТОВ В SAP EWM</p>
            <div className="article__div">
                <ol>
                    <li className="article__subtitle">Найти единицы обработки (ЕО) в мониторе</li>
                    <li className="article__subtitle">
                        Сверху выбрать <span className="bold">КЛАССИФИКАЦИЯ</span>
                    </li>
                  <li className="article__subtitle">
                    Отфильтровать <span className="bold">НАЗВАНИЕ ПРИЗНАКА</span>
                    <ol>
                      <li className="article__subtitle">
                        Если у листа не хватает какого-либо признака (марки стали, например), его нужно обновить из
                        SAP ERP
                      </li>
                      <li className="article__subtitle">
                        Для этого необходимо в мониторе выделить данный лист → Другие методы
                        <span>
                                <img src={createTask2} alt=""/>
                              </span>{" "} →
                        Z:ERP&nbsp;-&nbsp;Обновить классификацию
                      </li>
                      <li className="article__subtitle">
                        Отфильтровать НАЗВАНИЕ ПРИЗНАКА повторно
                      </li>
                    </ol>
                  </li>
                    <li className="article__subtitle">
                        Выделить всё и нажать <span className="bold">ОбнКласс</span>
                    </li>
                    <li className="article__subtitle">
                        В графу <span className="bold">Значение признака 1</span> записать
                        необходимую информацию
                    </li>

                </ol>
            </div>
        </div>
    );
}
