$(()=>{
	$('.pull-left>span').on('mouseenter',function(){
		$(this).css('background','white');
		$('.citySelect').css('display','block');
	})

	$('.citySelect').on('mouseleave',function(){
		$(this).css('display','none')
		$('.pull-left>span').css('background','#eee');
	}).on('click','a',function(){
		var city = $(this).text();
		$('.pull-left span>a')[0].innerText = city;
	})

	$('.datalist').on('click','span',function(){
		$(this).next().show('normal');
		$(this).text('');
		$(this).addClass('iconfont icon-jiantouxiangxia');
	}).on('dblclick','span',function(){
		$(this).next().hide('normal');
		$(this).removeClass('iconfont icon-jiantouxiangxia');
		$(this).text('>');
	})

	$('.notice').on('mouseenter',function(){
		$(this).find('ul').show();
		$(this).css('background','white');
	})

	$('.notice').find('ul').on('mouseleave',function(){
		$(this).hide();
		$('.notice').css('background','#eee');
	})

	$('.phoneFruit').on('mouseenter',function(){
		$(this).find('ul').show();
		$(this).css('background','white');
	})

	$('.phoneFruit').find('ul').on('mouseleave',function(){
		$(this).hide();
		$('.phoneFruit').css('background','#eee');
	})


	$('.top2_l ul').on('mouseenter','li',function(){
		$(this).addClass('active').find('a').css('color','#64a131').find('span').css('color','#64a131');

	}).on('mouseleave','li',function(){
		
		$(this).removeClass('active').find('a').css('color','#999').find('span').css('color','#999');
	})

	$('.showPic').on('mouseenter','img',function(){
		$(this).addClass('larger');
	}).on('mouseleave','img',function(){
		$(this).removeClass('larger');
	})
})