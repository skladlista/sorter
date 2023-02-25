import zpriem from "../../assets/zpriem.png";
import many_variants from "../../assets/many_variants.png";
import { Link } from "react-router-dom";

export default function Unloading() {
  return (
    <div id="unloading" className="article unloading">
      <p className="article__title">ВЫГРУЗКА ОТ ПОСТАВЩИКА</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Назначить вагоны на ворота</p>
              </summary>
              <ol className="article__list sublist">
                <li>Открыть САП и зайти в ZPRIEM (ПЛАНИРОВАНИЕ ПРИЕМКИ ЛП)</li>
                <img src={zpriem} alt=""/>
                <li>
                  Ввести номера вагонов через «множественный выбор» <span><img src={many_variants} alt=""/></span>→ убрать √ «завершена» → Нажать часики(F8)
                  <span className="bold"> Нажать Выполнить (F8)</span>
                </li>

                <li>
                  <details>
                    <summary>
                      <p>Если вагоны не найдены</p>
                    </summary>
                    <ol className="sublist">
                      <li>Проставить дату создания поставки на месяц назад</li>
                      <li>
                        <details>
                          <summary>
                            <p>
                              Если после изменения даты вагоны не найдены, то
                            </p>
                          </summary>
                          <ol>
                            <li>
                              Спросить у оператора SAP проведён ли 107 вид
                              движения на данные вагоны
                            </li>
                            <li>
                              Если да → звонить Алёшину (1906), чтобы
                              распределил вагоны
                            </li>
                            <li>
                              Если нет → нужно провести 107, потом звоним
                              Алёшину (1906), чтобы распределил вагоны
                            </li>
                          </ol>
                        </details>
                      </li>
                    </ol>
                  </details>
                </li>

                <li>
                  Поставить их на ворота. Выбрать строку с вагоном → Ворота → Вписать
                  ворота (от HS01 до HS09)
                </li>
                <li>
                  <details>
                    <summary>
                      <p>
                        Скачать или найти в сканах сертификаты на необходимые
                        вагоны
                      </p>
                    </summary>
                    <ol className="sublist">
                      <li>
                        Узнать поставщика (Выбрать вагон → Позиции → Там будет
                        колонка <span className="bold">ПОСТАВЩИК</span>
                      </li>
                      <li>
                        <details>
                          <summary>
                            <p>Если поставщик ММК то:</p>
                          </summary>
                          <ol>
                            <div>
                              зайти на сайт ММК → Вход на ЭТП → СБТ → Сертификат
                              → Номер вагона → Перейти → Ссылка в углу →
                              Сохранить в папку:
                              <br />
                              <span className="bold">
                                X:\MES\ТЭСЦ\Склад листа\Сертификаты и ведомости
                                приёма\ГОД\Текущий месяц\Текущий день\Смена
                                (ДЕНЬ или НОЧЬ)
                              </span>
                            </div>
                          </ol>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary>
                            <p>Если поставщик не ММК то:</p>
                          </summary>
                          <ol>
                            <div>
                              искать сертификаты в папке{" "}
                              <span className="bold">
                                X:\MES\ТЭСЦ\Склад листа\Сертификаты и ведомости
                                приёма\Сканы сертификатов\текущий год\текущий
                                месяц
                              </span>{" "}
                              и тут в поисковике вписать номер вагона (он должен
                              быть на несколько дней раньше отсканирован)
                              <br/>
                              <br/>
                              Сохранить в папку:
                              <br/>
                              X:\MES\ТЭСЦ\Склад листа\Сертификаты и ведомости приёма\ГОД\Текущий месяц\Текущий день\Смена (ДЕНЬ или НОЧЬ)
                            </div>
                          </ol>
                        </details>
                      </li>
                      <li>
                        Если там его тоже нет, то надо спросить у{" "}
                        <span className="bold">ОПЕРАТОРА САП</span>
                      </li>
                    </ol>
                  </details>
                </li>
                <li>Спросить место выгрузки у мастера</li>
                <li>
                  <details>
                    <summary>
                      <p>Назначить место для выгрузки</p>
                    </summary>
                    <ol className="sublist">
                      <li>
                        Выделить вагон → Поиск оптимальных мест → Ниже в окне
                        выделить место → К планированию → В окне ниже нажать{" "}
                        <span className="bold">СОХРАНИТЬ МОДЕЛИРОВАНИЕ</span>
                      </li>
                    </ol>
                  </details>
                </li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>
                  Проверить и исправить (если они будут) несоответствия
                  сертификату в 1С для каждого вагона по очереди
                </p>
              </summary>
              <ol className="sublist">
                <li>
                  1С → Отчеты → Дополнительные обработки → Выполнить → Вписать
                  номер вагона и дату своей смены → Сформировать
                </li>
                <li>
                  Вписать дату сертификата → Проверить соответствие данных в сертификате с данными в 1С →
                  Нажать кнопку <span className="bold">ИЗМЕНИТЬ</span>
                </li>
                <li>
                  Скопировать из 1С в Excel в СКЛАД ЛИСТА все колонки → Выделить
                  нужные строки → Перейти на вкладку ПРИЕМКА → Приёмка из 1С
                  (групповое изменение поступление листа)
                </li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Добавить в отчет по выгрузке</p>
              </summary>
              <ol className="sublist">
                <li>
                  Выделить нужные строки → Перейти на вкладку{" "}
                  <span className="bold">ПРИЕМКА</span> → Создать Отчёт по
                  выгрузке → Скопировать полученные данные в{" "}
                  <span className="bold">ОТЧЕТ ПО ВЫГРУЗКЕ</span>. Черновик
                  удалить.
                </li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Добавить в дневной отчет</p>
              </summary>
              <ol className="sublist">
                <li>
                  Выделить нужные строки → Перейти на вкладку{" "}
                  <span className="bold">ПРИЕМКА</span> → Создать Дневной отчёт
                  по выгрузке → Скопировать полученные данные в{" "}
                  <span className="bold">ДНЕВНОЙ ОТЧЕТ</span>. Черновик удалить.
                </li>
              </ol>
            </details>
          </li>
        </ol>
      </div>
    </div>
  );
}
