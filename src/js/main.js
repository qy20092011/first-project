$(()=>{

	//获取登录用户名
	var $user = $.cookie('user');
	if(String($user) != 'undefined'){
		$('.user a:first-child').text($user).css('color','#f60');
	}else{
		$('.user a:first-child').css('color','#999');
	}

	//top2吸顶菜单
	$(window).scroll(function(){
		if($(window).scrollTop() >= 300){
    		$('.top2').css({top:0,position:'fixed'});
    		$('.search').css({position:'absolute',right:0})			
		}else{
    		$('.top2').css({top:31,position:'absolute'})		
		}
	})


	//上传浏览记录
	var $record = $.cookie('record');
	$record = $record ? JSON.parse($record) : [];
	
	$('.show').on('click','img',function(){
		var $curentli = $(this).parent().parent().parent();
		var shoprecord = {
			imgurl:"../"+$(this).attr('src'),
			name:$curentli.find('.name').text(),
			price:$curentli.find('.price').text(),
			specification:$curentli.find('.price').parent().text()

		};
		$record.push(shoprecord);
		var record = JSON.stringify($record);
		$.cookie('record',record);
	})




	//获取和上传商品购买信息
	var $goods = $('.goods');
	var $carlist = $.cookie('carlist');
	$carlist = $carlist ? JSON.parse($carlist) : [];

	// $.cookie('carlist', '123', {expires: 7, path: '/myproject', domain: 'localhost', secure: false});
	
	$('.s-unit').on('click','a',function(){
		var $currentLi = $(this).parent().parent().parent();
		var $currentGUID = $currentLi.data('guid');
		var hasGoods = false;

		for(var i=0;i<$carlist.length;i++){
			if($carlist[i].guid === $currentGUID){
				hasGoods = true;

				// 如果当前商品已经存在cookie中，则商品数量+1
				$carlist[i].qty++;
				break;
			}
		}

		if(!hasGoods){
			
			var goods = {
				guid:$currentGUID,
				imgurl:$currentLi.find('img').attr('src'),
				name:$currentLi.find('.name').text(),
				price:$currentLi.find('.price').text(),
				specification:$currentLi.find('.price').parent().text(),
				qty:1
			};

			// 把当前商品信息写入carlist
			$carlist.push(goods);
			$('.shopnum').text($carlist.length);
		}

		var carlist = JSON.stringify($carlist);
		$.cookie('carlist',carlist);
	})
})