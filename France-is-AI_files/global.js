jQuery(document).ready(function($){$('.slider-testimonials').slick({dots:false,infinite:true,autoplay:true,autoplaySpeed:2500,speed:1500,mobileFirst:true,prevArrow:'<i class="fa fa-chevron-left btn-slider" aria-hidden="true"></i>',nextArrow:'<i class="fa fa-chevron-right btn-slider" aria-hidden="true"></i>',slidesToShow:1,slidesToScroll:1,});if($('.slider-partenaires').length>0){$('.slider-partenaires').each(function(i){var slidesToShowSM=2;var slidesToShowMD=3;var slidesToShowLG=4;var slidesToShowXL=5;var childElements=$(this).children().length;if(childElements>1){if(slidesToShowXL>(childElements-1)){slidesToShowXL=childElements-1;if(slidesToShowLG>(childElements-1)){slidesToShowLG=childElements-1;if(slidesToShowMD>(childElements-1)){slidesToShowMD=childElements-1;if(slidesToShowSM>(childElements-1)){slidesToShowSM=childElements-1;}}}}
var resp=[{breakpoint:1400,settings:{slidesToShow:slidesToShowXL}},{breakpoint:1200,settings:{slidesToShow:slidesToShowLG}},{breakpoint:1000,settings:{slidesToShow:slidesToShowMD}},{breakpoint:600,settings:{slidesToShow:slidesToShowSM}}];}else{var resp=[{breakpoint:1400,settings:{slidesToShow:slidesToShowXL}}];}
$(this).slick({dots:true,infinite:true,autoplay:true,autoplaySpeed:2000,speed:1500,arrows:false,mobileFirst:true,slidesToShow:1,slidesToScroll:1,responsive:resp});});}
if($('.video').length){$('.video').each(function(){var $recouvrementVideo=$(this).find('.recouvrement-video');if($(this).find('.video-youtube iframe').length&&$(this).find('.recouvrement-video').length){$recouvrementVideo.on('click',function(){$(this).parent().find('iframe')[0].src+="&autoplay=1";$(this).hide();});}else if($(this).find('.video-simple video').length&&$(this).find('.recouvrement-video').length){$recouvrementVideo.on('click',function(){$(this).parent().find('video').attr("controls","controls");$(this).parent().find('video')[0].play();$(this).hide();});}});}
if($('#table').length){$('#table').DataTable({paging:false,info:false,autoWidth:false,responsive:true});}});