$(function(){
    $('.owl-carousel').each(function () {
        $(this).owlCarousel({
            loop: false,
            margin: 15,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 4,
                }
            },
        });

        $(this).siblings().find('.next').click(function () {
            $(this).parent().siblings('.owl-carousel').trigger('next.owl.carousel');
        });
        $(this).siblings().find('.prev').click(function () {
            $(this).parent().siblings('.owl-carousel').trigger('prev.owl.carousel');
        });
    });
    function showMon(){
        var card = document.querySelectorAll('.product');
    for (var i = 0; i < card.length; i++) {
        card[i].onmouseenter = function () {
            let grandpa = this.parentNode.parentNode.parentNode.parentNode;
            let fa = this.parentNode.parentNode.parentNode;
            if (grandpa.firstElementChild.className.indexOf("monAni") > -1 && grandpa.firstElementChild.nextElementSibling.className.indexOf("monAni") > -1) {
                return false;
            } else {
                var theLeft = this.getBoundingClientRect().left;
                var theWidth = window.getComputedStyle(this.parentNode, null).getPropertyValue("width");
                var theGrandpaLeft = grandpa.getBoundingClientRect().left;

                bot = 85;

                monImg = document.createElement("img");
                monImg.src = "img/shop-img/mon7.png";

                monDiv = document.createElement("div");
                monDiv.style.width = "80px";
                monDiv.style.position = "absolute";
                monDiv.className = "monAni";
                monDiv.style.left = (parseInt(theLeft) - parseInt(theGrandpaLeft) + parseInt(theWidth) / 2 - parseInt(monDiv.style.width) / 2) + "px";
                monDiv.style.bottom = bot + "%";

                monDiv.appendChild(monImg);
                grandpa.insertBefore(monDiv, fa);

                function monAniUp() {

                    if (bot < 93) {
                        bot += 1.5;
                        monDiv.style.bottom = bot + "%";
                        setTimeout(monAniUp, 1);
                    } else {
                        clearTimeout(theTimer);
                        monDiv.className += " bounceMon";
                    }

                }
                theTimer = setTimeout(monAniUp, 5);
            }
        };

        card[i].onmouseleave = function () {
            theNode = this.parentNode.parentNode.parentNode.parentNode.firstElementChild;
            function monAniDown() {

                if (bot > 85) {
                    bot -= 1;
                    theNode.style.bottom = bot + "%";
                    setTimeout(monAniDown, 3);
                } else {
                    clearTimeout(theTimer2);
                    if (theNode.className.indexOf("monAni") > -1) {
                        theNode.parentNode.removeChild(theNode);
                    }

                }
            }
            theTimer2 = setTimeout(monAniDown, 5);
        };

    }
    }
    



    $(".DD-default").each(function () {
        $(this).addClass("rubberBand");
    }   );

    if(document.body.clientWidth > 768){
        showMon();
    }

    $(window).resize(function(){
        if(document.body.clientWidth > 768){
            showMon();
        }
    })
})
    


