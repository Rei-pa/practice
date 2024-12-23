//身體點換的函式

function bodychange(){
    $('.selector__body').hover(function(){
        imgNum= $(this).index()+1;
        $(this).children().attr("src","img/makeimg/M-bodyshape"+ imgNum +"-2.svg");
    },function(){
        $(this).children().attr("src","img/makeimg/M-bodyshape"+ imgNum +".svg");
    });
}

//Popup點換的函式
function Popupchange(){
    $('.popup__icon').hover(function(){
        imgNum= $(this).index()+1;
        $(this).children('img').attr("src","img/makeimg/M-popicon-0"+ imgNum +"-2.svg");
    },function(){
        $(this).children('img').attr("src","img/makeimg/M-popicon-0"+ imgNum+".svg");
    });
}

// $(document).ready(function()
$(function(){
    var imgNum= 0; //宣告一個變數為index
    bodychange();
    Popupchange();
});