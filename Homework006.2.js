'use strict';
/*
Задание 2
Реализовать класс, описывающий html элемент. Класс HtmlElement должен содержать внутри себя:
■ название тега;
■ самозакрывающийся тег или нет;
■ текстовое содержимое;
■ массив атрибутов;
■ массив стилей;
■ массив вложенных таких же тегов;
■ метод для установки атрибута;
■ метод для установки стиля;
■ метод для добавления вложенного элемента в конец теку-
щего элемента;
■ метод для добавления вложенного элемента в начало те-
кущего элемента;
■ метод getHtml(), который возвращает html код в виде
строки, включая html код вложенных элементов.
 */
class Tags {
    constructor(options) {
        this.tagNames=options.tagNames;
        this.autoClosed=options.autoClosed;
        this.text=options.text;
        this.tagAttributes=[];
        this.tagStyles=[];
        this.tagIncludes=[];
        this.tagIncludesPosition=[];
    }
    setAttributes(...other){
        other.forEach(item=>this.tagAttributes.push(item));
    }
    setStyles(...other){
        other.forEach(item=>this.tagStyles.push(item));
    }
    setTagIncludes(newTagMas,position){
        this.tagIncludes.push(newTagMas);
        this.tagIncludesPosition.push(position);
    }
    addTopTag(){
        return this.tagIncludes.filter((item,index)=>this.tagIncludesPosition[index]===0);
    }
    addBottomTag(){
        return this.tagIncludes.filter((item,index)=>this.tagIncludesPosition[index]===1);
    }
    createHtmlCode(element){
        let str=`<${element.tagNames} `;
        element.tagAttributes.forEach(item=>str+=item+" ");
        str+='style="';
        element.tagStyles.forEach(item=>str+=item+";");
        str+='"> ';
        let topTag=element.addTopTag();
        if (topTag.length!==0){
            topTag.forEach(item=>str+=element.createHtmlCode(item));
        }

        str+=` ${element.text} `;

        let bottomTag=element.addBottomTag();
        if (bottomTag.length!==0){
            bottomTag.forEach(item=>str+=element.createHtmlCode(item));
        }
        str+=` </${element.tagNames}>`;
        return str;

    }
    getHtml(){
        document.write(`${this.createHtmlCode(this)}`);

    }
}
let div=new Tags({
    tagNames: 'div',
    autoClosed:true,
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam, aliquid amet animi architecto asperiores\n" +
        "aut consequatur culpa cum cumque dolores esse eum excepturi hic iusto laboriosam libero obcaecati odit porro quo\n" +
        "reiciendis reprehenderit rerum sequi suscipit temporibus totam voluptates voluptatum! Alias culpa cum dolor fuga fugit\n" +
        "incidunt labore molestiae."
});
div.setAttributes('id="article-1"','class="article"');
div.setStyles('font-size: 15px','font-style: italic','color: green','margin: 20px','width: 1400px','min-height: 700px');

let h2=new Tags({
    tagNames: 'h2',
    autoClosed:true,
    text: "My new title"
});
h2.setAttributes('id="block-title"','class="title"');
h2.setStyles('color: orangered');
div.setTagIncludes(h2,0);

let ul=new Tags({
    tagNames: 'ul',
    autoClosed:true,
    text: ""
});
ul.setAttributes('id="menu"');

let li1=new Tags({
    tagNames: 'li',
    autoClosed:true,
    text: "Item-1"
});

li1.setAttributes('class="menu-item"');
li1.setStyles('border: 1px solid darkslateblue','color: purple','font-size: 13px');
ul.setTagIncludes(li1,0);
let li2=new Tags({
    tagNames: 'li',
    autoClosed:true,
    text: "Item-2"
});

li2.setAttributes('class="menu-item"');
li2.setStyles('border: 1px solid darkslateblue','color: purple','font-size: 13px');
ul.setTagIncludes(li2,0);
let li3=new Tags({
    tagNames: 'li',
    autoClosed:true,
    text: "Item-3"
});

li3.setAttributes('class="menu-item"');
li3.setStyles('border: 1px solid darkslateblue','color: purple','font-size: 13px');
ul.setTagIncludes(li3,0);
div.setTagIncludes(ul,1);

div.getHtml();