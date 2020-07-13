'use strict';
/*
    Задание 1
    Реализовать класс, описывающий простой маркер.  В классе должны быть следующие компоненты:
    ■ поле, которое хранит цвет маркера;
    ■ поле, которое хранит количество чернил в маркере (в процентах);
    ■ метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех
пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
    Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки
маркера.
    Продемонстрировать работу написанных методов.
 */
class Marker{
    constructor(options) {
        this.color=options.color;
        this.filling=options.filling;
        this.textPosition=0; //До какого символа выведен текст
        this.saveText=''; //Сохранение переданного текста до запраки маркера, для окончания вывода
        this.strHTML='';  //Сохранение сформированного кода HTML до заправки маркера
    }
    writeText(text){
        //Проверка наличия текста для завершения печати
        if (this.saveText!==''){
            text=this.saveText;
        }
        //Позволяет начать новую печать строки если прошлое задание завершено
        if(this.strHTML==='') {
            this.strHTML = `<p style="color: ${this.color};">`;
        }
        text.split('').forEach((item,index)=>{
            if(this.textPosition===index) {
                if (item !== ' ') {
                    this.filling-=0.5;
                }
                if (this.filling>=0) {
                    this.strHTML += item;
                    this.textPosition = index+1;
                }
            }
        });
        //Соответствеут ли строка количеству напечатанных символов(хватило ли чернил)
        if(text.length===this.textPosition){
            this.textPosition=0;
            this.saveText='';
            this.strHTML+='</p>';
            document.write(this.strHTML);
            this.strHTML='';
        }
        else {
            this.saveText=text;
            console.log(`В маркере закончились чернила. Нужна заправка`);
        }
    }
}
class NewMarker extends Marker{
    constructor(options) {
        super(options);
    }
    refillMarker(){
        this.filling=100;
    }
}
let marker=new NewMarker({
    color:'green',
    filling:25
});
marker.writeText('Lorem ipsum dolor sit amet');
marker.writeText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias architecto autem distinctio dolor\n' +
    'ducimus eum fugiat id impedit molestias mollitia, omnis perspiciatis quibusdam quidem quisquam ratione reprehenderit\n' +
    'voluptatum?');
marker.refillMarker();
marker.writeText();
