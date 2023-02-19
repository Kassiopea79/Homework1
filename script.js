// task 1

function whichSeason() {
  let month = Number(prompt("Введите число 1 - 12: "));
  if (month === 1 || month === 2 || month === 12) {
    console.log("Зима");
    alert("Зима");
  } else if (month >= 3 && month <= 5) {
    console.log("Весна");
    alert("Весна");
  } else if (month >= 6 && month <= 8) {
    console.log("Лето");
    alert("Лето");
  } else if (month >= 9 && month <= 11) {
    console.log("Осень");
    alert("Осень");
  } else {
    console.log("Вы ввели неверное значение!");
    alert("Вы ввели неверное значение!");
  }
  return;
}

// Game 2

function playGame() {
  const words = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  words.sort(() => Math.random() - 0.5);

  alert(`Перемешанные слова: ${words}`);

  const firstWord = prompt("Чему равнялся первый элемент массива?");
  const lastWord = prompt("Чему равнялся последний элемент массива?");

  if (firstWord === words[0] && lastWord === words[words.length - 1]) {
    alert("Поздравляем! Вы угадали оба слова!");
  } else if (firstWord === words[0] || lastWord === words[words.length - 1]) {
    alert("Вы были близки к победе!");
  } else {
    alert("Вы ответили неверно!");
  }
  return;
}
