// JavaScript Document

function picSwiper (g,n,t,options) {
	this.loaded(g);
	this.begin(g,n,t);
};

var imgsrc;
var imgname;
var index;
var liLength = $('.pic-list li').length;
$(document).on('click','.pic-list li .a-img img',function(){
	console.log('liclick');
	imgsrc = $(this).attr('src');
	imgname = $(this).attr('name');
	window.history.pushState({},0,window.location.pathname+imgname+'.html');
	index = $(this).parent().parent('li').index();
});
$(document).on('click','#waterfall2 .a-img img',function(){
	console.log('imgclick');
	imgsrc = $(this).attr('src');
	imgname = $(this).attr('name');
	window.history.pushState({},0,window.location.protocol+"//"+window.location.host+"/waterfall/"+imgname+".html");
	$('.swiper-slide').remove();
	addHtml();
});

var addHtml = function(){
	$('.swiper-wrapper .loading').show();
	var html = '';
	//if(screen.width>640){
		$.get('http://192.168.16.26/waterfall/javascript/waterfall2.json',function(data){
			$('.swiper-wrapper .loading').hide();
			console.log("waterfall2");
			html+='<div class="swiper-slide swiper-no-swiping"><div class="exif-info"><div id="frame_w'+index+'" class="main"><div class="row"><div class="large-9 columns"><div id="data_article_con" class="article-con"><div class="margin-b clearfix hide-for-small hide-for-medium"><a class="pinBtn btn left" title="采集">采集</a><a href="'+ imgsrc +'" class="btn right" target="_blank" title="查看原图"><i class="fa fa-search-plus" aria-hidden="true"></i></a></div><a class="img"><img src="'+ imgsrc +'" class="swiper-lazy"/></a></div><div id="data_relate"class="relate"><div class="collapse img_next post-container"><div class="row"><div class="post-footer clearfix"><div class="info clearfix"><span class="left"><a class=""href=""><i class="fa fa-fw fa-clock-o" aria-hidden="true"></i>2015-05-15</a></span><span class="month1"><a class="month"href="">05</a></span><span class="day1"><a class="day"href="">15</a></span><span class="left"><a class="" href=""><i class="fa fa-fw fa-comment" aria-hidden="true"></i>1</a></span><span class="like right" title="喜欢"><i class="fa fa-fw fa-heart-o"></i></span><span class="recommend right" title="推荐"><a><i class="fa fa-fw fa-thumbs-o-up"></i>推荐</a></span><span class="share right" title="分享"><a><i class="fa fa-fw fa-share-alt"></i>分享</a></span></div></div><div class="post-dropdown share-area"><ul class="small-block-grid-3 medium-block-grid-6 large-block-grid-6"><li><a href="#"><i class="share-icon weixin"></i><span>微信</span></a></li><li><a href="#"><i class="share-icon yixin"></i><span>易信</span></a></li><li><a href="#"><i class="share-icon sina"></i><span>新浪微博</span></a></li><li><a href="#"><i class="share-icon qzone"></i><span>QQ空间</span></a></li><li><a href="#"><i class="share-icon baidu"></i><span>百度贴吧</span></a></li><li><a href=""><i class="share-icon reblog"></i><span>我的主页</span></a></li></ul></div></div></div><div class="text">粘土首饰 耳饰 作品 作者by lwinl粘土首饰 耳饰 作品 作者by lwinl粘土首饰 耳饰 作品 作者by lwinl</div><div class="qianm clearfix"><a href="#" class="left"><img src="./images/11.jpeg" title="头像"/></a><div class="sub"><a href="#" class="name">宝依依</a><span>与2小时前采集</span></div></div></div><div id="data_comment"class="commentout bg-white"><div id="data_activity_comment"class="containn"><p class="article_p"style="font-size:14px;color:#aaa;">评论<a href="">(2)</a></p><div class="comment-count"><div class="comment-area"><div class="row collapse prefix-radius"><div class="large-12 medium-12 small-12"><div class="input-layout"contenteditable="true"></div></div></div><div class="row F_button"><div class="large-12 medium-12 small-12 columns"><span class="prefix button">发表</span></div></div></div><ul class="replay-list"><li class="clearfix"><a class="left"><img class="user-photo s2"src="images/11.jpeg"></a><span class="comment"><a class="font-primary">ABC</a>回复了<a class="font-primary">大雄</a><span class="font-secondary margin-l">1小时前</span><a class="font-secondary right">回复</a><a class="show-hover font-secondary margin-r right">加黑</a></span><p class="replay-con">喜欢</p></li><li class="clearfix"><a class="left"><img class="user-photo s2"src="images/13.jpg"></a><span class="comment"><a class="font-primary">时间</a><span class="font-secondary margin-l">1.5小时前</span><a class="font-secondary right">回复</a><a class="show-hover font-secondary margin-r right">加黑</a></span><p class="replay-con">你喜欢铜锣烧吗？</p></li><li class="clearfix"><a class="left"><img class="user-photo s2"src="images/14.jpeg"></a><span class="comment"><a class="font-primary">不够</a><span class="font-secondary margin-l">4小时前</span><a class="font-secondary right">回复</a><a class="show-hover font-secondary margin-r right">加黑</a></span><p class="replay-con">真好听!</p></li><li class="clearfix"><a class="left"><img class="user-photo s2"src="images/15.jpg"></a><span class="comment"><a class="font-primary">有点紧</a><span class="font-secondary margin-l">4小时前</span><a class="font-secondary right">回复</a><a class="show-hover font-secondary margin-r right">加黑</a></span><p class="replay-con">真好听!</p></li><li class="clearfix"><a class="left"><img class="user-photo s2"src="images/16.jpg"></a><span class="comment"><a class="font-primary">学的有点少</a><span class="font-secondary margin-l">4小时前</span><a class="font-secondary right">回复</a><a class="show-hover font-secondary margin-r right">加黑</a></span><p class="replay-con">真好听!</p></li></ul><div class="heartrate"><div class="h-title"><p class="article_p"style="font-size:14px;color:#aaa;margin:50px 0 0 0px;">热度<a href="">(2)</a></p></div><ul class="replay-list"><li class="notes-like clearfix"><a class="left"href="#"title="Jason - 一刻钟前"><img class="avatar"src="images/11.jpeg"/></a><span class="action"><a href="#"title="Jason - 一刻钟前">Jason</a>很喜欢此图片</span></li><li class="notes-share clearfix"><a class="left"href="#"title="Jason - 一刻钟前"><img class="avatar"src="images/12.jpg"/></a><span class="action"><a href="#"title="Vector - 半小时前">Vector</a>推荐了此图片</span></li></ul></div><div class="see"><a class="button secondary tiny expand"><i class="fa fa-fw fa-angle-double-down"></i>查看更多</a><a class="button btnlink disabled radius expand"style="display:none"><i class="fa fa-fw fa-spinner fa-pulse"></i>加载中……</a></div></div></div></div></div><div class="large-3 columns hide-for-small hide-for-medium"><div class="content"><div class="content-header clearfix"><a href="#"><img src="images/11.jpeg"/></a><div class="sub"><a href="#" class="name">Mobile BI纸</a><span>出走の馒头君</span></div></div>';
			html+='<div class="waterfall waterfall2 cst-scrollbar" id="waterfall2"><ul>';
			for(var i in data){
				html+='<li class="item"><a href="javascript:;" class="a-img"><img name='+data[i].name+' src="'+data[i].src+'"/></a></li>';
			}
			html+='</ul></div><div class="imloading" style="display:none">'+"I'm Loading....."+'</div><div class="content-footer"><a href="javascript:;" class="btn follow-btn">关注面板</a></div></div></div></div>';
			$(html).appendTo('.swiper-wrapper');
			waterFall('waterfall2','#waterfall2',false);
			getData3();
		});
	//}else{
//		$('.swiper-wrapper .loading').hide();
//		html+='<div class="swiper-slide"><div class="exif-info"><div id="frame_w'+index+'" class="main"><div class="row"><div class="large-12 columns"><div id="data_article_con" class="article-con"><a class="img"><img src="'+ imgsrc +'" class="swiper-lazy"/></a></div><div id="data_relate"class="relate"><div class="collapse img_next post-container"><div class="row"><div class="post-footer clearfix"><div class="info clearfix"><span class="left"><a class="data"href="">2015-05-15</a></span><span class="month1"><a class="month"href="">05</a></span><span class="day1"><a class="day"href="">15</a></span><span class="left"><a class="cmt" href="">1</a></span><span class="like right" title="喜欢"><i class="fa fa-fw fa-heart-o"></i></span><span class="recommend right" title="推荐"><a><i class="fa fa-fw fa-thumbs-o-up"></i>推荐</a></span><span class="share right" title="分享"><a><i class="fa fa-fw fa-share-alt"></i>分享</a></span></div></div><div class="post-dropdown share-area"><ul class="small-block-grid-3 medium-block-grid-6 large-block-grid-6"><li><a href="#"><i class="share-icon weixin"></i><span>微信</span></a></li><li><a href="#"><i class="share-icon yixin"></i><span>易信</span></a></li><li><a href="#"><i class="share-icon sina"></i><span>新浪微博</span></a></li><li><a href="#"><i class="share-icon qzone"></i><span>QQ空间</span></a></li><li><a href="#"><i class="share-icon baidu"></i><span>百度贴吧</span></a></li><li><a href=""><i class="share-icon reblog"></i><span>我的主页</span></a></li></ul></div></div></div><div class="text">粘土首饰 耳饰 作品 作者by lwinl</div><div class="qianm clearfix"><a href="#" class="left"><img src="./images/11.jpeg" title="头像"/></a><div class="sub"><a href="#" class="name">宝依依</a><span>与2小时前采集</span></div></div><div id="data_comment"class="commentout bg-white"><div id="data_activity_comment"class="containn"><div class="comment-count"><div class="comment-area"><div class="row collapse prefix-radius"><div class="large-12 medium-12 small-12"><div class="input-layout"contenteditable="true"></div></div></div><div class="row F_button"><div class="large-12 medium-12 small-12 columns"><span class="prefix button">发表</span></div></div></div></div></div></div></div></div></div>';
//		$(html).appendTo('.swiper-wrapper');
//		getData3();
//	}
	
};
var getData3 = function(){ 
	$.ajax({
			async: false,
			type : "GET",
			url : 'http://192.168.16.26/waterfall/javascript/waterfall3.json',
			success : function(data) {
			console.log("waterfall3");
			var html = '';
			html+='<div class="row"><div class="large-12 columns"><div class="mod-rec-l1"><div class="mod-head"><div class="mod-title">推荐给你的采集</div></div><div class="mod-con"><div class=""><div class="waterfall" id="waterfall3"><ul class="clearfix">';
			for(var i in data){
				html+='<li class="item"><a href="####" class="a-img"><img src="'+data[i].src+'" alt=""></a><p class="description">'+data[i].intro+'</p><div class="con"><span class="" title="采集"><i class="fa fa-bookmark fa-fw" aria-hidden="true"></i><span>'+data[i].pinnum+'</span></span><span class="" title="喜欢"><i class="fa fa-heart fa-fw" aria-hidden="true"></i><span>'+data[i].commentnum+'</span></span></div><div class="qianm"><a href="#"><img src="'+data[i].psrc+'" title="头像"/></a><div class="sub"><a href="#" class="name">'+data[i].name+'</a><span>'+data[i].con+'</span></div></div><a class="pinBtn btn" title="采集">采集</a><a class="likeBtn btn" title="喜欢"><i class="fa fa-heart" aria-hidden="true"></i></a></li>';
			}
			html+='</ul></div><div class="imloading" style="width:150px;height:30px;line-height:30px;font-size:16px;text-align:center;border-radius:3px;opacity:0.7;background:#000;margin:10px auto 30px;color:#fff;display:none">'+"I'm Loading....."+'</div></div></div></div></div></div></div>';
			$(html).appendTo('#frame_w'+index);	
			waterFall('waterfall3','.exif-info',true);
			if(screen.width<=640){
				
			}
			}
		});
		
	}

