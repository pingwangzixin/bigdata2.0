/*
 * Created by qbyu2 on 2017/6/19.
 */
//知识点图节点
var bigDataAll = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "0%~20%", //关系网名称  
			"keyword": {},
			"base": "0%~20%"
		},
		{
			"name": "20%~40%", //关系网名称  
			"keyword": {},
			"base": "20%~40%"
		},
		{
			"name": "40%~60%", //关系网名称  
			"keyword": {},
			"base": "40%~60%"
		},
		{
			"name": "60%~80%", //关系网名称  
			"keyword": {},
			"base": "60%~80%"
		},
		{
			"name": "80%~100%", //关系网名称  
			"keyword": {},
			"base": "80%~100%"
		},
		{
			"name": "未学习", //关系网名称  
			"keyword": {},
			"base": "未学习"
		}
	],
	"nodes": [ //展示的节点
		// row 1
		{ //index  0
			"name": "空间几何体的结构综合问题---折叠与展开问题", //节点名称  
			'x': 10,
			'y': 60,
			'fixed': true,
			'symbolSize': 12,
			"category": 1 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{ //index  1
			"name": "平行投影与中心投影",
			'x': 0,
			'y': 113,
			'fixed': true,
			'symbolSize': 18,

			"category": 5
		},
		{ //index  2
			"name": "空间几何体的三视图",

			'x': 60,
			'y': 190,
			'fixed': true,
			'symbolSize': 20,
			"category": 4
		},
		{ //index  3
			"name": "空间几何体的直观图",

			'x': 15,
			'y': 240,
			'fixed': true,
			'symbolSize': 27,
			"category": 3
		},

		// row 2
		{ //index  4
			"name": "三视图的综合应用",

			'x': 85,
			'y': 80,
			'fixed': true,
			'symbolSize': 20,
			"category": 4
		},
		{ //index  5
			"name": "简单组合体的结构特征",

			'x': 233,
			'y': 200,
			'fixed': true,
			'symbolSize': 28,
			"category": 4
		},
		{ //index  6
			"name": "平面的基本性质及应用",

			'x': 0,
			'y': 170,
			'fixed': true,
			'symbolSize': 18,
			"category": 4
		},
		{ //index  7
			"name": "空间中直线与直线的位置关系",

			'x': 120,
			'y': 230,
			'fixed': true,
			'symbolSize': 20,
			"category": 3
		},
		{ //index  8
			"name": "直线与平面的位置关系",

			'x': 170,
			'y': 80,
			'fixed': true,
			'symbolSize': 30,
			"category": 0
		},

		// row 3
		{ //index  9
			"name": "直线与平面平行的判定", //节点名称  
			'x': 160,
			'y': 180,
			'fixed': true,
			'symbolSize': 15,
			"category": 1 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{ //index  10
			"name": "直线与平面平行的性质",

			'x': 160,
			'y': 240,
			'fixed': true,
			'symbolSize': 13,
			"category": 0
		},
		{ //index  11
			"name": "平面与平面的位置关系",
			'x': 240,
			'y': 65,
			'fixed': true,
			'symbolSize': 30,
			"category": 1
		},
		{ //index  12
			"name": "平面与平面平行的判定",
			'x': 350,
			'y': 110,
			'fixed': true,
			'symbolSize': 17,
			"category": 1
		},

		// row 4
		{ //index  13
			"name": "平面与平面平行的性质",
			'x': 220,
			'y': 230,
			'fixed': true,
			'symbolSize': 8,
			"category": 3
		},
		{ //index  14
			"name": "判定线面平行---利用线面平行判定定理",

			'x': 310,
			'y': 75,
			'fixed': true,
			'symbolSize': 11,
			"category": 1
		},
		{ //index  15
			"name": "判定线面平行---利用面面平行性质",
			'x': 380,
			'y': 190,
			'fixed': true,
			'symbolSize': 14,
			"category": 2
		},
		{ //index  16
			"name": "判定面面平行---利用面面平行判定定理",

			'x': 310,
			'y': 230,
			'fixed': true,
			'symbolSize': 16,
			"category": 0
		},
		{ //index  17
			"name": "直线的斜率",

			'x': 400,
			'y': 80,
			'fixed': true,
			'symbolSize': 30,
			"category": 0
		},

		// row 5
		{ //index  18
			"name": "直线的倾斜角", //节点名称  

			'x': 380,
			'y': 140,
			'fixed': true,
			'symbolSize': 18,
			"category": 3
		},
		{ //index  19
			"name": "直线的两点式斜率公式",

			'x': 410,
			'y': 190,
			'fixed': true,
			'symbolSize': 8,
			"category": 1
		},
		{ //index  20
			"name": "直线方程的点斜式",

			'x': 400,
			'y': 240,
			'fixed': true,
			'symbolSize': 14,
			"category": 5
		},
		{ //index  21
			"name": "斜率的应用",

			'x': 500,
			'y': 90,
			'fixed': true,
			'symbolSize': 12,
			"category": 2
		},

		// row 6
		{ //index  22
			"name": "直线方程的斜截式",

			'x': 520,
			'y': 190,
			'fixed': true,
			'symbolSize': 11,
			"category": 2
		},
		{ //index  23
			"name": "直线方程的两点式",

			'x': 500,
			'y': 230,
			'fixed': true,
			'symbolSize': 15,
			"category": 4
		},
		{ //index  24
			"name": "直线方程的一般式",

			'x': 560,
			'y': 80,
			'fixed': true,
			'symbolSize': 17,
			"category": 2
		},
		{ //index  25
			"name": "圆与圆的位置关系",

			'x': 570,
			'y': 170,
			'fixed': true,
			'symbolSize': 19,
			"category": 2
		},
		{ //index  26
			"name": "直线方程的截距式",

			'x': 560,
			'y': 240,
			'fixed': true,
			'symbolSize': 19,
			"category": 1
		},
		{ //index  27
			"name": "点与圆的位置关系",

			'x': 620,
			'y': 130,
			'fixed': true,
			'symbolSize': 12,
			"category": 2
		},
		{ //index  28
			"name": "圆的定义及其标准方程",

			'x': 620,
			'y': 230,
			'fixed': true,
			'symbolSize': 25,
			"category": 3
		},
		{ //index  29
			"name": "直线与圆的方程的应用",
			'x': 460,
			'y': 150,
			'fixed': true,
			'symbolSize': 30,
			"category": 0
		},
		{ //index  30
			"name": "直线与平面垂直的判定",
			'x': 320,
			'y': 180,
			'fixed': true,
			'symbolSize': 30,
			"category": 1
		},
		{ //index  31
			"name": "圆的一般方程",
			'x': 620,
			'y': 180,
			'fixed': true,
			'symbolSize': 30,
			"category": 1
		}
	],
	"links": [ //节点之间连接  
		{
			"source": 0, //起始节点，0表示第一个节点  
			"target": 2 //目标节点，1表示与索引为1的节点进行连接  

		},
		{
			"source": 0,
			"target": 5
		},
		{
			"source": 1,
			"target": 2
		},
		{
			"source": 2,
			"target": 3
		},
		{
			"source": 2,
			"target": 4
		},
		{
			"source": 1,
			"target": 5
		},
		{
			"source": 3,
			"target": 5
		},
		{
			"source": 4,
			"target": 5
		},
		{
			"source": 6,
			"target": 7
		},
		{
			"source": 6,
			"target": 8
		},
		{
			"source": 7,
			"target": 8
		},
		{
			"source": 8,
			"target": 9
		},
		{
			"source": 8,
			"target": 11
		},
		{
			"source": 9,
			"target": 10
		},
		{
			"source": 11,
			"target": 12
		},
		{
			"source": 12,
			"target": 14
		},
		{
			"source": 12,
			"target": 15
		},
		{
			"source": 12,
			"target": 16
		},
		{
			"source": 17,
			"target": 18
		},
		{
			"source": 17,
			"target": 19
		},
		{
			"source": 17,
			"target": 21
		},
		{
			"source": 19,
			"target": 20
		},
		{
			"source": 20,
			"target": 22
		},
		{
			"source": 22,
			"target": 23
		},
		{
			"source": 23,
			"target": 26
		},
		{
			"source": 24,
			"target": 28
		},
		{
			"source": 26,
			"target": 23
		},
		{
			"source": 26,
			"target": 24
		},
		{
			"source": 13,
			"target": 11
		},
		{
			"source": 13,
			"target": 12
		},
		{
			"source": 13,
			"target": 16
		},
		{
			"source": 25,
			"target": 27
		},
		{
			"source": 28,
			"target": 25
		},
		{
			"source": 30,
			"target": 8
		},
		{
			"source": 29,
			"target": 28
		},
		{
			"source": 29,
			"target": 22
		},
		{
			"source": 29,
			"target": 23
		},
		{
			"source": 29,
			"target": 24
		},
		{
			"source": 29,
			"target": 26
		},
		{
			"source": 31,
			"target": 25
		}
	]
};
var bigData1 = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "0%~20%", //关系网名称  
			"keyword": {},
			"base": "0%~20%"
		},
		{
			"name": "20%~40%",
			"keyword": {},
			"base": "20%~40%"
		},
		{
			"name": "40%~60%",
			"keyword": {},
			"base": "40%~60%"
		},
		{
			"name": "60%~80%",
			"keyword": {},
			"base": "60%~80%"
		},
		{
			"name": "80%~100%",
			"keyword": {},
			"base": "80%~100%"
		},
		{
			"name": "未学习",
			"keyword": {},
			"base": "未学习"
		}
	],
	"nodes": [ //展示的节点  
		{ //index  0
			"name": "直线与平面平行的位置关系", //节点名称  

			'symbolSize': 40,
			"category": 1 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{ //index  1
			"name": "直线与平面平行的判定",
			"value": 10,
			'symbolSize': 20,
			"category": 2
		},
		{ //index  2
			"name": "直线与平面平行的性质",

			'symbolSize': 20,
			"category": 3
		},
		{ //index  3
			"name": "平面的基本性质及应用",

			'symbolSize': 20,
			"category": 0
		},
		{ //index  4
			"name": "平面与平面的位置关系",

			'symbolSize': 20,
			"category": 2
		},
		{ //index  5
			"name": "",

			'symbolSize': 8,
			"category": 4
		},
		{ //index  6
			"name": "",

			'symbolSize': 8,
			"category": 3
		},
		{ //index  7
			"name": "",

			'symbolSize': 8,
			"category": 5
		},
		{ //index  8
			"name": "",

			'symbolSize': 8,
			"category": 0
		}
	],
	"links": [ //节点之间连接  
		{
			"source": 1, //起始节点，0表示第一个节点  
			"target": 0 //目标节点，1表示与索引为1的节点进行连接  

		},
		{
			"source": 2,
			"target": 0

		},
		{
			"source": 3,
			"target": 2
		},
		{
			"source": 4,
			"target": 0

		},
		{
			"source": 5,
			"target": 0
		},
		{
			"source": 6,
			"target": 1
		},
		{
			"source": 7,
			"target": 1
		},
		{
			"source": 8,
			"target": 2
		}
	]
}
var bigData2 = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "0%~20%", //关系网名称  
			"keyword": {},
			"base": "0%~20%"
		},
		{
			"name": "20%~40%",
			"keyword": {},
			"base": "20%~40%"
		},
		{
			"name": "40%~60%",
			"keyword": {},
			"base": "40%~60%"
		},
		{
			"name": "60%~80%",
			"keyword": {},
			"base": "60%~80%"
		},
		{
			"name": "80%~100%",
			"keyword": {},
			"base": "80%~100%"
		},
		{
			"name": "未学习",
			"keyword": {},
			"base": "未学习"
		}
	],
	"nodes": [ //展示的节点  
		{ //index  0
			"name": "直线的斜率", //节点名称  

			'symbolSize': 40,
			"category": 3 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{ //index  1
			"name": "直线的倾斜角",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  2
			"name": "直线的两点式斜率公式",

			'symbolSize': 20,
			"category": 2
		},
		{ //index  3
			"name": "直线方程的点斜式",

			'symbolSize': 20,
			"category": 0
		},
		{ //index  4
			"name": "斜率的应用",

			'symbolSize': 20,
			"category": 4
		},
		{ //index  5
			"name": "两条直线平行的判定",

			'symbolSize': 20,
			"category": 4
		},
		{ //index  6
			"name": "",

			'symbolSize': 8,
			"category": 3
		},
		{ //index  7
			"name": "",

			'symbolSize': 8,
			"category": 5
		},
		{ //index  8
			"name": "",

			'symbolSize': 8,
			"category": 1
		},
		{ //index  9
			"name": "",

			'symbolSize': 8,
			"category": 2
		},
		{ //index  10
			"name": "",

			'symbolSize': 8,
			"category": 1
		}
	],
	"links": [ //节点之间连接  
		{
			"source": 1, //起始节点，0表示第一个节点  
			"target": 0 //目标节点，1表示与索引为1的节点进行连接  

		},
		{
			"source": 2,
			"target": 0

		},
		{
			"source": 3,
			"target": 2
		},
		{
			"source": 4,
			"target": 0

		},
		{
			"source": 5,
			"target": 0
		},
		{
			"source": 6,
			"target": 1
		},
		{
			"source": 7,
			"target": 1
		},
		{
			"source": 8,
			"target": 2
		},
		{
			"source": 10,
			"target": 3
		},
		{
			"source": 9,
			"target": 3
		}
	]
}
var bigData3 = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "0%~20%", //关系网名称  
			"keyword": {},
			"base": "0%~20%"
		},
		{
			"name": "20%~40%",
			"keyword": {},
			"base": "20%~40%"
		},
		{
			"name": "40%~60%",
			"keyword": {},
			"base": "40%~60%"
		},
		{
			"name": "60%~80%",
			"keyword": {},
			"base": "60%~80%"
		},
		{
			"name": "80%~100%",
			"keyword": {},
			"base": "80%~100%"
		},
		{
			"name": "未学习",
			"keyword": {},
			"base": "未学习"
		}
	],
	"nodes": [ //展示的节点  
		{ //index  0
			"name": "直线与圆的方程的应用", //节点名称  

			'symbolSize': 40,
			"category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{ //index  1
			"name": "圆的定义及其标准方程",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  2
			"name": "直线方程的一般式",

			'symbolSize': 20,
			"category": 0
		},
		{ //index  3
			"name": "直线与圆位置关系的判断",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  4
			"name": "直线与圆相交的弦长",

			'symbolSize': 20,
			"category": 2
		},
		{ //index  5
			"name": "",

			'symbolSize': 8,
			"category": 4
		},
		{ //index  6
			"name": "",

			'symbolSize': 8,
			"category": 3
		},
		{ //index  7
			"name": "",

			'symbolSize': 8,
			"category": 5
		},
		{ //index  8
			"name": "",

			'symbolSize': 8,
			"category": 3
		},
		{ //index  9
			"name": "",
			"value": 50,
			'symbolSize': 8,
			"category": 0
		},
		{ //index  10
			"name": "",

			'symbolSize': 8,
			"category": 1
		}
	],
	"links": [ //节点之间连接  
		{
			"source": 1, //起始节点，0表示第一个节点  
			"target": 0 //目标节点，1表示与索引为1的节点进行连接  

		},
		{
			"source": 2,
			"target": 0

		},
		{
			"source": 3,
			"target": 2
		},
		{
			"source": 4,
			"target": 0

		},
		{
			"source": 5,
			"target": 0
		},
		{
			"source": 6,
			"target": 1
		},
		{
			"source": 7,
			"target": 1
		},
		{
			"source": 8,
			"target": 2
		},
		{
			"source": 6,
			"target": 9
		},
		{
			"source": 7,
			"target": 10
		}
	]
}
var bigData4 = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "0%~20%", //关系网名称  
			"keyword": {},
			"base": "0%~20%"
		},
		{
			"name": "20%~40%",
			"keyword": {},
			"base": "20%~40%"
		},
		{
			"name": "40%~60%",
			"keyword": {},
			"base": "40%~60%"
		},
		{
			"name": "60%~80%",
			"keyword": {},
			"base": "60%~80%"
		},
		{
			"name": "80%~100%",
			"keyword": {},
			"base": "80%~100%"
		},
		{
			"name": "未学习",
			"keyword": {},
			"base": "未学习"
		}
	],
	"nodes": [ //展示的节点  
		{ //index  0
			"name": "平面与平面的位置关系", //节点名称  

			'symbolSize': 40,
			"category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{ //index  1
			"name": "判定线面平行---利用线面平行判定定理",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  2
			"name": "判定线面平行---利用面面平行性质",
			'symbolSize': 20,
			"category": 0
		},
		{ //index  3
			"name": "判定面面平行---利用面面平行判定定理",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  4
			"name": "平面与平面平行的判定",

			'symbolSize': 20,
			"category": 2
		},
		{ //index  5
			"name": "",

			'symbolSize': 8,
			"category": 4
		},
		{ //index  6
			"name": "",

			'symbolSize': 8,
			"category": 3
		},
		{ //index  7
			"name": "",

			'symbolSize': 8,
			"category": 5
		},
		{ //index  8
			"name": "",

			'symbolSize': 8,
			"category": 2
		},
		{ //index  9
			"name": "",

			'symbolSize': 8,
			"category": 3
		},
		{ //index  10
			"name": "",

			'symbolSize': 8,
			"category": 4
		}
	],
	"links": [ //节点之间连接  
		{
			"source": 1, //起始节点，0表示第一个节点  
			"target": 0 //目标节点，1表示与索引为1的节点进行连接  

		},
		{
			"source": 2,
			"target": 0

		},
		{
			"source": 3,
			"target": 2
		},
		{
			"source": 4,
			"target": 0

		},
		{
			"source": 5,
			"target": 0
		},
		{
			"source": 6,
			"target": 1
		},
		{
			"source": 7,
			"target": 1
		},
		{
			"source": 8,
			"target": 2
		},
		{
			"source": 7,
			"target": 9
		},
		{
			"source": 9,
			"target": 10
		}
	]
}
var bigData5 = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "0%~20%", //关系网名称  
			"keyword": {},
			"base": "0%~20%"
		},
		{
			"name": "20%~40%",
			"keyword": {},
			"base": "20%~40%"
		},
		{
			"name": "40%~60%",
			"keyword": {},
			"base": "40%~60%"
		},
		{
			"name": "60%~80%",
			"keyword": {},
			"base": "60%~80%"
		},
		{
			"name": "80%~100%",
			"keyword": {},
			"base": "80%~100%"
		},
		{
			"name": "未学习",
			"keyword": {},
			"base": "未学习"
		}
	],
	"nodes": [ //展示的节点  
		{ //index  0
			"name": "直线与平面垂直的判定", //节点名称  

			'symbolSize': 40,
			"category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{ //index  1
			"name": "直线与平面的位置关系",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  2
			"name": "判定线面平行---利用面面平行性质",

			'symbolSize': 20,
			"category": 0
		},
		{ //index  3
			"name": "直线与平面所成的角---概念",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  4
			"name": "直线与平面所成的角---求法（定义法）",

			'symbolSize': 20,
			"category": 2
		},
		{ //index  5
			"name": "",

			'symbolSize': 8,
			"category": 4
		},
		{ //index  6
			"name": "",

			'symbolSize': 8,
			"category": 3
		},
		{ //index  7
			"name": "",

			'symbolSize': 8,
			"category": 5
		},
		{ //index  8
			"name": "",

			'symbolSize': 8,
			"category": 0
		}
	],
	"links": [ //节点之间连接  
		{
			"source": 1, //起始节点，0表示第一个节点  
			"target": 0 //目标节点，1表示与索引为1的节点进行连接  

		},
		{
			"source": 2,
			"target": 0

		},
		{
			"source": 3,
			"target": 2
		},
		{
			"source": 4,
			"target": 0

		},
		{
			"source": 5,
			"target": 0
		},
		{
			"source": 6,
			"target": 1
		},
		{
			"source": 7,
			"target": 1
		},
		{
			"source": 8,
			"target": 7
		}
	]
}
var bigData6 = {
	"type": "force",
	"categories": [ //关系网类别，可以写多组  
		{
			"name": "0%~20%", //关系网名称  
			"keyword": {},
			"base": "0%~20%"
		},
		{
			"name": "20%~40%",
			"keyword": {},
			"base": "20%~40%"
		},
		{
			"name": "40%~60%",
			"keyword": {},
			"base": "40%~60%"
		},
		{
			"name": "60%~80%",
			"keyword": {},
			"base": "60%~80%"
		},
		{
			"name": "80%~100%",
			"keyword": {},
			"base": "80%~100%"
		},
		{
			"name": "未学习",
			"keyword": {},
			"base": "未学习"
		}
	],
	"nodes": [ //展示的节点  
		{ //index  0
			"name": "圆的一般式方程", //节点名称  

			'symbolSize': 40,
			"category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
		},
		{ //index  1
			"name": "圆的定义及其标准方程",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  2
			"name": "轨迹问题---直接法",

			'symbolSize': 20,
			"category": 0
		},
		{ //index  3
			"name": "轨迹问题---代入法",

			'symbolSize': 20,
			"category": 1
		},
		{ //index  4
			"name": "轨迹问题---定义法",

			'symbolSize': 20,
			"category": 2
		},
		{ //index  5
			"name": "",

			'symbolSize': 8,
			"category": 4
		},
		{ //index  6
			"name": "",

			'symbolSize': 8,
			"category": 3
		},
		{ //index  7
			"name": "",

			'symbolSize': 8,
			"category": 5
		},
		{ //index  8
			"name": "",

			'symbolSize': 8,
			"category": 1
		}
	],
	"links": [ //节点之间连接  
		{
			"source": 1, //起始节点，0表示第一个节点  
			"target": 0 //目标节点，1表示与索引为1的节点进行连接  

		},
		{
			"source": 2,
			"target": 0

		},
		{
			"source": 3,
			"target": 2
		},
		{
			"source": 4,
			"target": 0

		},
		{
			"source": 5,
			"target": 0
		},
		{
			"source": 6,
			"target": 1
		},
		{
			"source": 7,
			"target": 1
		},
		{
			"source": 8,
			"target": 2
		}
	]
}