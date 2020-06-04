'use strict';
/*
    Задание 1.
    Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым
(18_60) или пенсионером (60– ...)
 */
let age=+prompt("Введите ваш возраст.");
alert("Согласно введенному возрасту вы: "+ checkAge(age));

/*
    Задание 2.
    Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!,
    2–@, 3–# и т. д).
 */
let key=+prompt('Введите номер клавиши');
alert(`У кнопки ${key} спец. символ - ${getSpecialSymbol(key)}`);

/*
    Задание 3.
    Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
 */
let number=prompt("Введите трехзначное число");
alert(checkNumber(number));

/**
 * Поиск колисчества совпадений цифр числа
 * @param number Трехзначное число
 * @returns {string} Результут наличия совпадений
 */
function checkNumber(number) {
    if (number.length!=3)return " Введено не допустимое значение";
    if (number.split('')[0]===number.split('')[1]||number.split('')[0]===number.split('')[2]){
        return "Первый символ числа имеет совпадения";
    }
    else if ( number.split('')[1]===number.split('')[2] ){
        return "Второй символ числа имеет совпадение";
    }
    else return "Совпадений, в данном числе - нет."
}

/**
 * Возвращает спец. символы числовых кнопок
 * @param key Номер кнопки
 * @returns {string} Спец. символ введенной кнопки
 */
function getSpecialSymbol(key) {
    switch (key) {
        case 0: return ")";
        case 1: return "!";
        case 2: return "@";
        case 3: return "#";
        case 4: return "$";
        case 5: return "%";
        case 6: return "^";
        case 7: return "&";
        case 8: return "*";
        case 9: return "(";
        default: return "Введено что-то не то...";

    }
}

/**
 * Выводит информацию о возрасте человека
 * @param age Количество лет
 * @returns {string} Заключеие о возрасте человека
 */
function checkAge(age){
    if (age<=2 && age>0) return " ребенок ";
    else if (age>2 && age<=12) return " мучаетесь вопросом: \"Кто же я?\". (ошибка в условии задачи)";
    else if (age>12 && age<=18) return " подросток";
    else if (age>18 && age<=60) return " взрослый";
    else if (age>60) return " пенсионер";
    else return " явно ввели что-то не то....";
}