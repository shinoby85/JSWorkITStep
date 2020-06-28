'use strict';
/*
    Задание 2
    Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
    единицу товара. Написать следующие функции.
        1. Распечатка чека на экран.
        2. Подсчет общей суммы покупки.
        3. Получение самой дорогой покупки в чеке.
        4. Подсчет средней стоимости одного товара в чеке.
 */

let cheque=[
    {
        product: 'Клей',
        quantity: 3,
        price: 14
    },
    {
        product: 'Цветы',
        quantity: 4,
        price: 7
    },
    {
        product: 'Тетради',
        quantity: 14,
        price: 1.5
    },
    {
        product: 'Альбом',
        quantity: 1,
        price: 6.34
    },
    {
        product: 'Гуаш',
        quantity: 1,
        price: 17.5
    },
    {
        product: 'Стерка',
        quantity: 2,
        price: 2.3
    },
];

/**
 * Выводит позиции чека
 * @param cheque Массив с данными чека
 */
function printCheque(cheque) {
    document.write('********** Чек **********<br>');
    cheque.forEach((item,index)=>
        document.write(`${index+1}. ${item.product} --- Количество: ${item.quantity} Сумма: ${item.quantity*item.price}<br>`));
    document.write('*************************<br>');
}

/**
 * Подсчет суммы чека
 * @param cheque Массив с данными чека
 * @returns {*} Общая сумма
 */
function getAllSumCheque(cheque) {
    return cheque.reduce((sum,item)=>sum+=item.quantity*item.price,0);
}

/**
 * Получение самой дорогой покупки
 * @param cheque Массив с данными чека
 * @returns {*|number|bigint|T} Данные самой дорогой покупки
 */
function getMaxPosition(cheque) {
    return cheque.sort((a,b)=>a.price<b.price?1:-1)[0];
}

/**
 * Получает среднюю стоимость товара в чеке
 * @param cheque Массив с данными чека
 * @returns {number} Средняя стоимость товара
 */
function getAverageCost(cheque) {
    let allProduct=cheque.reduce((sum,item)=>sum+=item.quantity,0);
    return getAllSumCheque(cheque)/allProduct;
}

printCheque(cheque);
document.write(`Общая стоимость товаров: ${getAllSumCheque(cheque)}<br>`);
document.write('*************************<br>');
document.write('Самая дорогая покупка:<br>');
let productPosition=getMaxPosition(cheque);
document.write(`${productPosition.product} --- Количество: ${productPosition.quantity} Сумма: ${productPosition.quantity*productPosition.price}<br>`);
document.write('*************************<br>');
document.write(`Средняя стоимость товара в чеке: ${getAverageCost(cheque)}<br>`);
document.write('*************************<br>');


