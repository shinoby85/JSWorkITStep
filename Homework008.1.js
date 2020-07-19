'use strict';
/*
    Задание 1.
 */
let pattern=/\d/g;
ibName.oninput=function (e) {
        e.target.value=e.target.value.replace(pattern,'');
}
/*
    Задание 2.
 */
let body=document.getElementsByTagName('body')[0];
let openWindow=false;
modal.onclick=function () {
        if(!openWindow) {
                openWindow = true;
                darkWin.style.display = 'block';
                modalBlock.classList.add('modalShow');
                modalBlock.classList.remove('animate__zoomOut');
                modalBlock.classList.add('animate__zoomIn');
        }
}
modalClose.onclick=function () {
        openWindow=false;
        darkWin.style.display = 'none';
        modalBlock.classList.remove('animate__zoomIn');
        modalBlock.classList.add('animate__zoomOut');
        setTimeout(function () {
                modalBlock.classList.remove('modalShow');
        },2000);
}
/*
        Задание 3.
 */
let wSize=field.clientWidth;
let hSize=field.clientHeight;
field.onclick=function (e) {
        if(e.target.closest('div')){
                let target = e.target.closest('div');
                let targetCoords = target.getBoundingClientRect();
                let xCoord = e.clientX - targetCoords.left;
                let yCoord = e.clientY - targetCoords.top;
                if (xCoord>=wSize-ball.clientWidth){
                        ball.style.left=`${wSize-ball.clientWidth}px`;
                }
                else if (xCoord<=ball.clientWidth){
                        ball.style.left=`0px`;
                }
                else{
                        ball.style.left=`${xCoord-ball.clientWidth/2}px`
                }
                if (yCoord>=hSize-ball.clientWidth){
                        ball.style.top=`${hSize-ball.clientWidth}px`;
                }
                else if (yCoord<=ball.clientWidth){
                        ball.style.top=`0px`;
                }
                else{
                        ball.style.top=`${yCoord-ball.clientWidth/2}px`
                }
        }
}