import createTask from "../../assets/create-task.jpg";
import createTask2 from "../../assets/create-task2.jpg";

export default function UpdateClassificationInSapEwm() {
  return (
    <div id="unloading__activate" className="article unloading__activate">
      <p className="article__title">ОБНОВЛЕНИЕ КЛАССИФИКАЦИИ У ЛИСТОВ В SAP EWM</p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй div внизу */}
          <li className="article__subtitle">
            Если у листа не хватает какого-либо признака (толщины, ширины и т.д), его можно попробовать обновить
          </li>
          <li className="article__subtitle">
            Для этого необходимо в мониторе выделить данный лист → Другие методы
              <span>
                <img src={createTask2} alt="" />
              </span>{" "} →
              Z:ERP&nbsp;-&nbsp;Обновить классификацию
          </li>
        </ol>
      </div>
    </div>
  );
}
