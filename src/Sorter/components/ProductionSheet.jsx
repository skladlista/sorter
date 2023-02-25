import dateZadacha from "../../assets/date-zadacha.jpg";
import sort from "../../assets/sort.jpg";
import production from "../../assets/Production.png";

export default function ProductionSheet() {
  return (
    <div id="production__sheet" className="article ssz-check">
      <p className="article__title">ДОБАВЛЕНИЕ ЗАДАЧИ ЛИСТА ИЗ 1С В EXCEL</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Сбросить фильтр в <span className="bold">СКЛАДЕ ЛИСТА</span>
          </li>
          <li className="article__subtitle">
            Найти последний <span className="bold">номер листа ТЭСЦ</span> в{" "}
            <span className="bold">СКЛАДЕ ЛИСТА</span>
          </li>
          <li className="article__subtitle">
            Установить фильтр от А до Я в колонке{" "}
            <span className="bold">№ листа ТЭСЦ</span>
          </li>
          <li className="article__subtitle">
            Установить курсор на любом <span className="bold">№ листа ТЭСЦ</span> и нажать <span className="bold">Ctrl + ↓</span>
          </li>
          <li className="article__subtitle">
            В 1С в{" "}
            <span className="bold">Отчеты &#8594; История продукции</span>{" "}
            написать в ячейку <span className="bold">НОМЕР ЛИСТА</span>{" "}
            следующий по порядку
          </li>
          <li className="article__subtitle">
            Провалится в документ задачи листа и скопировать дату
            <img src={production} alt="..." />
          </li>
          <li className="article__subtitle">
            Открыть{" "}
            <span className="bold">
              Отчеты &#8594; Сводная таблица по складу листа и задаче листа
              (расширенная)
            </span>
          </li>
          <li className="article__subtitle">Нажать кнопку сбросить</li>
          <li className="article__subtitle">
            Нажать отбор и записать скопированную дату в ячейку Дата задачи/Дата
            списания
            <br/>
            В ячейке <span className="bold">НОМЕР ЛИСТА</span> установить{" "}
            <span className="bold">ЗАПОЛНЕНО</span>

            <img src={dateZadacha} alt="..." />
          </li>
          <li className="article__subtitle">
            В ячейке <span className="bold">НОМЕР ЛИСТА</span> установить{" "}
            <span className="bold">ЗАПОЛНЕНО</span>
          </li>
          <li className="article__subtitle">
            Нажать завершить и потом нажать сформировать
          </li>
          <li className="article__subtitle">
            Скопировать из сформированной в 1С таблицы колонки{" "}
            <span className="bold">
              ПАРТИЮ SAP, НОМЕР ПЛАВКИ, НОМЕР ЛИСТА ПОСТАВЩИКА, НОМЕР ЛИСТА
              ТЭСЦ, НОМЕР ЗАДАНИЯ
            </span>
          </li>
          <li className="article__subtitle">Вставить в черновик</li>
          <li className="article__subtitle">
            Скопировать с листа <span className="bold">СКЛАД ЛИСТА</span>{" "}
            заголовки (партию sap, номер плавки и номер листа поставщика) в
            черновить в соответствующие поля
          </li>
          <li className="article__subtitle">
            Нажать Вкладку{" "}
            <span className="bold">ДАННЫЕ &#8594; Дополнительно</span>
          </li>
          <li className="article__subtitle">
            Ячейку <span className="bold">Исходный диапазон</span> стереть и
            выделить весь склад
          </li>
          <li className="article__subtitle">
            Ячейку <span className="bold">Диапазон условий</span> выбрать и
            выделить в черновике колонки{" "}
            <span className="bold">
              ПАРТИЯ SAP, НОМЕР ПЛАВКИ, НОМЕР ЛИСТА ПОСТАВЩИКА{" "}
            </span>
            → Нажать <span className="bold">OK</span>
          </li>
          <li className="article__subtitle">
            После сформирования проверить количество в черновике и количество на
            листе <span className="bold">СКЛАД ЛИСТА</span>
          </li>
          <li className="article__subtitle">
            Выделить всё найденное на листе{" "}
            <span className="bold">СКЛАД ЛИСТА</span> (для этого выделить
            заголовок и нажать CTRL+A
          </li>
          <li className="article__subtitle">
            Выбрать вкладку{" "}
            <span className="bold">
              ГЛАВНАЯ &#8594; Сортировка и фильтр &#8594; Настраиваемая
              сортировка
            </span>
          </li>
          <li className="article__subtitle">
            Добавить две позиции первая <span className="bold">ПЛАВКА</span> и
            вторая <span className="bold">№ листа поставщика</span>
            <img src={sort} alt="..." />
          </li>

          <li className="article__subtitle">
            Выделить всё на черновике (для этого выделить заголовок и нажать
            CTRL+A
          </li>
          <li className="article__subtitle">
            Выбрать вкладку{" "}
            <span className="bold">
              ГЛАВНАЯ &#8594; Сортировка и фильтр &#8594; Настраиваемая
              сортировка
            </span>
          </li>
          <li className="article__subtitle">
            Добавить две позиции первая <span className="bold">ПЛАВКА</span> и
            вторая <span className="bold">№ листа поставщика</span>
            <img src={sort} alt="..." />
          </li>

          <li className="article__subtitle">
            Проверить на соответствие по партии SAP, чтобы верхний и нижний номер партии SAP в складе листа соответственно совпадали с верхним и нижним номерами в черновике
          </li>

          <li className="article__subtitle">
            Перейти на вкладку <span className="bold">ПРИЕМКА</span> → Вставить
            в видимые.
          </li>
          <li className="article__subtitle">
            Выделить снизу вверх <span className="bold">номер листа ТЭСЦ</span> в черновике
            и потом <span className="bold">номер листа ТЭСЦ</span> в СКЛАДЕ
            ЛИСТА
          </li>
          <li className="article__subtitle">
            Таким же образом с помощью кнопки{" "}
            <span className="bold">Вставить в видимые</span> скопировать из
            черновика <span className="bold">ПРОИЗВОДСТВЕННОЕ ЗАДАНИЕ</span>
          </li>
          <li className="article__subtitle">
            На листе <span className="bold">СКЛАД ЛИСТА</span> у этих листов
            очистить колонки <span className="bold">СКЛАД, МЕСТО ХРАНЕНИЯ</span>
          </li>
          <li className="article__subtitle">
            Заполнить колонку{" "}
            <span className="bold">ДАТА ЗАДАЧИ (дата текущей смены)</span>
          </li>
          <li className="article__subtitle">
            Указать смену (<span className="bold">1</span> или{" "}
            <span className="bold">2</span>) в колонке{" "}
            <span className="bold">СМЕНА</span>
          </li>
          <li className="article__subtitle">Включить фильтр</li>
          <li className="article__subtitle">Удалить черновик</li>
          <li className="article__subtitle">
            Обновить формулы в отчете (SHIFT+F9)
          </li>
          <li className="article__subtitle">
            Добавить задачу в ДНЕВНОЙ ОТЧЕТ. Для этого выделить нужные листы и
            перейти на вкладку ПРИЕМКА → Отчет по задаче → Скопировать
            полученные данные в <span>Дневной отчет</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
