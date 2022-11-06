import createTask from "../../assets/create-task.jpg";
import createTask2 from "../../assets/create-task2.jpg";

export default function CreateNewTask() {
  return (
    <div
      id="unloading__create-new-task"
      className="article unloading__create-new-task"
    >
      <p className="article__title">
        СОЗДАНИЕ СКЛАДСКОЙ ЗАДАЧИ ДЛЯ ПЕРЕМЕЩЕНИЯ ЛИСТА В ДРУГОЕ СКЛАДСКОЕ МЕСТО
      </p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй div внизу */}
          <li className="article__subtitle">

              После нахождения в мониторе нужного листа / листов необходимо
              выделить строчки → Другие методы
              <span>
                <img src={createTask} alt="" />
              </span>{" "}
              → Создать складскую задачу → В новом окне → Массовое изменение{" "}
              <span>
                <img src={createTask2} alt="" />
              </span>{" "}
              → Принимаемое складское место → Вписать необходимое место →
              Галочка в подтверждение → ОК → Создать + сохранить

          </li>
        </ol>
      </div>
    </div>
  );
}
