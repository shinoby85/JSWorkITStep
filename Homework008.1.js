'use strict';
/*
    Задание 1.
 */
let pattern = /\d/g;
ibName.oninput = function (e) {
    e.target.value = e.target.value.replace(pattern, '');
}
/*
    Задание 2.
 */
let body = document.getElementsByTagName('body')[0];
let openWindow = false;
modal.onclick = function () {
    if (!openWindow) {
        openWindow = true;
        darkWin.style.display = 'block';
        modalBlock.classList.add('modalShow');
        modalBlock.classList.remove('animate__zoomOut');
        modalBlock.classList.add('animate__zoomIn');
    }
}
modalClose.onclick = function () {
    openWindow = false;
    darkWin.style.display = 'none';
    modalBlock.classList.remove('animate__zoomIn');
    modalBlock.classList.add('animate__zoomOut');
    setTimeout(function () {
        modalBlock.classList.remove('modalShow');
    }, 2000);
}
/*
        Задание 3.
 */
let wSize = field.clientWidth;
let hSize = field.clientHeight;
field.onclick = function (e) {
    let targetCoords = e.target.getBoundingClientRect();
    let xCoord = e.clientX - targetCoords.left;
    let yCoord = e.clientY - targetCoords.top;
    if (xCoord >= wSize - ball.clientWidth) {
        ball.style.left = `${wSize - ball.clientWidth}px`;
    } else if (xCoord <= ball.clientWidth) {
        ball.style.left = `0px`;
    } else {
        ball.style.left = `${xCoord - ball.clientWidth / 2}px`
    }
    if (yCoord >= hSize - ball.clientHeight) {
        ball.style.top = `${hSize - ball.clientHeight}px`;
    } else if (yCoord <= ball.clientHeight) {
        ball.style.top = `0px`;
    } else {
        ball.style.top = `${yCoord - ball.clientHeight / 2}px`
    }

}
/*
    Задание 4.
 */
let reverse=false;
let lightIndex=1;
btnNext.onclick=function () {
    document.getElementById(`light-${lightIndex}`).classList.add('lightGrey');
    !reverse?lightIndex++:lightIndex--;
    document.getElementById(`light-${lightIndex}`).classList.remove('lightGrey');
    if (lightIndex===1)reverse=false;
    else if(lightIndex===3)reverse=true;
}
/*
    Задание 5.
 */
let item=document.querySelectorAll('.item');
item.forEach(item=>{
    item.addEventListener('click',function (e) {
        document.getElementsByClassName('checkItem')[0].classList.remove('checkItem');
        let elem=e.target.id.split('-')[1];
        document.getElementById(`item-${elem}`).classList.add('checkItem');
    })
});
/*
    Задание 6.
 */
let offSet=testBtn.getBoundingClientRect().top;