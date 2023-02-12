// task 1

function whichSeason() {
  let month = prompt("Введите число 1 - 12: ");
  if (month === 1 || month === 2 || month === 12) {
    return "Зима";
  } else if (month >= 3 && month <= 5) {
    return "Весна";
  } else if (month >= 6 && month <= 8) {
    return "Лето";
  }
  if (month >= 9 && month <= 11) {
    return "Осень";
  } else {
    return "Вы ввели неверное значение!";
  }
}
let season = whichSeason();
console.log("Сейчас сезон: " + season);



