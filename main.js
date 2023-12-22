// constantes
const simpleBtn = document.querySelector("#rgbaBtn");
const hexBtn = document.querySelector("#hexBtn");

// variables
let whichColor = document.querySelector("#whichColor");
let body = document.body;

// randomColor
let randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

// mainBtn
rgbaBtn.addEventListener("click", () => {
  let random = randomColor();
  let red = parseInt(random.substring(1, 3), 16);
  let green = parseInt(random.substring(3, 5), 16);
  let blue = parseInt(random.substring(5, 7), 16);
  let opacity = 1;
  let rgba = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  whichColor.innerHTML = rgba;
  body.style.backgroundColor = rgba;
});

// hexBtn
hexBtn.addEventListener("click", () => {
  let random = randomColor();
  whichColor.innerHTML = random;
  body.style.backgroundColor = random;
});
