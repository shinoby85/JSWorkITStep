'use strict';
/*
Реализовать класс, описывающий новостную ленту. Класс должен содержать:
■ массив новостей;
■ get-свойство, которое возвращает количество новостей;
■ метод для вывода на экран всех новостей;
■ метод для добавления новости;
■ метод для удаления новости;
■ метод для сортировки новостей по дате (от последних новостей до старых);
■ метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег).
Продемонстрировать работу написанных методов.
 */
class Bands {
    constructor(option) {
        this.masBands=[];
        this.masBands.push({
            title:option.title,
            date:option.date,
            text:option.text,
            tags:option.tags
        });
    }
    get countBands(){
        return this.masBands.length;
    }
    getAllNews(){
        this.masBands.forEach(item=>{
            let textNews=`<div><h2>${item.title}</h2><p>${item.date}</p><p>${item.text}</p></div>`;
            document.write(textNews);
        });
    }
    addNews(obj){
        this.masBands.push({
            title:obj.title,
            text:obj.text
        });
    }
    delNews(num){
        this.masBands.splice(num-1,1);
    }
    sortNews(){
        this.masBands.sort((a,b)=>a.date<b.date?1:-1);
    }
}
