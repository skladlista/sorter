import dateZadacha from "../../assets/date-zadacha.jpg";
import sort from "../../assets/sort.jpg";

export default function ProductionSheet() {
  return (
    <div id="production__sheet" className="article ssz-check">
      <p className="article__title">ДОБАВЛЕНИЕ ЗАДАЧИ ЛИСТА ИЗ 1С В EXCEL</p>
      <div className="article__div">
        <ol>
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
                В ячейке <span className="bold">НОМЕР ЛИСТА</span> установить{" "}
                <span className="bold">ЗАПОЛНЕНО</span>
              </li>
              <li>Нажать завершить и потом нажать сформировать</li>
              <li>
                Скопировать из сформированной в 1С таблицы колонки <span className="bold">ПАРТИЮ SAP, НОМЕР ПЛАВКИ,
                НОМЕР ЛИСТА ПОСТАВЩИКА, НОМЕР ЛИСТА ТЭСЦ, НОМЕР ЗАДАНИЯ</span>
              </li>
              <li>Вставить в черновик</li>
              <li>
                Скопировать с листа <span className="bold">СКЛАД ЛИСТА</span>{" "}
                заголовки (партию sap, номер плавки и номер листа поставщика) в
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
                Ячейку <span className="bold">Диапазон условий</span> выбрать и
                выделить в черновике колонки <span className="bold">ПАРТИЯ SAP, НОМЕР ПЛАВКИ, НОМЕР ЛИСТА ПОСТАВЩИКА </span>
                → Нажать <span className="bold">OK</span>
              </li>
              <li>
                После сформирования проверить количество в черновике и
                количество на листе <span className="bold">СКЛАД ЛИСТА</span>
              </li>
              <li>
                Выделить всё найденное на листе{" "}
                <span className="bold">СКЛАД ЛИСТА</span> (для этого выделить заголовок
                и нажать CTRL+A
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
                Выделить всё на черновике (для этого выделить заголовок и нажать
                CTRL+A
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
                Перейти на вкладку <span className="bold">ПРИЕМКА</span> →
                Вставить в видимые.
              </li>
              <li>
                Выделить <span className="bold">номер листа ТЭСЦ</span> в
                черновике и потом <span className="bold">номер листа ТЭСЦ</span>{" "}
                в СКЛАДЕ ЛИСТА
              </li>
              <li>
                Таким же образом с помощью кнопки{" "}
                <span className="bold">Вставить в видимые</span> скопировать из
                черновика <span className="bold">ПРОИЗВОДСТВЕННОЕ ЗАДАНИЕ</span>
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
              <li>Обновить формулы в отчете (SHIFT+F9)</li>
              <li>
                Добавить задачу в ДНЕВНОЙ ОТЧЕТ. Для этого выделить нужные листы
                и перейти на вкладку ПРИЕМКА → Отчет по задаче → Скопировать
                полученные данные в <span>Дневной отчет</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
