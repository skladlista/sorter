import dateZadacha from "../../assets/date-zadacha.jpg";
import sort from "../../assets/sort.jpg";
import sklad from "../../assets/sklad.jpg";

export default function CheckSsz(props) {
  return (
    <div id="ssz-check" className="article ssz-check">
      <p className="article__title">ПРОВЕРКА СМЕННО-СУТОЧНОГО ЗАДАНИЯ</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <p>
              Найти бумажное ПЗ и ПЗ в 1С и проверить соответствуют ли они друг
              другу
            </p>
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
          </li>

          <li className="article__subtitle">
            <p>Проверить наличие листов по ПЗ на внутреннем складе в SAP EWM</p>
            <ol className="article__list sublist">
              <li>Зайти в сап</li>
              <li>
                В монитор &#8594; Запас и место &#8594; Единица обработки
                &#8594; Удалить значения (CTRL+F1) &#8594; F8(часики)
              </li>
              <li>
                Найти нужные листы
                <ul>
                  <li>
                    Установить необходимые фильтры в расчетном диаметре, толщине
                    и классе прочности (Выделить колонку &#8594; Установить
                    фильтр)
                  </li>
                  <li>
                    Сгруппировать места (Выбрать колонку{" "}
                    <span className="bold">
                      МЕСТО &#8594; Промежуточные суммы)
                    </span>
                  </li>
                  <li>
                    Записать их места хранения (только те, у которых в начале{" "}
                    <span className="bold">SH-</span>)
                  </li>
                  <li>Уточнить откуда задавать у мастера</li>
                </ul>
              </li>
            </ol>
          </li>

          <li className="article__subtitle">
            <p>
              После нахождения листов по SAP EWM, надо проверить их статус (нажать ФИЗИЧЕСКИЙ ЗАПАС и снизу посмотреть колонку НАЗВАНИЕ ВИДА ЗАПАСА), потом надо найти их в Excel, а потом найти их в 1С и в 1С сверить, соответствуют ли параметры листов
              (ДИАМЕТР, ТОЛЩИНА, МАРКА СТАЛИ, КЛАСС ПРОЧНОСТИ, НД) ПЗ в 1С
            </p>
            <ol className="article__list sublist">
              <li>
                Для нахождения листов из САП в 1С, надо скопировать колонки
                НОМЕР ЛИСТА и ПЛАВКУ из САП и вставить в черновик в Excel. И с
                помощью <span className="bold">ДОПОЛНИТЕЛЬНОГО ФИЛЬТРА</span>{" "}
                найти данные листы в таблице СКЛАД ЛИСТА и скопировать их в
                черновик, чтобы можно было проверить их.
              </li>
              <li>
                Для нахождения листов из EXCEL в 1С надо зайти в 1С в Отчеты
                &#8594; Лист на складе онлайн &#8594; Выставить фильтры на
                ширину и толщину &#8594; Скопировать найденное в черновик в
                EXCEL &#8594; С помощью ДОПОЛНИТЕЛЬНОГО ФИЛЬТРА найти в данном
                черновике листы из предыдущего черновика (там, где листы,
                найденные из САП в EXCEL) &#8594; Скопировать найденное на новый
                черновик и удалить предыдущие два.
              </li>
              <li>
                Проверить параметры найденных листов (диаметр, ширина, марка
                стали, класс прочности, нд) с параметрами, указанными{" "}
                <span className="bold">ПЗ В 1С.</span>
              </li>
            </ol>
          </li>

          <li className="article__subtitle">
            <p>
              Если листов, соответствующих ПЗ в системе нет, то найти ПЗ и АКТ
              НА ПЕРЕАТТЕСТАЦИЮ (может быть указан с ССЗ, иначе искать по ширине
              и стенке в папке ПЗ НА ДОРАБОТКУ)
            </p>
            <ol className="article__list sublist">
              <li>
                ПЗ НА ПЕРЕАТТЕСТАЦИЮ в папке{" "}<br/>
                <span className="bold">
                  X:\Производственная дирекция\Производство\Производственные
                  задания\ПЗ на доработку\год
                </span>
              </li>
              <li>
                АКТ на ПЕРЕАТТЕСТАЦИЮ в папке{" "}<br/>
                <span className="bold">
                  X:\Производственная дирекция\Производство\Производственные
                  задания\Акты ПЕРЕАТТЕСТАЦИИ
                </span>
              </li>
              <li>
                Сверить найденный <span className="bold">АКТ</span> с <span className="bold">ПЗ в 1С</span>
              </li>
              <li>
                Если АКТ <span className="bold">НЕ СХОДИТСЯ</span> с ПЗ в 1С, то
                необходимо звонить в{" "}
                <span className="bold">ПРОИЗВОДСТВЕННЫЙ ОТДЕЛ</span> (Леунова
                Елена Валерьевна <span className="bold">1803</span>) и сообщать
                об этом
              </li>
              <li>
                Если акта на переаттестацию нет необходимо оповестить мастера
                склада листа, а при его отсутствии (например, в ночную смену)
                сотрудника ОТК и начальника смены
              </li>
              <li>
                <span className="bold">
                  Без АКТА НА ПЕРЕАТТЕСТАЦИЮ переаттестация и задача запрещена и производится
                  только после согласования с начальником ОТК или лицом,
                  исполняющим его обязанности
                </span>
              </li>
            </ol>
          </li>

          <li className="article__subtitle">
            <p>Переаттестация листов</p>
            <ol className="article__list sublist">
              <li>
                Найти листы на переаттестацию. Требования к ним указаны в{" "}
                <span className="bold">АКТЕ НА ПЕРЕАТТЕСТАЦИЮ</span>
              </li>
              <li>
                Сравнить найденные листы со списком листов для переаттестации. В
                папке{" "}
                <span className="bold">
                  X:\Производственная дирекция\Производство\Производственные
                  задания\ПЗ на доработку\год
                </span>{" "}
                будет EXCEL файл со списком. Этот список также есть в
                <span className="bold">АКТЕ НА ПЕРЕАТТЕСТАЦИЮ</span>
                <br />
                Также может быть такая ситуация, что в списке к{" "}
                <span className="bold">ПЗ на ПЕРЕАТТЕСТАЦИЮ</span> не будет всех
                листов (тех, которые недавно приехали), их можно будет
                переаттестовать только если в{" "}
                <span className="bold">ПЗ на ПЕРЕАТТЕСТАЦИЮ</span> указано
                +ПОДХОД. Такие листы можно будет переаттестовать, только
                придется написать письмо на расширение АКТА ПЕРЕАТТЕСТАЦИИ.
                Письмо надо писать на ПИВОВАРОВУ, ПУЧЕНКИНУ и ПОРОШКОВУ. Также в
                копию мастеров склада листа (АНШМИДТ, БЕЗРУКОВ)
                <br />
                Такие листы надо искать самому в 1С по параметрам{" "}
                <span className="bold">
                  ширина, стенка, класс прочности, марка стали ДО
                  переаттестации.
                </span>
              </li>
              <li>
                <p>C помощью ДОПОЛНИТЕЛЬНОГО ФИЛЬТРА найти эти листы в Excel</p>
                <ol className="sublist">
                  <li>
                    Скопировать сформированные листы от колонки{" "}
                    <span className="bold">НОМЕР ПЛАВКИ</span> до колонки{" "}
                    <span className="bold">НОМЕР ЛИСТА ПОСТАВЩИКА</span> в
                    черновик
                  </li>
                  <li>
                    Скопировать с листа СКЛАД ЛИСТА в черновик соответствующие
                    названия заголовков
                  </li>
                  <li>
                    Нажать Вкладку{" "}
                    <span className="bold">ДАННЫЕ &#8594; Дополнительно</span>
                  </li>
                  <li>
                    Ячейку <span className="bold">Исходные диапазон</span>{" "}
                    стереть и выделить весь склад
                  </li>
                  <li>
                    Ячейку <span className="bold">Диапазон условий</span>{" "}
                    выделить и после выбрать в черновике от колонки{" "}
                    <span className="bold">плавка</span> до колонки{" "}
                    <span className="bold">Номер листа поставщика</span>
                    (вместе с заголовками)
                  </li>
                  <li>
                    Нажать <span className="bold">ОК</span>
                  </li>
                  <li>
                    После сформирования проверить количество в черновике и
                    количество на листе{" "}
                    <span className="bold">СКЛАД ЛИСТА</span>
                  </li>
                  <li>Удалить черновик</li>
                  <li>
                    Выделить всё найденное на листе{" "}
                    <span className="bold">СКЛАД ЛИСТА</span> (для этого
                    выделить А1 и нажать (CTRL+A) и скопировать в черновик
                  </li>
                </ol>
              </li>
              <li>
                Убедиться в том, что они соответствуют необходимым нам
                параметрам
                <ul className={"sublist"}>
                  <li>Ширине</li>
                  <li>Толщине</li>
                  <li>Классу прочности/Марке стали</li>
                  <li>НД</li>
                </ul>
              </li>
              <li>
                Открыть в 1С &#8594; Документы &#8594; Изменение размеров листа
                &#8594; Создать
              </li>
              <li>
                Можно вставлять по одному листу через кнопку{" "}
                <span className="bold">
                  ДОБАВИТЬ &#8594; Вписать номер листа и плавку &#8594;{" "}
                </span>{" "}
                В блоке <span className="bold">«СТАЛО»</span> записать те
                параметры, которые надо изменить в соответствии с{" "}
                <span className="bold">ПРОИЗВОДСТВЕННЫМ ЗАДАНИЕМ</span> в 1С
              </li>
              <li>
                Или можно вставить сразу несколько листов, нажав кнопку{" "}
                <span className="bold">ДОБАВИТЬ ИЗ ТАБ. ДОКУМЕНТА</span>
              </li>
              <li>
                Вставить необходимые параметры в открывшуюся таблицу &#8594;
                нажать <span className="bold">ДАЛЕЕ</span> &#8594; нажать{" "}
                <span className="bold">ПРОВЕСТИ И ЗАКРЫТЬ</span>
              </li>
            </ol>
          </li>

          <li className="article__subtitle">
            <p>Сделать задание на задачу в SAP EWM</p>
            <ol className="article__list sublist ">
              <li className="article__sublist ">Зайти в САП</li>
              <li className="article__sublist ">
                Перейти в{" "}
                <span className="bold">
                  Планирование производства &#8594; Выполнить (F8)
                </span>
              </li>
              <li>
                Найти нужное задание в колонке{" "}
                <span className="bold">Заказ/Произв</span> (в ССЗ есть его
                номер)
              </li>
              <li>Выделить найденное</li>
              <li>
                Нажать кнопку{" "}
                <span className="bold">ЗАПАС ПО СКЛАДСКИМ МЕСТАМ</span>
              </li>
              <li>
                В окошке ниже выбрать место, которое указал мастер склада листа
                и нажать <span className="bold">К ПЛАНИРОВАНИЮ</span>
              </li>
              <li>
                В окошке ниже написать в ячейку{" "}
                <span className="bold">ПЛАН</span> нужное количество и сохранить
              </li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>
              В конце в 19:00/7:00 смены добавить задачу из 1С в Excel и в
              дневной отчёт
            </p>
            <ol className="article__list sublist">
              <li className="article__sublist ">
                Сбросить фильтр в <span className="bold">СКЛАДЕ ЛИСТА</span>
              </li>
              <li>
                Найти последний <span className="bold">номер листа ТЭСЦ</span> в{" "}
                <span className="bold">СКЛАДЕ ЛИСТА</span>
              </li>
              <li>
                Отфильтровать в колонке{" "}
                <span className="bold">ДАТА ЗАДАЧИ</span> самую последнюю дату
              </li>
              <li>
                Установить фильтр от А до Я в колонке{" "}
                <span className="bold">№ листа ТЭСЦ</span>
              </li>
              <li>
                В 1С в{" "}
                <span className="bold">Отчеты &#8594; История продукции</span>{" "}
                написать в ячейку <span className="bold">НОМЕР ЛИСТА</span>{" "}
                следующий по порядку
              </li>
              <li>Провалится в документ задачи листа и скопировать дату</li>
              <li>
                Открыть{" "}
                <span className="bold">
                  Отчеты &#8594; Сводная таблица по складу листа и задаче листа
                  (расширенная)
                </span>
              </li>
              <li>Нажать кнопку сбросить</li>
              <li>
                Нажать отбор и записать скопированную дату в ячейку Дата
                задачи/Дата списания
                <img src={dateZadacha} alt="..." />
              </li>
              <li>
                В ячейке <span className="bold">НОМЕР ЛИСТА</span> установить <span className="bold">ЗАПОЛНЕНО</span>
              </li>
              <li>Нажать завершить и потом нажать сформировать</li>
              <li>
                Скопировать сформированные листы от колонки{" "}
                <span className="bold">НОМЕР ПЛАВКИ</span> до колонки
                <span className="bold"> НОМЕР ЗАДАНИЯ</span>
              </li>
              <li>Вставить в черновик</li>
              <li>
                Скопировать с листа <span className="bold">СКЛАД ЛИСТА</span>{" "}
                ячейки от К1 до L1 (номер плавки и номер листа поставщика) в
                черновить в соответствующие поля
              </li>
              <li>
                Нажать Вкладку{" "}
                <span className="bold">ДАННЫЕ &#8594; Дополнительно</span>
              </li>
              <li>
                Ячейку <span className="bold">Исходный диапазон</span> стереть и
                выделить весь склад
              </li>
              <li>
                Ячейку <span className="bold">Диапазон условий</span> выделить и
                после выбрать в черновике от колонки{" "}
                <span className="bold">плавка</span> до колонки{" "}
                <span className="bold">Номер листа поставщика</span>
              </li>
              <li>
                Нажать <span className="bold">OK</span>
              </li>
              <li>
                После сформирования проверить количество в черновике и
                количество на листе <span className="bold">СКЛАД ЛИСТА</span>
              </li>
              <li>
                Выделить всё найденное на листе{" "}
                <span className="bold">СКЛАД ЛИСТА</span> (для этого выделить А1
                и нажать (CTRL+A)
              </li>
              <li>
                Выбрать вкладку{" "}
                <span className="bold">
                  ГЛАВНАЯ &#8594; Сортировка и фильтр &#8594; Настраиваемая
                  сортировка
                </span>
              </li>
              <li>
                Добавить две позиции первая <span className="bold">ПЛАВКА</span>{" "}
                и вторая <span className="bold">№ листа поставщика</span>
                <img src={sort} alt="..." />
              </li>
              <li>
                Выделить всё на черновике (для этого выделить А1 и нажать
                (CTRL+A)
              </li>
              <li>
                Выбрать вкладку{" "}
                <span className="bold">
                  ГЛАВНАЯ &#8594; Сортировка и фильтр &#8594; Настраиваемая
                  сортировка
                </span>
              </li>
              <li>
                Добавить две позиции первая <span className="bold">ПЛАВКА</span>{" "}
                и вторая <span className="bold">№ листа поставщика</span>
                <img src={sort} alt="..." />
              </li>
              <li>
                Скопировать все <span className="bold">СТРОКИ</span>, которые
                были найдены на листе{" "}
                <span className="bold">
                  СКЛАД ЛИСТА, кроме самой верхней строки с названиями колонок
                </span>
              </li>
              <li>
                Вставить их в самый низ листа{" "}
                <span className="bold">СКЛАД ЛИСТА</span>, отступив одну строку
                <img src={sklad} alt="..." />
              </li>
              <li>
                Удалить верхнюю часть в{" "}
                <span className="bold">
                  СКЛАДЕ ЛИСТА (найденные с помощью фильтра листы) и пустую
                  строку тоже
                </span>
              </li>
              <li>
                Скопировать колонку{" "}
                <span className="bold">номер листа ТЭСЦ</span> в черновике и
                вставить в колонку
                <span className="bold"> номер листа ТЭСЦ</span> на листе{" "}
                <span className="bold">CКЛАД ЛИСТА</span>
              </li>
              <li>
                Скопировать колонку{" "}
                <span className="bold">ПРОИЗВОДСТВЕННОЕ ЗАДАНИЕ</span> в
                черновике и вставить в колонку{" "}
                <span className="bold">ПРОИЗВОДСТВЕННОЕ ЗАДАНИЕ</span> на листе
                <span className="bold"> CКЛАД ЛИСТА</span>
              </li>
              <li>
                На листе <span className="bold">СКЛАД ЛИСТА</span> у этих листов
                очистить колонки{" "}
                <span className="bold">СКЛАД, МЕСТО ХРАНЕНИЯ</span>
              </li>
              <li>
                Заполнить колонку{" "}
                <span className="bold">ДАТА ЗАДАЧИ (дата текущей смены)</span>
              </li>
              <li>
                Указать смену (<span className="bold">1</span> или{" "}
                <span className="bold">2</span>) в колонке{" "}
                <span className="bold">СМЕНА</span>
              </li>
              <li>Включить фильтр</li>
              <li>Удалить черновик</li>
              <li>Обновить формулы (SHIFT+F9)</li>
              <li>Добавить задачу в ДНЕВНОЙ ОТЧЕТ</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
