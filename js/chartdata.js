 // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('leixing'));
        var myChart2 = echarts.init(document.getElementById('sexpercent'));
        var myChart3 = echarts.init(document.getElementById('resouce'));
        var myChart4 = echarts.init(document.getElementById('resouceclass'));
        var myChart5 = echarts.init(document.getElementById('shitibingtu'));//试题饼状图
        var myChart6 = echarts.init(document.getElementById('shitizhutu')); //试题柱状图
        var myChart7 = echarts.init(document.getElementById('zuoyebingtu')); //作业饼状图
        var myChart8 = echarts.init(document.getElementById('zuoyezhutu')); //作业饼状图
        var myChart9 = echarts.init(document.getElementById('jiaoyanbingtu')); //教研饼状图
        var myChart10 = echarts.init(document.getElementById('jiaoyanzhutu')); //教研柱状图

        var areaname = [];
        var areadata = [];

        dataJson("dataJson/china.json");

        function dataJson(url) {
            console.log(url);
            $.getJSON(url, function(data) {
                var areaname = data.areaResource.areaName; //区域名称
                var areadata = data.areaResource.areaCount; //区域数据
                $(".areaId").text(data.name);
                console.log(data)
                var regTotUser = data.userNum + ""; //总人数
                var newTotnum = []
                //循环追加人数
                $("#totuser").children().remove();
                for (var i = 0; i < regTotUser.length; i++) {
                    newTotnum.push(regTotUser[i]);
                    $("#totuser").append('<li>' + newTotnum[i] + '</li>')
                }

                var resouceNum = data.resouceNum + "";
                var newResoucenum = []
                $("#totrece").children().remove();
                for (var i = 0; i < resouceNum.length; i++) {
                    newResoucenum.push(resouceNum[i]);
                    $("#totrece").append('<li>' + newResoucenum[i] + '</li>')
                }

                var userClass = data.userList;

                var teacheNum = data.userList[0].value;
                var studentNum = data.userList[1].value;
                var parentNum = data.userList[2].value;
                $("#count-number").html(teacheNum)
                $("#count-number2").html(studentNum)
                $("#count-number3").html(parentNum)

                //教师、家长、学生比例图表1
                option1 = {
                    title: {
                        text: '',
                        subtext: '',
                        x: 'center',
                        textStyle: {
                            color: '#fff', // 主标题文字颜色
                            fontSize: 14,
                        },
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#28ac5d', '#e65656', '#15a9ff'],
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: 'center',
                        data: ['教师', '学生', '家长'],
                        textStyle: {
                            color: '#fff' // 主标题文字颜色
                        },
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {
                                show: false
                            },
                            dataView: {
                                show: false,
                                readOnly: false
                            },
                            magicType: {
                                show: false,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 1548
                                    }
                                }
                            },
                            restore: {
                                show: false
                            },
                            saveAsImage: {
                                show: false
                            }
                        }
                    },
                    calculable: true,
                    series: [{
                        name: '用户数量',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        //添加用户人数饼图
                        data: userClass
                    }]
                };

                //男女用户比例图标2
                option2 = {
                    title: {
                        text: '',
                        subtext: '',
                        x: 'center',
                        textStyle: {
                            color: '#fff', // 主标题文字颜色
                            fontSize: 14,
                        },
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#28ac5d', '#e65656', '#15a9ff'],
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: 'center',
                        data: ['男', '女'],
                        textStyle: {
                            color: '#fff', // 主标题文字颜色
                        },
                    },
                    series: [{
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [{
                                value: 335,
                                name: '男'
                            },
                            {
                                value: 310,
                                name: '女'
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                };

                //资源总量图标3
                option3 = {
                    title: {
                        x: 'center',
                        text: '',
                        subtext: '',
                        link: ''
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    grid: {
                        borderWidth: 0,
                        x:0,
                        x2:0,
                        y: 100,
                        y2: 60,
                    },
                    xAxis: [{
                        type: 'category',
                        show: false,
                        //区域的名称
                        data: areaname
                    }],
                    yAxis: [{
                        type: 'value',
                        show: false
                    }],
                    series: [{
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#e65b29', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}'
                                }
                            }
                        },
                        //区域的数据
                        data: areadata,
                    }]
                };

                //资源类型图表4
                option4 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: 'center',
                        data: ['试卷', '试题', '课件'],
                        textStyle: {
                            color: '#fff' // 主标题文字颜色
                        },
                    },
                    series: [{
                        name: '资源类型',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: 335,
                                name: '试卷'
                            },
                            {
                                value: 310,
                                name: '试题'
                            },
                            {
                                value: 234,
                                name: '课件'
                            }
                        ]
                    }]
                };
                
                //作业试题饼状图
                option5 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['课堂作业', '家庭作业', '暑假作业', '寒假作业'],
                        show:false,
                    },
                    series: [{
                        name: '试题类型',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: 335,
                                name: '课堂作业'
                            },
                            {
                                value: 310,
                                name: '家庭作业'
                            },
                            {
                                value: 234,
                                name: '暑假作业'
                            },
                            {
                                value: 135,
                                name: '寒假作业'
                            }
                        ]
                    }]
                };
                
                //试题饼状图
                option6 = {
                    title: {
                        x: 'center',
                        text: '',
                        subtext: '',
                        link: ''
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    grid: {
                        borderWidth: 0,
                        x:0,
                        x2:0,
                        y: 80,
                        y2: 60
                    },
                    xAxis: [{
                        type: 'category',
                        show: false,
                        //区域的名称
                        data: areaname
                    }],
                    yAxis: [{
                        type: 'value',
                        show: false
                    }],
                    series: [{
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#e65b29', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}'
                                }
                            }
                        },
                        //区域的数据
                        data: areadata,
                    }]
                };
                
                                //作业类型饼状图
                option7 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['课堂作业', '家庭作业', '暑假作业', '寒假作业'],
                        show:false,
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: 335,
                                name: '课堂作业'
                            },
                            {
                                value: 310,
                                name: '家庭作业'
                            },
                            {
                                value: 234,
                                name: '暑假作业'
                            },
                            {
                                value: 135,
                                name: '寒假作业'
                            }
                        ]
                    }]
                };
                
                //作业饼状图
                option8 = {
                    title: {
                        x: 'center',
                        text: '',
                        subtext: '',
                        link: ''
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    grid: {
                        borderWidth: 0,
                        x:0,
                        x2:0,
                        y: 80,
                        y2: 60
                    },
                    xAxis: [{
                        type: 'category',
                        show: false,
                        //区域的名称
                        data: areaname
                    }],
                    yAxis: [{
                        type: 'value',
                        show: false
                    }],
                    series: [{
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#e65b29', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}'
                                }
                            }
                        },
                        //区域的数据
                        data: areadata,
                    }]
                };
                
                                //教研类型饼状图
                option9 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['课堂作业', '家庭作业', '暑假作业', '寒假作业'],
                        show:false,
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: 335,
                                name: '课堂作业'
                            },
                            {
                                value: 310,
                                name: '家庭作业'
                            },
                            {
                                value: 234,
                                name: '暑假作业'
                            },
                            {
                                value: 135,
                                name: '寒假作业'
                            }
                        ]
                    }]
                };
                
                //教研饼状图
                option10 = {
                    title: {
                        x: 'center',
                        text: '',
                        subtext: '',
                        link: ''
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    grid: {
                        borderWidth: 0,
                        x:0,
                        x2:0,
                        y: 80,
                        y2: 60
                    },
                    xAxis: [{
                        type: 'category',
                        show: false,
                        //区域的名称
                        data: areaname
                    }],
                    yAxis: [{
                        type: 'value',
                        show: false
                    }],
                    series: [{
                        name: '',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#e65b29', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}'
                                }
                            }
                        },
                        //区域的数据
                        data: areadata,
                    }]
                };
                


                // 使用刚指定的配置项和数据显示图表。
                myChart1.setOption(option1);
                myChart2.setOption(option2);
                myChart3.setOption(option3, true);
                myChart4.setOption(option4, true);
                myChart5.setOption(option5, true);
                myChart6.setOption(option6, true);
                myChart7.setOption(option7, true);
                myChart8.setOption(option8, true);
                myChart9.setOption(option9, true);
                myChart10.setOption(option10, true);


            })
        }

        //根据窗口大小自适应图表
        window.addEventListener("resize", function() {
            myChart1.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
        });