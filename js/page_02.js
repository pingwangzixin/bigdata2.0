/**
 * Created by hanzhang on 2017/6/19.
 */
(function (window, jQuery) {

    var LeftTopTable = LeftTopTable || {};
    var LeftBottomTable = LeftBottomTable || {};
    var RightBottomTable = RightBottomTable || {};

    function  getArrayData(arr, key) {
        var result = [];
        for(var i in arr) {
            if(key) {
                result.push(arr[i][key]);
            } else {
                result.push(i);
            }
        }
        return result;
    }

    /**
     * 学业水平发展情况
     * @returns {CenterMap}
     * @constructor
     */
    var LeftTopTable = function () {
        var lineChart;
        var items;
        var elements = {};
        var timer;
        var currentIndex = -1;
        var examCount;
        var grade = "10";

        var _initLineChart = function () {
            var data = LEVEL_DATA[area][school][phase][grade].lineChart;
            examCount = data.schoolData.length;
            var lineOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br>平均成绩：{c}'
                },
                legend: {
                    left: 40,
                    y: 20,
                    data: ["学校", "区域"],
                    textStyle : {
                        color : "#7388ba",
                        fontSize : 12
                    }
                },
                grid: {
                    x: 50,
                    y: 50,
                    width:420,
                    height:180,
                    borderWidth: 0
                },
                xAxis: {
                    name: '',
                    type: 'category',
                    boundaryGap: false,
                    splitLine : {
                        show : true,
                        lineStyle : {
                            color : "#7388ba",
                            opacity : 0.3
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color : "#7388ba"
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel : {
                        interval : 0,
                        formatter : function(params){
                            var newParamsName = "";// 最终拼接成的字符串
                            var paramsNameNumber = params.length;// 实际标签的个数
                            var provideNumber = (params.indexOf('2017') > -1) ? 8 : 6;// 每行能显示的字的个数
                            // provideNumber = (params.indexOf('2016') > -1) ? (provideNumber + 2) : provideNumber;// 每行能显示的字的个数
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                            /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                            // 条件等同于rowNumber>1
                            if (paramsNameNumber > provideNumber) {
                                /** 循环每一行,p表示行 */
                                for (var p = 0; p < rowNumber; p++) {
                                    var tempStr = "";// 表示每一次截取的字符串
                                    var start = p * provideNumber;// 开始截取的位置
                                    var end = start + provideNumber;// 结束截取的位置
                                    // 此处特殊处理最后一行的索引值
                                    if (p == rowNumber - 1) {
                                        // 最后一次不换行
                                        tempStr = params.substring(start, paramsNameNumber);
                                    } else {
                                        // 每一次拼接字符串并换行
                                        tempStr = params.substring(start, end) + "\n";
                                    }
                                    newParamsName += tempStr;// 最终拼成的字符串
                                }

                            } else {
                                // 将旧标签的值赋给新标签
                                newParamsName = params;
                            }
                            //将最终的字符串返回
                            return newParamsName
                        }
                    },
                    data: getArrayData(data.schoolData, "exam")
                },
                yAxis: {
                    name: '',
                    type: 'value',
                    max : 600,
                    min : 350,
                    interval :50,
                    splitLine : {
                        show : true,
                        lineStyle : {
                            color : "#7388ba",
                            opacity : 0.3
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color : "#7388ba"
                        }
                    }
                },
                textStyle : {
                    color : "#7388ba",
                    fontSize : 12
                },
                color:['#2acb80', '#2acb80', '#ff8722', '#2badfb', '#6cddea', '#fd8733', '#36ca82', '#e43844'],
                series: [
                    {
                        name : "学校",
                        type : "effectScatter",
                        showEffectOn: 'emphasis',
                        rippleEffect: {
                            scale:3,
                            brushType: 'fill'
                        },
                        tooltip: {
                            trigger: 'item',
                            position: 'right',
                            formatter: function (params) {
                                if(data.schoolData[params.dataIndex].rank) {
                                    return "<div class='level_tips'>区域排名" + data.schoolData[params.dataIndex].rank   + "</div>";
                                }
                            },
                            extraCssText: 'background: url("static/images/level_tips.png") no-repeat;width:70px;padding:0 5px !important;line-height:20px;border-radius:0;text-align:center;font-size:12px;'
                        },
                        data : getArrayData(data.schoolData, "score")
                    }, {
                        silent : true,
                        name : "学校线",
                        type : "line",
                        data : getArrayData(data.schoolData, "score"),
                        showSymbol : false,
                        hoverAnimation : false
                    }, {
                        name : "区域",
                        type : "scatter",
                        markLine: {
                            silent : true,
                            symbolSize :0,
                            itemStyle: {
                                normal: {
                                    color: '#ff8722',
                                    borderWidth: 1,
                                    borderType: 'dashed'
                                }
                            },
                            data:data.lineData
                        },
                        data : data.areaData
                    }
                ]
            };
            for (var i = 0, len = data.clazzData.length;  i < len; i++) {
                var dataClazz = data.clazzData[i];
                dataClazz.type = "line";
                lineOption.legend.data.push(dataClazz.name);
                lineOption.series.push(dataClazz);
            }

            elements.lineChart.setOption(lineOption);
        };

        var _initRadarChart = function() {
            var data = LEVEL_DATA[area][school][phase][grade];

            var radarOption = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    right:0,
                    top: 0,
                    orient :'vertical',
                    data: [{
                        name :'学校',
                        icon : 'circle'
                    }, {
                        name :'区域',
                        icon : 'circle'
                    }],
                    textStyle : {
                        color : '#ffffff'
                    }
                },
                radar: {
                    // shape: 'circle',
                    axisLine : {
                        show : false
                    },
                    name : {
                        textStyle : {
                            color : '#7388ba'
                        }
                    },
                    splitArea : {
                        show : false
                    },
                    splitLine : {
                        lineStyle : {
                            color : '#7388ba'
                        }
                    },
                    center : [170, 200],
                    indicator: [
                        { name: data.radarChart.subject[0], max: 0.5, min : -0.5},
                        { name: data.radarChart.subject[1], max: 0.5, min : -0.5},
                        { name: data.radarChart.subject[2], max: 0.5, min : -0.5},
                        { name: data.radarChart.subject[3], max: 0.5, min : -0.5},
                        { name: data.radarChart.subject[4], max: 0.5, min : -0.5},
                        { name: data.radarChart.subject[5], max: 0.5, min : -0.5},
                        { name: data.radarChart.subject[6], max: 0.5, min : -0.5},
                        { name: data.radarChart.subject[7], max: 0.5, min : -0.5},
                        { name: data.radarChart.subject[8], max: 0.5, min : -0.5}
                    ],
                    radius: 120
                },
                series: [
                    {
                        name: '区域',
                        type: 'radar',
                        data : [
                            {
                                value : data.radarChart.area,
                                name : '区域'
                            }
                        ],
                        symbol : 'emptyCircle',
                        symbolSize : 6,
                        itemStyle: {
                            normal: {
                                color: '#d8333f'
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: '#d8333f',
                                type : 'dashed'
                            }
                        }
                    },
                    {
                        name: '学校',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : data.radarChart.school,
                                name : '学校'
                            }
                        ],
                        symbol : 'emptyCircle',
                        symbolSize : 6,
                        itemStyle: {
                            normal: {
                                color: '#1caafc'
                                // borderColor : '#fd8733',
                                // borderWidth : 2
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: '#1caafc'
                            }
                        }
                    }
                ]
            };
            elements.radarChart.setOption(radarOption);
        };

        var _initChart = function () {
            _initLineChart();
            _initRadarChart();
            _playLineChart();
        };

        var _playLineChart = function() {
            clearInterval(timer);
            var curTimer = setInterval(_changeChartSelect, MAP_TIMMER);
            timer = curTimer;

            $("#level_lineChart").on('mouseover', function (params) {
                elements.lineChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                clearInterval(curTimer);
            }).on('mouseout', function (params) {
                clearInterval(timer);
                _changeChartSelect();
                curTimer = setInterval(_changeChartSelect, MAP_TIMMER);
                timer = curTimer;
            });
        };

        function _changeChartSelect() {
            // 取消之前高亮的图形
            elements.lineChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
            currentIndex = (currentIndex + 1) % examCount;
            // 高亮当前图形
            elements.lineChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
            // 显示 tooltip
            elements.lineChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
        }

        // 显示数据
        function _showData(index) {
            var data = LEVEL_DATA[area][school][phase][grade].lineChart.schoolData[index];
            var showData = [data.excellent, data.good, data.pass, data.score];
            var i = 0;
            elements.table.each(function () {
                $(this).html(showData[i]);
                i++;
            });
        }

        var initElements = function () {
            elements.lineChart = echarts.init($("#level_lineChart")[0]);
            elements.radarChart = echarts.init($("#level_radarChart")[0]);
            elements.switch = $("#level_grade").find("li");
            elements.table = $("#level_table").find("td");
            _showData(0);
        };

        var bindEvents = function() {
            elements.switch.unbind("click").on("click", function () {
                var _this = $(this);
                var _container = _this.parent().parent();
                var order = _this.attr("data-order");
                if(_container.hasClass(order)) {
                    return;
                }
                grade = _this.attr("data-id");
                _container.removeClass("first second third").addClass(order);

                currentIndex = -1;
                clearInterval(timer);
                _initChart();
                _showData(0);
            });
            elements.lineChart.on("highlight", function (params) {
                if(0 == params.seriesIndex) {
                    _showData(params.dataIndex);
                }
            });
            elements.lineChart.on("mouseover", function (params) {
                if(0 == params.seriesIndex) {
                    currentIndex = params.dataIndex;
                    _showData(params.dataIndex);
                    _initRadarChart();
                }
            });
            $(elements.switch[2]).trigger("click");
        };

        /**
         * 学业水平发展情况初始化方法
         */
        LeftTopTable.init = function () {
            initElements();
            bindEvents();
        };
        return LeftTopTable;
    }();

    /**
     * 教学活动及效果分析
     * @returns {CenterMap}
     * @constructor
     */
    var LeftBottomTable = function () {
        var elements = {};
        var currentIndex = -1;

        var initChart = function(teacher) {
            var data = RESULT_DATA[area][school][phase].act;

            var teacherData;
            for(var i = 0; i < data.teacher.length; i++) {
                if(teacher == data.teacher[i].teacher) {
                    teacherData = data.teacher[i].data;
                }
            }

            var radarOption = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    right:0,
                    top: 0,
                    orient :'vertical',
                    data: [{
                        name :'老师',
                        icon : 'circle'
                    }, {
                        name :'区域',
                        icon : 'circle'
                    }, {
                        name :'学校',
                        icon : 'circle'
                    }],
                    textStyle : {
                        color : '#ffffff'
                    }
                },
                radar: {
                    // shape: 'circle',
                    axisLine : {
                        show : false
                    },
                    name : {
                        textStyle : {
                            color : '#7388ba'
                        }
                    },
                    splitArea : {
                        show : false
                    },
                    splitLine : {
                        lineStyle : {
                            color : '#7388ba'
                        }
                    },
                    center : [170, 200],
                    indicator: [
                        { name: data.type[0], max: 40},
                        { name: data.type[1], max: 40},
                        { name: data.type[2], max: 40},
                        { name: data.type[3], max: 40},
                        { name: data.type[4], max: 40},
                        { name: data.type[5], max: 40}
                    ],
                    radius: 110
                },
                series: [
                    {
                        name: '老师',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : teacherData,
                                name : '老师'
                            }
                        ],
                        symbol : 'circle',
                        symbolSize : 6,
                        label : {
                            normal: {
                                show : true,
                                formatter : '{c}'
                            }
                        },
                        areaStyle : {
                            normal: {
                                color: '#ff8722',
                                opacity : 0.2
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ff8722'
                                // borderColor : '#fd8733',
                                // borderWidth : 2
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 1,
                                color: '#ff8722'
                            }
                        }
                    },
                    {
                        name: '区域',
                        type: 'radar',
                        data : [
                            {
                                value : data.area,
                                name : '区域'
                            }
                        ],
                       /* label : {
                            normal: {
                                show : true,
                                formatter : '{c}'
                            }
                        },*/
                        symbol : 'circle',
                        symbolSize : 6,
                        itemStyle: {
                            normal: {
                                color: '#2acb80'
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 1,
                                color: '#2acb80'
                            }
                        }
                    },
                    {
                        name: '学校',
                        type: 'radar',
                        data : [
                            {
                                value : data.school,
                                name : '学校'
                            }
                        ],
                        /*label : {
                            normal: {
                                show : true,
                                formatter : '{c}'
                            }
                        },*/
                        symbol : 'circle',
                        symbolSize : 6,
                        itemStyle: {
                            normal: {
                                color: '#29a3ed'
                            }
                        },
                        lineStyle: {
                            normal: {
                                type : 'dashed',
                                width: 1,
                                color: '#29a3ed'
                            }
                        }
                    }
                ]
            };
            elements.radarChart.setOption(radarOption);
        };

        var _initInfos = function () {
            var data = RESULT_DATA[area][school][phase].result;
            var i = 0;
            var dataPercent = [];
            for(i = 0; i < data.length; i++) {
                dataPercent[i] = [];
                dataPercent[i][0] = data[i][0] / 100 * 100;
                dataPercent[i][1] = data[i][1] / 100 * 100;
                dataPercent[i][2] = data[i][2] / 50 * 100;
            }
            i = 0;
            elements.resultBefore.each(function () {
                var _this = $(this);
                var value = data[0][i];
                var percent = dataPercent[0][i];
                _this.find("span").html(Math.round(value));
                _initPercent(_this.find(".lb_process"), percent);
                i++;
            });
           /* $("#result_before").animate({
                left : 0
            }, 2000);
            $("#result_after").animate({
                left : 0
            }, 2000);*/
            i = 0;
            elements.resultAfter.each(function () {
                var _this = $(this);
                var value = data[1][i];
                var percent = dataPercent[0][i];
                _this.find("span").html(Math.round(value));
                _initPercent(_this.find(".lb_process"), percent);
                i++;
            });

           /*$("#result_after").animate({
                left : 230
            }, 2000);*/
        };

        function _initPercent(con, percent) {
            var _right = con.find(".right");
            var _left = con.find(".left");
            if(percent > 100) {
                percent = 100;
            }
            if (percent > 50) {
                con.addClass('clip-auto');
                _right.removeClass('wth0');
            } else {
                con.removeClass('clip-auto');
                _right.addClass('wth0');
            }
            _left.css("-webkit-transform", "rotate(" + (18 / 5) * percent + "deg)");
        }

        /**
         * 动效
         * @private
         */
        var _playInfos = function () {
            var data = RESULT_DATA[area][school][phase].result;
            var dataPercent = [];
            for(var i = 0; i < data.length; i++) {
                dataPercent[i] = [];
                dataPercent[i][0] = data[i][0] / 100 * 100;
                dataPercent[i][1] = data[i][1] / 100 * 100;
                dataPercent[i][2] = data[i][2] / 50 * 100;
            }
            var flag = true;
            setInterval(function () {
                if(flag) {
                    flag = false;
                    var timer;
                    var shines = elements.timeLine.find(".line>i");
                    shines.css("left", "-113px");
                    var point = elements.timeLine.find(".point");
                    point.removeClass("ripple");
                    $(shines[0]).animate({left : 70}, 1400, function () {
                        $(this).animate({left : 170}, 600);
                        $(point[0]).addClass("ripple");
                        var circle = 0;
                        timer = setInterval(function () {
                            var i = 0;
                            elements.resultBefore.each(function () {
                                var percent = circle + dataPercent[0][i];
                                if(percent > 100) {
                                    percent -= 100;
                                }
                                var _this = $(this);
                                _initPercent(_this.find(".lb_process"), percent);
                                i++;
                            });
                            circle ++;
                            if(circle > 100) {
                                clearInterval(timer);
                                $(shines[1]).animate({left : 130}, 1800, function () {
                                    $(this).animate({left : 230}, 600);
                                    $(point[1]).addClass("ripple");
                                    var circle = 0;
                                    timer = setInterval(function () {
                                        var i = 0;
                                        elements.resultAfter.each(function () {
                                            var percent = circle + dataPercent[1][i];
                                            if(percent > 100) {
                                                percent -= 100;
                                            }
                                            var _this = $(this);
                                            _initPercent(_this.find(".lb_process"), percent);
                                            i++;
                                        });
                                        circle ++;
                                        if(circle > 100) {
                                            clearInterval(timer);
                                            $(shines[2]).animate({left : 75}, 1200, function () {
                                                setTimeout(function () {
                                                    flag = true;
                                                }, 1000);
                                            });
                                        }
                                    }, 3);
                                });
                            }
                        }, 3);
                    });
                }
            }, 1000);
        };


        
        var initElements = function () {
            elements.radarChart = echarts.init($("#result_radarChart")[0]);
            elements.teacherCon = $("#result_teachers");
            var data = RESULT_DATA[area][school][phase].act;
            var html = "";
            for(var i = 0; i < data.teacher.length; i++) {
                html += "<li data-id='" + i + "'>" +  data.teacher[i].teacher + "</li>";
            }
            elements.teacherCon.html(html);
            elements.teachers = elements.teacherCon.find("li");
            elements.resultBefore = $("#result_before").find(".lb_result");
            elements.resultAfter = $("#result_after").find(".lb_result");
            elements.timeLine = $("#result_timeLine");
            initChart(data.teacher[0].teacher);
            _initInfos();
        };

        var bindEvents = function() {
            var timer;
            elements.teachers.hover(function () {
                var _this = $(this);
                clearInterval(timer);
                if(_this.hasClass("current")) {
                    return;
                }
                elements.teachers.removeClass("current");
                _this.addClass("current");
                initChart(_this.html());
            }, function () {
                clearInterval(timer);
                timer = setInterval(changeTeacher, MAP_TIMMER);
            });
            changeTeacher();
            timer = setInterval(changeTeacher, MAP_TIMMER);
            _playInfos();
        };

        var changeTeacher = function() {
            currentIndex = (currentIndex + 1) % RESULT_DATA[area][school][phase].act.teacher.length;
            var _this = $(elements.teachers[currentIndex]);
            if(_this.hasClass("current")) {
                return;
            }
            elements.teachers.removeClass("current");
            _this.addClass("current");
            initChart(_this.html());
        };

        /**
         * 教学活动及效果分析s初始化方法
         */
        LeftBottomTable.init = function () {
            initElements();
            bindEvents();
        };
        return LeftBottomTable;
    }();

    /**
     * 教学质量预警
     * @returns {CenterMap}
     * @constructor
     */
    var RightBottomTable = function () {
        var elements = {};
        var currentIndex = -1;

        var initChart = function(student) {
            var data = QUALITY_DATA[area][school][phase].waveStudent.student;

            var studentData;
            for(var i = 0; i < data.length; i++) {
                if(student == data[i].student) {
                    studentData = data[i].data;
                }
            }

            var lineOption = {
                tooltip: {
                    show : false,
                    trigger: 'item'
                },
                legend: {
                    show : false
                },
                grid: {
                    x: 60,
                    y: 50,
                    width:630,
                    height:150,
                    borderWidth: 0
                },
                xAxis: {
                    name: '',
                    type: 'category',
                    boundaryGap: false,
                    splitLine : {
                        show : true,
                        lineStyle : {
                            color : "#7388ba",
                            opacity : 0.3
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color : "#7388ba"
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel : {
                        interval : 0,
                        formatter : function(params){
                            var newParamsName = "";// 最终拼接成的字符串
                            var paramsNameNumber = params.length;// 实际标签的个数
                            var provideNumber = (params.indexOf('2017') > -1) ? 15 : 13;// 每行能显示的字的个数
                            // provideNumber = (params.indexOf('2016') > -1) ? (provideNumber + 2) : provideNumber;// 每行能显示的字的个数
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                            /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                            // 条件等同于rowNumber>1
                            if (paramsNameNumber > provideNumber) {
                                /** 循环每一行,p表示行 */
                                for (var p = 0; p < rowNumber; p++) {
                                    var tempStr = "";// 表示每一次截取的字符串
                                    var start = p * provideNumber;// 开始截取的位置
                                    var end = start + provideNumber;// 结束截取的位置
                                    // 此处特殊处理最后一行的索引值
                                    if (p == rowNumber - 1) {
                                        // 最后一次不换行
                                        tempStr = params.substring(start, paramsNameNumber);
                                    } else {
                                        // 每一次拼接字符串并换行
                                        tempStr = params.substring(start, end) + "\n";
                                    }
                                    newParamsName += tempStr;// 最终拼成的字符串
                                }

                            } else {
                                // 将旧标签的值赋给新标签
                                newParamsName = params;
                            }
                            //将最终的字符串返回
                            return newParamsName
                        }
                    },
                    data: QUALITY_DATA[area][school][phase].waveStudent.exam
                },
                yAxis: {
                    name: '分',
                    type: 'value',
                    max : 600,
                    min : 350,
                    interval :50,
                    splitLine : {
                        show : true,
                        lineStyle : {
                            color : "#7388ba",
                            opacity : 0.3
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color : "#7388ba"
                        }
                    }
                },
                textStyle : {
                    color : "#7388ba",
                    fontSize : 12
                },
                color:['#36ca82'],
                series: [
                    {
                        name : "学生",
                        type : "line",
                        data : studentData
                    }
                ]
            };
            elements.lineChart.setOption(lineOption);
        };

        var _initTables = function() {
            var data =  QUALITY_DATA[area][school][phase];
            var i = 0;
            elements.subjectRows.each(function () {
                var subject = data.focusSubject[i];
                $(this).html("<td>" + subject.subject + "</td><td>" + subject.count + "</td>")
                i++;
            });
            i = 0;
            elements.clazzRows.each(function () {
                var clazz = data.topClazz[i];
                $(this).html("<td>" + clazz.clazz + "</td><td>" + clazz.count + "</td><td>" + clazz.teacher + "</td>")
                i++;
            });
            i = 0;
            elements.clazzs.each(function () {
                var clazz = data.waveClazz[i];
                if(clazz.rank < 0) {
                    $(this).html("<p>" + (i + 1) + "</p>" + clazz.clazz + "<span><i class = 'down'></i>" + (clazz.rank * -1) + "</i></span>");
                } else {
                    $(this).html("<p>" + (i + 1) + "</p>" + clazz.clazz + "<span><i class = 'up'></i>" + clazz.rank + "</i></span>");
                }
                i++;
            });
        };

        var _redAlert = function () {
            _alert();
            setInterval(_alert, 10000);
        };

        function _alert() {
            var i = 0;
            var timer = setInterval(function () {
                if(elements.qualityCon.hasClass("red")) {
                    elements.qualityCon.removeClass("red");
                } else {
                    elements.qualityCon.addClass("red");
                }
                i++;
                if(i > 5) {
                    clearInterval(timer);
                }
            }, 500);
        }

        var initElements = function () {
            elements.lineChart = echarts.init($("#quality_lineChart")[0]);
            elements.students = $("#quality_student").find("li");
            var data = QUALITY_DATA[area][school][phase].waveStudent.student;
            var i = 0;
            elements.students.each(function () {
                $(this).find("span").html(data[i].student);
                i++;
            });
            elements.subjectRows = $("#quality_subjectTable").find("tr");
            elements.clazzRows = $("#quality_clazzTable").find("tr");
            elements.clazzs = $("#quality_clazzList").find("li");
            elements.qualityCon = $("#quality_con");
            // initChart(data[0].student);
            _initTables();
            _redAlert();
        };

        var bindEvents = function() {
            var timer;
            elements.students.hover(function () {
                var _this = $(this);
                clearInterval(timer);
                if(_this.hasClass("current")) {
                    return;
                }
                elements.students.removeClass("current");
                _this.addClass("current");
                initChart(_this.find("span").html());
            }, function () {
                clearInterval(timer);
                timer = setInterval(changeTeacher, MAP_TIMMER);
            });
            changeTeacher();
            timer = setInterval(changeTeacher, MAP_TIMMER);
        };

        var changeTeacher = function() {
            currentIndex = (currentIndex + 1) % QUALITY_DATA[area][school][phase].waveStudent.student.length;
            var _this = $(elements.students[currentIndex]);
            if(_this.hasClass("current")) {
                return;
            }
            elements.students.removeClass("current");
            _this.addClass("current");
            initChart(_this.find("span").html());
        };

        /**
         * 教学质量预警初始化方法
         */
        RightBottomTable.init = function () {
            initElements();
            bindEvents();
        };
        return RightBottomTable;
    }();
    
    $(function () {
        LeftTopTable.init();
        LeftBottomTable.init();
        RightBottomTable.init();
    });

})(window, jQuery);