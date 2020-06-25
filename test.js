'use strict'
// Вывести на экран:
// AAABBBAAABBBAAABBB
// BBBAAABBBAAABBBAAA
// AAABBBAAABBBAAABBB
// (таких строк n, в каждой строке m троек AAA)

let num1 = +prompt('Введите количество строк:', '');
let num2 = +prompt('Введите количество повторов:', '');

let result = getResult(num1, num2);
alert(result);

/**
 * Получаем решение задачи
 * @param {*} n Количество строк
 * @param {*} m Количество однотипных символов
 */
function getResult(n, m) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            result += stringLetter(m, 'A') + '\n';
        } else {
            result += stringLetter(m, 'B') + '\n';
        }

    }
    return result;
}

/**
 * Формирует готовую строку для вывода
 * @param {*} m Количество однотипных символов
 * @param {*} repeat Вид первого символа (A или B)
 */
function stringLetter(m, repeat) {

    let result = '';
    for (let i = 1; i <= 4; i++) {
        if (repeat == 'A') {
            result += getColLetter('A', m) + getColLetter('B', m);
        } else {
            result += getColLetter('B', m) + getColLetter('A', m);
        }


    }
    return result;
}


/**
 * Увеличивает количество символов в строке на значение col
 * @param {*} symbol Передаваемый символ
 * @param {*} col Сколько раз должен символ в строке присутствовать
 */
function getColLetter(symbol, col) {
    let result = '';
    for (let i = 1; i <= col; i++) {
        result += symbol;
    }
    return result;
}

