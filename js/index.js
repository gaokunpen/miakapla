$(function(){
	
	var strs = $.cookie("cart");
	var objs = strs ? JSON.parse(strs) : {};
	var numberss = 0;
	for(var i in objs){
		console.log(objs[i])
		numberss +=objs[i]; 
	}
	$(".num").text(numberss);
	
	//左侧
	$("#new_left ul li").eq(1).hover(function(e){
	
		$(".anmore").stop().animate({width:74,height:"100%",opacity:1});
		
	},function(){
		$(".anmore").stop().animate({width:0,height:"0%",opacity:0});
	});
//	轮播图
	var timer;
	var i = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		move();
	},2000);
	console.log(2);
//	左按钮
	$(".btn_left").click(function(){
		
		clearInterval(timer);
		i=i-2;
		if(i <= -2){
			i=1;
		}
		move();
		timer = setInterval(function(){
		move();
	},2000);
	})
	//右按钮
	$(".btn_right").click(function(){
		clearInterval(timer);
		move();
		timer = setInterval(function(){
		move();
	},2000);
	})
	// 点击下标
	$(".subscript").children().click(function(){
		clearInterval(timer);
		i = $(this).index()-1;
		move();
		timer = setInterval(function(){
		move();
	},2000);
		
	})
	//主函数
	function move (){
		i++;
		if(i >= 3 ){
			i = 0;
		}
		$("#banner .imgs").children().eq(i).stop().fadeIn().siblings().stop().fadeOut();
		$(".subscript").children().eq(i).addClass("add_color").siblings().removeClass("add_color");
		
	}
