'use strict';
/*
    Задание 1.
    Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и
количество других знаков.
 */
let testStr1 = 'sdh dshbafhbsahjd bh  shabg528 8827648 %&^% ^%& &^%^ &^%&^djshf76 dshdgfj';

/**
 * Выдает статистику по количеству букв, цифр и других символов
 * @param str Передаваемая строка
 */
function getStringInfo(str) {
    let templateLetters = 'абвгдеёжзиклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz';
    let templateNumbers = '0123456789';
    let quantityLetters = 0;
    let quantityNumbers = 0;
    let quantitySymbols = 0;
    str.split('').forEach(item => {
        if (templateLetters.includes(item))
            ++quantityLetters;
        else if (templateNumbers.includes(item))
            ++quantityNumbers;
        else
            ++quantitySymbols;
    });
    console.log(`Количество букв: ${quantityLetters}`);
    console.log(`Количество цифр: ${quantityNumbers}`);
    console.log(`Количество других символов: ${quantitySymbols}`);
}

getStringInfo(testStr1);

/*
    Задание 2.
    Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
    Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.
 */
let num = prompt('Введите двухзначное число');
let collectionNumber = {
    10: 'десять',
    11: 'одинадцать',
    12: 'двенадцать',
    13: 'тренадцать',
    14: 'четырнадцать',
    15: 'пятнадцать',
    16: 'шестнадцать',
    17: 'семнадцать',
    18: 'восемнадцать',
    19: 'девятнадцать',
    20: 'двадцать',
    30: 'тридцать',
    40: 'сорок',
    50: 'пятьдесят',
    60: 'шестьдесят',
    70: 'семьдесят',
    80: 'восемьдесят',
    90: 'девяносто',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять'
};

/**
 * Преобразует число в строковый эквивалент
 * @param collection Объект из коллекции чисел
 * @param number Двухзначное число
 * @returns {string} Строковый результат числа
 */
function convertNumberToString(collection, number) {
    if (+number in collection) {
        return `${+number} - ${collection[number]}`;
    }
    let firstNumber = Number(number.split('')[0] + '0');
    let secondNumber = +number.split('')[1];
    return `${number} - ${collection[firstNumber]} ${collection[secondNumber]}`;
}

console.log(convertNumberToString(collectionNumber, num));

/*
    Задание 3.
    Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания.
 */
let testStr2 = 'jsdhfJKJH bvb985KJnkkNKN hjhHBhbJH9o$%& jjhfk4k0K7J5';

/**
 * Преобразует строку, в зависимости от условия, верхний/нижний регистр или знак подчеркивания
 * @param str Передаваемая строка
 * @returns {string} Результат преобразования
 */
function changeSymbol(str) {
    let smallSymbol = 'absdefghijklmnopqrstuvwxyz';
    let number = '0123456789';
    return str.split('').map(item => {
        if (smallSymbol.includes(item)) {
            return item.toUpperCase();
        } else if (smallSymbol.toUpperCase().includes(item)) {
            return item.toLowerCase();
        } else if (number.includes(item)) {
            return '_';
        }
        return item;
    }).join('');
}

console.log(changeSymbol(testStr2));

/*
    Задание 4.
    Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, text-align в textAlign.
 */
let cssStyle = 'background-color';

/**
 * Преобразует имена стилей css в CamelCase
 * @param styleName Название css стиля
 * @returns {string} Результат преобразования в CamelCase
 */
function convertStyleName(styleName) {
    return styleName.split('-').map((item, index) => {
        if (index > 0) {
            return item[0].toUpperCase() + item.slice(1);
        }
        return item;
    }).join('');
}

console.log(convertStyleName(cssStyle));

/*
    Задание 5.
    Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
    Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.
 */
let text = 'cascading style sheets';

function createAbbreviation(str) {
    str = str.replace('-', ' ');
    return str.split(' ').map(item => item[0].toUpperCase()).join('');
}

console.log(createAbbreviation(text));

/*
    Задание 6.
    Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и
возвращает ее.
 */
let str1 = 'My first string.';
let str2 = 'My second string';
let str3 = 'Hello world';

/**
 * Объединяет несколько строк в одну
 * @param other Набор передаваемых строк
 * @returns {string} Общая строка
 */
function concatString(...other) {
    return other.join('');
}

console.log(concatString(str1, str2, str3));

/*
    Задание 7.
    Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо
выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.
 */
let strAnswer=prompt('Введите выражение вида a+b');

/**
 * Ищет результат операции
 * @param str Строковое выражение
 * @returns {string} Результат операции
 */
function findResult(str) {
    return str+'='+eval(str);
}

console.log(findResult(strAnswer));

/*
    Задание 8.
    Написать функцию, которая получает url и выводит подробную информацию о нем.
Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.
 */
let strURL='https://itstep.org/ua/about';

/**
 * Выводит подробную информацию об адресе
 * @param str URL-адрес
 */
function getInfoByUrl(str) {
    let prt=str.split('://')[0];
    let url=str.split('://')[1];
    let domen=url.split('/')[0];
    let ind=url.indexOf('/');
    let way=url.slice(ind);

    console.log(`Протокол: ${prt}; Домен: ${domen}; Путь: ${way}`);
}
getInfoByUrl(strURL);

/*
    Задание 9.
    Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью
указанного разделителя.
Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.
Выполняя задание, не используйте функцию split().
 */
let strWithSeparat='110/25/144/366/11/985/78/985/65/254/785';
let sep='/';

/**
 * Создает массив на основании строки и указанного разделителя
 * @param str Строка с разделителями
 * @param separation Разделитель
 * @param mas Массив с исходными данными
 * @returns {*[]} Конечный вид массива
 */
function createMas(str,separation,mas=[]){
    if(str.indexOf(separation)===-1){
        mas.push(str);
        return mas;
    }
    let ind=str.indexOf(separation);
    mas.push(str.slice(0,ind));
    return createMas(str.slice(ind+1),separation,mas);
}
console.log(createMas(strWithSeparat,sep));

/*
    Задание 10.
    Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте
которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо
% индекс необходимо вывести значение соответствующего входного параметра.
Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.
 */




















