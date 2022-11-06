export default function MoveSheets(props) {
  return (
    <div id="move-sheets" className="article move-sheets">
      <p className="article__title">
        Переместить выбранные листы (ЕО) массово в другое место
      </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">Транзакция /SCWM/ADHU</li>
          <li className="article__subtitle">Находишь ЕО</li>
          <li className="article__subtitle">
            Выбираешь принимаемое складское место и вид процесса 9999
            (администр. склада) и галочку подтверждение через кнопку групповое
            изменение → Сохранить
          </li>
        </ol>
      </div>
    </div>
  );
}
