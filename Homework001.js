'use strict';
/* Задание 1
Запросите у пользователя его имя и выведите в ответ:
«Привет, его имя!».
 */
let name = prompt('Enter your name, please.');
hello(name);

/* Задание 2
Запросите у пользователя год его рождения, посчитайте,
сколько ему лет и выведите результат. Текущий год укажите
в коде как константу.
 */
let birthday = prompt('Введите ваш возраст (dd.mm.yyyy)');
alert(`Вам ${searchNumberOfYear(birthday)} лет (года).`);

/* Задание 3
Запросите у пользователя длину стороны квадрата и вы-
ведите периметр такого квадрата.
 */
let side = +prompt("Введите длину стороны квадрата.");
alert(`Периметр квадрата, со стороной ${side} равен: ${calcPerimeterOfSquare(side)}`);

/* Задание 4
Запросите у пользователя радиус окружности и выведите
площадь такой окружности.
 */
let radius = +prompt("Введите радиускруга.");
alert(`Площадь круга, с радиусом ${radius} равна: ${calcAriaOfCircle(radius)}`);

/* Задание 5
Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчи-
тайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
 */
let distance = +prompt("Введите расстояние между городами (км.).");
let time = +prompt("Введите время поездки (ч.).");
alert(`Вам требуется бвигаться со скоростью: ${calcSpeed(distance, time)} км/ч`);

/* Задание 6
Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
константе.
 */
const UsdBlr = 2.61;
let currencyRate = +prompt("Введите кол-во долларов.");
alert(`К выплате: ${changeCurrency(currencyRate,UsdBlr)} BLR`);

/* Задание 7

 */













/**
 * Конвертер валют USD-BLR
 * @param currency Вносимая валюта
 * @param currencyRate Курс валюты
 * @returns {number} Сумма к выдаче
 */
function changeCurrency(currency, currencyRate) {
    return currency * currencyRate;
}

/**
 * Высчитывает скорость движения объекта
 * @param distance Расстояние
 * @param time Время движения
 * @returns {number} Скорость движения
 */
function calcSpeed(distance, time) {
    return distance / time;
}

/**
 * Вычисляет площадь круга
 * @param radiusOfCicle Радиус окружности
 * @returns {number} Площадь круга
 */
function calcAriaOfCircle(radiusOfCicle) {
    const pi = 3.14;
    return 2 * pi * (radiusOfCicle ** 2);
}

/**
 * Вычисляет периметр квадрата
 * @param sideSquare Длина стороны
 * @returns {number} Значение периметра
 */
function calcPerimeterOfSquare(sideSquare) {
    return sideSquare * 4;
}

/**
 * Возвращает возраст человека
 * @param birthday Дата рождения в формате dd.mm.yyyy
 * @returns {number} Текущий возраст
 */
function searchNumberOfYear(birthday) {
    let dateOfBirthday = new Date();
    dateOfBirthday.setDate(+birthday.split('.')[0]);
    dateOfBirthday.setMonth(birthday.split('.')[1] - 1);
    dateOfBirthday.setFullYear(+birthday.split('.')[2]);
    let year = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (new Date().getMonth() > dateOfBirthday.getMonth()) {
        return year - 1;
    }
    if (new Date().getMonth() < dateOfBirthday.getMonth()) {
        return year;
    }
    if (new Date().getMonth() === dateOfBirthday.getMonth()) {
        if (new Date().getDate() >= dateOfBirthday.getDate()) {
            return year;
        } else {
            return year - 1;
        }
    }

}

/**
 *
 * @param name Имя для приветствия
 */
function hello(name) {
    alert(`Hello my best friend ${name}`)
}