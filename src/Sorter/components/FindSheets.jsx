import find1 from "../../assets/find1.jpg";

export default function FindSheets() {
  return (
    <div id="unloading__find-sheets" className="article unloading__find-sheets">
      <p className="article__title">КАК НАХОДИТЬ ЛИСТЫ В SAP</p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй div внизу */}
          <li className="article__subtitle">
            <p>
              SAP → Монитор → Запас и место → Складское место → Единица
              обработки → В окне можно выбирать:
            </p>
            <ol>
              <li>
                Склад (чтобы найти листы на определенном складе) - HSS1
                (внутренний) или XSS1 (внешний)
              </li>
              <li>
                Складское место
                <ul>
                  <li>
                    наши места начинаются на <span className="bold">SH</span> –
                  </li>
                  <li>
                    <span className="bold">SH-8-1</span> – место брака
                  </li>
                </ul>
              </li>
              <li>
                Единица обработки → Из склада листа копируем{" "}
                <span className="bold">ЕДИНИЦЫ ОБРАБОТКИ</span> и вставляем
                через множественный выбор → Вставить
                <span>
                  <img src={find1} alt="..." />
                </span>
              </li>
              <li>
                Идентификатор ЕО (для поиска по номеру листа) → Вставляем нужные
                номера листов через множественный выбор → Вставить
                <span>
                  <img src={find1} alt="..." />
                </span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
