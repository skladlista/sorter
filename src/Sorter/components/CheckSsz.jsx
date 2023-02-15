import monitor from "../../assets/Monitor.png";
import monitor_transaction from "../../assets/monitor_transaction.png";
import groupPlaces from "../../assets/group_places.png";
import blockZapas from "../../assets/block_zapas.png";
import ZPLP from "../../assets/ZPLP.png";
import planning from "../../assets/planning.png";

export default function CheckSsz() {
  return (
    <div id="ssz-check" className="article ssz-check">
      <p className="article__title">ПРОВЕРКА СМЕННО-СУТОЧНОГО ЗАДАНИЯ</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle ">
            <details>
              <summary>
                <p>
                  Найти бумажное ПЗ и ПЗ в 1С и проверить соответствуют ли они
                  друг другу
                </p>
              </summary>
              <ol className="article__list sublist">
                <li>
                  Бумажные ПЗ находятся в папке{" "}
                  <span className="bold">
                    X:\Производственная дирекция\Производство\Производственные
                    задания\год\месяц\формовка
                  </span>
                </li>
                <li>
                  Найти ПЗ в 1С. Документы &#8594; Производственное задание в 1C
                  &#8594; В поиске написать номер ПЗ
                </li>
              </ol>
            </details>
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>
                  Проверить наличие листов по ПЗ на внутреннем складе в SAP EWM
                </p>
              </summary>
              <ol className="article__list sublist">
                <li>
                  Запускаем транзакцию SAP → /SCWM/MON – Монитор управлениями
                  складами
                </li>
                <img src={monitor_transaction} />
                <li>
                  Выбираем Запас и место (1) → Единица обработки (2) → Удалить
                  значения (3) → F8(часики) (4)
                </li>
                <img src={monitor} />
                <li>
                  Найти нужные листы
                  <ul>
                    <li>
                      Установить необходимые фильтры в расчетном диаметре,
                      толщине, классе прочности и марке стали> (Выделить колонку
                      &#8594; правый клик мыши &#8594; Установить фильтр)
                    </li>
                    <li>
                      Сгруппировать места (Выбрать колонку{" "}
                      <span className="bold">
                        МЕСТО &#8594; Промежуточные суммы)
                      </span>
                    </li>
                    <img src={groupPlaces} />
                    <li>
                      Записать их места хранения (только те, у которых в начале
                      SH-), места у которых в начале SX- необходимо сложить и
                      записать как ВС
                    </li>
                    <li>Уточнить откуда задавать у мастера</li>
                  </ul>
                </li>
              </ol>
            </details>
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>
                  Проверить статус листов в SAP, которые планируются к задаче
                </p>
              </summary>

              <ol className="article__list sublist">
                <li>
                  Выделяем все необходимые листы (1) → «физический запас» (2) →
                  снизу смотрим колонку{" "}
                  <span className={"bold"}>Название вида запаса</span>(3)
                </li>
                <img src={blockZapas} />
                <li>Листы со статусом F2 – готовы к задаче</li>
                <li>Листы со статусом B2 - блок-запас</li>
                <ul>
                  <li>Данные листы надо найти в 1С → История продукции</li>
                  <li>
                    Найти документ СТОП-ЛИСТ и открыть его (двойным кликом)
                  </li>
                  <li>
                    В комментарии будет указано, почему он в стоп-листе (проба,
                    замер и т.д)
                  </li>
                  <li>
                    О данных листах необходимо сообщать мастеру или бригадиру
                  </li>
                </ul>
              </ol>
            </details>
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>Найти их в 1С и проверить соответствие ПЗ</p>
              </summary>

              <ol className="article__list sublist">
                <li>
                  Скопировать колонки<span className="bold"> Плавка и Номер листа поставщика</span> из EWM и
                  вставить в черновик в Excel
                </li>
                <li>
                  В 1С &#8594; Отчеты
                  &#8594; Лист на складе онлайн &#8594; Выставить фильтры на
                  ширину и толщину &#8594; Скопировать найденное в черновик в
                  EXCEL &#8594; С помощью ДОПОЛНИТЕЛЬНОГО ФИЛЬТРА найти в данном
                  черновике листы из предыдущего черновика (там, где плавка и номер листа из EWM) &#8594; Скопировать найденное на
                  новый черновик и удалить предыдущие два.
                </li>
                <li>
                  Проверить параметры найденных листов (диаметр, толщина, марка
                  стали, класс прочности) с параметрами, указанными{" "}
                  <span className="bold">ПЗ В 1С.</span>
                </li>
              </ol>
            </details>
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>
                  Если листов, соответствующих ПЗ в системе нет, то найти ПЗ и
                  АКТ НА ПЕРЕАТТЕСТАЦИЮ
                </p>
              </summary>
              <ol className="article__list sublist">
                <div>
                  Может быть указан с ССЗ, иначе искать по ширине и стенке в
                  папке ПЗ НА ДОРАБОТКУ
                </div>
                <li>
                  ПЗ НА ПЕРЕАТТЕСТАЦИЮ в папке <br />
                  <span className="bold">
                    X:\Производственная дирекция\Производство\Производственные
                    задания\ПЗ на доработку\год
                  </span>
                </li>
                <li>
                  АКТ на ПЕРЕАТТЕСТАЦИЮ в папке <br />
                  <span className="bold">
                    X:\Производственная дирекция\Производство\Производственные
                    задания\Акты ПЕРЕАТТЕСТАЦИИ
                  </span>
                </li>
                <li>
                  Сверить найденный <span className="bold">АКТ</span> с{" "}
                  <span className="bold">ПЗ в 1С</span>
                </li>
                <li>
                  Если АКТ <span className="bold">НЕ СХОДИТСЯ</span> с ПЗ в 1С,
                  то необходимо звонить в{" "}
                  <span className="bold">ПРОИЗВОДСТВЕННЫЙ ОТДЕЛ</span> (Леунова
                  Елена Валерьевна <span className="bold">1803</span>) и
                  сообщать об этом
                </li>
                <li>
                  Если акта на переаттестацию нет необходимо оповестить мастера
                  склада листа, а при его отсутствии (например, в ночную смену)
                  сотрудника ОТК и начальника смены
                </li>
                <li>
                  <span className="bold">
                    Без АКТА НА ПЕРЕАТТЕСТАЦИЮ переаттестация и задача запрещена
                    и производится только после согласования с начальником ОТК
                    или лицом, исполняющим его обязанности
                  </span>
                </li>
                <li>Если всё ок, то переаттестовать листы</li>
              </ol>
            </details>
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>Сделать задание на задачу в SAP EWM</p>
              </summary>
              <ol className="article__list sublist ">
                <li className="article__sublist ">Зайти в САП</li>
                <li className="article__sublist ">
                  Перейти в{" "}
                  <span className="bold">
                    Планирование производства &#8594; Выполнить (F8)
                  </span>
                </li>
                <img src={ZPLP} alt="..." />
                <li>
                  Найти нужное задание в колонке
                  <span className="bold"> Заказ/Произв</span> (в ССЗ есть его
                  номер)
                </li>
                <li>
                  <details>
                    <summary>
                      <p>Если задания нет, то его надо создать</p>
                    </summary>
                    <ol className="article__list sublist">
                      <li>Задание &#8594; Создать</li>
                      <li>Вид планирования &#8594; ZZNP</li>
                      <li>Плановая дата выполнения &#8594; Текущая дата</li>
                      <li>
                        Производственный заказ &#8594; № производственного
                        задания
                      </li>
                      <li>Плановое количество &#8594; Указано в ССЗ</li>
                      <li>
                        Указать толщину, диаметр, класс прочности и марку стали.
                        Эти параметры скопировать из монитора SAP EWM.
                      </li>
                    </ol>
                  </details>
                </li>
                <li>Выделить нужное нам производственное задание (1)</li>
                <li>
                  Нажать кнопку
                  <span className="bold"> ЗАПАС ПО СКЛАДСКИМ МЕСТАМ </span>(2)
                </li>
                <li>
                  В окошке ниже<span className="bold"> выбрать место </span>(3),
                  которое указал мастер склада листа и нажать
                  <span className="bold"> К ПЛАНИРОВАНИЮ </span>
                  (4)
                </li>
                <li>
                  В окошке ниже написать в ячейку
                  <span className="bold"> план </span>(5) нужное количество и
                  <span className="bold"> СОХРАНИТЬ </span>(6)
                </li>
                <img src={planning} alt="..." />
              </ol>
            </details>
          </li>
        </ol>
      </div>
    </div>
  );
}
