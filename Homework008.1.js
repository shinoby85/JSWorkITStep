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