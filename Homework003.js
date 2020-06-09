'use strict';
/*
    Задание 1.
    Подсчитать сумму всех чисел в заданном пользователем диапазоне.
 */
let num1 = +prompt("Введите первое число.");
let num2 = +prompt("Введите второе число.");
let sum = 0;
if (num2 < num1) {
    let a = num1;
    num1 = num2;
    num2 = a;
}
for (let i = num1; i <= num2; i++) {
    sum += i;
}
console.log(`Сумма чисел в диапазоне [${num1},${num2}] равна: ${sum}`);

/*
    Задание 2.
    Запросить 2 числа и найти только наибольший общий делитель.
 */
num1 = +prompt("Введите первое число.");
num2 = +prompt("Введите второе число.");
let commonDivisor = 1;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        commonDivisor = i;
    }
}
console.log(`Наибольший общий делитель чисел ${num1} и ${num2} равняется ${commonDivisor}`);

/*
    Задание 3.
    Запросить у пользователя число и вывести все делители этого числа.
 */
num1 = +prompt("Введите число.");
let allDivisor = "";
for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
        allDivisor += i + ', ';
    }
}
console.log(`Все делители числа ${num1}: ${allDivisor}`);

/*
    Задание 4.
    Определить количество цифр в введенном числе.
 */
num1 = prompt("Введите число.");
console.log(`В числе ${num1} содержится ${num1.length} цифр`);

/*
    Задание 5.
    Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
    При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что
    достаточно одной переменной (не 10) для ввода чисел пользователем.
 */
let positiveNumber = 0;
let negativeNumber = 0;
let numberWhithNull = 0;
let everNumber = 0;
let oddNumber = 0;
let loopIndex = 1;
do {

    num1 = +prompt(`Ввеедите число № ${loopIndex}`);
    //Проверка знака числа
    if (num1>0){
        positiveNumber++;
    }
    else if (num1===0){
        numberWhithNull++;
    }
    else {
        negativeNumber++;
    }
    //Проверка четности числа
    if (num1%2===0){
        everNumber++;
    }
    else {
        oddNumber++;
    }
    loopIndex++;
}while (loopIndex<=10);

/*
    Задание 6.
    Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
    вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
    пользователь не откажется.
 */
do {
    num1 = +prompt("Введите первое число.");
    num2 = +prompt("Введите второе число.");
    let sign = prompt('Введите знак операции');
    alert(`Результат операции ${num1}${sign}${num2} равен ${calc(num1,num2,sign)}`);
    if (!confirm('Хотите продолжить вычисления?')) break;
}while (true);

/**
 * Калькулятор
 * @param num1 Первоецифровое значение
 * @param num2 Второе цифровое значение
 * @param signNum Знак операции
 * @returns {number} Результат операции
 */
function calc(num1,num2,signNum) {
    switch (signNum) {
        case '+':
            return Number(num1)+Number(num2);
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
    }
    return 0;
}

/*
    Задание 7.
    Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести
    результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
 */
let num1 = prompt("Введите число.");
let shiftNumber=+prompt("Укажите на сколько цифр сдинуть число");
let widthNumber=String(num1).length;
for (let i=1;i<=shiftNumber;i++){
    num1=Number(num1);
    let safeNum=num1%(10**(widthNumber-1));
    num1=(num1-safeNum)/(10**(widthNumber-1));
    num1=safeNum+''+num1;
}
console.log(`Результат операции: ${num1}`);