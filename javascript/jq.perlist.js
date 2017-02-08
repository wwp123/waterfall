/**个人主页扩展事件*/
define(['jquery', 'jq.basemode','jq.baseapp'], function($, baseMode,jqBaseapp) {
	var getTagParam = function(name) {
		var reg = "/" + name + "/([^?]+)";
		var r = window.location.href.match(reg);
		if (r != null) return r[1];
		return "";
	};
	var theUserId = getTagParam("perblog").replace('#',"");
	var getInfoByUserId = function(userId) {
		$.ajax({
			type: "POST",
			dataType: 'jsonp',
			data: {

				"userId": userId
			},
			url: baseMode.s_host + "/redis?act=searchByUserId",
			success: function(data) {
				if(data.ratcode=="2"){
					location.href=baseMode.s_host +"/blog";
				}
				var jsonData = eval("(" + data.result.extJson + ")");
				//头像
				$("#ar-headpic").attr("src", "" + data.result.headPic + "");
				$('#ar-headpic').parent().attr("href", "/perblog/" + userId);
				//email
				$("#ar-nick").html(data.result.nick);
				$('#ar-nick').attr("href", "/perblog/" + userId);

			},
			error: function() {}
		});
	};
	var getAttentionStatus = function(authorId) {
		$.ajax({
			type: "GET",
			dataType: 'jsonp',
			data: {
				"userId": baseMode.userId,
				"beUserId": authorId
			},
			url: baseMode.s_host + "/redis?act=getAttentionStatus",
			success: function(data) {

				if (data.attentionStatus == 0) {
					$("#ar-attention").append("关注").attr("data-status", "1");
					$("#ar-attention").find("i").removeClass('fa-minus-square').addClass('fa-plus-square');
				} else {
					$("#ar-attention").append("取消关注").attr("data-status", "0");
					$("#ar-attention").find("i").removeClass('fa-plus-square').addClass('fa-minus-square');
				}

			},
			error: function() {

				alert("无法获取当前要关注用户的关注状态");
			}
		});
	};
	var doUserAttention = function(beUserId, attentionStatus) {
		$.ajax({
			type: "GET",
			dataType: 'jsonp',
			url: baseMode.s_host + "/redis?act=doService",
			data: {
				"userId": baseMode.userId,
				"attentionStatus": attentionStatus,
				"beUserId": beUserId,
				"serviceId": "0i09bt95u0gvtfhg"
			},
			success: function(data) {
				var attention = "";
				if (data.attentionStatus == "1") {
					$("#ar-attention").attr("data-status", "0").attr("title", "取消关注").html('<i class="fa padr5 fa-fw fa-fa-plus fa-minus-square"></i>取消关注');
					//$("#ar-attention").find("i").removeClass('fa-plus-square').addClass('fa-minus-square');
					jqBaseapp.popup("关注成功","1");
				} else {
					$("#ar-attention").attr("data-status", "1").attr("title", "关注").html('<i class="fa padr5 fa-fw fa-fa-plus fa-plus-square"></i>关注');
					//$("#ar-attention").find("i").removeClass('fa-minus-square').addClass('fa-plus-square');
					jqBaseapp.popup("取消关注成功","1");
				}
			}
		});
	};
	//关注点击
	$('#ar-attention').click(function() {
		if(!baseMode.isLogin){
			jqBaseapp.popup("请登录","2");
			return;
		}
		var attentionStatus = $(this).attr("data-status");
		doUserAttention(theUserId, attentionStatus);

	});
	return {
		perListInit: function() {
			if (theUserId != "") {
				getInfoByUserId(theUserId);
				if(theUserId==baseMode.userId){
					$('#ar-attention').remove();
				}else{
					getAttentionStatus(theUserId);
				}
				
			}
		}
	}

});