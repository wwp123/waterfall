
function picSwiper (g,n,t,options) {
/*	this.options = {
		gallery: true,
		comment: true,
		clicklarge: true,
	};*/
	this.loaded(g);
	this.begin(g,n,t);
};

picSwiper.prototype = {
	loaded: function(g){
		/*main2滚动条*/
		rScroll = new IScroll(g + ' #frame_main2_wrapper', {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: false
		});
		/*小瀑布流滚动条*/
		rsScroll = new IScroll(g + ' #small_water', {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: true
		});
		/*通用方法————收起展开的div*/
		$(g).on('click',function(e){
			var e = e || window.event; //浏览器兼容性
			var elem = e.target || e.srcElement;
			while (elem) { //循环判断至跟节点，防止点击的是div子元素
				if (elem.id && elem.id=='raty-container') {
					return;
				}
				elem = elem.parentNode;
			}
			var style = $('.raty-wrap').attr('style');
			if(style) var b = style.match('block');
			if(b) $('.raty-wrap').slideToggle(200); //点击的不是div或其子元素
		});

	},
	begin: function(g,n,t) {
		var top = g + ' .gallery-top';
		//var mtext = top + ' .movie-text';
		var galleryTop = new Swiper(top, {
			initialSlide :n-1,
			runCallbacksOnInit : true,
//			nextButton: top + ' .swiper-button-next',
//			prevButton: top + ' .swiper-button-prev',
			spaceBetween: 10,
			preloadImages: false,
			lazyLoading: true,
			keyboardControl : true,
			//mousewheelControl : true,
			onInit: function(){
				//pageNum();
				detectEq();
			},
			onSlideChangeEnd: function(galleryTop){
				//pageNum();
				//changePages();
			},
			onTap: function(galleryTop,event){
				//var m = $(mtext);
				var h = $(g + ' .handle-tab-wrap');
				var d = $(g + ' .close');
				var p = $(g + ' .swiper-button-white');
				closeDropdown();
			},
			onSliderMove: function(galleryTop,event){
				//var m = $(mtext);
				//tapToggle(m)
				closeDropdown();
			},
			onSetTransition: function(galleryTop, transition){
				//var m = $(mtext);
				//tapToggle(m);
			}
		});

		/*设备检测*/
		function detectEq(){
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
		$(g + ' .swiper-button-white').bind('click',function(){
			//var m = $(mtext);
			//tapToggle(m);
		});
		$(top + ' .swiper-button-next').on('click',function(){changePic("next")});
		$(top + ' .swiper-button-prev').on('click',function(){changePic("prev")});
		function changePic(np){
			if(np == "next") {
				galleryTop.slideNext();
			} else {
				galleryTop.slidePrev();
			}
		}

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

		/*上拉菜单收起*/
		function closeDropdown(){
			$(g + ' .down').hide();
			deActiveIcon();
		};

		function deActiveIcon(){
			$(g + ' .handle-tab-share').removeClass('show');
			$(g + ' .handle-tab-info').removeClass('show');
		}


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
			closeDropdown();
			$(g).hide().unbind('click');
			$(g + ' .handle-tab li').unbind('click');
			$(g + ' .icon-comment-m').parent().parent().unbind('click');
			$(g + ' .drop').unbind('click');
			$(g + ' .handle-tab-info').unbind('click');
			$(g + ' .handle-tab-share').unbind('click');
			$(top + ' .swiper-button-next').unbind('click');
			$(top + ' .swiper-button-prev').unbind('click');
			$(g + ' .gallery-top').unbind('onTap').removeAttr('style');
			$(g + ' .image-head').removeAttr('style');
			$(g + ' .swiper-wrapper').removeAttr('style');
			$(g + ' .dropdown').hide();
			$(g + ' .close').removeAttr('style');
			$(g + ' .handle-tab-wrap').removeAttr('style');
			$(g + ' .handle-item').removeClass('show');
			$(g + ' .swiper-button-white').removeAttr('style');
			$(g + ' .movie-text').removeAttr('style');
			$(g + ' .photo_layer').removeAttr('style');
			$(g + ' .figure-side').removeAttr('id');
			$(g + ' .like').unbind('click');
			$(g + ' .like').html('<i class="icon-m fa fa-fw fa-heart-o"></i>');
			galleryTop.onResize();
			galleryTop.detachEvents(); //移除所有slide监听事件
			galleryTop.attachEvents();//重新绑定所有监听事件。
			$('body').removeAttr('style');
			$('.wrapper').removeAttr('style');
			if(rScroll){ rScroll.destroy();};
			//if(textScroll){ textScroll.destroy();};
			document.body.removeEventListener('touchmove', preventDefault ,false);
			$(document).scrollTop(t);
		});

		function preventDefault(e) { e.preventDefault(); };
		document.body.addEventListener('touchmove', preventDefault ,false);

	}
};
