// task 1

function whichSeason(month) {
    const season = prompt("Введите число:");
    if (month === 1 && month === 2 || month === 12) {
        return "Зима";
    } else if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } if (month >= 9 && month <= 11) {
        return "Осень";
    } else {
        return "Вы ввели неверное значение!";
    }
}

console.log(whichSeason(5));