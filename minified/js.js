$(".slider").each(function(){var e,i=$(this),s=i.find(".slide_group"),t=i.find(".slide"),c=0;function n(e){var i,n;l(),s.is(":animated")||c===e||(i=c<e?(n="100%","-100%"):(n="-100%","100%"),t.eq(e).css({display:"block",left:n}),s.animate({left:i},function(){t.eq(c).css({display:"none"}),t.eq(e).css({left:0}),s.css({left:0}),c=e}))}function l(){clearTimeout(e),e=setTimeout(function(){c<t.length-1?n(c+1):n(0)},4e3)}l()});