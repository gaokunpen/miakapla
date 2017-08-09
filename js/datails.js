$(function(){
	
	$("#new_left ul li").eq(1).hover(function(e){
	
		$(".anmore").stop().animate({width:74,height:"100%",opacity:1});
		
	},function(){
		$(".anmore").stop().animate({width:0,height:"0%",opacity:0});
	});
	
	var res =location.search;//接收的数据
	var tt = res.slice(1).split("=")
	var num = tt[1];

	$.ajax({
		type:"get",
		url:"js/list.json",
		async:true,
		success:function(data){
			var lis=0;
			for(var i=0;i<data.length;i++){
				if(data[i].id == num){
					lis = i;
				}
			}
			
			var dta = data[lis].img1;
			
			var html = 
				"<div class='chart'>"+
				"<div class='img_in'>"+
					"<img src='"+data[lis].img11+"'/>"+
					"<p>+</p>"+
					"<span></span>"+
				"</div>"+	
				
				"<div class='small-map'>";
//					"<li><img src='http://www.wm18.com/images/201608/thumb_img/6852_thumb_P_1471545298578.jpg'/></li>"+
//					"<li><img src='http://www.wm18.com/images/201608/thumb_img/6852_thumb_P_1471545298170.jpg' /></li>"+
					for(var f= 0; f< dta.length;f++){	
						html+=
								"<li><img src='"+dta[f]+"'/></li>"
					}					
				html+="</div>"+	
				"<div class='big_img'>"+
					"<img src='"+data[lis].img11+"' />"+
				"</div>"+
			"</div>"+
			
			
			"<div class='breakdown'>"+
				"<p>"+data[lis].name+"</p>"+
				"<div class='number'>"+
					"<span>品牌 :LaTaWAzi</span>"+
					"<b>商品编号：<i>"+data[lis].id+"</i></b>"+
				"</div>"+
				"<b>"+data[lis].price+"</b>"+ 
				"<div class='amount'>"+
					"数量：<span>-</span>"+
					"<b>1</b>"+
					"<i>+</i>"+
				"</div>"+
				"<div class='purchase'>"+
					"<a href='#:;'>加入购物车</a>"+
					"<p>加入收藏</p>"+
				"</div>"+
				"<ul><a href='#:;'><ul class='shaer'><span>分享到</span><li>分享微博</li><li>分享狗熊</li><li>分享gx</li><li>分享gg、</li><li>分享gt</li><li>分享bt</li><li>分享md</li><li>分享zz</li><li>分享aa</li><li>分享cmd</li></ul></a><a href='#:;'></a><a href='#:;'></a><a href='#:;'></a><a href='#:;'></a><a href='#:;'></a></ul></div>";
				
			
			$("#enlarge").append(html);
			$(".small-map").children().click(function(){
				var srcs = $(this).children()[0].src;//获取图片路径	
				$(".img_in").children("img").attr("src",srcs);
				$(".big_img").children("img").attr("src",srcs);
			})
			//商品数量
			var number = $(".amount").children().eq(1).text();
			$(".amount").children().eq(0).click(function(){
				number--;
				if(number<= 1){
					number = 1;
				}
				$(".amount").children().eq(1).text(number);
			})
			
			$(".amount").children().eq(2).click(function(){
				number++;
				$(".amount").children().eq(1).text(number);
			})
			//放大镜
			$(".img_in").mouseover(function(){
				$(".big_img").css({display:"block"})
				$(".img_in").children().eq(1).css({display:"block"})
			})
			$(".img_in").mousemove(function(e){
				var eve = e || window.event;
				var x = eve.pageX - $(".img_in").offset().left-$(".img_in").children().eq(1).width()/2;
				var y = eve.pageY - $(".img_in").offset().top-$(".img_in").children().eq(1).height()/2;
			
				var maxX = $(".img_in").children().eq(0).width();
				var maxY = $(".img_in").height()-$(".img_in").children().eq(1).height();
				if(x <= 80){
					x = 80
				}
				if(x>= maxX){x = maxX}
				if(y <= 0 ){y=0}
				if(y>= maxY){y = maxY}
				$(".img_in").children().eq(1).css({left:x,top:y})
				$(".big_img").children().eq(0).css({
					left:-(x-80)/$(".img_in").children().eq(0).width()*$(".big_img").children().eq(0).width(),
					top:-(y/$(".img_in").children().eq(0).height())*$(".big_img").children().eq(0).height()
				})
			})
			$(".img_in").mouseout(function(){
				$(".big_img").css({display:"none"})
				$(".img_in").children().eq(1).css({display:"none"})
			})
			//放大镜结束
			
			
			//购物车
			var str = $.cookie("cart");
			var obj = str ? JSON.parse(str) : {};
			var numberss = 0;
			for(var i in obj){
				console.log(obj[i])
				numberss +=obj[i]; 
			}
			$(".num").text(numberss);
			
			$(".purchase").children("a").click(function(){
				var quantity = +$(".amount").children().eq(1).text();
				console.log(typeof(quantity))
				var commodity = data[lis].id;
				obj[commodity] = obj[commodity] ? obj[commodity]+quantity :quantity;
				var json_str = JSON.stringify(obj);//转换成json形式存cookie；
				$.cookie("cart",json_str);
				numberss +=quantity;
				$(".num").text(numberss);
			})
			
			
			
			
		}
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
	
	


})