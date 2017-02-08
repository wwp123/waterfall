
//头部搜索
function showSearch(){
	$('.userset-list').slideUp(200);
	
	var topsearch =  document.getElementById("topsearch");	  	 
	if(topsearch.style.display == "block"){
	topsearch.style.display = "none";
	}else{
	  topsearch.style.display = "block";
	}
}

//返回头部、底部
function goTop() { window.scroll(0, 0)}
function goBottom(){var bottomH=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);window.scroll(0,bottomH);}


//返回头部、底部
$(function () {
	$(".gotop").click(/*定义返回顶部点击向上滚动的动画*/
	function () {
		$('html,body').animate({ scrollTop: 0 }, 700);
	});
	$(".gohome").click(/*定义返回顶部点击向上滚动的动画*/
	function(){
		/*HomepageFavorite.Homepage();*/
	});
	$(".gobottom").click(/*定义返回顶部点击向上滚动的动画*/
	function () {
		var bottomH=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);window.scroll(0,bottomH);
	});
	$(document).scroll(
		function(){
			if($(document.body).scrollTop() + $(document).scrollTop() > 300 && $(document.body).scrollTop() + $(document).scrollTop() < 300){
				$(".go").css("display","block");
				$(".gobottom").css("display","block"),$(".gotop").css("display","none");
			}else if($(document.body).scrollTop() + $(document).scrollTop() > 300){
				$(".go").css("display","block");
				$(".gobottom").css("display","none"),$(".gotop").css("display","block");				
			}else{
				$(".go").css("display","none");
			}
	}
	);
})

function interactEffect(){
	$('li.post-container').each(function(){
		var _this = $(this);
		//热度
		_this.find('.heatrate').click(function(){
			_this.find('.comment-count').slideUp(200);
			_this.find('.comment').removeClass('has-dropdown');
			_this.find('.share-area').slideUp(200);
			_this.find('.share').removeClass('has-dropdown');
			_this.find('.note-count').slideToggle(200);
			$(this).toggleClass('has-dropdown');
		});
		_this.find('.note-count .post-packup').click(function(){
			_this.find('.note-count').slideToggle(200);
			_this.find('.heatrate').toggleClass('has-dropdown');
		});
		
		//评论
		_this.find('.comment').click(function(){
			_this.find('.note-count').slideUp(200);
			_this.find('.heatrate').removeClass('has-dropdown');
			_this.find('.share-area').slideUp(200);
			_this.find('.share').removeClass('has-dropdown');
			_this.find('.comment-count').slideToggle(200);
			$(this).toggleClass('has-dropdown');
		});
		_this.find('.comment-count .post-packup').click(function(){
			_this.find('.comment-count').slideToggle(200);
			_this.find('.comment').toggleClass('has-dropdown');
		});
		
		//分享
		_this.find('.share').click(function(){
			_this.find('.note-count').slideUp(200);
			_this.find('.heatrate').removeClass('has-dropdown');
			_this.find('.comment-count').slideUp(200);
			_this.find('.comment').removeClass('has-dropdown');
			_this.find('.share-area').slideToggle(200);
			$(this).toggleClass('has-dropdown');
		});
		
		//推荐
		_this.find('.recommend').click(function(){
			if(this.getAttribute('title') === '推荐'){
				this.setAttribute('title','已推荐');
				this.innerHTML = '<i class="fa fa-fw fa-thumbs-up"></i>已推荐';
			}else{
				this.setAttribute('title','推荐');
				this.innerHTML = '<i class="fa fa-fw fa-thumbs-o-up"></i>推荐';
			}
		});
		
		//喜欢
		_this.find('.post-footer .like').click(function(){
			if(this.getAttribute('title') === '喜欢'){
				this.setAttribute('title','取消喜欢');
				this.innerHTML = '<i class="fa fa-fw fa-heart font-alert no-heart"><span></span><span></span></i>';
			}else{
				this.setAttribute('title','喜欢');
				this.innerHTML = '<i class="fa fa-fw fa-heart-o red-heart"><span></span><span></span></i>';
			}
		});
		
		//展开全文
		 _this.find('.morecon span').click(function(){
			 if(this.className === 'post-expand'){
				 _this.scrollY = $(document).scrollTop();
				  _this.find('.post-con-part').css('display','none');
				 _this.find('.post-con-all').css('display','block');
				 $(this).removeClass('post-expand').addClass('post-packup');
				 this.innerHTML = '收起';
			}else {
				_this.find('.post-con-all .showpicinfo').each(function(){
					$(this).removeClass('showpicinfo');
					_this.find('.post-con-all .picinfo').css('display','none');
				});
				_this.find('.post-con-part').css('display','block');
				 _this.find('.post-con-all').css('display','none');
				 $(this).removeClass('post-packup').addClass('post-expand');
				 this.innerHTML = '展开全文';
				 window.scrollTo(0,_this.scrollY);
			}
		});
		
		//点击图片展开
		_this.find('.post-con-part .media').click(function(){
			_this.scrollY = $(document).scrollTop();
		    _this.find('.post-con-part').css('display','none');
			 _this.find('.post-con-all').css('display','block');
			 _this.find('.morecon .post-expand')[0].innerHTML = '收起';
			 _this.find('.morecon .post-expand').removeClass('post-expand').addClass('post-packup');
		});
		_this.find('.post-con-all .media .pic-list img').click(function(){
			_this.find('.post-con-all .showpicinfo').each(function(){
				$(this).removeClass('showpicinfo');
				_this.find('.post-con-all .picinfo').css('display','none');
			});
		    _this.find('.post-con-part').css('display','block');
			_this.find('.post-con-all').css('display','none');
			_this.find('.morecon .post-packup')[0].innerHTML = '展开全文';
			_this.find('.morecon .post-packup').removeClass('post-packup').addClass('post-expand');
			window.scrollTo(0,_this.scrollY);
		});
		 
		//头像
		_this.find('.post-avatar, .post-dropdown .replay-list img').poshytip({
			className: 'hover-dropdown-box',
			offsetX: -83,
			content: function(){
				return showDiv();
			}
		});
		$('.alert-box .replay-list a img').each(function(){
			$(this).poshytip({
				className: 'hover-dropdown-box',
				offsetX: -83,
				content: function(){
					return showDiv();
				}
			});
		});
		
		//图片信息
		_this.find('.post-con-all .pic-list li').each(function(){
			var _this2 = $(this);
			_this2.find('.media-tag2').click(function(){
				$(this).toggleClass('showpicinfo');
				_this2.find('.picinfo').css('display',_this2.find('.picinfo').css('display') == 'none' ? 'block' : 'none');
			});
		});
		
		//进入图片插件 
		_this.find('.post-con-all .btnlink').click(function(){
			_this.find('.gallery').css('display','block');
			$('body').css('overflow','hidden');
			var t = $(document).scrollTop();
	        _this.find('.gallery .close').unbind('click');
			new picSwiper('#'+_this.find('.gallery')[0].id,$(this).parent().parent().index()+1,t,{});
		});
	});
	
	//用户设置
	$('.userset-icon').click(function(e){
		$('.sidenav .tit-list').slideUp(200);
		$('.append-aside .fd-aside').slideUp(200);
		$('.userset-list').slideToggle(200);
	});
	
	//用户中心
	$('.sidenav .userinfoset').click(function(e){
		$('.userset-list').slideUp(200);
		$('.append-aside .fd-aside').slideUp(200);
		$('.sidenav .tit-list').slideToggle(200);
		if(e.stopPropagation){
		    e.stopPropagation();	
		}else {
		    e.cancelBubble = true;	
		}
	});
	
	//侧导航
	$('.sidenav .titbtn').click(function(e){
		$('.sidenav .tit-list').slideUp(200);
		$('.userset-list').slideUp(200);
		$('.append-aside .fd-aside').slideToggle(200);
	});
	
	//参与话题
	$('.topic-box .success.tiny').click(function(e){
		$('.topic-box .topic-post-bar').slideToggle(200);
		//发布内容的导航条效果
		var publishBarSwiperTopic = new Swiper('#publish-bar-swiper-topic', {
			slidesPerView: 5,
			slidesPerGroup: 3,
			prevButton: '#publish-bar-swiper-topic .pub-item-prev',
			nextButton: '#publish-bar-swiper-topic .pub-item-next',
			onSlideChangeStart: function(publishBarSwiperTopic){
				if(publishBarSwiperTopic.activeIndex === 0){
					$('#publish-bar-swiper-topic .pub-item-prev').css('display','none');
					$('#publish-bar-swiper-topic .pub-item-next').css('display','block');
				}else{
					$('#publish-bar-swiper-topic .pub-item-next').css('display','none');
					$('#publish-bar-swiper-topic .pub-item-prev').css('display','block');
				}
			}
		});
		
	});
}

