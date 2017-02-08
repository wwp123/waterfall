// JavaScript Document
//滚动条事件
			$(document).ready(function () {         
				$(window).scroll(function () {
					if(($(window).scrollTop() + $(window).height()) == $(document).height())
					{
						$(".device").gridalicious('append', makeboxes());
					}
			});	
			//主要部分
            $(".device").gridalicious({
                gutter: 20,
                //width: 200,
                animate: true,
                animationOptions: {
                        speed: 50,
                        duration: 400,
                },
            });
        });
//瀑布流
