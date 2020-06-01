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
Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб
помещается на флешку.
 */
let flash=+prompt("Введите размер флеш памяти (Гб)");
alert(`На данный накопитель поместиться ${getNumberOfFile(flash)} файлов.`);

/* Задание 8
Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может
купить пользователь и сколько сдачи у него останется.
 */
let money=prompt("Введите ваше количество средств (руб.коп)");
let costOfChocolate=prompt("Введите стоимость шоколада (руб.коп)");
alert(`Вам можно купить ${getChocolate(money,costOfChocolate)[0]} плиток шоколада и у вас останется ${getChocolate(money,costOfChocolate)[1]} руб`);

/* Задание 9
Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится
оператор % (остаток от деления).
 */
let number=prompt("Введите число");
alert(`Обратное значение имеет вид: ${changeOfNumber(number)}`);

/* Задание 10
Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические
операторы. В задании не надо использовать if или switch.
 */
let  myNumber=+prompt("Введите число для проверки");
alert(checkNumber(myNumber));



/****************** ФУНКЦИИ ********************/

/**
 * Проверка числа на четность
 * @param num Проверяемое число
 * @returns {string} Результат оценки
 */
function checkNumber(num) {
    return num%2===0?'Ваше число четное':'Ваше число не четное';
}

/**
 * Выводит число в обратном порядке
 * @param num Числовое значение
 * @returns {string} Обратный результат
 */
function changeOfNumber(num) {
    let number='';
    for (let i=num.length-1;i>=0;i--){
        number+=num[i];
    }
    return number;
}

/**
 * Выдает количество купленного товара и остаток денежных средств
 * @param money Вносимые средства
 * @param costOfChocolate Стоимость товара
 * @returns {(number)[]|number[]} Первая позиция массива -количество товараж вторая - сдача
 */
function getChocolate(money,costOfChocolate) {
    let moneyInPurse=money*100;
    let chocolate=costOfChocolate*100;

    if(chocolate>moneyInPurse)return [0,+money];

    let amountOfChocolate=Math.floor(moneyInPurse/chocolate);
    let dial=moneyInPurse-amountOfChocolate*chocolate;
    return [amountOfChocolate,dial/100];
}

/**
 * Выдает количество файлов,по 820Мб, которые можно разместить на флешке с заданным объемом
 * @param flashMemory Размер флешпамяти
 * @returns {number} Количество файлов
 */
function getNumberOfFile(flashMemory) {
    flashMemory*=1024;
    return Math.floor(flashMemory/820);
}

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