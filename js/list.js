$(function(){
	
	//购物车
	var strs = $.cookie("cart");
	var objs = strs ? JSON.parse(strs) : {};
	var numberss = 0;
	for(var i in objs){
		console.log(objs[i])
		numberss +=objs[i]; 
	}
	$(".num").text(numberss);
	//右侧
	$("#new_left ul li").eq(1).hover(function(e){
	
		$(".anmore").stop().animate({width:74,height:"100%",opacity:1});
		
	},function(){
		$(".anmore").stop().animate({width:0,height:"0%",opacity:0});
	});
	
	
	
	//右侧边栏的js
	$(".side_phone").hover(function(){
		console.log(1);
		$(".move_p").fadeIn().stop().animate({left:-230});
	},function(){
		$(".move_p").stop().animate({left:-300}).fadeOut();
	})
	
	$(window).scroll(function(){
		var sol_tp = $(document).scrollTop();
		if(sol_tp > 100){
			$(".side_scroll").fadeIn();
		}else{
			$(".side_scroll").fadeOut();
		}
	})
	$(".side_scroll").click(function(){
		$(document).scrollTop(0); 
	})
	
	//头部的js
	$(".disapper").click(function(){
		console.log($("#vivo_head"));
		$("#vivo_head").stop().animate({height:0},function(){
			$("#vivo_head").children().css({display:"none"})
		})
	})
	$(".Magnifier").click(function(){
		$("#vivo_head").stop().animate({height:80},function(){
			$("#vivo_head").children().css({display:"block"})
		})
	})
	
	//加载
	$.ajax({
		type:"get",
		url:"js/list.json",
		async:true,
		success:function(data){
			
			var html = "";
			console.log(data[10].img11);
			for(var i=10 ;i<22;i++){
				html += 
						"<li>"+
							"<a href='datails.html?id="+data[i].id+"'><img src='"+data[i].img11+"' alt='' /></a>"+
							"<p>"+data[i].name+"</p>"+
							"<i>"+data[i].price+"</i>"+
						"</li>"
						
			}
			$(".content").append(html);
		}
	})


})