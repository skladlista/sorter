export default function ChangeOzm(props) {
  return (
    <div id="change-ozm" className="article change-ozm">
      <p className="article__title">Изменение номенклатуры в SAP EWM</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Чтобы что-то делать в SAP ERP, надо листы в EWM переместить на{" "}
            <span className="bold">не EWM склад (3011)</span>
          </li>
          <li className="article__subtitle">
            Отдать листы на <span className="bold">не EWM склад</span> с помощью{" "}
            <span className="bold">309 ВД</span>
          </li>
          <li className="article__subtitle">
            Изменить изменить номенклатуру в SAP ERP
          </li>
          <li className="article__subtitle">
            Вернуть листы на EWM склад (через 311 ВД – если их нет в ZPLA),
            (если они там есть, то просто возвращаем в ZPLA)
          </li>
        </ol>
      </div>
    </div>
  );
}
