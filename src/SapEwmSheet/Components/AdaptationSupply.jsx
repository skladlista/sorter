export default function AdaptationSupply(props) {
  return (
    <div id="adaptation-supply" className="article adaptation-supply">
      <p className="article__title">Адаптация входящей поставки (отклонение)</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Делать только если будет создаваться новая входящая в ERP
          </li>
          <li className="article__subtitle">
            Если сделать адаптацию, то с данной входящей нельзя будет
            взаимодействовать
          </li>
          <li className="article__subtitle">
            Зайти во Входящую поставку → выделить ЕО внизу → Коды процесса →
            Адаптировать Объем поставки → Отклонить входящую поставку
          </li>
        </ol>
      </div>
    </div>
  );
}
