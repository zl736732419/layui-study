layui.define(['layer', 'form'], function(exports) {
	var layer = layui.layer;
	var form = layui.form;

	layer.msg('hello world');

	exports('mylayer', function() {
		console.info('mylayer module');
	});// modulename, callback
});