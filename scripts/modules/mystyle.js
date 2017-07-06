layui.define(['layer'], function(exports) {

	/*
		css内置公共类
		layui-icon   用于图标
		layui-box   用于排除一些UI框架（如Bootstrap）强制将全部元素设为box-sizing: border-box所引发的尺寸偏差
		layui-clear   用于消除浮动（一般不怎么常用，因为layui几乎没用到浮动）
		layui-inline   用于将标签设为内联块状元素
		layui-elip    用于单行文本溢出省略
		layui-unselect   用于屏蔽选中
		layui-disabled    用于设置元素不可点击状态
		layui-circle    用于设置元素为圆形
		layui-show   用于显示块状元素
		layui-hide   用于隐藏元素
		 
		layui-main    用于设置一个宽度为 1140px的水平居中块
		 
		layui-bg-red   用于设置元素赤色背景
		layui-bg-orange   用于设置元素橙色背景
		layui-bg-green   用于设置元素墨绿色背景（主色调）
		layui-bg-cyan   用于设置元素青色背景
		layui-bg-blue   用于设置元素蓝色背景
		layui-bg-black   用于设置元素经典黑色背景
		layui-bg-gray    用于设置元素经典灰色背景
	*/
	var obj = {
		hello: function() {
			layer.msg('hello mystyle module');
		}
	};


	exports('mystyle', obj);
});