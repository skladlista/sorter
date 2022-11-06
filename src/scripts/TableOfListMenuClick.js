import menuToggle3 from "../scripts/MenuToggle3";



const TableOfListMenuClick = (item) => {
  document.getElementById("menu__toggle2").checked = false
  menuToggle3();

  const element = document.getElementById(item);
  element.scrollIntoView({
    alignToTop: "true",
    behavior: "smooth",
  });

};
export default TableOfListMenuClick;
