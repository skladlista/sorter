import ZPLP from "../../assets/ZPLP.png";
import planning from "../../assets/planning.png";

export default function CreateWorkProduction() {
    return (
        <div id="ssz-check" className="article create_work_production">
            <p className="article__title">СОЗДАНИЕ ЗАДАНИЯ НА ЗАДАЧУ В SAP EWM</p>
            <div className="article__div">
                <ol>
                    <li className="article__subtitle ">Зайти в САП</li>
                    <li className="article__subtitle ">
                        Перейти в{" "}
                        <span className="bold">
                    Планирование производства &#8594; Выполнить (F8)
                  </span>
                    </li>
                    <img src={ZPLP} alt="..."/>
                    <li className="article__subtitle ">
                        Найти нужное задание в колонке
                        <span className="bold"> Заказ/Произв</span> (в ССЗ есть его
                        номер)
                    </li>
                    <li className="article__subtitle ">
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
                    <li className="article__subtitle ">Выделить нужное нам производственное задание (1)</li>
                    <li className="article__subtitle ">
                        Нажать кнопку
                        <span className="bold"> ЗАПАС ПО СКЛАДСКИМ МЕСТАМ </span>(2)
                    </li>
                    <li className="article__subtitle ">
                        В окошке ниже<span className="bold"> выбрать место </span>(3),
                        которое указал мастер склада листа и нажать
                        <span className="bold"> К ПЛАНИРОВАНИЮ </span>
                        (4)
                    </li>
                    <li className="article__subtitle ">
                        В окошке ниже написать в ячейку
                        <span className="bold"> план </span>(5) нужное количество и
                        <span className="bold"> СОХРАНИТЬ </span>(6)
                    </li>
                    <img src={planning} alt="..."/>
                </ol>
            </div>
        </div>
    );
}
