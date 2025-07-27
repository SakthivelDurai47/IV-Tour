const clipboard = document.getElementsByClassName("bi-clipboard");
const numbers = [
  "+91 89738 84331",
  "+91 77087 80835",
  " ------------",
  " ------------",
];

function clicked(num) {
  navigator.clipboard.writeText(numbers[num]);
  clipboard[num].innerHTML = "  copied";
  setTimeout(() => {
    clipboard[num].innerHTML = "";
  }, 550);
}
