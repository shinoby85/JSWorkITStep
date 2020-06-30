'use strict';
/*
    Задание 4 Создать массив аудиторий академии. Объект-аудитория состоит из названия,
        количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
        Написать несколько функций для работы с ним.
    1. Вывод на экран всех аудиторий.
    2. Вывод на экран аудиторий для указанного факультета.
    3. Вывод на экран только тех аудиторий, которые подходят для переданной группы.
        Объект-группа состоит из названия, количества студентов и названия факультета.
    4. Функция сортировки аудиторий по количеству мест.
    5. Функция сортировки аудиторий по названию (по алфа- виту).
 */
let academy = [
    {
        name: 'k125',
        quantity: 12,
        faculty: 'front-end'
    },
    {
        name: 'k124',
        quantity: 18,
        faculty: 'back-end'
    },
    {
        name: 'k123',
        quantity: 11,
        faculty: 'java'
    },
    {
        name: 'k122',
        quantity: 17,
        faculty: 'go'
    },
    {
        name: 'k121',
        quantity: 16,
        faculty: 'devops'
    },
    {
        name: 'k126',
        quantity: 20,
        faculty: 'testing'
    },
    {
        name: 'k127',
        quantity: 19,
        faculty: 'java'
    },
    {
        name: 'k128',
        quantity: 15,
        faculty: 'front-end'
    }
];

function getAuditory(academy, faculty = '') {
    let string = '';
    let num=1;
    academy.forEach(item => {
        if (item.faculty === faculty && faculty !== '') {
            string += `${num}. ${item.name}\n`;
            num++;
        } else if (faculty === '') {
            string += `${num}. ${item.name}\n`;
            num++;
        }

    });
    console.log(string);
}

function findAuditory(academy,group){
    let string = '';
    let num=1;
    academy.forEach(item => {
        if (item.faculty === group.faculty && item.) {
            string += `${num}. ${item.name}\n`;
            num++;
        } else if (faculty === '') {
            string += `${num}. ${item.name}\n`;
            num++;
        }

    });
    console.log(string);
}

getAuditory(academy);
console.log('**********************');
getAuditory(academy, 'java');
console.log('**********************');
