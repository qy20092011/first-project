$(()=>{
	//获取浏览记录cookie
	var $record = $.cookie('record');

	//把json字符串转换成js对象
	$record = $record ? JSON.parse($record) : [];

	var ul = document.createElement('ul');
	ul.innerHTML = $record.map(function(item){
		console.log(item.imgurl)
		return '<li><img src="'+item.imgurl+'"><h4>'+item.name+'</h4><h4>'+item.specification+'</h4></li>';
	}).join('');
	//插入浏览记录信息
	$('.record').append(ul);
})
