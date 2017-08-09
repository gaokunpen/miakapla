$(function(){
	
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
	//显示购物车的数量
	var str = $.cookie("cart");
	var obj = str ? JSON.parse(str) : {};
	var numberss = 0;
	for(var i in obj){
		console.log(obj[i])
		numberss +=obj[i]; 
	}
	$(".num").text(numberss);
	//购物车的显示
	$.ajax({
		type:"get",
		url:"js/list.json",
		async:true,
		success:function(data){
			var str = $.cookie("cart");
			var obj = str ? JSON.parse(str):{};
			console.log(obj)
			var amount = 0;
			//在购物车中显示
			for(var i in obj){		
				var html = "";	
				for(var k in data){
					
					if(data[k].id ==i ){
						html +=
						"<li class='commoditys'>"+
							"<div class='hook'><input type='checkbox' /></div>"+
							"<img src='"+data[k].img11+"' alt='' />"+
							"<div class='information'>"+
								"<p>"+data[k].name+"</p>"+
								"<b>商品编号<span>"+data[k].id+"</span></b>"+
							"</div>"+
							"<b>"+data[k].price+"</b>"+
							"<div class='nums'>"+
								"<a href='#:;' class='readuce' id='"+data[k].id+"' many = '"+data[k].price+"' >-</a>"+
								"<p>"+obj[i]+"</p>"+
								"<a href='#:;' class='push'  id='"+data[k].id+"' many = '"+data[k].price+"'>+</a>"+
							"</div>"+
							"<span class='single'>"+ data[k].price.slice(1)*(obj[i]) +"</span>"+
							"<a href='#:;' class='delete' ids ='"+data[k].id+"' price='"+data[k].price+"' >删除</a>"+
						"</li>"
						amount += data[k].price.slice(1)*(obj[i])
					}
				}
				$(".commodity").append(html);
				$(".amount").text("$"+amount);
					
			}
			//点击加减
			$(".readuce").each(function(){
				$(this).click(function(){
					var nb = $(this).next().text()-1;//在商品中获取
					if(nb<=1){
						nb =1;
					}
					var idss = $(this).attr("id");
					$(this).next().text(nb);//设置单个商品数量
					var strs = $.cookie("cart");
					var objs = JSON.parse(strs);
					  
					 obj[idss] = obj[idss] -1;
					 if(obj[idss]<1){//判断商品数量是不是1
					 	obj[idss]=1;
					 	numberss=numberss;
					 	amount = amount;
					 	 $(".amount").text("$"+amount);
					 }else{
					 numberss -=1;
					 amount = amount - $(this).attr("many").slice(1);
					 $(".amount").text("$"+amount);
					 }
					  var mountt = (obj[idss])*($(this).attr("many").slice(1));//计算单个商品金额
					 var json_str = JSON.stringify(obj);//转换成json形式存cookie；
					 $.cookie("cart",json_str);
					 $(".num").text(numberss);  
					$(this).parent().siblings(".single").text(mountt);
					
				})
			})
			//点击增加
			$(".push").each(function(){
				$(this).click(function(){
					var nb = +$(this).prev().text()+1;//显示框上的内容
					var idss = $(this).attr("id");
					$(this).prev().text(nb);//赋值显示框上的内容商品数量
					var strs = $.cookie("cart");
					var objs = JSON.parse(strs);
					 numberss +=1; 
					 obj[idss] = obj[idss] +1;//加减之后的数量
					  var mountt = (obj[idss])*($(this).attr("many").slice(1));//计算单个商品金额
					 var json_str = JSON.stringify(obj);//转换成json形式存cookie；
					 $.cookie("cart",json_str);
					 $(".num").text(numberss);
					 $(this).parent().siblings(".single").text(mountt);
					 
					  amount = amount + +$(this).attr("many").slice(1);//总商品的价格
					 $(".amount").text("$"+amount);
				})
			})
			//点击删除整个li
			$(".delete").each(function(){
				$(this).click(function(){
//					var parent = this.parentNode;
//					this.parentNode.parentNode.removeChild(parent);
					$(this).parents(".commoditys").remove();
//					$(this).parents("commodity").remove($(this).parents("commoditys"))
					//取cookie
					var strr = $.cookie("cart");
					var objr = JSON.parse(strr);
					var idd = $(this).attr("ids");//获取此商品的id
					var price = +$(this).attr("price").slice(1);
					var amounts = 0 ; //在cookie中的此商品的数量
					for(var p in objr){
						if( p == idd){
						amounts = +objr[p];
						delete objr[p]	//删除cookie里的id	
						}
					}
					var json_obj = JSON.stringify(objr);
					$.cookie("cart",json_obj)
					var money = +amounts*price;
					 amount = amount - money;//总商品的价格
					 $(".amount").text("$"+amount);
					numberss = numberss - amounts;//头上的购物车数量；
					$(".num").text(numberss);
					
				})
				
			})
			
		}//ajax函数
	})


})