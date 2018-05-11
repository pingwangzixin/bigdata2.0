/**
 * Created by hanzhang on 2017/6/21.
 */


var RANDOM_RANGE = 10;
var RANDOM_TIMMER = 10 * 1000;
var MAP_TIMMER = 2 * 1000;

/* 学业水平发展情况数据 */
var LEVEL_DATA = {
    /* 福州 */
    "fuzhou" : {
        /* 福州八中 */
        "fuzhou_bazhong" : {
            /* 高中学段 */
            "05" : {
                /* 高一年级 */
                "10" : {
                    /*  折线图 */
                    "lineChart" : {
                        "schoolData" : [
                            {exam : "高一第一学期期中考试", excellent : '2.45%', good : '7.64%', pass : '31.76%', score : 540.5},
                            {exam : "高一期末考试第二阶段", excellent : '6.62%', good : '19.42%', pass : '58.85%', score : 526.2},
							{exam : "高一第二学期期中考试", excellent : '5.37%', good : '18.66%', pass : '55.97%', score : 536.2},
                            {exam : "高一第二学期期末考试", excellent : '4.08%', good : '7.14%', pass : '31.39%', score : 549.8}
                        ],
                        "areaData" : [null, null, null, null, null],
                        "clazzData" : [
                            {name : "高一年级1班", data : [567.2, 506.1, 552.8, 568.3]},
                            {name : "高一年级2班", data : [554.1, 575.4, 546.6, 582]},
                            {name : "高一年级3班", data : [523, 487.8, 568.9, 514.5]}
                            /*{name : "高一年级4班", data : [548, 523.6, 557.2, 589]},
                            {name : "高一年级5班", data : [576, 545.7, 554.8, 588.7]}*/
                        ],
                        "lineData" : []
                    },
                    "radarChart" : {
                        "subject" : ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'],
                        "school" : [0, 0.1, 0.2, 0, 0.2, -0.1, 0.1, -0.1, 0.2],
                        "area" : [0.1, 0, 0.1, -0.1, 0, 0, 0, 0, 0]
                    }
                },
                /* 高二年级 */
                "11" : {
                    /*  折线图 */
                    "lineChart" : {
                        "schoolData" : [
                            {exam : "高二第一学期期中考试", excellent : '13.57%', good : '24.84%', pass : '63.05%', score : 489.6},
                            {exam : "高二第一学期期末考试", excellent : '21.64%', good : '28.57%', pass : '78.15%', score : 521.9},
                            {exam : "高二第二学期期中考试", excellent : '5.27%', good : '17.09%', pass : '53.38%', score : 505.6},
                            {exam : "高二第二学期期末考试", excellent : '3.79%', good : '18.11%', pass : '50.53%', score : 460.6}
                        ],
                        "areaData" : [null, null, 523, null, null],
                        "clazzData" : [
                            {name : "高二年级1班", data : [439.9, 502.9, 545.5, 423]},
                            {name : "高二年级2班", data : [587.2, 514, 485.3, 487.6]},
                            {name : "高二年级3班", data : [451.5, 492.1, 458.2, 477.2]},
                            /*{name : "高二年级4班", data : [598, 511.9, 490.1, 437.1]},
                            {name : "高二年级5班", data : [592.4, 502.2, 485, 450.3]}*/
                        ],
                        "lineData" : []
                    },
                    "radarChart" : {
                        "subject" : ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'],
                        "school" : [0.1, 0.1, -0.1, 0, -0.1, 0.2, 0.1, 0.2, 0.1],
                        "area" : [0, -0.1, 0.1, -0.1, 0.1, 0.1, -0.1, 0.1, 0]
                    }
                },
                /* 高三年级 */
                "12" : {
                    /*  折线图 */
                    "lineChart" : {
                        "schoolData" : [
                            {exam : "高三第一次质量检查", excellent : '7.59%', good : '18.99%', pass : '54.64%', score : 465.3},
                            {exam : "高三第二次质量检查", excellent : '3.33%', good : '16.88%', pass : '45.00%', score : 443.6},
                            {exam : "高三第三次质检考试", excellent : '12.34%', good : '34.42%', pass : '76.62%', score : 479.4},
                            {exam : "高三第四次质量检查", excellent : '2.84%', good : '17.07%', pass : '55.58%', score : 497.2},
                            {exam : "高三第六次质量检查", excellent : '9.96%', good : '26.84%', pass : '64.50%', score : 457},
                            {exam : "五月高三模拟考", excellent : '18.00%', good : '26.90%', pass : '72.67%', score : 507.7, rank : 2}
                        ],
                        "areaData" : [null, null, null, null, null, 489],
                        "clazzData" : [
                            {name : "高三年级1班", data : [475.3, 413.6, 499.4, 437.2, 477, 467.7]},
                            {name : "高三年级2班", data : [431, 458.8, 443.6, 463.3, 495.3, 526.2]},
                            {name : "高三年级3班", data : [484.5, 462.1, 516.8, 533.4, 513.1, 528.1]}
                            /*{name : "高三年级4班", data : [417, 399.3, 441.4, 425.9, 399.1, 465.1]},
                            {name : "高三年级5班", data : [428.3, 414.2, 439.9, 429.1, 407.2, 464.7]}*/
                        ],
                        "lineData" : [[
                            {xAxis: 0,yAxis: 489},
                            {xAxis: 5, yAxis: 489}
                        ],[{xAxis: 5,yAxis: 1},
                            { xAxis: 5,yAxis: 489}
                        ]]
                    },
                    "radarChart" : {
                        "subject" : ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'],
                        "school" : [-0.1, 0.1, 0.1, 0, 0.2, 0.1, 0.1, 0.1,0.2],
                        "area" : [0, 0, 0.2, 0.1, 0.1, -0.1, -0.1, 0,0.1]
                    }
                }
            }
        }
    }
};

