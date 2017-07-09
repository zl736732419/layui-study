	layui.define(['jquery', 'layer', 'form'], function(exports) {
	var layer = layui.layer;
	var $ = layui.jquery;
	
	layer.config({
		// skin: 'layui-layer-molv' // layui-layer-lan
		btnAlign: 'r', // 1:左对齐 c:居中对齐 r:右对齐(默认)
		closeBtn: 1, // 关闭按钮风格1(默认),2 
		shade: [0.3, '#393D49'], // 默认0.3 #000 0:不显示遮罩 [0.8, '#393D49']其他颜色
        shadeClose: false, // 点击其他地方是否关闭遮罩，默认false
        //弹出动画0(默认)-6 -1:无动画
		// 0: zoomIn, 1:上入 2:下入 3:左入 4:风车 5:渐入 6:窗口抖动
        anim: 0,
		isOutAnim: true, // 关闭时是否有动画
        fixed: false, // 滚动条滚动时弹框位置是否变化
        resize: true, // 是否可变化大小对tips,loading无效
        resizing: function (layero) { // 改变大小时回调，
            console.log(layero); //当前layer弹框div
        },
        scrollbar: false, // 当layer宽高超过浏览器宽高是否允许浏览器出现滚动条
        maxWidth: '500px', // 只有当area为auto时有效
        // zIndex: 10000, // 层叠
        // move: 'selector' // 定义触发拖动的选择器，默认是拖动标题栏
        moveOut: false, //是否允许弹框拖动到浏览器边缘外部
        moveEnd: function (layero) {
			console.info('end');
        },
        tipsMore: false, // 是否允许多个tips层出现
        success: function (layero, index) { // 弹框显示出来之后的回调
			console.info(index);
        },
		yes: function (index, layero) { // 确认按钮点击回调
			console.info('ok:' + index);
			// 如果设定了yes回调，关闭弹窗需要手动处理
			layer.close(index);
        },
		cancel: function (index, layero) {
			console.info('cancel:' + index);
        },
        end: function () {
			console.info('destroy');
        },
		full: function (layero) { // 最大化
			console.info('max');	
        },
		min: function (layero) { // 最小化
			console.info('min');
        },
		restore: function (layero) { // 恢复
			console.info('restore');
        }
    });
	
	var openObj = {
        // type: 0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
		// icon (0-6)- 图标。信息框和加载层的私有参数
		// 0: warning 1: success, 2: error, 3: info 4: lock 5: unhappy 6: happy
		openMsg: function() {
            layer.open({
                type: 0,
				icon: 4,
                content: '这是一个提示'
            });
		},
        openPage: function() {
            layer.open({
                type: 1,
                maxmin: true, // 最大最小化
				area: ['300px', '200px'],
                content: '传入任意的文本或html'
            });
        },
        // 这里content是一个URL，如果你不想让iframe出现滚动条
		// 你还可以content: ['http://sentsin.com', 'no']
		openIFrame: function () {
            layer.open({
                type: 2,
                maxmin: true, // 最大最小化
				area: ['500px', '300px'],
				// offset: ['100px', '50px'], // 设置弹出框不垂直水平居中
                content: 'http://sentsin.com'
            });
        },
		openTop: function() { // 选中弹框置顶
            layer.open({
                type: 2,
                shade: false,
                area: '500px',
                maxmin: true,
                content: 'http://www.layui.com',
                zIndex: layer.zIndex, //重点1
                success: function(layero){
                    layer.setTop(layero); //重点2
                }
            });
        },
		openTips: function () {
			$('#mydiv').on('click', function () {
				var that = this;
                layer.open({
                    type: 4,
                    tips: 3, // 上右下左1-4[2, '#c00']
                    content: ['内容', that] //数组第二项即吸附元素选择器或者DOM
                });
            });
        },
		openConfirm: function () {
            layer.open({
                content: 'test'
                ,btn: ['按钮一', '按钮二', '按钮三'],
				yes: function(index, layero){
                    //按钮【按钮一】的回调
					layer.msg('btn1');
                },
				btn2: function(index, layero){
                    //按钮【按钮二】的回调
					layer.msg('btn2');

                    //return false 开启该代码可禁止点击该按钮关闭
                },
                btn3: function(index, layero){
                    //按钮【按钮三】的回调
					layer.msg('btn3');

                    //return false 开启该代码可禁止点击该按钮关闭
                },
                cancel: function(){
                    //右上角关闭回调
					layer.msg('cancel');
                    //return false 开启该代码可禁止点击该按钮关闭
                }
            });
        }
	};
	
	var alertObj = {
		plain: function () {
            layer.alert('这是一条消息');
        },
		withIcon: function () {
            layer.alert('加了个图标', {icon: 1}); //这时如果你也还想执行yes回调，可以放在第三个参数中。
        },
		withCallback: function () {
            layer.alert('有了回调', function(index){
                layer.close(index);
            });
        }
	};
	
	var confirmObj = {
		custom: function () {
            layer.confirm('纳尼？', {
                btn: ['按钮一', '按钮二'], //可以无限个按钮
                btn2: function(index, layero){
                    //按钮【按钮2】的回调
                    layer.msg('btn2');
                }
            }, function(index, layero){
                //按钮【按钮一】的回调
                layer.msg('btn1');
            });
        },
		withIcon: function () {
            layer.confirm('is not?', {icon: 3, title:'提示'}, function(index){
                //do something
                layer.close(index);
            });
        },
		simple: function () {
            layer.confirm('is not?', function(index){
                //do something
                layer.close(index);
            });
        }
	};
	
	var obj = {
		msg: function () {
			var index = layer.msg('helloworld', {
				icon: 1,
				time: 2000 // 设置弹框默认关闭时间
			}, function () {
				console.info('callback');
            });
        },
        
		open: function () {
			// openObj.openMsg();
			// openObj.openPage();
            // openObj.openIFrame();
            openObj.openTips();
            // openObj.openConfirm();
        },
		load: function () {
			// type 0-2
			// layer.load(2);
			layer.load(2, {time: 10*1000}) // 设置最长等待时长
        },
        confirm: function () {
            // confirmObj.custom();
            // confirmObj.withIcon();
			confirmObj.simple();
        },
		alert: function () {
			alertObj.plain();
        },
		prompt: function () {
            //例子2
            layer.prompt({
                formType: 0, // 0-2, 0:文本，1：密码 2：多行文本
                value: '初始值',
                title: '请输入值',
                area: ['800px', '350px'] //自定义文本域宽高
            }, function(value, index, elem){
                layer.alert(value); //得到value
                layer.close(index);
            });
        }
	};

	exports('mylayer', obj);// modulename, callback
});