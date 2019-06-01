/*** Start Quantity ***/
function increaseValue(id) {
    var value = parseInt($('.number'+id).val(), 10);
    value = isNaN(value) ? 0 : value;
    value++;
    $('.number'+id).val(value);
}

function decreaseValue(id) {
    var value = parseInt($('.number'+id).val(), 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    $('.number'+id).val(value);
}
//////////////

function increaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
}

function decreaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number2').value = value;
}
////////////////

function increaseValue3() {
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number3').value = value;
}

function decreaseValue3() {
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number3').value = value;
}



//// Value color

/// number1
$(".number").change(function () {
    if ($(this).val() == 0) {
        $(".number").css("color", '#9E9E9E');
    } else {
        $(".number").css("color", '#A35194');
    }
});


$(".allac").click(function () {
    if ($(".number").val() == 0) {
        $(".number").css("color", '#9E9E9E');
    }
    //  else if ($("#number").val() > 0)   
    else {
        $(".number").css("color", '#A35194');
    }
});


/// number2
$(".number2").change(function () {
    if ($(this).val() == 0) {
        $(".number2").css("color", '#9E9E9E');
    } else {
        $(".number2").css("color", '#A35194');
    }
});


$(".allac2").click(function () {
    if ($(".number2").val() == 0) {
        $(".number2").css("color", '#9E9E9E');
    } else {
        $(".number2").css("color", '#A35194');
    }
});

/// number3
$(".number3").change(function () {
    if ($(this).val() == 0) {
        $(".number3").css("color", '#9E9E9E');
    } else {
        $(".number3").css("color", '#A35194');
    }
});


$(".allac3").click(function () {
    if ($(".number3").val() == 0) {
        $(".number3").css("color", '#9E9E9E');
    } else {
        $(".number3").css("color", '#A35194');
    }
});



///// Sum
$('input').keyup(function () {

    var firstValue = parseFloat($("#number").not( ".not" ).val()) || 0;
    var secondValue = parseFloat($("#number2").val()) || 0;
    var thirdValue = parseFloat($("#number3").val()) || 0;

    $('#added').html(firstValue + secondValue + thirdValue);
});

/*** End Quantity ***/



$(document).ready(function () {
    //    
    //    
    //    var divHeight = $('.prodd1').height(); 
    //    $('.tab-content').css('min-height', divHeight+'px');

    /*Start Input Image*/
    // ADD IMAGE
    $('.image-uploader').change(function (event) {
        $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="' + URL.createObjectURL(event.target.files[0]) + '"><button class="close">&times;</button></div>');
    });

    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close', function () {
        $(this).parents('.uploaded-block').remove();
    });
    /*End Input Image*/


    /***** Search Focus ***********/
    $('#search').on('shown.bs.modal', function () {
        $('#textareaID').focus();
    });

    /********* List Ang Grid View **************/
    $(".tabs-view i").click(function (e) {
        if ($(this).hasClass('list')) {
            $(".grid").removeClass("active");
            
            $(".products-content").addClass("lista");
            $(this).addClass("active");
            
        } else if ($(this).hasClass('grid')) {
            $(".products-content").removeClass("lista");
            $(this).addClass("active");
            $(".list").removeClass("active");
        }
    });


    /// loading website

    jQuery(window).load(function () {
        $(".loader").fadeOut(500, function () {
            $(".loading").fadeOut(500);
            $("body").css("overflow-y", "auto");
        });
    });


    /** Fixed Navbar **/
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 80) {
            $(".navbar").addClass('fixd-navbar');

        } else {
            $(".navbar").removeClass('fixd-navbar');

        }
    });


    /*** Close Notification ***/
    $(".notifi-ul .close").click(function () {
        $(this).closest(".notifi-ul li").fadeOut(500);
    });


    $(".profile .close").click(function () {
        $(this).closest(".talab1").fadeOut(500);
    });


    /************* Notification .HTML ****************/
    $(".notifi1 .close").click(function (e) {
        $(this).closest(".notifi1").fadeOut(500);
        e.preventDefault();
    });

    $(".read-now").click(function (e) {
        $(this).closest(".notifi1").removeClass("not-read", 700);
        e.preventDefault();
    });


    /************* Like Heart **************/
    $(".like").click(function () {
        $(this).toggleClass("red", 700);
    });

    /********* Add To Cart Badge Counter ***************/
    var itemCount = 0;

    $('.add-to-cart').click(function () {
        itemCount++;
        $('#itemCount').html(itemCount).css('display', 'block');
    });

    $('.clear').click(function () {
        itemCount = 0;
        $('#itemCount').html('').css('display', 'none');
        $('#cartItems').html('');
        $(".carts").fadeOut(700);
    });



    //////////////////////////////
    'use strict';

    var scrollButton,
        i,
        atr;

    scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });


    $("#scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });

    /* Start Smooth Scroll */
    $('.navbar a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


    $('.topNav-right a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $('.footer a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    /* End Smooth Scroll */

    var auth = $('meta[name="auth"]').prop('content');

    /****************** Add To Cart Fly *************/
    $('.add-to-cart').on('click', function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parents('.item').find(".imagee").eq(0);
        if (imgtodrag && auth) {
            var imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1000, 'easeInOutExpo');

            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });

    /// navbar button

    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        $(".navy").toggleClass("back");
        $(".body-overlay").toggleClass("back");
        $("body").toggleClass("body-over");
    });

    $(".body-overlay").click(function () {
        $(this).toggleClass("back");
        $('#nav-icon1').toggleClass('open');
        $(".navy").toggleClass("back");
        $("body").toggleClass("body-over");
    });


    /******** Branches *************/
    $(".centering").click(function () {
        $('.green').removeClass('green');
        $(this).addClass("green");
        //        $("this").siblings().children(".arrange").removeClass("green");

    });



    /*** Filtering **/
    $(".filter-two").slideUp();

    $(".filter-one").click(function () {

        $(this).next().slideDown(500);
        $(".filter-two").not($(this).next()).slideUp(500);

    });


    /************* Sha7n .HTML *****************/
    // Checkbox Value
    $('#local-div').slideUp();

    $('#id_radio1').click(function () {
        $('#local-div').slideDown('700');
    });

    $('#id_radio2').click(function () {
        $('#local-div').slideUp('700');
    });
    $('#id_radio3').click(function () {
        $('#local-div').slideUp('700');
    });



    /********** Add Class rotation to active li **********/
    //    $(".special .nav-tabs li.active").addClass('rotating');

    $('.special .nav-tabs li.active').addClass('rotating');
    $(function () {
        $('.special .nav-tabs li').on('click', function () {
            $(this).parent().find('li.active').removeClass('rotating');
            $(this).addClass('rotating');
        });
    });


});
