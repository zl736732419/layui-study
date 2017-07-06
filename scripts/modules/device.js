layui.define(function(exports) {

	var device = layui.device();
	console.info("--------------device");
	console.info(device);

	exports('device', function() {
		console.info('device module');
	})

});