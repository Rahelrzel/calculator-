const buttons = document.querySelectorAll(".num");
const input = document.querySelector("display");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    input.innerText += buttons.value;
    });
}