'use strict';


/*
Создать еще один массив из 5 случайных чисел и написать следующие функции.
1. Функция принимает 2 массива и возвращает новый массив, в котором собраны
все элементы из двух массивов без повторений.
 */
let mas1 = [3, 65, 78, 10, -12, 25, 74, 25];
let mas2 = [1, 5, 3, 10, 24];

function getFullNewArray(mas1, mas2) {
    let povtor = [];
    let result = mas1.filter(item => {
        if (mas2.includes(item)) {
            povtor.push(item);
            return false;
        }
        return true;
    });
    for(let item of mas2){
        if(result.includes(item)){
            result.push(item);

        }
    }
    return result.concat(povtor);
}

console.log(getFullNewArray(mas1, mas2));
















/*
Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы
(то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.
 */
function getRepeatItemArray(mas1, mas2) {
    let result = mas1.filter(item => {
        if (mas2.includes(item)) {
            return true;
        }
        return false;
    });
    return result;
}
console.log(getRepeatItemArray(mas1, mas2));

/*
Функция принимает 2 массива и возвращает новый массив, в котором собраны все
элементы из первого массива, которых нет во втором массиве. Задание
 */
function getFirstArray(mas1, mas2) {
    let result = mas1.filter(item => {
        if (mas2.includes(item)) {
            return false;
        }
        return true;
    });
    return result;
}
console.log(getFirstArray(mas1, mas2));

/*
Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции.
1. Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li).
 */
let fruits=['Яблоки','Ананасы','Груши','Кокосы', 'Мандарины','Персики'];
fruits.toLowerCase();