import { NavLink } from "react-router-dom";
import "./Header.scss"
import "./only-for-sorter.scss"


export default function Header(props) {

        return (
    <header id="header">
      <input style={{ display: "none" }} id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle" onClick={() => {
            const menu = document.getElementById("menu__toggle2")
            const tableOfList = document.querySelector(".table-of-list");
            if (menu) {
                menu.checked = false
                tableOfList.style.right = "-100%";
                tableOfList.style.visibility = "visible";
                tableOfList.style.overflow = "auto";
            }
        }}>
        <span />
      </label>
        <div className="header__activePage">
            <NavLink to="sorter" onClick={props.MenuOnClick}>
                Сортировщик-сдатчик
            </NavLink>
        </div>
      <nav className="menu__box">
        <div>
          <NavLink to="sorter" onClick={props.MenuOnClick}>
            Сортировщик-сдатчик
          </NavLink>
        </div>
      </nav>
      <input
        style={{ display: "none" }}
        id="menu__toggle2"
        type="checkbox"
        onClick={props.menuToggle2}
      />
      <label
        className="menu__btn2"
        onClick={props.menuToggle2}
        htmlFor="menu__toggle2"
      >
        <span />
      </label>
    </header>
  );
}
