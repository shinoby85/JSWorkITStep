'use strict';
/*
    Задание 1. Реализовать класс Button, который содержит ширину, высоту,
    текст кнопки и метод showBtn(), который выводит кнопку на экран с помощью тега button
    и функции document.write(). Реализовать класс BootstrapButton, унаследовав его от класса Button.
    Добавить поле color и переопределить метод showBtn() так, чтобы кнопка выводилась со стилями и указанным цветом.
 */

class Button {
    constructor(operation) {
        this.width = operation.width;
        this.height = operation.height;
        this.textButton = operation.textButton;
    }

    showBtn (){
        document.write(`<button style="width: ${this.width}; height: ${this.height}">${this.textButton}</button>`);
    }
}

class BootstrapButton extends Button {
    constructor(operation) {
        super(operation);
        this.color = operation.color;
    }

    showBtn (){
        document.write(`<button style="width: ${this.width}; height: ${this.height}; color: ${this.color}">${this.textButton}</button>`);
    }
}

let btn=new BootstrapButton({
    width: '60px',
    height: '30px',
    textButton: 'Hello world!!!',
    color: 'green'
});

btn.showBtn();


/*
    Задание 2 Реализовать класс, описывающий геометрическую фигуру со свойствами и методами:
    ■ get-свойство для получения названия фигуры;
    ■ метод для вывода информации о фигуре (стороны и их длина);
    ■ метод для вычисления площади фигуры;
    ■ метод для вычисления периметра фигуры.
    Реализуйте классы-наследники: квадрат, прямоугольник и треугольник.
    Переопределите методы вывода и вычислений в классах-наследниках.
    Создайте массив с различными фигурами и выведите информацию о каждой фигуре, включая площадь и периметр.
 */

class Figure {
    constructor(operation) {
        this.figureName = operation.figureName;
        this.side = operation.side;
    }

    get fgName() {
        return '*** '+this.figureName+' ***';
    }

    getSides() {
        return this.side;
    }

    getArea() {
        return this.side ** 2;
    }

    getPerimetr() {
        return this.side * 4;
    }
}

class Square extends Figure {
    constructor(operation) {
        super(operation);
    }
    getData(){
        document.write(`<div><h2>${this.fgName}</h2>
            <p>Сторона: ${this.side}</p>
            <p>Площадь: ${super.getArea()}</p>
            <p>Периметр: ${super.getPerimetr()}</p>
            </div>`);
    }
}

class Rectangle extends Figure{
    constructor(operation) {
        super(operation);
        this.secondSide=operation.secondSide;
    }
    getSides() {
        return [this.side,this.secondSide];
    }
    getArea() {
        return this.side*this.secondSide;
    }
    getPerimetr() {
        return this.side*2+this.secondSide*2;
    }
    getData(){
        document.write(`<div><h2>${this.fgName}</h2>
            <p>Стороны: ${this.getSides()[0]} и ${this.getSides()[1]}</p>
            <p>Площадь: ${this.getArea()}</p>
            <p>Периметр: ${this.getPerimetr()}</p>
            </div>`);
    }
}
class Triangle extends Figure{
    constructor(operation) {
        super(operation);
        this.secondSide=operation.secondSide;
        this.thirdSide=operation.thirdSide;
    }
    getSides() {
        return [this.side,this.secondSide,this.thirdSide];
    }
    getArea() {
        let p=(Number(this.side)+Number(this.secondSide)+Number(this.thirdSide))/2;
        return Math.sqrt(p*(p-this.side)*(p-this.secondSide)*(p-this.thirdSide));
    }
    getPerimetr() {
        return Number(this.side)+Number(this.secondSide)+Number(this.thirdSide);
    }
    getData(){
        document.write(`<div><h2>${this.fgName}</h2>
            <p>Стороны: a=${this.getSides()[0]}, b=${this.getSides()[1]}, c=${this.getSides()[2]}</p>
            <p>Площадь: ${this.getArea()}</p>
            <p>Периметр: ${this.getPerimetr()}</p>
            </div>`);
    }
}
let square=new Square({
    figureName:'Квадрат',
    side: 25
});
let rect=new Rectangle({
    figureName: 'Прямоугольник',
    side: 25,
    secondSide: 50
});
let triangle=new Triangle({
    figureName: 'Треугольник',
    side: 20,
    secondSide: 20,
    thirdSide: 30
});
square.getData();
rect.getData();
triangle.getData();