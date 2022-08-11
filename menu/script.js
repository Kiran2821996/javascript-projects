let btnAll = document.querySelector(".all");
let btnCar = document.querySelector(".breakfast");
let btnFruit = document.querySelector(".lunch");
let btnColor = document.querySelector(".dinner");

let carId = document.querySelector("#br");
let fruitId = document.querySelector("#lu");
let colorId = document.querySelector("#di");
let container = document.querySelector(".container");

btnAll.addEventListener("click", () => {
  container.append(carId);
  container.append(fruitId);
  container.append(colorId);
});
btnCar.addEventListener("click", () => {
  container.innerHTML = " ";
  container.append(carId);
  container.removeChild(fruitId);
  container.removeChild(colorId);
});
btnFruit.addEventListener("click", () => {
  container.innerHTML = " ";
  container.append(fruitId);
  container.removeChild(carId);
  container.removeChild(colorId);
});
btnColor.addEventListener("click", () => {
  container.innerHTML = " ";
  container.append(colorId);
  container.removeChild(fruitId);
  container.removeChild(carId);
});
