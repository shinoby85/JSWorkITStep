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
let num=prompt('Введите двухзначное число');
let collectionNumber={
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
    if (+number in collection){
        return `${+number} - ${collection[number]}`;
    }
    let firstNumber=Number(number.split('')[0]+'0');
    let secondNumber=+number.split('')[1];
    return `${number} - ${collection[firstNumber]} ${collection[secondNumber]}`;
}

console.log(convertNumberToString(collectionNumber,num));

/*
    Задание 3.
    Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания.
 */
let testStr2='jsdhfJKJH bvb985KJnkkNKN hjhHBhbJH9o$%& jjhfk4k0K7J5';

/**
 * Преобразует строку, в зависимости от условия, верхний/нижний регистр или знак подчеркивания
 * @param str Передаваемая строка
 * @returns {string} Результат преобразования
 */
function changeSymbol(str) {
    let smallSymbol='absdefghijklmnopqrstuvwxyz';
    let number='0123456789';
    return str.split('').map(item=>{
        if (smallSymbol.includes(item)){
            return item.toUpperCase();
        }
        else if(smallSymbol.toUpperCase().includes(item)){
            return item.toLowerCase();
        }
        else if (number.includes(item)){
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