picSwiper.prototype = {
	loaded: function(g){
		/*通用方法————收起展开的div*/
		

	},
	begin: function(g,n,t) {
		console.log("begin");
		var top = g + ' .gallery-top';
		//if(screen.width>640){
			//var galleryTop = new Swiper(top, {
//				initialSlide :0,
//				runCallbacksOnInit : true,
//				spaceBetween: 10,
//				preloadImages: false,
//				lazyLoading: true,
//				keyboardControl : true,
//				allowClick: true,
//				noSwiping : true,
//				//observer:true,//修改swiper自己或子元素时，自动初始化swiper
//				onInit: function(){
//					detectEq();
//				}
//			});
			addHtml();
		//}else{
//			var galleryTop = new Swiper(top, {
//				initialSlide :0,
//				runCallbacksOnInit : true,
//				spaceBetween: 10,
//				preloadImages: false,
//				keyboardControl : true,
//				allowClick: true,
//				onInit: function(){
//					detectEq();
//				},
//				onTap: function(galleryTop,event){
//					var d = $(g + ' .close');
//				},
//				onReachEnd: function(galleryTop){
//					galleryTop.updateSlidesSize();
//					addHtml();
//					index++;
//					imgsrc = $('.pic-list li').eq(index).find('.a-img img').attr('src');
//					imgname = $('.pic-list li').eq(index).find('.a-img img').attr('name');
//					window.history.pushState({},0,window.location.protocol+"//"+window.location.host+"/waterfall/"+imgname+".html");
//				},
//				onSlidePrevStart: function(galleryTop){
//					index--;
//					imgsrc = $('.pic-list li').eq(index).find('.a-img img').attr('src');
//					imgname = $('.pic-list li').eq(index).find('.a-img img').attr('name');
//					window.history.pushState({},0,window.location.protocol+"//"+window.location.host+"/waterfall/"+imgname+".html");
//
//				}
//			});
//		}
		/*设备检测*/
		function detectEq(){
			console.log("detectEq");
			var p = $(g + ' .swiper-button-white');
			if(navigator.userAgent.match(/Android/i) || (navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
//			if (document.body.scrollWidth < 640 || document.body.scrollWidth == 640){
				$('.wrapper').css({'overflow':'hidden','height':'100%'});
				$('.swiper-container').css({'z-index':'0'})
				$('body').css({'background':'#000'});
				$(p).css('display','none');
			} else {
				$('body').css('overflow','hidden');
			}
		}

		/*左右切换箭头点击事件*/
		$(document).on('click',' .swiper-button-next',function(){
			console.log('nextclick');
			index++;
			if(index<liLength){
				$('.swiper-slide').remove();
				imgsrc = $('.pic-list li').eq(index).find('.a-img img').attr('src');
				imgname = $('.pic-list li').eq(index).find('.a-img img').attr('name');
				window.history.pushState({},0,window.location.protocol+"//"+window.location.host+"/waterfall/"+imgname+".html");
				addHtml();
				$('.swiper-button-prev').css("display","block");
				$('.swiper-button-next').css("display","block");
			}else{
				index = liLength;
				$('.swiper-button-next').css("display","none");
			}
		});
		$(document).on('click',' .swiper-button-prev',function(){
			console.log('prevclick');
			index--;
			if(index>=0){
				$('.swiper-slide').remove();
				imgsrc = $('.pic-list li').eq(index).find('.a-img img').attr('src');
				addHtml();
				imgname = $('.pic-list li').eq(index).find('.a-img img').attr('name');
			window.history.pushState({},0,window.location.protocol+"//"+window.location.host+"/waterfall/"+imgname+".html");
			$('.swiper-button-prev').css("display","block");
			$('.swiper-button-next').css("display","block");
			}else{
				$('.swiper-button-prev').css("display","none");
			}
		});

		/*小屏下返回观看图片*/
		$(g + ' .image-head-back .back').bind('click',function(){
			if (document.body.scrollWidth < 640 || document.body.scrollWidth == 640){
				$(g + ' .image-head-back').hide();
				$(g + ' .album').removeAttr('style');
				$(g + ' .figure-side .figure-side-hd').hide();
				$(g + ' .photo_layer').attr('style','');
				$(g + ' .figure-side').removeAttr('id');
			} else {
				closeComment();
			}
		});



		/*关闭*/
		/*ESC关闭*/
		$(document).keyup(function(event){
			switch(event.keyCode) {
				case 27:
				$(g + ' .close').click();
			}
		});
		/*图片按钮关闭*/
		$(g + ' .close').bind('click',function(e){
			$(g).hide().unbind('click');
			//if(screen.width>640){
				$('.swiper-slide').remove();
			//}
			$(top + ' .swiper-button-next').unbind('click');
			$(top + ' .swiper-button-prev').unbind('click');
			$(g + ' .gallery-top').unbind('onTap').removeAttr('style');
			$(g + ' .swiper-wrapper').removeAttr('style');
			$(g + ' .close').removeAttr('style');
			$(g + ' .swiper-button-white').removeAttr('style');
			//galleryTop.detachEvents(); //移除所有slide监听事件
//			galleryTop.attachEvents();//重新绑定所有监听事件
			$('body').removeAttr('style');
			$('.wrapper').removeAttr('style');
			document.body.removeEventListener('touchmove', preventDefault ,false);
			$(document).scrollTop(t);
			window.history.pushState({},0,window.location.protocol+"//"+window.location.host+"/waterfall/"); 
		});

		function preventDefault(e) { e.preventDefault(); };
		document.body.addEventListener('touchmove', preventDefault ,false);
	
	var startX = 0, startY = 0;
    //touchstart事件  
    function touchSatrtFunc(evt) {
        try
        {
            //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  

            var touch = evt.touches[0]; //获取第一个触点  
            var x = Number(touch.pageX); //页面触点X坐标  
            var y = Number(touch.pageY); //页面触点Y坐标  
            //记录触点初始位置  
            startX = x;
            startY = y;
			//console.log(x,y);
        } catch (e) {
            alert('touchSatrtFunc：' + e.message);
        }
    }
    document.addEventListener('touchstart', touchSatrtFunc, false);
	 var _ss = document.getElementById("gallery1");
    function activeTouchMove(ev) {
        var _point = ev.touches[0],
                _top = _ss.scrollTop;
        // 什么时候到底部
        var _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;
        // 到达顶端
        if (_top === 0) {
            // 阻止向下滑动
            if (_point.clientY > startY) {
                ev.preventDefault();
            } else {
                // 阻止冒泡
                // 正常执行
                ev.stopPropagation();
            }
        } else if (_top === _bottomFaVal) {
            // 到达底部
            // 阻止向上滑动
            if (_point.clientY < startY) {
                ev.preventDefault();
            } else {
                // 阻止冒泡
                // 正常执行
                ev.stopPropagation();
            }
        } else if (_top > 0 && _top < _bottomFaVal) {
            ev.stopPropagation();
        } else {
            ev.preventDefault();
        }
    }
	_ss.addEventListener('touchmove',activeTouchMove, false);
	}
};
var waterFall = function(id,scrollObj,flag){
		/*瀑布流开始*/
		//var container = $('.waterfall ul');
		var container = $('#' + id).find('ul:first');
		var loading=$('#' + id).next('.imloading');
		// 初始化loading状态
		loading.data("on",true);
		container.imagesLoaded(function(){
		  container.masonry({
			//columnWidth: 0,
			itemSelector : '.item',
			isFitWidth: true,//是否根据浏览器窗口大小自动适应默认false
			isAnimated: true,//是否采用jquery动画进行重拍版
			isRTL:false,//设置布局的排列方式，即：定位砖块时，是从左向右排列还是从右向左排列。默认值为false，即从左向右
			isResizable: true,//是否自动布局默认true
			animationOptions: {
				duration: 800,
				easing: 'easeInOutBack',//如果你引用了jQeasing这里就可以添加对应的动态动画效果，如果没引用删除这行，默认是匀速变化
				queue: false//是否队列，从一点填充瀑布流
			}
		  });
		});
		var jsonIndex=0;
		function getJsonLength(jsonObj){
			var length=0;
			for(var i in jsonObj){
				length++;
			}	
			return length;
		}
		$(scrollObj).scroll(function(){
			liLength = $('.pic-list li').length;
			$('#waterfall2').next('.imloading').css({'display':'none','width':'0','height':'0'});
			if(!loading.data("on")) return;
			// 计算所有瀑布流块中距离顶部最大，进而在滚动条滚动时，来进行ajax请求，方法很多这里只列举最简单一种，最易理解一种
			var itemNum=$('#' + id).find('.item').length;
			console.log(scrollObj + ':' + itemNum);
			var itemArr=[];
			itemArr[0]=$('#' + id).find('.item').eq(itemNum-1).offset().top+$('#' + id).find('.item').eq(itemNum-1)[0].offsetHeight;//获得内容块位移的高度+内容块本身的高度
			//console.log($('#' + id).find('.item').eq(itemNum-1).offset().top+","+$('#' + id).find('.item').eq(itemNum-1)[0].offsetHeight);
			itemArr[1]=$('#' + id).find('.item').eq(itemNum-2).offset().top+$('#' + id).find('.item').eq(itemNum-1)[0].offsetHeight;
			itemArr[2]=$('#' + id).find('.item').eq(itemNum-3).offset().top+$('#' + id).find('.item').eq(itemNum-1)[0].offsetHeight;
			var maxTop=Math.max.apply(null,itemArr);
			if(maxTop<$(scrollObj).height()+$(document).scrollTop()){
				//加载更多数据
				loading.data("on",false).fadeIn(800);
				var jsonsrc = 'http://192.168.16.26/waterfall/javascript/' + id + '.json';
				$.get(jsonsrc,function(sqlJson){
					/*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/
				var length=getJsonLength(sqlJson);
				if(jsonIndex >= length){
						loading.text('就有这么多了！');
					}else{
						var html="";
						//console.log(length);
						for(var i=0; i<5 && jsonIndex<length;i++,jsonIndex++){
							//console.log(jsonIndex);
							html+='<li class="item"><a href="javascript:;" class="a-img entrance"><img name='+sqlJson[jsonIndex].name+' src="'+sqlJson[jsonIndex].src+'"/></a>';
							if(flag){
								html+="<p class='description'>"+sqlJson[jsonIndex].intro+"</p>";
								html+='<div class="con"><span class="" title="采集"><i class="fa fa-bookmark fa-fw" aria-hidden="true"></i><span>'+sqlJson[jsonIndex].pinnum+'</span></span><span class="" title="喜欢"><i class="fa fa-heart fa-fw" aria-hidden="true"></i><span>'+sqlJson[jsonIndex].commentnum+'</span></span></div>';
								html+='<div class="qianm"><a href="#"><img src="'+sqlJson[jsonIndex].psrc+'" title="头像"/></a><div class="sub"><a href="#" class="name">'+sqlJson[jsonIndex].writer+'</a><span>'+sqlJson[jsonIndex].con+'</span></div></div><a class="pinBtn btn" title="采集">采集</a><a class="likeBtn btn" title="喜欢"><i class="fa fa-heart" aria-hidden="true"></i></a></li>';
							}	
						}
						
						/*模拟ajax请求数据时延时800毫秒*/
						var time=setTimeout(function(){
							$(html).find('img').each(function(index){
								loadImage($(this).attr('src'));
								//alert($(this));
							});
							var $newElems = $(html).css({ opacity: 0}).appendTo(container);
							$newElems.imagesLoaded(function(){
								$newElems.animate({ opacity: 1},800);
								container.masonry( 'appended', $newElems,true);
								loading.data("on",true).fadeOut();
								clearTimeout(time);
							});
						},800)
						
					}
				});
			}
		});
		
		function loadImage(url) {
			 var img = new Image(); 
			 //创建一个Image对象，实现图片的预下载
			  img.src = url;
			  if (img.complete) {
				 return img.src;
			  }
			  img.onload = function () {
				return img.src;
			  };
		 };
		 loadImage('./images/one.jpg');
}
