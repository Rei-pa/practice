

$(function(){ // $(document).ready(function()
        // 此處是TweenMax動畫 記得要引入cdn
        // ort = new TimelineMax({
        //     repeat:-1,
        //     repeatDelay:3,
        // });
        // ort.to('.mownster__egg',0.25, {
        //     rotation:5,
        //     repeat:1,
        //     y:-30,
        //     yoyo: true,
        //     transformOrigin:"bottom center"
        // }).to('.mownster__egg',0.25, {
        //     rotation:-5,
        //     repeat:1,
        //     y:-30,
        //     yoyo: true,
        //     delate:0.25,
        //     transformOrigin:"bottom center"
        // });

            

    //宣告一個變數為index
    $('.selector__body').click(function(){
        imgNum= $(this).index()+1;
        // 選擇到的那一個先移除"原先Class"再新增"被選的Class" 前兄弟元件也移除"被選的Class"
        for(i=1;i<=5;i++){
            $('.sample').removeClass("bodyshape"+i);
        };
        $('.sample').removeClass("dis-n").addClass("bodyshape"+imgNum);
        $('.img--Gradation ').removeClass("dis-n").attr("src","img/makeimg/M-bodyshape"+ imgNum+".svg");
        $('.mownster__bodyposition img').attr("src","img/makeimg/M-bodyshape"+ imgNum +"-2.svg");
        //同時換遮罩移除所有的class增加兩個class
        $('.mownster__clip'). removeClass().addClass('mownster__clip clip'+imgNum);
        $('.org').css("display","none");
        $('.mownster__confirm'). removeClass('btn--disabled');
        
        for(i=1;i<=5;i++){
            $('.mownster__egg').removeClass('animove'+i);
        };
        $('.mownster__egg').addClass('animove'+imgNum)
        
        

        // switch (imgNum) {
        //     case 1:
        //         ort.kill();
        //         //拔掉預設動畫
        //         document.querySelector('.mownster__egg').style.transform ="matrix(1,0,0,1,0,0)"; 
        //         //強制回到原點吃不到
        //         var tis = new TimelineMax({repeat:1});
        //         tis.to('.mownster__egg',0.15, {
        //             rotation:5,
        //             repeat:1,
        //             yoyo: true,
        //             transformOrigin:"bottom center"
        //         }).to('.mownster__egg',0.15, {
        //             rotation:-5,
        //             repeat:1,
        //             yoyo: true,
        //             delate:0.15,
        //             transformOrigin:"bottom center"
        //         });
        //         break;
        //     case 2:
        //         ort.kill();
        //         TweenMax.to('.mownster__egg',0.25,{
        //             y:"-=50",
        //             repeat:3,
        //             yoyo: true,
        //         })
        //         break;
        //     case 3:
        //         ort.kill();
        //         var tis = new TimelineMax({});
        //         tis.to('.mownster__egg',0.15, {
        //             x:'-=20',
        //             repeat:1,
        //             yoyo: true,
        //         }).to('.mownster__egg',0.15, {
        //             x:'+=20',
        //             repeat:1,
        //             yoyo: true,
        //             delate:0.15,
        //         });
                
        //         break;
        //     case 4:
        //         ort.kill();
        //         var tis = new TimelineMax({});
        //         tis.to('.mownster__egg',0.25, {
        //             y:'-=20',
        //             scaleX: -1,
        //             repeat:1,
        //             yoyo: true,
        //         })
        //         break;
        //     case 5:
        //         ort.kill();
        //         var tis = new TimelineMax({});
        //         tis.to('.mownster__egg',0.15, {
        //             y:'-=20',
        //             x:'-=20',
        //             repeat:1,
        //             yoyo: true,
        //         }).to('.mownster__egg',0.15, {
        //             y:-20,
        //             x:'+=20',
        //             repeat:1,
        //             yoyo: true,
        //             delate:0.15,
        //         });
        //         ort.kill();
        //         break;
        // }

    })

    
    //eyeschange
    $('.selector__eye').click(function(){
        choose=$(this).children().attr("src");
        // alert(choose);
        $('.mownster__eyesposition img').attr("src",choose);
        //有物件時才會有滑鼠指標
        $('.mownster__eyesposition ').addClass("move")
    })

    //mouthchange
    $('.selector__mouth').click(function(){
        choose=$(this).children().attr("src");
        // alert(choose);
        $('.mownster__mouthposition img').attr("src",choose);
        $('.mownster__mouthposition ').addClass("move")
    })

    //accessorychange
    $('.selector__accessory').click(function(){
        choose=$(this).children().attr("src");
        // alert(choose);
        $('.mownster__accessoryposition img').attr("src",choose);
        $('.mownster__accessoryposition ').addClass("move")
    })



})


