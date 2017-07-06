layui.define(['layer'], function(exports) {
	var layer = layui.layer;
	// 对localStorage测试
	//设置表mytable的字段username=zl
	layui.data('mytable', {
		key: 'username',
		value: 'zl'
	});

	// 取值
	var mytable = layui.data('mytable');
	console.info("-----------table data");
	console.info(mytable);
	console.info("-----------username");
	console.info(mytable.username);

	// 删除字段
	layui.data('mytable', {
		key: 'username',
		remove: true
	});
	console.info("-----------username");
	mytable = layui.data('mytable');
	console.info(mytable.username);

	// 删除表
	layui.data('mytable', null);

	console.info("-----------table data");
	mytable = layui.data('mytable');

	exports('store', function() {
		console.info('store module');
	});

});