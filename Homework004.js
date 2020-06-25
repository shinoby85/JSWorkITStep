'use strict';
/*
    Задание 1.
    Создать массив «Список покупок». Каждый элемент массива является объектом,
    который содержит название продукта, необходимое количество и куплен или нет.
    Написать несколько функций для работы с таким массивом.

        1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты,
    а потом – купленные.
        2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим
    в списке продуктом, необходимо увеличивать количество в существующей покупке, а не
    добавлять новую.
        3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
 */

let productsList=[
    {
        name: 'potatoes',
        quantity: 5,
        status: 'buy'
    },
    {
        name: 'tomatoes',
        quantity: 2,
        status: 'bought'
    },
    {
        name: 'apples',
        quantity: 3,
        status: 'bought'
    },
    {
        name: 'carrot',
        quantity: 4,
        status: 'buy'
    },
    {
        name: 'orange',
        quantity: 5,
        status: 'buy'
    }
]
/**
 * Выводит список продукции в разрезе: куплен/отсутствует
 * @param products Массив со спиком продуктов
 */
let getAllProducts=function (products) {
    products.forEach(item=>{
        if (item.status==='bought'){
            console.log(`${item.name} - ${item.quantity} (товар куплен)`);
        }
    });
    products.forEach(item=>{
        if (item.status==='buy'){
            console.log(`${item.name} - ${item.quantity} (товар отсутствует)`);
        }
    });
}
/**
 * Добавляет новый продукт в список
 * @param products Массив с текущим списком продуктов
 */
let addProduct=function(products){
    let name=prompt('Введите наименование продукции').toLowerCase();
    let quantity=+prompt('Введите требуемое количество');
    let indexElem=products.findIndex(item=>{
        if(item.name===name){
            return true;
        }
    });
    if (indexElem!==-1){
        products[indexElem].quantity+=quantity;
        products[indexElem].status='buy';
    }
    else{
        products.push({
            ['name']:name,
            ['quantity']:quantity,
            ['status']:'buy'
        });
    }
}
/**
 * Устанавливает статус товара в "куплен" (bought)
 * @param products Текущий список товара
 */
let changeStatus=function(products){
    let name=prompt('Наименование продукта').toLowerCase();
    products.map(item=>{
        if(item.name===name){
            item.status='bought';
        }
    })
}

getAllProducts(productsList);
console.log('************************************');
addProduct(productsList);
getAllProducts(productsList);
console.log('************************************');
changeStatus(productsList);
getAllProducts(productsList);
console.log('************************************');

