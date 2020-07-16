'use strict';
/*
    Задание 2
    Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
    ■ метод для вывода даты (числа и месяца) текстом;
    ■ метод для проверки – это прошедшая дата или будущая (если прошедшая, то метод возвращает false;
    если будущая или текущая, то true);
    ■ метод для проверки – високосный год или нет;
    ■ метод, возвращающий следующую дату.
    Создайте объект класса ExtendedDate и выведите на экран результаты работы новых методов.
 */
class ExtendedDate extends Date{
    constructor(options) {
        super(options);
        this.day=new Map();
        this.month=new Map();
        this.createMasDay();
        this.createMasMonth();
    }
    createMasDay(){
        this.day.set(1,'первое');
        this.day.set(2,'второе');
        this.day.set(3,'третье');
        this.day.set(4,'четвертое');
        this.day.set(5,'пятое');
        this.day.set(6,'шестое');
        this.day.set(7,'седьмое');
        this.day.set(8,'восьмое');
        this.day.set(9,'девятое');
        this.day.set(10,'десятое');
        this.day.set(11,'одинадцатое');
        this.day.set(12,'двенадцатое');
        this.day.set(13,'тринадцатое');
        this.day.set(14,'четырнадцатое');
        this.day.set(15,'пятнадцатое');
        this.day.set(16,'шестнадцатое');
        this.day.set(17,'семнадцатое');
        this.day.set(18,'восемнадцатое');
        this.day.set(19,'девятнадцатое');
        this.day.set(20,'двадцатое');
        this.day.set(21,'двадцать первое');
        this.day.set(22,'двадцать второе');
        this.day.set(23,'двадцать третье');
        this.day.set(24,'двадцать четвертое');
        this.day.set(25,'двадцать пятое');
        this.day.set(26,'двадцать шестое');
        this.day.set(27,'двадцать седьмое');
        this.day.set(28,'двадцать восьмое');
        this.day.set(29,'двадцать девятое');
        this.day.set(30,'трицатое');
        this.day.set(31,'тридцать первое');
    }
    createMasMonth(){
        this.month.set(0,'января');
        this.month.set(1,'февраля');
        this.month.set(2,'марта');
        this.month.set(3,'апреля');
        this.month.set(4,'мая');
        this.month.set(5,'июня');
        this.month.set(6,'июля');
        this.month.set(7,'августа');
        this.month.set(8,'сентября');
        this.month.set(9,'октября');
        this.month.set(10,'ноября');
        this.month.set(11,'декабря');
    }
    getStringDate(){
        return (`${this.day.get(this.getDate())} ${this.month.get(this.getMonth())}`);
    }
    checkDate(){
        let dateNow=new Date();
        if (dateNow.getDate()>this.getDate()) {
            return false;
        }
        return true;
    }
    checkYear(year) {
        if (year % 400 === 0) {
            return true;
        } else if ((year % 4 === 0) && (year % 100 !== 0)) {
            return true;
        } else {
            return false;
        }
    }
    getTypeOfYear(){
        if (this.checkYear(this.getFullYear())){
            console.log('Год высокосный')
        }
        console.log('Год не высокосный');
    }
    getNextDate(){

    }
}
let myDate=new ExtendedDate('2020-07-16');
console.log(myDate.getStringDate());
console.log(myDate.checkDate());
myDate.getTypeOfYear();