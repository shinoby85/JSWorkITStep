'use strict';

/*Задание 3
Реализовать класс, который описывает css класс. Класс CssClass должен содержать внутри себя:
    ■ название css класса;
    ■ массив стилей;
    ■ метод для установки стиля;
    ■ метод для удаления стиля;
    ■ метод getCss(), который возвращает css код в виде строки.
*/
class CssClass {
    constructor(options) {
        this.name = options.name;
        this.style = [];
    }

    setStyle(newStyle) {
        this.style.push(newStyle);
    }

    delStyle(removeStyle) {
        let index = this.style.findIndex(item => item[removeStyle]!==undefined);
        this.style.splice(index, 1);
    }

    getCss() {
        let str = `.${this.name}{`;
        this.style.forEach(item=>{
            for (let elem in item){
                str+=`${elem}:${item[elem]};`;
            }
        });
        str+='}';
        return str;
    }
}
let cssCode=new CssClass({
    name:'header'
});
cssCode.setStyle({'color': 'purple'});
cssCode.setStyle({'font-size': '13px'});
cssCode.setStyle({'margin': '20px'});
console.log(cssCode.getCss());
cssCode.delStyle('font-size');
console.log(cssCode.getCss());
