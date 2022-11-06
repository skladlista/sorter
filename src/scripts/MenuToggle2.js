export default function menuToggle2() {
  let tableOfList = document.querySelector(".table-of-list");
  let tableOfListCheck2 = document.getElementById("menu__toggle2");
  let tableOfListCheck1 = document.getElementById("menu__toggle");

  if (tableOfListCheck2.checked) {

    tableOfListCheck1.checked = false
    document.body.style.overflow = "hidden";
    tableOfList.style.right = "0%";
    tableOfList.style.visibility = "visible";
    tableOfList.style.overflow = "auto";
  } else {
    document.body.style.overflow = "visible";
    tableOfList.style.right = "-100%";
    tableOfList.style.visibility = "visible";
    tableOfList.style.overflow = "auto";
  }
}
