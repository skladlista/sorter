import rpack from "../../assets/rpack.jpg";

export default function ZadachaPack(props) {
  return (
    <div id="zadacha-pack" className="article zadacha-pack">
      <p className="article__title">Задача листа в карман с помощью PACK</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Найти ЕО в PACК (рабочее место <span className="bold">RPACK</span>)
          </li>
          <li className="article__subtitle">Выбрать ЕО слева (именно ЕО)</li>
          <li className="article__subtitle">Выбрать Подр.2</li>
          <li className="article__subtitle">Добавить там строку для ССЗ</li>
          <li className="article__subtitle">
            Справа поставить номер задания из EWM (ZPLP), вид идентификации P и
            сохранить
          </li>
          <li className="article__subtitle">
            <img src={rpack} alt="" />
          </li>
          <li className="article__subtitle">
            Переместить данный ЕО в карман через ADHU
          </li>
          <li className="article__subtitle">
            Задать по 1С (распровести и потом провести с этим листом в начале,
            чтобы он оказался около валковой)
          </li>
        </ol>
      </div>
    </div>
  );
}
