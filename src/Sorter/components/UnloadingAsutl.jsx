import asutl from "../../assets/asutl.png";

export default function UnloadingAsutl() {
  return (
    <div id="unloading__asutl" className="article unloading__asutl">
      <p className="article__title">ВЫГРУЗКА ВАГОНОВ В ПРОГРАММЕ АСУ ТЛ</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Зайти в АСУТЛ &#8594; Функции (1) &#8594; Вагоны на путях
            предприятия &#8594; Найти и выбрать ПУТЬ 5 (2)
          </li>
          <li className="article__subtitle">
            В ячейке «номер вагона» вписать один номер полувагона/штрипса,
            который нам поставили (3)
          </li>
          <li className="article__subtitle">
            В окне ниже появятся вагоны &#8594; Надо выбрать все и нажать
            ВЫГРУЗКА ГРУЗА ИЗ ВАГОНОВ (4)
          </li>
          <li className="article__subtitle">
            В появившемся окне нажать{" "}
            <span className="bold">завершить операцию</span>
          </li>
          <img src={asutl} alt="..." />
        </ol>
      </div>
    </div>
  );
}
