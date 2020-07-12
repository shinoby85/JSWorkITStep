'use strict';
/*
    Задание 1.
    Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
        ■ поле, хранящее радиус окружности;
        ■ get-свойство, возвращающее радиус окружности;
        ■ set-свойство, устанавливающее радиус окружности;
        ■ get-свойство, возвращающее диаметр окружности;
        ■ метод, вычисляющий площадь окружности;
        ■ метод, вычисляющий длину окружности.
    Продемонстрировать работу свойств и методов...
 */
class Circle{
    constructor() {
        this.radius=0;
        this.pi=3.14;
    }
    get fgRadius(){
        return  this.radius;
    }
    set fgRadius(value){
        this.radius=value;
    }
    get fgDiametr(){
        return this.radius*2;
    }
    getAria(){
        return this.pi*Math.pow(this.radius,2);
    }
    getLengthOfCircle(){
        let result=2*this.pi*this.radius;
        return Math.floor(result*100)/100;
    }
}
const circle=new Circle();
console.log(circle.fgRadius);
circle.fgRadius=5;
console.log(circle.fgRadius);
console.log(circle.fgDiametr);
console.log(circle.getAria());
console.log(circle.getLengthOfCircle());

