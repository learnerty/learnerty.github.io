window.onload = function(){
	var menu_i = document.getElementsByClassName('menu')[0].getElementsByTagName('i')[0];
	var iconfont1 = document.getElementsByClassName('iconfont1')[0];
	var hammertime1 = new Hammer(menu_i);
	hammertime1.on("tap", function() {
		$(".wrap").css("display","block")
		$(".setting").animate({"margin-left":"100%"},300,function(){
			$(".setting").addClass("none");
		})
	});
	var hammertime2 = new Hammer(iconfont1);
	hammertime2.on("tap", function() {
		$(".setting").removeClass("none");
		$(".setting").animate({"margin-left":0},300,function(){
			$(".wrap").css("display","none")
		})
	});

	var topimg = document.getElementsByClassName("top")[0].getElementsByTagName("img")[0];
	var hammertime3 = new Hammer(topimg);
	hammertime3.on("tap", function() {
		$(".message").removeClass("none");
		setTimeout(function(){
			$(".wrap").css("display","none")
		},300)
		$(".message").animate({"margin-left":0},300)
	});
	var menu2_i = document.getElementsByClassName('menu')[1].getElementsByTagName('i')[0];
	var hammertime4 = new Hammer(menu2_i);
	hammertime4.on("tap", function() {
		$(".wrap").css("display","block")
		$(".message").animate({"margin-left":"100%"},300)
		setTimeout(function(){
			$(".message").addClass("none");
		},300)
	});

	var head_por = document.getElementsByClassName("head_por")[0];
	var hammertime5 = new Hammer(head_por);
	hammertime5.on("tap",function(){
		$(".fuceng").removeClass("none");
		$(".change").animate({"margin-bottom":0},300)
	});
	var off = document.getElementsByClassName("off")[0];
	var hammertime6 = new Hammer(off);
	hammertime6.on("tap",function(){
		$(".fuceng").addClass("none");
		$(".change").animate({"margin-bottom":"-4.05rem"},300)
	});
	var fuceng = document.getElementsByClassName("fuceng")[0];
	var hammertime7 = new Hammer(fuceng);
	hammertime7.on("tap",function(){
		$(".fuceng").addClass("none");
		$(".change").animate({"margin-bottom":"-4.05rem"},300)
	});

	var g_img = document.getElementsByClassName("g_img")[0].getElementsByTagName("img");
	var hammertime8;
	for(var i=0;i<g_img.length;i++){
		(function(z){
			hammertime8 = new Hammer(g_img[z]);
			hammertime8.on("tap",function(){
				$(".takeEx").eq(z).removeClass("none");
				$(".takeEx").eq(z).animate({"margin-left":0},300,function(){
					$(".wrap").addClass("none");
				})
			})
		})(i)
	}

	var scr;
	var teTopi = document.getElementsByClassName("teTop");
	var hammertime9;
	for(var i=0;i<teTopi.length;i++){
		(function(z){
			hammertime9 = new Hammer(teTopi[z].getElementsByTagName("i")[0]);
			hammertime9.on("tap",function(){
				scr = $("body").scrollTop();
				$(".wrap").css({"top":scr+"px"})
				$(".wrap").removeClass("none");
				$(".takeEx").eq(z).animate({"margin-left":"100%"},300,function(){
					$(".takeEx").eq(z).addClass("none");
					$(".wrap").removeAttr("style");
				})
			})
		})(i)
	}

	
	var taCon = document.getElementsByClassName("taCon");
	var hammertime10;
	for(var i=0;i<taCon.length;i++){
		(function(z){
			hammertime10 = new Hammer(taCon[z]);
			hammertime10.on("tap",function(event){
				var target = window.event.srcElement || event.srcElement;
				if(target.className == "iconfont red"){
					if(confirm("确定从订阅列表移除此收藏？") == true){
						taCon[z].removeChild(target.parentNode.parentNode.parentNode.parentNode);
					}
				}
			})
		})(i)
	}

}