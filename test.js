'use strict'
let myDayNow=new Date();
let weekday=new Array(7);
weekday=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
let ind=0;
do{
    if(!confirm(`Текущий день: ${weekday[myDayNow.getDay()+ind]}. Хотите увидеть следующий день?`))break;
    ind++;
    if ((myDayNow.getDay()+ind)>=7){
        ind=5-(myDayNow.getDay()+ind);
    }
}while(true);