//用户名片
function showDiv(){
	var html = '<div class="hover-dropdown-box-wrapper">'+
				'<div class="user-intro" >'+
					'<div class="introhead clearfix">'+
						'<a class="left"><img class="user-photo s4" src="images/user-icon.png"alt=""></a>'+
						'<p>马甲</p>'+
						'<p>001596</p>'+
						'<p><a>majia@rongji.com</a></p>'+
					'</div>'+
					'<div class="intro">感觉萌萌哒……</div>'+
					'<div class="post-count"><span>关注&nbsp;&nbsp;231</span><span>粉丝&nbsp;&nbsp;125</span><span>文章&nbsp;&nbsp;154</span></div>'+
					'<a class="follow radius" title="加关注">关注</a>'+
				'</div>'+
				'<ul class="push-post small-block-grid-3">'+
					'<li><a><img src="images/pic03.jpg"><i class="fa fa-fw fa-play-circle"></i></a></li>'+
					'<li><a><img src="images/pic05.jpg"><i class="fa fa-fw fa-music"></i></a></li>'+
					'<li><a>王平和小马回到别墅。小马问了问做饭的朱大姐：“他们是不是都去工地了”</a></li>'+
				'</ul>'+
			'</div>';
	return html;
}

//ActivityDetail页 参与发布
$('#data_activity_postcon .content-pad a.button').click(function(e){
	$('#data_activity_postcon .topic-post-bar').slideToggle(200);
	
	var topicPostBarSwiper = new Swiper('#topic-post-bar-swiper', {
		slidesPerView: 5,
		slidesPerGroup: 3,
		prevButton: '#topic-post-bar-swiper .pub-item-prev',
		nextButton: '#topic-post-bar-swiper .pub-item-next',
		onSlideChangeStart: function(topicPostBarSwiper){
			if(topicPostBarSwiper.activeIndex === 0){
				$('#topic-post-bar-swiper .pub-item-prev').css('display','none');
				$('#topic-post-bar-swiper .pub-item-next').css('display','block');
			}else{
				$('#topic-post-bar-swiper .pub-item-next').css('display','none');
				$('#topic-post-bar-swiper .pub-item-prev').css('display','block');
			}
		}
	});
});

