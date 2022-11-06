export default function AdaptationSheet(props) {
  return (
    <div id="adaptation-sheet" className="article adaptation-sheet">
      <p className="article__title">Адаптация одного листа (отклонение)</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Если во входящей поставке в ERP некоторые листы были сторнированы
            (108 в.д.), то надо в EWM их отклонить до поставки на ворота (109
            в.д.)
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
