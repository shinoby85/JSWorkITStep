'use strict';
let btn=document.querySelectorAll('.btn');
let result=document.getElementById('calc-result');
let flag=false;
btn.forEach(item=>{
    item.addEventListener('click',function (e) {
        if (!flag){
            result.value='';
            flag=true;
        }
        let ch=e.target.innerText;
        if(ch!=='='){
            result.value+=ch;
        }
        else{
            if('disabled' in result.attributes) {
                let res = eval(result.value);
                result.value += '=' + res;
                flag = false;
            }
        }
    });
});