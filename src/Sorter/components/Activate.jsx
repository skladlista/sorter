export default function Activate() {
  return (
    <div id="unloading__activate" className="article unloading__activate">
      <p className="article__title">АКТИВАЦИЯ ЗАДАНИЯ НА ПРОИЗВОДСТВО</p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй div внизу */}
          <li className="article__subtitle">
            <p>
              В определенный момент, когда предыдущее задание завершиться и в
              складском месте KARMAN не будет ни одного листа, необходимо будет
              работать по другому заданию, его надо будет его активировать
            </p>
          </li>
          <li className="article__subtitle">
            Для этого в ZPLP надо выделить строку нужного задания, далее нажать:
            <br />
            Задание → Активировать задание для производства
          </li>
        </ol>
      </div>
    </div>
  );
}
