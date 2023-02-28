import two_duplicates from "../../assets/two_duplicates.png";
import ctrlH from "../../assets/ctrlH.png";
import formulas_for_other_plavka from "../../assets/formulas_for_other_plavka.png";
import no_gap from "../../assets/no_gap.png";
import razvedchiki from "../../assets/razvedchiki.png";
import list_online from "../../assets/list_online.png";
import delete_totals from "../../assets/delete_totals.png";
import status_formulas from "../../assets/status_formulas.png";
import statuses from "../../assets/statuses.png";
import numTask from "../../assets/numTask.png";
import filter_report_cards from "../../assets/filter_report_cards.png";
import filter_report_date from "../../assets/filter_report_date.png";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import copy_lengths from "../../assets/copy_lengths.png";
import settings_options from "../../assets/settings_options.png";
import two_levels_to_sort from "../../assets/two_levels_to_sort.png";

export default function GetStatusesCards() {
  return (
    <div id="unloading__activate" className="article get_statuses_cars">
      <p className="article__title">ОПРЕДЕЛЕНИЕ СТАТУСА КАРТ</p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй div внизу */}
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Выгрузить список карт из SAP EWM в Excel</p>
              </summary>
              <ol className="sublist">
                <li>Найти их в мониторе любым удобным способом и скопировать в Excel</li>
                <li>Необходимые поля Место, Уровень, Номер карты, Плавка</li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Определить разноплавочные карты</p>
              </summary>
              <ol className="sublist">
                <li>Сделать два дубликата плавки</li>
                <img src={two_duplicates} alt="..." />
                <li>
                  Выделить одну колонку с плавкой → нажать Ctrl+H → В
                  появившемся окне в ячейке <span className="bold">Найти</span>{" "}
                  написать */ и нажать заменить все. Для другой колонки всё то
                  же самое, только в ячейке
                  <span className="bold"> Найти </span>
                  написать /*.
                </li>
                <img src={ctrlH} alt="..." />
                <li>
                  Создать новую колонку и в неё написать следующую формулу:
                  <br />
                  =ЕСЛИ( <span className="bold"> плавка №1 </span>={" "}
                  <span className="bold"> плавка №2</span>
                  ;"одноплавочная";"разноплавочная")
                </li>
                <img src={formulas_for_other_plavka} alt="..." />
                <li>
                  Скопировать данную формулу на всю таблицу. (нажать на ячейку →
                  Ctrl+C → выделить до самого низа → Ctrl+V)
                </li>
                <li>Обновить формулы на листе (Shift+F9)</li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Определить плавки «Разведчики»</p>
              </summary>
              <ol className="sublist">
                <li>Определить параметры карт</li>
                <li>
                  В 1С зайти в Отчеты: Испытания листового проката в трубе
                </li>
                <li>
                  Выставить параметры карт (ширина, стенка, марка стали, класс
                  прочности и т.д.)
                </li>
                <li>Задано выставить НЕ ЗАПОЛНЕНО, проведён выставить НЕТ</li>
                <img src={no_gap} alt="..." />
                <li>
                  Скопировать найденные плавки в Excel в черновик и найти их в
                  таблице с картами (для поиска используется Дополнительный
                  фильтр)
                </li>
                <li>
                  Создать новую колонку и отметить данные карты как разведчики
                </li>
                <img src={razvedchiki} alt="..." />
                <li>Сбросить фильтр и удалить черновик</li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Определить статус швов</p>
              </summary>
              <ol className="sublist">
                <li>
                  Открыть в 1С Отчёт: Лист на складе онлайн и выставить фильтр
                  КАРТА – ДА. Нажать сформировать
                </li>
                <img src={list_online} alt="..." />
                <li>
                  Появившуюся таблицу скопировать в 1С (Ctrl + A → Ctrl + C)
                </li>
                <li>Удалить сверху лишние строки и ИТОГО</li>
                <img src={delete_totals} alt="..." />
                <li>
                  В столбце <span className="bold">Статус ПК1 (карта)</span> и{" "}
                  <span className="bold">Статус ПК2 (карта)</span> статус ГОДНАЯ
                  очистить (по очереди отфильтровать в каждой колонке → Выделить
                  → Нажать кнопку <span className="bold">DELETE</span>)
                </li>
                <li>
                  Создать новую колонку в этой таблице и написать следующую
                  формулу: <br />
                  =ЕСЛИ( <span className="bold">Статус ПК №1</span>
                  &lt;&gt; <span className="bold">Статус ПК №2</span>; СЦЕПИТЬ(
                  <span className="bold">Статус ПК №1</span> ;{" "}
                  <span className="bold">Статус ПК №2</span> );{" "}
                  <span className="bold">Статус ПК №1</span>)
                </li>
                <img src={status_formulas} alt="..." />
                <li>
                  Скопировать данную формулу на всю таблицу. (нажать на ячейку →
                  Ctrl+C → выделить до самого низа → Ctrl+V.
                </li>
                <li>Обновить формулы на листе (Shift+F9)</li>
                <li>
                  По очереди фильтровать каждый статус в этой колонке и с
                  помощью дополнительного фильтра находить листы в нужной
                  таблице и прописывать статус.
                </li>
                <img src={statuses} alt="..." />
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Определить длину перереза у каждого шва по отдельности</p>
              </summary>
              <ol className="sublist">
                <li>
                  Отфильтровать все перерезы в таблице (зачистка/перерез,
                  ремонт/перерез и т.д. тоже учитываются)
                </li>
                <li>Выбрать одну карту и найти её в истории продукции</li>
                <li>Скопировать № задания карты</li>
                <img src={numTask} alt="..." />
                <li>Открыть Отчет: Сварка карты (качество)</li>
                <li>Во вкладке Фильтры вставить скопированное задание</li>
                <img src={filter_report_cards} alt="..." />
                <li>
                  Во вкладе Фильтр дата и время установить период на 6 месяцев
                  ранее
                </li>
                <img src={filter_report_date} alt="..." />
                <li>Полученную таблицу скопировать в черновик в Excel</li>
                <li>
                  Найти перерезы с помощью дополнительного фильтра в этой
                  таблице (это будут карты, которые были отфильтрованы ранее).
                  <ul>
                    <li>
                      Если количества не хватает, то необходимо заново
                      сформировать Отчет: Сварка карт (качество), установив
                      период еще более ранний и повторить поиск.{" "}
                    </li>
                    <li>
                      Если количества больше, то проверить на дубликаты и
                      удалить более ранние (смотреть по колонкам с датой). Дата
                      есть у первого и у второго шва.
                    </li>
                  </ul>
                  <li>
                    Отсортировать по возрастанию обе таблицы (Ctrl+A → Вкладка
                    Главная → Сортировка и Фильтр → Настраиваемая сортировка →
                    Выбрать столбец для сортировки НОМЕР КАРТЫ)
                  </li>
                  <li>
                    Сверить первый и последний номер из одной таблицы в другой
                    таблице (должны совпадать)
                  </li>
                  <li>
                    В таблице с отфильтрованными перерезами сделать значения без
                    фильтра (скопировать все отфильтрованные значения вниз →
                    Удалить отфильтрованные значения )<br />
                    <br />
                    <div>Шаг 1. Выделить все строки</div>
                    <img src={step1} alt="..." />
                    <div>Шаг 2. Выделить все строки</div>
                    <img src={step2} alt="..." />
                    <div>Шаг 3. Выделить все строки</div>
                    <img src={step3} alt="..." />
                  </li>
                  <li>Скопировать длины из одной таблицы в другую</li>
                  <img src={copy_lengths} alt="..." />
                </li>
                <li>Удалить черновик</li>
                <li>
                  Снять фильтры и отсортировать по возрастанию места и уровня
                  (Вкладка Главная → Сортировка и фильтр → Настраиваемая
                  сортировка)
                </li>
                <img src={settings_options} alt="..." />
                <li>
                  В появившемся окне создать два уровня сортировки (по месту и
                  по уровню)
                </li>
                <img src={two_levels_to_sort} alt="..." />
              </ol>
            </details>
          </li>
        </ol>
      </div>
    </div>
  );
}
