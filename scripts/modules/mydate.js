/**
 * Created by zhenglian on 2017/7/15.
 */
layui.define(['jquery', 'laydate'], function (exports) {
    var $ = layui.jquery;
    var laydate = layui.laydate;
    
    var start = {
        min: laydate.now(),
        max: '2099-06-16 23:59:59',
        istime: true,
        format: 'YYYY-MM-DD hh:mm:ss',
        festival: true,
        istoday: false,
        choose: function(datas){
            console.info(datas);
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };

    var end = {
        min: laydate.now(),
        max: '2099-06-16 23:59:59',
        istime: true,
        format: 'YYYY-MM-DD hh:mm:ss',
        festival: true,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };

    $('#startTime').on('click', function () {
        start.elem = this;
        laydate(start); 
        console.info($('#startTime').val()); // 取值
    });
    
    $('#endTime').on('click', function () {
        end.elem = this
        laydate(end);
    });
    
    
    exports('mydate', function () {
        console.info('mydate module');
    });
    
});