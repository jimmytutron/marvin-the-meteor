// JavaScript Document
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(window).scroll(function () {
    $('#bubble').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < 300) {
            $(this).stop().fadeTo('slow', 0);
        } else {
            $(this).stop().fadeTo('slow', 1);
        }
    });
    $('#meteor, #adventure').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < 380) {
            $(this).stop().fadeTo('slow', 0);
        } else {
            $(this).stop().fadeTo('slow', 1);
        }
    });
    $('#cloud, #cloud3').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < 50) {
            $(this).stop().fadeTo('slow', 0.1);
        } else {
            $(this).stop().fadeTo('slow', 1);
        }
    });	
//	$('#ID .class').each(function () {
//        if (($(this).offset().top - $(window).scrollTop()) < xx) {
//            $(this).stop().fadeTo('slow', 0);
//        } else {
//            $(this).stop().fadeTo('slow', 1);
//        }
//    });

var x= $(window).scrollTop();
$('#cloud').css({top: 1000 + x*0.5});
});

var window_width = $(window).width() - $('#comet').width();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_right = window_width * 2.5 * (scroll_position / document_height);
        $('#comet').css({
            'right': object_position_right
        });
    });
});
	

$(window).scroll(function() {
    $("div#vert_counter").text("px:" +$(window).scrollTop());});
	
		$(window).scroll(function() {
    $("div#hrz_counter").css({
        "left": $(window).scrollTop() + "px"
    }).text("px:"+$(window).scrollTop());
});