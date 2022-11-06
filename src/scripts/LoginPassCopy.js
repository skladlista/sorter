export default function LoginPassCopy(id) {
  /* Get the text field */
  const loginPassCopyText = document.getElementById(id);
  const b = loginPassCopyText.value;

  navigator.clipboard
    .writeText(loginPassCopyText.value)
    .then(() => {
      // Успех!

      setTimeout(() => {
        // loginPassCopyText.value = "скопировано";
        loginPassCopyText.style.backgroundColor = "#d5fcdc"
      }, 100);
      setTimeout(() => {
        loginPassCopyText.value = b;
        loginPassCopyText.style.background = "none"
      }, 1000);
    })
    .catch(() => {
      // Неудача :(

      setTimeout(() => {
        // loginPassCopyText.value = "Не скопировано";
        loginPassCopyText.style.backgroundColor = "#d5fcdc"
      }, 100);
      setTimeout(() => {
        loginPassCopyText.value = b;
        loginPassCopyText.style.background = "none"
      }, 1000);
    });
}
