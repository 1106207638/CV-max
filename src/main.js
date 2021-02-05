// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
option = {
    xAxis: {
        type: 'category',
        data: ['编程基础', '', 'Vue', '沟通能力', '项目开发', 'WebPack', '抗压能力']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [90, 100, 95, 80, 100, 100, 100],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);