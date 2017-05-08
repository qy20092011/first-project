document.addEventListener('DOMContentLoaded',()=>{
	var btnTop = document.querySelector('.toTop');

	// 绑定点击事件，返回顶部
	btnTop.onclick = (e)=>{
		e.preventDefault();

		// 缓动运动
		var timer = setInterval(()=>{
			// 先获取滚动过的距离
			var scrollTop = window.scrollY;//2000

			// 关键：利用滚动过的距离计算速度
			var speed = Math.ceil(scrollTop/5);

			// 设置滚动条滚动距离
			var _scrollTop = scrollTop - speed;

			if(_scrollTop <= 20){
				clearInterval(timer);
				_scrollTop = 0;
			}

			window.scrollTo(0,_scrollTop);

			/*if(speed<10){
				clearInterval(timer);
				window.scrollTo(0,0);
				return;
			}

			window.scrollBy(0,-speed);*/

			
		},30);
	}
});