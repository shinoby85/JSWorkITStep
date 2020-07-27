'use strict';
/*
    Задание 1.
 */
trackPoint.ondragstart = function() {
    return false;
};
let movePoint=false;
trackPoint.onmousedown = function (e) {
    movePoint=true;
    moveAt(e.clientX);

    function moveAt(clientX) {
        let distLeftBar=trackBar.getBoundingClientRect().left+trackBar.clientLeft+trackPoint.clientHeight / 2;
        let distRightBar=distLeftBar+trackBar.clientWidth;
        if (clientX<=distLeftBar){
            trackPoint.style.left='0px';
        }
        else if(clientX>=distRightBar-trackBar.clientLeft+trackPoint.clientHeight / 2){
            trackPoint.style.left=trackBar.clientWidth-trackPoint.clientHeight*3/4+'px';
        }
        else {
            trackPoint.style.left = clientX - trackBar.getBoundingClientRect().left - trackBar.clientLeft - trackPoint.clientHeight / 2 + 'px';
        }
    }

    function onMouseMove(e) {
        moveAt(e.clientX);
    }
    document.addEventListener('mousemove',onMouseMove);
    document.onmouseup=function () {
        if(movePoint) {
            movePoint=false;
            document.removeEventListener('mousemove', onMouseMove);
            trackPoint.onmouseup = null;
        }
    }
}

/*
    Задание 2.
 */
const imgMas=['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg','img/img-4.jpg','img/img-5.jpg'];
function moveSlide(mas,moveside){
    let imgPosition=Number(slideImg.dataset.img.split('-')[1]);
    if(!moveside){
        imgPosition--;
        imgPosition=imgPosition<0?0:imgPosition;
    }
    else{
        imgPosition++;
        imgPosition=imgPosition===mas.length?mas.length-1:imgPosition;
    }
    slideImg.dataset.img='img-'+imgPosition;
    slideImg.src=imgMas[imgPosition];

}
btnLeft.onclick=function () {
    moveSlide(imgMas,false);
}
btnRight.onclick=function () {
    moveSlide(imgMas,true);
}
/*
    Задание 3
 */
let detIndex;
let openBlock=function(e){
    if (detIndex!==undefined && detIndex!==e.target.parentNode){
        detIndex.open=false;
    }
    detIndex=e.target.parentNode;
}
let allDetails=document.querySelectorAll('.dtText');
allDetails.forEach(item=>item.addEventListener('click',openBlock));
/*
    Задание 4.
 */
allNews.onscroll=function () {
    let allNews=document.getElementById('allNews');
    let lastChild=allNews.children[allNews.children.length-1];
    // let coordBlockSize=allNews.getBoundingClientRect().height;
    // let coordChildBottom=lastChild.getBoundingClientRect().y;
    let test=lastChild.getBoundingClientRect().bottom-allNews.getBoundingClientRect().bottom;
    if (test<0){
        let contentNews=document.querySelectorAll('.content-news');
        for (let num=contentNews.length,ind=0;num<masNews.length, ind<2;num++,ind++) {
            inputNews(masNews[num], num + 1)
        }
    }

}

function inputNews(newsObj,num) {
    let blockNews=document.createElement('div');
    blockNews.classList.add('content-news')
    blockNews.id=`news-${num}`;
    let title=document.createElement('div');
    title.classList.add('title');
    title.innerText=newsObj.title;
    blockNews.appendChild(title);

    let content=document.createElement('div')
    content.classList.add('news-content');
    content.innerText=newsObj.content;
    blockNews.appendChild(content);
    //let allNews=document.getElementById('allNews');
    allNews.append(blockNews);
}