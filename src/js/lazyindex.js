
	var $show = $('.show');
	var $shop1 = $('.shop1');
	var main = document.querySelector('.main');
	var k = 0;

	// 当前分页
	var pageNo = 1;

	// 每页显示数量
	var qty = 9;

	// 分页总数
	var pageLen;

	//计算分页数量
	// pageLen = Math.ceil(res.total/qty);
	pageLen = Math.ceil(36/qty);

	/*
		分页请求
			预加载
		api:http://localhost/myajax/ajax/api/football.php
	 */
	
	var xhr = new XMLHttpRequest();


	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){

			var obj = JSON.parse(xhr.responseText);
			var res = obj.data;
			for(i=0;i<res.length;i++){

				var ul = document.createElement('ul');
				ul.setAttribute('class','goods');

				ul.innerHTML = res[i].map((item)=>{
					
					return `<li data-guid="${item.guid}">
					<div class="showPic"><a href="html/shopDetail.html"><img src="${item.src}"></img></a></div>
					<div class="showInfo"><div class="name">${item.name}</div>
					<div class="s-unit">
					<h4>￥<span class="price">${item.price}</span>${item.specification}</h4>
					<a href="javascript:" class="addcar"><i class="iconfont icon-gouwuchekong"></i></a>
					</div></li>`
					
				}).join(''); 
				
				$show.eq(i).append(ul);
				$shop1.eq(i).append($show.eq(i));

			}			

			pageNo++;
		}
	}


// function funA(n){
// 	ajax(function(res){
// 		var re = res[n];
// 	})
// }
// funA(3)
// xhr.onreadystatechange = function(){
// 	if(xhr.readyState === 4 && xhr.status === 200){
// 		pageNo++;
// 		var obj = JSON.parse(xhr.responseText);
// 		var res = obj.data;

// 		for(var i=k;i<res.length;i++){
// 			console.log(i)
// 			var ul = document.createElement('ul');
// 			ul.setAttribute('class','goods');

// 			ul.innerHTML = res[i].map((item)=>{
				
// 				return `<li data-guid="${item.guid}">
// 				<div class="showPic"><a href="html/shopDetail.html"><img src="${item.src}"></img></a></div>
// 				<div class="showInfo"><div class="name">${item.name}</div>
// 				<div class="s-unit">
// 				<h4>￥<span class="price">${item.price}</span>${item.specification}</h4>
// 				<a href="javascript:" class="addcar"><i class="iconfont icon-gouwuchekong"></i></a>
// 				</div></li>`
				
// 			}).join('');
			
// 			$show.eq(i).append(ul);
// 			$shop1.eq(i).append($show.eq(i));

// 			k++;
// 			break;

// 		}
			
		
// 	}
// }
	
	xhr.open('get','http://localhost/myproject/src/index.php?pageNo=' + pageNo,true);
	xhr.send();

	// 滚动加载更多
	window.onscroll = ()=>{
		// 如何判断滚动到底部？
		var scrollTop = window.scrollY;//document.body.scrollTop/document.documentElement.scrollTop
		
		//判断接近底部时
		if(scrollTop >= main.offsetHeight - window.innerHeight - 2000){

			if(pageNo<=pageLen){
				
				xhr.open('get','http://localhost/myproject/src/index.php?pageNo=' + pageNo,true);
				xhr.send();

			}
			
		}
	}
