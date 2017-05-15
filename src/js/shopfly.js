$(function() {
	var offset = $(".top2_r .search>a").offset();
	$(".addcar").click(function(event){
		console.log(1111);
		var addcar = $(this);
		var img = addcar.parent().parent().parent().find('img').attr('src');
		var flyer = $('<img class="u-flyer" src="'+img+'">');
		flyer.fly({
			start: {
				left: event.pageX,
				top: event.pageY
			},
			end: {
				left: offset.left+10,
				top: offset.top+10,
				width: 0,
				height: 0
			},
			// onEnd: function(){
			// 	$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
			// 	addcar.css("cursor","default").removeClass('orange').unbind('click');
			// 	this.destory();
			// }
		});
	});
});