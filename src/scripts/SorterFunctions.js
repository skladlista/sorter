let list = document.querySelectorAll(".list");

for (let item = 0; item < list.length; item++) {
  list[item].addEventListener("click", function moveListOn() {
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      let subcontent = content.querySelectorAll(".list");
      console.log(subcontent);
      let fullHeight = 0;
      for (let i = 0; i < subcontent.length; i++) {
        fullHeight += subcontent[i].nextElementSibling.scrollHeight;
      }

      content.style.maxHeight = "none";
    }
  });
}
