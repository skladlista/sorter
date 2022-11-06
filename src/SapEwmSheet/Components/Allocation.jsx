export default function Allocation(props) {
  return (
    <div id="allocation" className="article allocation">
      <p className="article__title">Распределение вагонов в SAP ERP</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Транзакция VL06I – для распределения
          </li>
          <li className="article__subtitle">
            Транзакция ZMM_LGORT – для назначения поставкам склада выгрузки
          </li>
        </ol>
      </div>
    </div>
  );
}
