$(function(){
	var a = false;
	var b = false;
	var c = false;
	//手机验证
	$(".phone").children("input").blur(function(){
		a = false;
		var mobile= /^0?(13|15|18|14|17)[0-9]{9}$/ //手机
		var numbb = $(this).val();
		if(!mobile.test(numbb)){
			$(".phone").children("p").css({display:"block"}).html("手机号码不正确")
		}else{
			$(".phone").children("p").css({display:"none"})
			a = true;
		}
		
	})
	//密码验证
	$(".password").children("input").blur(function(){
		b = false;
		var mobile= /^[a-zA-Z0-9]{6,18}$/ //手机
		var numbb = $(this).val();
		if(!mobile.test(numbb)){
			$(".password").children("p").css({display:"block"}).html("密码6-18位数字或字母")
		}else{
			$(".password").children("p").css({display:"none"})
			b = true;
		}
		
	})
	//重复密码
	$(".password_again").children("input").blur(function(){
		c = false;
		var num = $(".password").children("input").val();
		var numbb = $(this).val();
		console.log(num,numbb)
		if(num!= numbb){
			console.log(1)
			$(".password_again").children("p").css({display:"block"}).html("密码不一致")
		}else{
			$(".password_again").children("p").css({display:"none"});
			c = true;
		}
		
	})
	
	
	$(".input_click").children("a").click(function(){
				var reg = $(".phone").children("input").val();
				var pas = $(".password").children("input").val();
				if(a&&b&&c){
					$.ajax({
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"register",
						userID:reg,
						password:pas
						}
					})
					.then(function(res){
						console.log(res)
						switch(res){
							case "0" : $(".phone").children("p").css({display:"block"}).html("用户重名");break;
							case "1" : location.href="./sign.html";break;
							case "2" : $(".phone").children("p").css({display:"block"}).html("服务报错请稍后");break;
							default:$(".phone").children("p").css({display:"block"}).html ("用户名或密码不能为空")
						}
					})
					
				}
				

			})
})
