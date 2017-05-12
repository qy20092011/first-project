$(()=>{

	//获取登录用户名显示在top
	var $user = $.cookie('user');
	$('.user a:first-child').text($user).css('color','#64a131');

	//鼠标移入城市选择动画
	$('.pull-left').on('mouseenter','span',function(){
		$(this).css('background','white');
		$('.citySelect').css('display','block');
	}).on('mouseleave',function(){
		$('.citySelect').css('display','none');
		$('.pull-left>span').css('background','#eee');
	}).on('click','a',function(){
		var city = $(this).text();
		$('.pull-left span>a')[0].innerText = city;
	})

	//城市选择动画
	$('.ctDatalist').on('click','span',function(){
		$(this).next().show('normal');
		$(this).text('');
		$(this).addClass('iconfont icon-jiantouxiangxia');
	}).on('dblclick','span',function(){
		$(this).next().hide('normal');
		$(this).removeClass('iconfont icon-jiantouxiangxia');
		$(this).text('>');
	})

	//提示区域动画
	$('.notice').on('mouseenter',function(){
		$(this).find('ul').show();
		$(this).css('background','white');
	})

	$('.notice').on('mouseleave',function(){
		$('.notice').find('ul').hide();
		$('.notice').css('background','#eee');
	})

	//鼠标移入手机水果区域动画
	$('.phoneFruit').on('mouseenter',function(){
		$(this).find('ul').show();
		$(this).css('background','white');
	})

	$('.phoneFruit').on('mouseleave',function(){
		$('.phoneFruit').find('ul').hide();
		$('.phoneFruit').css('background','#eee');
	})

	//鼠标移入nav效果
	$('.top2_l ul').on('mouseenter','li',function(){
		
		$(this).addClass('active').find('a').css('color','#64a131').find('span').css('color','#64a131');

	}).on('mouseleave','li',function(){
		$(this).removeClass('active').find('a').css('color','#999').find('span').css('color','#999');
	})

	//图片放大效果
	$('.showPic').on('mouseenter','img',function(){
		$(this).addClass('larger');
	}).on('mouseleave','img',function(){
		$(this).removeClass('larger');
	})
})