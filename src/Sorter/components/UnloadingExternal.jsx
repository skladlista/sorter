import ExWarehouseReport from "../../assets/ExWarehouseReport.jpg";

export default function UnloadingExternal() {
  return (
    <div
      id="unloading__from-external"
      className="article unloading__from-external"
    >
      <p className="article__title">ПЕРЕМЕЩЕНИЕ С ВНЕШНЕГО СКЛАДА</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <p>Определить платформы, которые поставили под выгрузку</p>
            <ol type="a" className="sublist">
              <li>
                Зайти в САП в{" "}
                <span className="bold">ZPRIEM (ПЛАНИРОВАНИЕ ПРИЕМКИ ЛП)</span>
              </li>
              <li>
                Снять галочку с <span className="bold">ВХОДЯЩАЯ ПОСТАВКА</span>
              </li>
              <li>
                Нажать <span className="bold">Выполнить (F8)</span>
              </li>
              <li>Найти нужные платформы</li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>
              Поставить их на ворота. Выбрать вагон → Ворота → Вписать ворота
              (от HS01 до HS09)
            </p>
          </li>
          <li className="article__subtitle">
            <p>
              Назначить им место. Выбрать вагон → Поиск оптимальных мест → В
              окошке ниже выбрать место и нажать{" "}
              <span className="bold">К ПЛАНИРОВАНИЮ</span> → В окне ниже нажать{" "}
              <span className="bold">СОХРАНИТЬ</span>
            </p>
          </li>
          <li className="article__subtitle">
            <p>Переместить их по Excel</p>
            <ol type="a" className="sublist">
              <li>
                После того, как они будут распределены они появятся в левом
                верхнем окне и необходимо будет выделить их (
                <span className="bold">
                  ТОЛЬКО ТЕ, КОТОРЫЕ С ВНЕШНЕГО СКЛАДА
                </span>
                ) и нажать <span className="bold">ПОКАЗАТЬ ЗАПАС</span>
              </li>
              <li>
                Появится таблица и в ней надо найти колонку{" "}
                <span className="bold">ЕДИНИЦА ОБРАБОТКИ</span> и скопировать их
              </li>
              <li>Потом вставить их в черновик</li>
              <li>
                Скопировать из листа <span className="bold">СКЛАД ЛИСТА</span> с
                ячейки AB1 (ЕДИНИЦА ОБРАБОТКИ) и вставить над тем, что было
                скопировано в черновик
              </li>
              <li>
                Нажать Вкладку{" "}
                <span className="bold">ДАННЫЕ → Дополнительно</span>
              </li>
              <li>
                Стереть всё в ячейке{" "}
                <span className="bold">исходный диапазон</span>
              </li>
              <li>
                Выделить весь лист <span className="bold">СКЛАД ЛИСТА</span>{" "}
                (Для этого выбрать А1 и нажать Ctrl+A)
              </li>
              <li>
                Ячейку <span className="bold">Диапазон условий</span> выделить и
                после выбрать в черновике всю вставленную колонку
              </li>
              <li>
                Нажать <span className="bold">ОК</span>
              </li>
              <li>
                После сформирования проверить количество в черновике и
                количество на листе <span className="bold">СКЛАД ЛИСТА</span>
              </li>
              <li>
                На листе <span className="bold"> СКЛАД ЛИСТА</span> установить в
                колонке <span className="bold">СКЛАД</span>
                значение <span className="bold">3027</span> и очистить колонку{" "}
                <span className="bold">МЕСТО ХРАНЕНИЯ</span> и
                <span className="bold">УРОВЕНЬ</span>
              </li>
              <li>
                На листе <span className="bold">СКЛАД ЛИСТА</span> установить в
                колонке <span className="bold">ДАТА ПОСТУПЛЕНИЯ С ВС</span>{" "}
                значение в формате{" "}
                <span className="bold">
                  дата смены/буква смены (20.12.2021/А)
                </span>
              </li>
              <li>Удалить черновик</li>
              <li>Обновить формулы (SHIFT+F9)</li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>Добавить их в отчет по выгрузке</p>
            <ol type="a" className="sublist">
              <li>
                Открыть <span className="bold">ОТЧЕТ ПО ВЫГРУЗКЕ</span>
              </li>
              <li>
                Найти блок{" "}
                <span className="bold">
                  ПРИНЯТО ЛИСТОВОГО ПРОКАТА С ВНЕШНЕГО СКЛАДА
                  <img src={ExWarehouseReport} alt="..." />
                </span>
              </li>
              <li>
                Записать количество выгруженных листов в соответствующую смене
                (день или ночь) ячейку
              </li>
              <li>
                Записать количество разгруженных платформ в соответствующую
                смене (день или ночь) ячейку
              </li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>Добавить их в дневной отчёт</p>
            <ol type="a" className="sublist">
              <li>Написать о том, что это выгрузка листа с внешнего склада</li>
              <li>Указать смену (ДНЕВНАЯ или НОЧНАЯ)</li>
              <li>
                Открыть лист <span className="bold">СКЛАД ЛИСТА</span>
              </li>
              <li>Сбросить все фильтры</li>
              <li>
                Найти нужные листы (поставить фильтр в колонке{" "}
                <span className="bold">ДАТА ПОСТУПЛЕНИЯ С ВС</span>)
              </li>
              <li>
                Из найденных в <span className="bold">СКЛАДЕ ЛИСТА</span> листов
                определить, какие сортаменты приехали, посчитать их по
                отдельности и записать в
                <span className="bold"> ДНЕВНОЙ ОТЧЕТ</span> в формате:
                <br />
                (ширина * толщина – колво (поставщик))
                <br />
                Например: 2496х17 – 32 шт. (ПАО «ММК»)
              </li>
              <li>
                Написать <span className="bold">ИТОГО</span> и вписать в эту
                ячейку сколько в сумме было выгружено
                <br />
                (ИТОГО: 25шт.)
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
