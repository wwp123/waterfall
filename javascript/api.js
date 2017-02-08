$(function(){
	waterFall('waterfall',window,true);
	$('.photoGallery').each(function(){
		var _this = $(this);
		$(document).on('click','.entrance',function(){
			//_this.find('.gallery').css('visibility','visible');
			_this.find('.gallery').css('display','block');
			$('body').css('overflow','hidden');
			var t = $(document).scrollTop();
	        _this.find('.gallery .close').unbind('click');
			new picSwiper('#'+_this.find('.gallery')[0].id,_this.parent().parent().index()+1,t,{});
		});
	});
})
