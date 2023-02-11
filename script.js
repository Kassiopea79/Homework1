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


// Homework 6

// task 1

let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break;
  }
}

// task 2

let array = [1, 5, 4, 10, 0, 3];
let elementPosition = array.indexOf(4);
console.log(elementPosition);

// task 3

let letJoin = [1, 3, 5, 10, 20];
letJoin = letJoin.join(" ");
console.log(letJoin);

// task 4

let firstArray = [];
let secondArray = [];

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  firstArray.push(randomNumber);
  if (randomNumber % 2 === 0) {
    secondArray.push(randomNumber);
  }
}
console.log(firstArray);
console.log(secondArray);

// task 5

let multiArray = [];

for (let i = 0; i < 3; i++) {
  let innerArray = [];
  for (let j = 0; j < 3; j++) {
    innerArray.push(1);
  }
  multiArray.push(innerArray);
}
console.log(multiArray);

// task 6

let addNumber = [1, 1, 1];
addNumber.push(2, 2, 2);
console.log(addNumber);

// task 7

let sortArray = [9, 8, 7, "a", 6, 5];

sortArray = sortArray.filter(function (item) {
  return typeof item === "number";
});

sortArray.sort(function (a, b) {
  return a - b;
});

console.log(sortArray);

// task 8

let ifNumber = [9, 8, 7, 6, 5];

let guessNumber = Number(prompt("Введите любую цифру от 1 до 10: "));
if (ifNumber.includes(guessNumber)) {
  console.log(`Число ${guessNumber} находится в массиве!`);
} else {
  console.log(`Число ${guessNumber} отсутствует в массиве.`);
}

// task 9

let str = "abcdef";
let reverseStr = str.split("");
reverseStr.reverse();
reverseStr = reverseStr.join("");
console.log(reverseStr);

// task 10

let randomArr = [];
let sum = 0;

for (let i = 0; i < 6; i++) {
  const randomNum = Math.floor(Math.random() * 10);
  randomArr.push(randomNum);
  sum += randomNum;
}
console.log(randomArr);
const avgNum = Math.floor(sum / randomArr.length);
console.log(avgNum);

// task 11

let arrConcat = [
  [1, 2, 3],
  [4, 5, 6],
];
let newConcat = [].concat(...arrConcat);
console.log(newConcat);

// task 12

const newArr = [3, 5, 2, 7, 4, 9, 1, 8, 6, 10];

for (let i = 0; i < newArr.length - 1; i++) {
  console.log(newArr[i] + newArr[i + 1]);
}


