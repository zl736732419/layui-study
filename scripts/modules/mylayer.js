	layui.define(['jquery', 'layer', 'form'], function(exports) {
	var layer = layui.layer;
	var $ = layui.jquery;
	
	// msg
    layer.msg();
	
	var obj = {
		msg: function (msg, opts) {
    		         
			var config = {
                // -1: 无，0:warning, 1:success 2:error 3:info 4:locked 5:unhappy 6:happy
                icon: -1
			};
			if (undefined != opts) {
				$.extend(true, config, opts);
			}
			
            layer.msg(msg, config);
        },
		confirm: function (content, btns, callbacks) {
			if (!(btns instanceof Array)) {
				throw new Error('按钮文本区域为数组类型');
			}
			if(!(callbacks instanceof Array)) {
                throw new Error('回调函数区域为数组类型');
			}
        }
	};
	
	
	

	exports('mylayer', obj);// modulename, callback
});