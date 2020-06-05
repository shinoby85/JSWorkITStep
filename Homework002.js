'use strict';
/*
    Задание 1.
    Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым
(18_60) или пенсионером (60– ...)
 */
let age = +prompt("Введите ваш возраст.");
alert("Согласно введенному возрасту вы: " + checkAge(age));

/*
    Задание 2.
    Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!,
    2–@, 3–# и т. д).
 */
let key = +prompt('Введите номер клавиши');
alert(`У кнопки ${key} спец. символ - ${getSpecialSymbol(key)}`);

/*
    Задание 3.
    Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
 */
let number = prompt("Введите трехзначное число");
alert(checkNumber(number));

/*
    Задание 4
    Запросить у пользователя год и проверить, високосный он
    или нет. Високосный год либо кратен 400, либо кратен 4 и
    при этом не кратен 100.
 */
let year = +prompt("Введите год.");
if (checkYear(year)) alert("Год высокосный.");
else alert("Год не высокосный.");

/*
    Задание 5.
    Запросить у пользователя пятиразрядное число и определить,
    является ли оно палиндромом.
 */
let polNumber = prompt("Введите значение возможного палиндрома");
if (checkPolindrom(polNumber)) alert("Число - палиндром");
else alert("Число не является палиндромом");

/*
    Задание 6.
    Написать конвертор валют. Пользователь вводит количество USD, выбирает,
    в какую валюту хочет перевести: EUR,
    UAN или AZN, и получает в ответ соответствующую сумму
 */
let coins = +prompt("Введите количество монет");
let currency = prompt("Введите валюту (eur,uan,azn)");
alert(`Результат конвертации: ${changeCurrency(coins, currency)}`);

/*
    Задание 7.
    Запросить у пользователя сумму покупки и вывести сумму
    к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
    до 500 – 5%, от 500 и выше – 7%.
 */
let cost = +prompt("Введите стоимость товара");
alert("Стоимость со скидкой: " + getDiscountPrice(cost));

/*
    Задание 8
    Запросить у пользователя длину окружности и периметр
    квадрата. Определить, может ли такая окружность поместиться
    в указанный квадрат.
 */
let lengthCircle = +prompt("Введите длину окружности");
let perimetrSquare = +prompt("Введите периметр квадрата");
if (checkCircleInSquare(lengthCircle, perimetrSquare)) {
    alert("Круг можно поместить в квадрате");
} else alert("Круг не поместится в квадрате");


/**
 * Проверяет можно ли вписать круг в квадрат
 * @param lengthCircle Длина окружности
 * @param perimetrSquare Периметр квадрата
 * @returns {boolean} Проверка можно ли вписать круг в квадрат
 */
function checkCircleInSquare(lengthCircle, perimetrSquare) {
    return (getRadiusCircle(lengthCircle) * 2) <= getSideSquare(perimetrSquare) ? true : false;
}

/**
 * Поиск радиуса окружности
 * @param lengthCircle Длина окружности
 * @returns {number} Радиус окружности
 */
function getRadiusCircle(lengthCircle) {
    const pi = 3.14;
    return lengthCircle / (2 * pi);
}

/**
 * Поиск стороны квадрата по периметру
 * @param perimetrSquare Площадь квадрата
 * @returns {number} Сторона квадрата
 */
function getSideSquare(perimetrSquare) {
    return perimetrSquare / 4;
}

/**
 * Получение стоимости товара с учетом скидки
 * @param cost Предварительная сумма
 * @returns {number|*} Сумма с учетом скидки
 */
function getDiscountPrice(cost) {
    if (cost >= 200 && cost <= 300) return cost - cost * 0.03;
    else if (cost > 300 && cost <= 500) return cost - cost * 0.05;
    else if (cost > 500) return cost - cost * 0.07;
    else return cost;
}

/**
 * Производит обмен валюты
 * @param coins Сумма для конвертации
 * @param currency Вид валюты
 * @returns {number} Результат конвертации
 */
function changeCurrency(coins, currency) {
    const eur = 2.69;
    const uan = 0.09;
    const azn = 1.4;
    currency = currency.toLowerCase();
    switch (currency) {
        case "eur":
            return coins * eur;
        case "uan":
            return coins * uan;
        case "azn":
            return coins * azn;
        default:
            alert("Не допустимый тип валюты.");
    }
}

/**
 * Проверка числа на палиндром
 * @param number Проверяемое число
 * @returns {boolean} Результат проверки (true - число является палиндромом)
 */
function checkPolindrom(number) {
    let sameNumber = 0;
    let numStep = Math.floor(number.length / 2);
    if (numStep === 0) return false;
    for (let i = 1; i <= numStep; i++) {
        if (number[i - 1] === number[number.length - i]) sameNumber++;
    }
    if (sameNumber === numStep) return true;
    else return false;
}

/**
 * Выводит решение того, высокосный ли год
 * @param year Год передаваемый в функцию
 * @returns {boolean} Результат (true - да)
 */
function checkYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if ((year % 4 === 0) && (year % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Поиск колисчества совпадений цифр числа
 * @param number Трехзначное число
 * @returns {string} Результут наличия совпадений
 */
function checkNumber(number) {
    if (number.length != 3) return " Введено не допустимое значение";
    if (number.split('')[0] === number.split('')[1] || number.split('')[0] === number.split('')[2]) {
        return "Первый символ числа имеет совпадения";
    } else if (number.split('')[1] === number.split('')[2]) {
        return "Второй символ числа имеет совпадение";
    } else return "Совпадений, в данном числе - нет."
}

/**
 * Возвращает спец. символы числовых кнопок
 * @param key Номер кнопки
 * @returns {string} Спец. символ введенной кнопки
 */
function getSpecialSymbol(key) {
    switch (key) {
        case 0:
            return ")";
        case 1:
            return "!";
        case 2:
            return "@";
        case 3:
            return "#";
        case 4:
            return "$";
        case 5:
            return "%";
        case 6:
            return "^";
        case 7:
            return "&";
        case 8:
            return "*";
        case 9:
            return "(";
        default:
            return "Введено что-то не то...";

    }
}

/**
 * Выводит информацию о возрасте человека
 * @param age Количество лет
 * @returns {string} Заключеие о возрасте человека
 */
function checkAge(age) {
    if (age <= 2 && age > 0) return " ребенок ";
    else if (age > 2 && age <= 12) return " мучаетесь вопросом: \"Кто же я?\". (ошибка в условии задачи)";
    else if (age > 12 && age <= 18) return " подросток";
    else if (age > 18 && age <= 60) return " взрослый";
    else if (age > 60) return " пенсионер";
    else return " явно ввели что-то не то....";
}