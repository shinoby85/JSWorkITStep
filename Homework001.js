'use strict';
/* Задание 1
Запросите у пользователя его имя и выведите в ответ:
«Привет, его имя!».
 */
let name=prompt('Enter your name, please.');
hello(name);

/* Задание 2
Запросите у пользователя год его рождения, посчитайте,
сколько ему лет и выведите результат. Текущий год укажите
в коде как константу.
 */
let birthday=prompt('Введите ваш возраст (dd.mm.yyyy)');
alert(`Вам ${searchNumberOfYear(birthday)} лет (года).`);

/* Задание 3

 */








/**
 * Возвращает возраст человека
 * @param birthday Дата рождения в формате dd.mm.yyyy
 * @returns {number} Текущий возраст
 */
function searchNumberOfYear(birthday) {
    let dateOfBirthday=new Date();
    dateOfBirthday.setDate(+birthday.split('.')[0]);
    dateOfBirthday.setMonth(birthday.split('.')[1]-1);
    dateOfBirthday.setFullYear(+birthday.split('.')[2]);
    let year=new Date().getFullYear()-dateOfBirthday.getFullYear();
    if(new Date().getMonth()>dateOfBirthday.getMonth()){
        return year-1;
    }
    if(new Date().getMonth()<dateOfBirthday.getMonth()){
        return year;
    }
    if(new Date().getMonth()===dateOfBirthday.getMonth()){
        if (new Date().getDate()>=dateOfBirthday.getDate()){
            return year;
        }
        else{
            return year-1;
        }
    }

}

/**
 *
 * @param name Имя для приветствия
 */
function hello(name) {
    alert(`Hello my best friend ${name}`)
}