/*
 * 教学活动及效果分析数据
 */
var RESULT_DATA = {
    /* 福州 */
    "fuzhou" : {
        /* 福州八中 */
        "fuzhou_bazhong" : {
            /* 高中学段 */
            "05" : {
                "result" : [
                    [65, 59, 8.15],
                    [32, 27, 13.01]
                ],
                "act" : {
                    "type" : ['命题出卷', '自主学习', '学业辅导', '试卷讲评', '学情备课', '作业批改'],
                    "area" : [15, 28, 22, 35, 16, 32],
                    "school" : [18, 30, 24, 30, 18, 34],
                    "teacher" : [
                        {teacher : "周义勇", data : [25, 33, 25, 40, 23, 40]},
                        {teacher : "陈嘉玮", data : [28, 32, 26, 38, 22, 36]},
                        {teacher : "张艳", data : [22, 35, 21, 37, 19, 35]},
                        {teacher : "刘铭行", data : [20, 36, 23, 38, 20, 39]},
                        {teacher : "刘芳", data : [26, 28, 24, 36, 15, 38]}
                    ]
                }
            }
        }
    }
};

/*
 * 教学质量预警数据
 */
var QUALITY_DATA = {
    /* 福州 */
    "fuzhou" : {
        /* 福州八中 */
        "fuzhou_bazhong" : {
            /* 高中学段 */
            "05" : {
                "focusSubject" : [
                    {subject : "语文", count : 43},
                    {subject : "英语", count : 34},
                    {subject : "物理", count : 27}
                ],
                "topClazz" : [
                    {clazz : "高一年级3班", count : 19, teacher : '李熙'},
                    {clazz : "高一年级7班", count : 15, teacher : '王家燕'},
                    {clazz : "高一年级9班", count : 12, teacher : '周英'}
                ],
                "waveClazz" : [
                    {clazz : "高一年级7班", rank : -6},
                    {clazz : "高一年级10班", rank : -4},
                    {clazz : "高一年级1班", rank : -2},
                    {clazz : "高一年级3班", rank : -1}
                ],
                "waveStudent" : {
                    "exam" : ['高一第一学期期中考试', '高一期末考试第二阶段', '高一第二学期期中考试'],
                    "student" : [
                        {student : "郝雨昕", data : [473, 437, 483.39]},
                        {student : "周芷若", data : [523.87, 480, 501.24]},
                        {student : "潘灵慧", data : [484.37, 409, 459.94]},
                        {student : "林鸿飞", data : [567.08, 447, 398.85]},
                        {student : "赖泳棋", data : [507.63, 526.5, 504.93]}
                    ]
                }
            }
        }
    }
};

