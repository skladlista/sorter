import ExWarehouseReport from "../../assets/ExWarehouseReport.jpg";

export default function LoadingExternal() {
  return (
      <div
          className="article unloading__from-external"
      >
        <p className="article__title">ПЕРЕМЕЩЕНИЕ НА ВНЕШНИЙ СКЛАД</p>
        <div className="article__div">
          <ol>
            <li className="article__subtitle">
              <p>
                Создать задание на погрузку
              </p>
              <ol type="a" className="sublist">
                <li>
                  SAP → Активное планирование для производства → Задание → Создать
                </li>
                <li>
                  Проставляем пункты: вид планирования (ZSSL), плановая дата выполнения, кол-во, толщина стенки, диаметр, класс прочности/марка стали
                </li>
                <li>
                  После создания выбираем запас по складским местам и назначаем место отгрузки
                </li>
              </ol>
            </li>

            <li className="article__subtitle">
              <p>Создать и погрузить платформу/машину</p>
              <ol type="a" className="sublist">
                <li>
                  После того как задание было создано и выбрано место откуда будем грузить машину/универсалку
                </li>
                <li>SAP → Вход в среду  RF → Внутренний склад → Погрузка/закрытие ТС → погрузка ЛП в ТС → выбираем созданное задание, согласно которому будем перемещать → создаем ТС → загружаем листы → закрыть ТС
                </li>
              </ol>
            </li>
            <li className="article__subtitle">
              <p>Переместить их по Excel (изменить склад)</p>
            </li>
            <li className="article__subtitle">
              <p>Добавить их в дневной отчёт</p>
            </li>
          </ol>
        </div>
      </div>
  );
}
