/**
 * Created by zhenglian on 2017/7/15.
 */
layui.define(['jquery', 'laypage', 'layer'], function (exports) {
    var laypage = layui.laypage;
    var layer = layui.layer;
    var $ = layui.jquery;

    // 首页,上一页,2,3,4,5,6...末页,下一页  到第__页 确定
    
    
    laypage({
        cont: 'mypage', // 渲染分页的div
        pages: 100, //总页数
        first: 1, // 首页 false 禁用首页
        last: 100,// 末页 false 禁用末页
        groups: 8, //连续显示分页数,这里设置显示8个可以点击的分页按钮
        prev: '<em><</em>', // 修改上一页样式
        next: '<em>></em>', // 修改下一页样式
        skin: '#1E9FFF', // 设置皮肤
        curr: 10, // 设置当前页
        jump: function (obj, first) {
            layer.msg('第' + obj.curr + '页');
            // 这里加载页面数据
        },
        skip: true // 显示跳转输入框,也就是" 到第__页 确定 "
    });

    //测试数据
    var data = [
        '北京',
        '上海',
        '广州',
        '深圳',
        '杭州',
        '长沙',
        '合肥',
        '宁夏',
        '成都',
        '西安',
        '南昌',
        '上饶',
        '沈阳',
        '济南',
        '厦门',
        '福州',
        '九江',
        '宜春',
        '赣州',
        '宁波',
        '绍兴',
        '无锡',
        '苏州',
        '徐州',
        '东莞',
        '佛山',
        '中山',
        '成都',
        '武汉',
        '青岛',
        '天津',
        '重庆',
        '南京',
        '九江',
        '香港',
        '澳门',
        '台北'
    ];

    var nums = 5; //每页出现的数据量

    // 渲染数据
    function render(data, curr) {
        var arr = [];
        var items = data.concat().splice(curr * nums - nums,  nums);
        layui.each(items, function (index, item) {
            arr.push('<li>' + item + '</li>');
        });
        
        return arr.join('');
    }
    
    //调用分页
    laypage({
        cont: 'mypage',
        pages: Math.ceil(data.length/nums), //得到总页数
        jump: function(obj){
            var html = render(data, obj.curr);
            $('#cities').html(html);
        }
    });
    
    exports('mypage', function () {
        console.info('mypage module');
    })
});