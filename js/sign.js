$(function(){
	var a = false;
	var b = false;
	//手机号码
	$(".phone_name").children("input").blur(function(){
		a = false;
		var mobile= /^0?(13|15|18|14|17)[0-9]{9}$/ //手机
		var numbb = $(this).val();
		if(!mobile.test(numbb)){
			$(".phone_name").children("p").css({display:"block"}).html("手机号码不正确")
		}else{
			$(".phone_name").children("p").css({display:"none"})
			a = true;
		}
		
	})
	//密码
	$(".passwords").children("input").blur(function(){
		b = false;
		var mobile= /^[a-zA-Z0-9]{6,18}$/ //手机
		var numbb = $(this).val();
		if(!mobile.test(numbb)){
			$(".passwords").children("p").css({display:"block"}).html("密码6-18位数字或字母")
		}else{
			$(".passwords").children("p").css({display:"none"})
			b = true;
		}
		
	})
	
	
	$(".login").children("a").click(function(){
				var user = $(".phone_name").children("input").val();
				var pass = $(".passwords").children("input").val();
				
				if(a && b){
					
					$.ajax({
						url:"http://datainfo.duapp.com/shopdata/userinfo.php",
						data:{
							status:"login",
							userID:user,
							password:pass
						}
					})
					.then(function(ress){
						switch(ress){
							case "0":$(".phone_name").children("p").css("display","block").html("用户名不存在");break;
							case "2":$(".passwords").children("p").css("display","block").html("用户名或密码不对");break;
							
							default : location.href="index.html"
						}
					})
				}
				
			})
	
})
