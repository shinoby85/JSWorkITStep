'use strict';
let arr = [4, 2, 7, 9, 4, 8, 6];

let oddSum=arr.reduce((sum,item)=>{item%2!==0?sum+item:sum},0);

console.log(oddSum);


