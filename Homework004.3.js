'use strict';
/*
    Задание 3
    Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент
массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
    Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
*/

let cssStyle = [
    {
        name: 'color',
        value: 'green'
    },
    {
        name: 'font-size',
        value: '21px'
    },
    {
        name: 'align',
        value: 'center'
    },
    {
        name: 'text-decoration',
        value: 'underline'
    },
    {
        name: 'text-transform',
        value: 'uppercase'
    },
    {
        name: 'font-style',
        value: 'italic'
    },
    {
        name: 'font-weight',
        value: 'bold'
    }
];

/**
 * Выводит текст в HTML с указанными стилями
 * @param style Стили текста
 * @param text Тексмт для вывода
 */
function outputOnScreen(style,text) {
    let str='<p style="';
    style.forEach(item=>{
        str+=`${item.name}:${item.value}; `;
    });
    str+=`">${text}</p>`;
    document.write(str);
}

let myText=prompt('Введите любой текст');
outputOnScreen(cssStyle,myText);