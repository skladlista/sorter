export default function MoveSheets() {
    return (
        <div id="unloading__move-sheets" className="article unloading__move-sheets">
            <p className="article__title">
                ПЕРЕМЕЩЕНИЕ ЛИСТОВ ИЗ ОДНОГО МЕСТА В ДРУГОЕ С СОБЛЮДЕНИЕМ УРОВНЯ
            </p>
            <div className="article__div">
                <ol>
                    <li className="article__subtitle">
                        В SAP EWM → ВХОД В СРЕДУ RF
                    </li>
                    <li className="article__subtitle">
                        Выбрать внутренний склад → Разгрузка
                        и перемещение
                    </li>
                    <li className="article__subtitle">
                        Массово переместить ЛП между ячейками
                    </li>
                    <li className="article__subtitle">
                        Вписать
                        место ОТКУДА переместить → Записать кол-во листов
                    </li>
                    <li className="article__subtitle">
                        Вписать место
                        КУДА переместить → Нажать кнопку ВСЕ, чтобы переместить листы в
                        том, же порядке
                    </li>
                </ol>
            </div>
        </div>
    );
}
