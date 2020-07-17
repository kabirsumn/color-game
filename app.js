const squares = document.querySelectorAll(".square");
const target = document.getElementById("target");
const massage = document.getElementById("massage");
const header = document.querySelector(".header");
const reset = document.getElementById("reset");
const easy = document.getElementById("easy-btn");
const hard = document.getElementById("hard-btn");

let colors = generateRandomColor(6);

let targetedColor = targetRandomColor();
target.textContent = targetedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === targetedColor) {
      massage.textContent = "Correct!";
      changeAllSquaresBackground(clickedColor);
      header.style.backgroundColor = clickedColor;
      reset.textContent = "Play Again!";
    } else {
      massage.textContent = "Try Again!";
      this.style.background = "#131417";
      massage.setAttribute("title", clickedColor);
    }
  });
}

reset.addEventListener("click", function () {
  colors = generateRandomColor(6);
  targetedColor = targetRandomColor();
  target.textContent = targetedColor;
  this.textContent = "New Color";
  massage.textContent = "";
  header.style.backgroundColor = "#0f5fef";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

easy.addEventListener("click", function () {
  this.classList.add("selected");
  hard.classList.remove("selected");
  colors = generateRandomColor(3);
  targetedColor = targetRandomColor();
  header.style.backgroundColor = "#0f5fef";
  massage.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hard.addEventListener("click", function () {
  this.classList.add("selected");
  easy.classList.remove("selected");
  colors = generateRandomColor(6);
  targetedColor = targetRandomColor();
  header.style.backgroundColor = "#0f5fef";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  }
});
function generateRandomColor(num) {
  let color = [];
  for (let i = 0; i < num; i++) {
    color.push(rgb());
  }
  return color;
}

function rgb() {
  let r = random(256);
  let g = random(256);
  let b = random(256);

  return `rgb(${r}, ${g}, ${b})`;
}

function random(randomNumber) {
  return Math.floor(Math.random() * randomNumber);
}

function targetRandomColor() {
  return colors[random(colors.length)];
}

function changeAllSquaresBackground(changedColor) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = changedColor;
  }
}
