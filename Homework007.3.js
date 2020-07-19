'use strict';
/*
    Задание 3
    Реализовать класс Employee, описывающий работника, и создать массив работников банка.
    Реализовать класс EmpTable для генерации html кода таблицы со списком работников банка. Массив работников необходимо
передавать через конструктор, а получать html код с помощью метода getHtml().
    Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
 */
class Employee{
    constructor(options) {
        this.name=options.name;
        this.surname=options.surname;
        this.birthday=options.birthday;
        this.sex=options.sex;
        this.profession=options.profession;
        this.aducation=options.aducation;
        this.phone=options.phone;
        this.email=options.email;
    }
}
class EmpTable{
    constructor(options) {
        this.masEmployee=[];
        options.forEach(item=>this.masEmployee.push(item));
    }
    createHtml(){
        let strHTML=`<table id="workers" style="border: border: 1px solid #000; border-spacing: 0;">
            <tr>
            <th style="border: 1px solid #000;">Фамилия</th>
            <th style="border: 1px solid #000;">Имя</th>
            <th style="border: 1px solid #000;">Дата рождения</th>
            <th style="border: 1px solid #000;">Пол</th>
            <th style="border: 1px solid #000;">Образование</th>
            <th style="border: 1px solid #000;">Должность</th>
            <th style="border: 1px solid #000;">Номер телефона</th>
            <th style="border: 1px solid #000;">Электронный адрес</th>
            </tr>`;
        this.masEmployee.forEach(item=>{
            let str=`<tr>
                <td style="border: 1px solid #000;">${item.surname}</td>
                <td style="border: 1px solid #000;">${item.name}</td>
                <td style="border: 1px solid #000;">${item.birthday}</td>
                <td style="border: 1px solid #000;">${item.sex}</td>
                <td style="border: 1px solid #000;">${item.aducation}</td>
                <td style="border: 1px solid #000;">${item.profession}</td>
                <td style="border: 1px solid #000;">${item.phone}</td>
                <td style="border: 1px solid #000;">${item.email}</td>
            </tr>`;
            strHTML+=str;
        });
        strHTML+='</table>';
        return strHTML;
    }
    getHtml(){
        document.write(this.createHtml());
    }
}
let kol=7;
let masEmploy=[];
for (let i=0;i<=kol;i++){
    let employee = new Employee({
        name: `Name-${i+1}`,
        surname: `Surname-${i+1}`,
        birthday:'25-03-1992',
        sex: 'M',
        aducation: 'High',
        profession: 'Engineer',
        phone:`+37529745896${i}`,
        email:'kdfjn@ttt.ru'

    });
    masEmploy.push(employee);
}
let workTable=new EmpTable(masEmploy);
workTable.getHtml();
