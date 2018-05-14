/*
 * created by qbyu2 2017 06 19
 */
(function(window, jQuery) {
	//大关系图
	function bigDataRaleEchart() {

		var bigDataScatter = echarts.init(document.querySelector("#bigDataScatterEchart"));

		//		bigDataScatter.showLoading();
		//		bigDataScatter.hideLoading();

		bigDataOption = {
			color: ['#ff6430', '#fdb726', '#b9d32e', '#00d63a', '#00ba71', '#8a3aff'],
			legend: {
				orient:'vertical',
//				top:-10,
				right: 0,
				textStyle: {
					color: '#fff'
				},
				itemWidth: 10,
				itemHeight: 10,
				data: ['0%~20%', '20%~40%', '40%~60%', '60%~80%', '80%~100%', '未学习'] //此处的数据必须和关系网类别中name相对应  
			},
			
			grid: {
				show: true,
				left: 0,
				top: 0,
				width: 880,
				height: 230,
				backgroundColor: 'rgba(20, 30, 70, 0.5)',
				borderWidth: 1,
				borderColor: '#162f63',
				containLabel: true
			},
			series: [{
				type: 'graph',
				//layout: 'force',
				animation: false,
				label: {
					normal: {
						show: false,
						position: 'right'
					}
				},
				draggable: true,
				data: bigDataAll.nodes.map(function(node, idx) {
					node.id = idx;
					return node;
				}),
				categories: bigDataAll.categories,
				force: {
					edgeLength: 100, //连线的长度  
					repulsion: 100 //子节点之间的间距  
				},
				itemStyle: {
					normal: {
						borderWidth: 1
					}
				},
				lineStyle: {
					normal: {
						curveness: 0.3
					}
				},
				edgeSymbol: ['none', 'arrow'],
				edgeSymbolSize: 6,
				edges: bigDataAll.links,
				focusNodeAdjacency: true
			}]
		};
		bigDataScatter.setOption(bigDataOption);

	}
	//关系图  分
	function bigDataRaleEchartList() {
		//直线与平面垂直的判定
		var bigDataYlsys = echarts.init(document.querySelector("#bigDataYlsys"));

		ylsysOption = {
			color: ['#ff6430', '#fdb726', '#b9d32e', '#00d63a', '#00ba71', '#8a3aff'],
			legend: {
				orient:'vertical',
				right: 0,
				textStyle: {
					color: '#fff'
				},
				itemWidth: 10,
				itemHeight: 10,
				data: ['0%~20%', '20%~40%', '40%~60%', '60%~80%', '80%~100%', '未学习'] //此处的数据必须和关系网类别中name相对应  
			},
			grid: {
				left: 0,
				top: '5%',
				containLabel: true
			},
			series: [{
				type: 'graph',
				layout: 'force',
				animation: false,
				label: {
					normal: {
						show: true,
						position: 'right'
					}
				},
				draggable: true,
				data: bigData1.nodes.map(function(node, idx) {
					node.id = idx;
					return node;
				}),
				categories: bigData1.categories,
				force: {
					edgeLength: 100, //连线的长度  
					repulsion: 100 //子节点之间的间距  
				},
				lineStyle: {
					normal: {
						curveness: 0.1
					}
				},
				edgeSymbol: ['none', 'arrow'],
				edgeSymbolSize: 6,
				edges: bigData1.links,
				focusNodeAdjacency: true
			}]
		};

		bigDataYlsys.setOption(ylsysOption);

		//多项式
		var bigDataDxs = echarts.init(document.querySelector("#bigDataDxs"));

		DxsOption = {
			color: ['#ff6430', '#fdb726', '#b9d32e', '#00d63a', '#00ba71', '#8a3aff'],
			legend: {
				orient:'vertical',
				right: 0,
				textStyle: {
					color: '#fff'
				},
				itemWidth: 10,
				itemHeight: 10,
				data: ['0%~20%', '20%~40%', '40%~60%', '60%~80%', '80%~100%', '未学习'] //此处的数据必须和关系网类别中name相对应  
			},
			grid: {
				left: 0,
				top: '5%',

				containLabel: true
			},
			series: [{
				type: 'graph',
				layout: 'force',
				animation: false,
				label: {
					normal: {
						show: true,
						position: 'right'
					}
				},
				draggable: true,
				data: bigData2.nodes.map(function(node, idx) {
					node.id = idx;
					return node;
				}),
				categories: bigData2.categories,
				force: {
					edgeLength: 100, //连线的长度  
					repulsion: 100 //子节点之间的间距  
				},
				lineStyle: {
					normal: {
						curveness: 0.1
					}
				},
				edgeSymbol: ['none', 'arrow'],
				edgeSymbolSize: 6,
				edges: bigData2.links,
				focusNodeAdjacency: true
			}]
		};
		bigDataDxs.setOption(DxsOption);

		//等式的性质
		var bigDataDsdxz = echarts.init(document.querySelector("#bigDataDsdxz"));

		DsdxzOption = {
			color: ['#ff6430', '#fdb726', '#b9d32e', '#00d63a', '#00ba71', '#8a3aff'],
			legend: {
				orient:'vertical',
				right: 0,
				textStyle: {
					color: '#fff'
				},
				itemWidth: 10,
				itemHeight: 10,
				data: ['0%~20%', '20%~40%', '40%~60%', '60%~80%', '80%~100%', '未学习'] //此处的数据必须和关系网类别中name相对应  
			},
			grid: {
				left: 0,
				top: '5%',

				containLabel: true
			},
			series: [{
				type: 'graph',
				layout: 'force',
				animation: false,
				label: {
					normal: {
						show: true,
						position: 'right'
					}
				},
				draggable: true,
				data: bigData3.nodes.map(function(node, idx) {
					node.id = idx;
					return node;
				}),
				categories: bigData3.categories,
				force: {
					edgeLength: 100, //连线的长度  
					repulsion: 100 //子节点之间的间距  
				},
				lineStyle: {
					normal: {
						curveness: 0.1
					}
				},
				edgeSymbol: ['none', 'arrow'],
				edgeSymbolSize: 6,
				edges: bigData3.links,
				focusNodeAdjacency: true
			}]
		};
		bigDataDsdxz.setOption(DsdxzOption);

		//一元一次方程解法
		var bigDataFcjf = echarts.init(document.querySelector("#bigDataFcjf"));

		fcjfOption = {
			color: ['#ff6430', '#fdb726', '#b9d32e', '#00d63a', '#00ba71', '#8a3aff'],
			legend: {
				orient:'vertical',
				right: 0,
				textStyle: {
					color: '#fff'
				},
				itemWidth: 10,
				itemHeight: 10,
				data: ['0%~20%', '20%~40%', '40%~60%', '60%~80%', '80%~100%', '未学习'] //此处的数据必须和关系网类别中name相对应  
			},
			grid: {
				left: 0,
				top: '5%',

				containLabel: true
			},
			series: [{
				type: 'graph',
				layout: 'force',
				animation: false,
				label: {
					normal: {
						show: true,
						position: 'right'
					}
				},
				draggable: true,
				data: bigData4.nodes.map(function(node, idx) {
					node.id = idx;
					return node;
				}),
				categories: bigData4.categories,
				force: {
					edgeLength: 100, //连线的长度  
					repulsion: 100 //子节点之间的间距  
				},
				lineStyle: {
					normal: {
						curveness: 0.1
					}
				},
				edgeSymbol: ['none', 'arrow'],
				edgeSymbolSize: 6,
				edges: bigData4.links,
				focusNodeAdjacency: true
			}]
		};
		bigDataFcjf.setOption(fcjfOption);
		//一元一次方程应用
		var bigDataFcyy = echarts.init(document.querySelector("#bigDataFcyy"));

		FcyyDataOption = {
			color: ['#ff6430', '#fdb726', '#b9d32e', '#00d63a', '#00ba71', '#8a3aff'],
			legend: {
				orient:'vertical',
				right: 0,
				textStyle: {
					color: '#fff'
				},
				itemWidth: 10,
				itemHeight: 10,
				data: ['0%~20%', '20%~40%', '40%~60%', '60%~80%', '80%~100%', '未学习'] //此处的数据必须和关系网类别中name相对应  
			},
			grid: {
				left: 0,
				top: '5%',

				containLabel: true
			},
			series: [{
				type: 'graph',
				layout: 'force',
				animation: false,
				label: {
					normal: {
						show: true,
						position: 'right'
					}
				},
				draggable: true,
				data: bigData5.nodes.map(function(node, idx) {
					node.id = idx;
					return node;
				}),
				categories: bigData5.categories,
				force: {
					edgeLength: 100, //连线的长度  
					repulsion: 100 //子节点之间的间距  
				},
				lineStyle: {
					normal: {
						curveness: 0.1
					}
				},
				edgeSymbol: ['none', 'arrow'],
				edgeSymbolSize: 6,
				edges: bigData5.links,
				focusNodeAdjacency: true
			}]
		};
		bigDataFcyy.setOption(FcyyDataOption);
		//平方根的概念
		var bigDataPfggn = echarts.init(document.querySelector("#bigDataPfggn"));

		pfggnOption = {
			color: ['#ff6430', '#fdb726', '#b9d32e', '#00d63a', '#00ba71', '#8a3aff'],
			legend: {
				orient:'vertical',
				right: 0,
				textStyle: {
					color: '#fff'
				},
				itemWidth: 10,
				itemHeight: 10,
				data: ['0%~20%', '20%~40%', '40%~60%', '60%~80%', '80%~100%', '未学习'] //此处的数据必须和关系网类别中name相对应  
			},
			grid: {
				left: 0,
				top: '5%',

				containLabel: true
			},
			series: [{
				type: 'graph',
				layout: 'force',
				animation: false,
				label: {
					normal: {
						show: true,
						position: 'right'
					}
				},
				draggable: true,
				data: bigData6.nodes.map(function(node, idx) {
					node.id = idx;
					return node;
				}),
				categories: bigData6.categories,
				force: {
					edgeLength: 100, //连线的长度  
					repulsion: 100 //子节点之间的间距  
				},
				lineStyle: {
					normal: {
						curveness: 0.1
					}
				},
				edgeSymbol: ['none', 'arrow'],
				edgeSymbolSize: 6,
				edges: bigData6.links,
				focusNodeAdjacency: true
			}]
		};
		bigDataPfggn.setOption(pfggnOption);
	}

	//轮播
	function autoKnowledge() {
		var showBigData = $("#showBigData");

		var index = 1;
		var len = $("#showBigData > li").length;

		//		var autoShowData = window.setInterval(function() {
		//			ShowData(index);
		//			index++;
		//			if(index == len) {
		//				index = 0
		//			}
		//		}, 3000);

		$(".knowledge_menu_list").on('click', function() {
			index = $(".knowledge_menu_list").index(this);
			ShowData(index);
		});

		$("#knowledge_menu,#showBigData").hover(function() {
			//			window.clearInterval(autoShowData);
		}).mouseleave(function() {
			//			autoShowData = window.setInterval(function() {
			//				index++;
			//				if(index == len) {
			//					index = 0
			//				}
			//				ShowData(index);
			//			}, 3000);
		});

		function ShowData(index) {
			$(".knowledge_menu_list").eq(index).toggleClass("knowledge_menu_changed").siblings().removeClass("knowledge_menu_changed");
			if($(".knowledge_menu_list").hasClass('knowledge_menu_changed')) {
				//轮播移动
				//			showBigData.stop(true, false).animate({
				//				'marginLeft': -(570 * index) + 'px'
				//			}, 500);

				$("#showBigData > li .big_data_echart").eq(index).css({
					'width': '0',
					'height': '0'
				}).animate({
					'width': '570px',
					'height': '100%'
				}, 1000);

				//轮播渐变
				showBigData.children().eq(index).fadeIn().siblings().fadeOut();
			} else {
				$("#showBigData > li .big_data_echart").eq(0).css({
					'width': '0',
					'height': '0'
				}).animate({
					'width': '570px',
					'height': '100%'
				}, 1000);
				showBigData.children().eq(0).fadeIn().siblings().fadeOut();
			}
		}
	}

	//全屏
	function fullScreen() {
		var viewFullScreen = document.getElementById("viewFullscreen");
		if(viewFullScreen) {
			viewFullScreen.addEventListener("click", function() {
				var docElm = document.documentElement;
				if(docElm.requestFullscreen) {
					docElm.requestFullscreen();
				} else if(docElm.msRequestFullscreen) {
					docElm.msRequestFullscreen();
				} else if(docElm.mozRequestFullScreen) {
					docElm.mozRequestFullScreen();
				} else if(docElm.webkitRequestFullScreen) {
					docElm.webkitRequestFullScreen();
				}
			}, false);
		}

		var cancelFullScreen = document.getElementById("cancelFullscreen");
		if(cancelFullScreen) {
			cancelFullScreen.addEventListener("click", function() {
				if(document.exitFullscreen) {
					document.exitFullscreen();
				} else if(document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if(document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}, false);
		}

	};

	//绑定事件
	function addEvents() {
		//全屏
		$('#viewFullscreen').on('click', function() {
			$(this).removeClass('showFullSpan').siblings().addClass('showFullSpan');
			fullScreen();
		});
		$('#cancelFullscreen').on('click', function() {
			$(this).removeClass('showFullSpan').siblings().addClass('showFullSpan');
			fullScreen();
		});

	}

	//文档加载完成
	$(function() {
		//全屏  非全屏
		fullScreen();
		//知识点轮播
		autoKnowledge();
		//关系图  大
		bigDataRaleEchart();
		//关系图  集合
		bigDataRaleEchartList();
		//事件绑定
		addEvents();
	})
})(window, jQuery)