//	轮播图结束
	
	//jsone 数据加载
	$.ajax({
		type:"get",
		url:"js/list.json",
		async:true,
		success:function(data){
			var html1 = 
						"<div class='img1'>"+
							"<img src='http://www.wm18.com/data/afficheimg/1429134254077145381.jpg' alt='' />"+
						"</div>"
			;
			for (var i=0;i<2;i++){
				html1 += 
							"<div class='modular'>"+
								"<div class='show'>"+
									"<h2>"+data[i].name+"</h2>"+
									 "<tt>"+data[i].details+"</tt>"+	
									 "<p>"+data[i].price+"</p>"+
								"</div>"+
								"<img src='"+data[i].img11+"'/>"+
								"<span></span>"+
								"<div class='enlarge'>"+
									"<img src='"+data[i].img11+"'/>"+
									"<h2>"+data[i].name+"</h2>"+
									 "<tt>"+data[i].details+"</tt>"+
									 "<b><img src='img/vivo-head-ico.png' /></b>"+
									 "<a href='datails.html?id="+data[i].id+"'> 查看详情</a>"+
									 "<div class = 'sample'>"+
									 	"<img src='"+data[i].img1[1]+"' />"+
									 	"<img src='"+data[i].img1[0]+"' />"+
									 "</div>"+
									 "<i class='pear'></i>"+
								"</div>"+
							"</div>"
						
			}
			$(".skin").append(html1);
			var html4 = 
						"<div class='img1'>"+
							"<img src='http://www.wm18.com/data/afficheimg/1429060614762777922.jpg' alt='' />"+
						"</div>"
			;
			for(var k = 2; k<4;k++){
				html4 = "<div class='modular'>"+
								"<div class='show'>"+
									"<h2>"+data[k].name+"</h2>"+
									 "<tt>"+data[k].details+"</tt>"+	
									 "<p>"+data[k].price+"</p>"+
								"</div>"+
								"<img src='"+data[k].img11+"'/>"+
								"<span></span>"+
								"<div class='enlarge'>"+
									"<img src='"+data[k].img11+"'/>"+
									"<h2>"+data[k].name+"</h2>"+
									 "<tt>"+data[k].details+"</tt>"+
									 "<b><img src='img/vivo-head-ico.png' /></b>"+
									 "<a href='datails.html?id="+data[k].id+"'> 查看详情</a>"+
									 "<div class = 'sample'>"+
									 	"<img src='"+data[k].img1[1]+"' />"+
									 	"<img src='"+data[k].img1[0]+"' />"+
									 "</div>"+
									 "<i class='pear'></i>"+
								"</div>"+
							"</div>"+ html4;
			}
			$(".healthy").append(html4);
			//home界面
			var html7 = 
						"<div class='modular'>"+
								"<div class='show'>"+
									"<h2>"+data[4].name+"</h2>"+
									 "<tt>"+data[4].details+"</tt>"+	
									 "<p>"+data[4].price+"</p>"+
								"</div>"+
								"<img src='"+data[4].img11+"'/>"+
								"<span></span>"+
								"<div class='enlarge'>"+
									"<img src='"+data[4].img11+"'/>"+
									"<h2>"+data[4].name+"</h2>"+
									 "<tt>"+data[4].details+"</tt>"+
									 "<b><img src='img/vivo-head-ico.png' /></b>"+
									 "<a href='datails.html?id="+data[4].id+"'> 查看详情</a>"+
									 "<div class = 'sample'>"+
									 	"<img src='"+data[4].img1[1]+"' />"+
									 	"<img src='"+data[4].img1[0]+"' />"+
									 "</div>"+
									 "<i class='pear'></i>"+
								"</div>"+
							"</div>"+ 
							"<div class='img1'>"+
							"<img src='http://www.wm18.com/data/afficheimg/1429060614762777922.jpg' alt='' />"+
							"</div>"+
							"<div class='modular'>"+
								"<div class='show'>"+
									"<h2>"+data[5].name+"</h2>"+
									 "<tt>"+data[5].details+"</tt>"+	
									 "<p>"+data[5].price+"</p>"+
								"</div>"+
								"<img src='"+data[5].img11+"'/>"+
								"<span></span>"+
								"<div class='enlarge'>"+
									"<img src='"+data[5].img11+"'/>"+
									"<h2>"+data[5].name+"</h2>"+
									 "<tt>"+data[5].details+"</tt>"+
									 "<b><img src='img/vivo-head-ico.png' /></b>"+
									 "<a href='datails.html?id="+data[5].id+"'> 查看详情</a>"+
									 "<div class = 'sample'>"+
									 	"<img src='"+data[5].img1[1]+"' />"+
									 	"<img src='"+data[5].img1[0]+"' />"+
									 "</div>"+
									 "<i class='pear'></i>"+
								"</div>"+
							"</div>";
						$(".home").append(html7);	
					//skill 数据
					var html8 = "";
					for(var j = 6; j<8;j++){
					html8 += "<div class='modular_tow'>"+
								"<div class='show'>"+
									"<h2>"+data[j].name+"</h2>"+
									 "<tt>"+data[j].details+"</tt>"+	
									 "<p>查看详情</p>"+
								"</div>"+
								"<img src='"+data[j].img11+"'/>"+
								"<span></span>"+
								"</div>"+
							"</div>"
					}
					$(".sat_left").append(html8);
					var html9 = "";
					for(var j = 8; j<10;j++){
					html9 += "<div class='modular_tow'>"+
								"<div class='show'>"+
									"<h2>"+data[j].name+"</h2>"+
									 "<tt>"+data[j].details+"</tt>"+	
									 "<p>查看详情</p>"+
								"</div>"+
								"<img src='"+data[j].img11+"'/>"+
								"<span></span>"+
								"</div>"+
							"</div>"
					}
					$(".sat_right").append(html9);
					
						
			
			
			
			
			//点击消失
			$(".pear").each(function(){
				$(this).click(function(e){
				
				 $(this).parent(".enlarge").fadeOut();
				 e.stopPropagation();
				})	
			})
			
			$(".modular").each(function(){
				$(this).click(function(){
				console.log(this);
				$(this).children(".enlarge").fadeIn();
				})	
			})
			
			
			
		}//success函数结束
	})//ajax结束
	
	//第二个ajax;;;;
	$.ajax({
		type:"get",
		url:"js/index2.json",
		async:true,
		success:function(data){
			var html2 = "";
			for(var i = 0;i<2 ;i++){
				html2 += 
					"<div class='modular_tow'>"+
								"<div class='show'>"+
									"<h2>"+data[i].name+"</h2>"+
									 "<tt>"+data[i].details+"</tt>"+	
									 "<p>查看详情</p>"+
								"</div>"+
								"<img src='"+data[i].img+"'/>"+
								"<span></span>"+
								"</div>"+
							"</div>"
				
			}
			$(".nat_left").append(html2);
			
			var html3 = "";
			
			for(var i = 3;i<5 ;i++){
				html3 += 
					"<div class='modular_tow'>"+
								"<div class='show'>"+
									"<h2>"+data[i].name+"</h2>"+
									 "<tt>"+data[i].details+"</tt>"+	
									 "<p>查看详情</p>"+
								"</div>"+
								"<img src='"+data[i].img+"'/>"+
								"<span></span>"+
								"</div>"+
							"</div>"
				
			}
			
			$(".nath_right").append(html3);
			//vitamin的
			var html5 = "";
			for(var k = 4;k<6 ;k++){
				html5 += 
					"<div class='modular_tow'>"+
								"<div class='show'>"+
									"<h2>"+data[k].name+"</h2>"+
									 "<tt>"+data[k].details+"</tt>"+	
									 "<p>查看详情</p>"+
								"</div>"+
								"<img src='"+data[k].img+"'/>"+
								"<span></span>"+
								"</div>"+
							"</div>"
				
			}
			$(".vat_left").append(html5);
			var html6= "";
			for(var k = 6;k<8 ;k++){
				html6 += 
					"<div class='modular_tow'>"+
								"<div class='show'>"+
									"<h2>"+data[k].name+"</h2>"+
									 "<tt>"+data[k].details+"</tt>"+	
									 "<p>查看详情</p>"+
								"</div>"+
								"<img src='"+data[k].img+"'/>"+
								"<span></span>"+
								"</div>"+
							"</div>"
				
			}
			$(".vath_right").append(html6);
			//最后四个
			var html11= "";
			for(var g = 9;g<13 ;g++){
				html11 += 
					"<div class='modular_three'>"+
								"<div class='show'>"+
									"<h2>"+data[g].name+"</h2>"+
									 "<tt>"+data[g].details+"</tt>"+	
									 "<p>查看详情</p>"+
								"</div>"+
								"<img src='"+data[g].img+"'/>"+
								"<span></span>"+
								"</div>"+
							"</div>"
				
			}
			$(".honor").append(html11);
			
			
		}
		
	})//ajax 结束
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
