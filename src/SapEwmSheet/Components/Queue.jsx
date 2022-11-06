export default function SapEwmSheet(props) {
  return (
    <div id="queue" className="article queue">
      <p className="article__title">
        Просмотр очередей застрявших листов или труб
      </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">Транзакция SMQ1</li>
          <li className="article__subtitle">Транзакция SMQ2</li>
        </ol>
      </div>
    </div>
  );
}
