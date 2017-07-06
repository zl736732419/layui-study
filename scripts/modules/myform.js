layui.define(['form'], function(exports) {
	var form = layui.form();

	//监听提交
	form.on('submit(formDemo)', function(data) { // 事件对应form表单中的 lay-submit lay-filter="formDemo"
		console.info(JSON.stringify(data.field));
		return false;
	});

	//监听提交
	form.on('submit(form2Demo)', function(data) { // 事件对应form表单中的 lay-submit lay-filter="formDemo"
		console.info(JSON.stringify(data.field));
		return false;
	});

	exports('myform', function() {
		console.info('myform module');
	});
});