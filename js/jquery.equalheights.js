/*parsed HTML*/
$(function(){
	$(".maxheight").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight2").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
    $(".maxheight3").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})


})
/*add event*/
$(window).bind("resize", height_handler).bind("load", height_handler)
function height_handler(){
	if($(window).width()>465){
		$(".maxheight").equalHeights();
	}else{
		$(".maxheight").equalHeights();
	}
	if($(window).width()>740){
		$(".maxheight2").equalHeights();
	}else{
		$(".maxheight2").equalHeights();
	}
    if($(window).width()>740){
		$(".maxheight3").equalHeights();
	}else{
		$(".maxheight3").equalHeights();
	}

}
/*glob function*/
(function($){
	$.fn.equalHeights=function(minHeight,maxHeight){
		tallest=(minHeight)?minHeight:0;
		this.each(function(){
			if($(">.box_inner", this).outerHeight()>tallest){
				tallest=$(">.box_inner", this).outerHeight()
			}
		});
		if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
		return this.each(function(){$(this).height(tallest)})
	}
})(jQuery)
