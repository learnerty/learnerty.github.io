window.onload = function(){
	function gName(className){
		return document.getElementsByClassName(className);
	}
	function gTag(tagName){
		return document.getElementsByTagName(tagName);
	}
	function gId(id){
		return document.getElementById(id);
	}
	function removeClassName(obj,cl){
		var old = obj.className;
		if(old != ""){
			var arr = old.split(" ");
			for(var j in arr){
				if(arr[j] == cl){
					arr.splice(j,1);
				}
			}
			var newold=arr.join(" ");
			obj.className = newold;
		}	
	}
	function addClassName(obj,cl){
		var old = obj.getAttribute("class");
		if(!old){
			obj.setAttribute("class",cl);
		}else{
			var arr = old.split(" ");
			var kaiguan = true;
			for(var i in arr){
				if(arr[i] == cl){
					kaiguan = false;
				}
			}
			if(kaiguan == true){
				obj.setAttribute("class",old +" "+ cl);
			}
		}
	}


	var n;
	var mySwiper = new Swiper ('.m_max .swiper-container',{
		autoHeight: true //自适应高度
	});

	var m_max = gName("m_max")[0];
	var walk = gName("walk")[0];
	var scr;
	var hammertime1 = new Hammer(m_max);

	hammertime1.on("swipeleft", function() {
		$(".exhibit").animate({"margin-left":"-100%"},200);
	});
	hammertime1.on("swiperight", function() {
		$(".exhibit").animate({"margin-left":0},200);
	});
	var hammertime2 = new Hammer(walk);

	hammertime2.on("tap", function() {
		$(".details").removeClass("no");
		scr = $("body").scrollTop();
		$(".details").css("top",scr);
		$(".details").animate({"margin-left":0},500,function(){
			$(".wrap").addClass("no");
			$(".details").css("top",0);
			$("body").scrollTop(0);
		})
	});
	var su = gName("sum_up")[0];
	var all = gName("all");
	var kaiguan = false;
	var su_i= su.getElementsByTagName("i")[0];
	var hammertime3 = new Hammer(su_i);
	hammertime3.on("tap", function() {
		$(".wrap").removeClass("no");
		$(".details").animate({"margin-left":"100%"},500,function(){
			$(".details").addClass("no");
		})
	});
	var hammertime4;
	for(var i=0;i<all.length;i++){
		(function(z){
			hammertime4 = new Hammer(all[z])
			hammertime4.on("tap", function() {
				if(kaiguan == false){
					$(".u_all").eq(z).removeClass("no");
					kaiguan=true;
				}else{
					$(".u_all").eq(z).addClass("no");
					kaiguan = false;
				}
			});
		})(i)
	}

	var xq_fx = document.getElementsByClassName("fenxiang");
	for(var i=0;i<xq_fx.length;i++){
		(function(z){
			hamm1 = new Hammer(xq_fx[z]);
			hamm1.on("tap",function(){
				$(".fuceng").removeClass("no");
				$(".change").removeClass("no");
				$(".change").animate({"margin-bottom":0},300);
				event.stopPropagation();
			});
		})(i)
	}
	var off = document.getElementsByClassName("off");
	for(var i=0;i<off.length;i++){
		(function(z){
			hamm2 = new Hammer(off[z]);
			hamm2.on("tap",function(){
				$(".fuceng").addClass("no");
				$(".change").animate({"margin-bottom":"-6.07rem"},300,function(){
					$(".change").addClass("no");
				})
			});
		})(i)
	}
	$(".fuceng").on("touchstart", function(e) {
		e.preventDefault();
	});

	var walk2 = gName("walk")[2];
	var hamm3 = new Hammer(walk2);
	hamm3.on("tap", function() {
		$(".details2").removeClass("no");
		scr = $("body").scrollTop();
		$(".details2").css("top",scr);
		$(".details2").animate({"margin-left":0},500,function(){
			$(".wrap").addClass("no");
			$(".details2").css("top",0);
			$("body").scrollTop(0);
		})
	});
	var sup2_1 = gName("sum_up2")[0].getElementsByTagName("div")[0];
	var hamm4 = new Hammer(sup2_1);
	hamm4.on("tap", function() {
		$(".wrap").removeClass("no");
		$(".details2").animate({"margin-left":"100%"},500,function(){
			$(".details2").addClass("no");
		})
	});

	var walk3 = gName("walk")[1];
	var hamm5 = new Hammer(walk3);
	hamm5.on("tap", function() {
		$(".details3").removeClass("no");
		scr = $("body").scrollTop();
		$(".details3").css("top",scr);
		$(".details3").animate({"margin-left":0},500,function(){
			$(".wrap").addClass("no");
			$(".details3").css("top",0);
			$("body").scrollTop(0);
		})
	});
	var sup3_1 = gName("sum_up3")[0].getElementsByTagName("div")[0];
	var hamm6 = new Hammer(sup3_1);
	hamm6.on("tap", function() {
		$(".wrap").removeClass("no");
		$(".details3").animate({"margin-left":"100%"},500,function(){
			$(".details3").addClass("no");
		})
	});

	var zan = gName("zan");
	var hammertime4;
	for(var i=0;i<zan.length;i++){
		(function(z){
			hammertime4 = new Hammer(zan[z]);
			hammertime4.on("tap", function() {
				if(window.getComputedStyle(zan[z].getElementsByTagName("i")[0],null).color == "rgb(255, 0, 0)"){
					removeClassName(zan[z].getElementsByTagName("i")[0],"red");
					zan[z].getElementsByTagName("span")[0].innerHTML = parseFloat(zan[z].getElementsByTagName("span")[0].innerHTML)-1;
				}else{
					addClassName(zan[z].getElementsByTagName("i")[0],"red")
					zan[z].getElementsByTagName("span")[0].innerHTML = parseFloat(zan[z].getElementsByTagName("span")[0].innerHTML)+1;
				}
			});
		})(i)
	}

	var imgA = gTag("img");
	for(var i=0;i<imgA.length;i++){
		(function(z){
			hamm8 = new Hammer(imgA[z]);
			hamm8.on("press", function(event) {
				$(".save_jin").removeClass("no");
				$(".save").animate({"margin-bottom":0},300);
			});
		})(i)
	}
	var off2 = gName("off2")[0];
	var hamm9 = new Hammer(off2);
	hamm9.on("tap",function(){
		$(".save_jin").addClass("no");
		$(".save").animate({"margin-bottom":"-6.07rem"},300)
	});
}