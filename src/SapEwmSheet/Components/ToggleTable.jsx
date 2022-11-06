export default function ToggleTable(props) {
  return (
    <div id="toggle-table" className="article toggle-table">
      <p className="article__title">Переключение планшета на трубы/листы</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <p>Транзакция RSRC</p>
            <ol className="article__list">
              <li>MIG – для листа</li>
              <li>C72 – для трубы</li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>Транзакция USER</p>
            <ol className="article__list">
              <li>P1 – труба</li>
              <li>S1 – лист</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
