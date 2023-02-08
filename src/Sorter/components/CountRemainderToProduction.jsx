import ExWarehouseReport from "../../assets/ExWarehouseReport.jpg";

export default function CountRemainderToProduction() {
  return (
    <div id="unloading__activate" className="article unloading__activate">
      <p className="article__title">ПОДСЧЁТ ОСТАТКА ЛИСТА К ЗАДАЧЕ</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Не всегда в SAP может быть достоверное число, в силу того, что когда
            вынимаем листы из кармана/производства число некоторых позиций
            остается неизменно
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Определить количество сформованных труб:</p>
              </summary>
              <ol type="a" className="sublist">
                <li>
                  1С: Отчеты → справка по производству → за сутки → компактный:
                  выбираем день работы
                </li>
                <li>
                  Найти по номеру ПЗ нужное задание и записать число со столба
                  ВФ <br />
                  *либо можно найти по номеру задания (тогда покажет число за
                  всё время действия задания)
                </li>
              </ol>
            </details>
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>Определить количество листов на линии:</p>
              </summary>
              <ol type="a" className="sublist">
                <li>
                  1С: Отчеты → заданные за период, но не прошедшие ДО/ФК/ВФ
                </li>
                <li>
                  Посчитать количество листов, у которых в столбце ВФ стоит
                  <span style={{ color: "red" }}> X</span>
                </li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            Определить количество листов в кармане
          </li>
          <li className="article__subtitle">
            Сложить эти 3 значения и получится количество заданных по выбранному
            ПЗ
          </li>
          <li className="article__subtitle">
            Отнять количество заданных из общего числа по заданию (указано в ССЗ
            или в недельном графике)
          </li>
        </ol>
      </div>
    </div>
  );
}
