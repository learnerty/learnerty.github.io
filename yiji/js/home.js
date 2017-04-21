window.onload = function(){
		var mySwiper = new Swiper ('.banner .swiper-container', {
			loop: true,
			// 如果需要分页器
			pagination: '.banner .swiper-pagination',
			autoplay: 2000,
			autoplayDisableOnInteraction : false
		})
		var n=0;
		var mySwiper1 = new Swiper(".swiper-container_1",{
			direction: 'vertical',
			slidesPerGroup: 1,
			slidesPerView : 2.2,
			spaceBetween: 8,
			noSwiping : true,
			noSwipingClass : 'stop',
			onSlideChangeEnd:function(swiper){
				n=swiper.activeIndex;
			}
		})
		var mySwiper2 = new Swiper(".swiper-container_2",{
			direction: 'vertical',
			slidesPerGroup: 1,
			slidesPerView : 2.2,
			spaceBetween: 8,
			noSwiping : true,
			noSwipingClass : 'stop',
			onSlideChangeEnd:function(swiper){
				n=swiper.activeIndex;
			}
		})
		
		var banner = gId("banner");
		var main = document.getElementById('main');
		var swiperSlide=main.getElementsByClassName("swiper-slide")
		//swiper禁用和启用
		function noSwiping(){
			for(var i=0;i<swiperSlide.length;i++){
				swiperSlide[i].classList.add("stop");
			}
		}
		function starSwiping(){
			for(var i=0;i<swiperSlide.length;i++){
				swiperSlide[i].classList.remove("stop");
			}
		}

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

		var show = gId('show');
		var s_iMax = gName('showmax')[0];
		var imgW = parseFloat(window.getComputedStyle(s_iMax.getElementsByTagName('img')[0],null).width)/2;
		var m_gl = s_iMax.getElementsByTagName('a')[0];
		var mgl = parseFloat(window.getComputedStyle(m_gl,null).marginRight)/2;
		var sMW = parseFloat(window.getComputedStyle(s_iMax,null).width);
		var shW = parseFloat(window.getComputedStyle(show,null).width);
		var moveW1=(imgW + mgl)/50;
		var a=0;
		var moveW=0;
		var hammertime = new Hammer(show);
		hammertime.on('swipeleft', function() {
			if(moveW<sMW-shW-imgW){
				var t = setInterval(function(){
					a++;
					moveW+=moveW1;
					if(a==50){
						clearInterval(t);
						a=0;
					}
					s_iMax.style.marginLeft = -moveW+"px";
				},1)
			}
		});
		hammertime.on('swiperight', function() {
			if(moveW>imgW){
				var t = setInterval(function(){
					a++;
					moveW-=moveW1;
					if(a==50){
						clearInterval(t);
						a=0;
					}
					s_iMax.style.marginLeft = -moveW+"px";
				},1)
			}
		});

		$(".banner,.show,.fuceng,.save_jin,.menu").on("touchstart", function(e) {
			e.preventDefault();
		});

		var spLe = gId("jijiang");
		var spRi = gId("zhengzai");
		var m_rig = gName("main_right")[0];
		var m_max = gName("m_max")[0];
		var exh = gName("exhibit")[0];
		var b=0;
		var m_mov = 0;
		var hammertime1 = new Hammer(spLe);
		hammertime1.on('tap', function() {
			removeClassName(m_rig,"no")
			var t = setInterval(function(){
				b++;
				m_mov+=2;
				if(b==50){
					clearInterval(t);
					b=0;
				}
				exh.style.marginLeft = -m_mov+"%";
				m_max.style.marginLeft = -m_mov+"%";
			},1)
		});
		var hammertime2 = new Hammer(spRi);
		hammertime2.on('tap', function() {
			var t = setInterval(function(){
				b++;
				m_mov-=2;
				if(b==50){
					clearInterval(t);
					b=0;
				}
				exh.style.marginLeft = -m_mov+"%";
				m_max.style.marginLeft = -m_mov+"%";
			},1)
		});
		

		var hammertime3 = new Hammer(m_max);
		//设置方向
		hammertime3.get('swipe').set({
			direction: Hammer.DIRECTION_ALL
		});
		hammertime3.on("swipeup", function() {
			addClassName(banner,"none");
			removeClassName(banner,"block");
			starSwiping();
		});
		hammertime3.on("swipedown", function() {
			if(n == 0){
				addClassName(banner,"block");
				removeClassName(banner,"none");
				noSwiping();
			}
		});


		var zan = gName("zan");
		var hammertime4;
		for(var i=0;i<zan.length;i++){
			(function(z){
				hammertime4 = new Hammer(zan[z]);
				hammertime4.on("tap", function() {
					if(window.getComputedStyle(zan[z].getElementsByTagName("i")[0],null).color == "rgb(255, 255, 255)"){
						addClassName(zan[z].getElementsByTagName("i")[0],"red")
						zan[z].getElementsByTagName("span")[0].innerHTML = parseFloat(zan[z].getElementsByTagName("span")[0].innerHTML)+1;
					}else{
						removeClassName(zan[z].getElementsByTagName("i")[0],"red");
						zan[z].getElementsByTagName("span")[0].innerHTML = parseFloat(zan[z].getElementsByTagName("span")[0].innerHTML)-1;
					}
				});
			})(i)
		}
		

	var su = gName("sum_up");
	var all = gName("all");
	var scr;
	var kaiguan = false;
	var su_i;
	var ma_le1 = gName("main_left1")[0];
	var ma_ri1 = gName("main_right1")[0];
	var ma_img1 = ma_le1.getElementsByTagName('img')[0];
	var ma_img2 = ma_le1.getElementsByTagName('img')[1];
	var ma_img3 = ma_ri1.getElementsByTagName('img')[0];
	var hammertime5 = new Hammer(ma_img1);
	hammertime5.on("tap", function() {
		$(".details").removeClass("no");
		$(".details").animate({
			"top":0
		},500,function(){
			$(".wrap").css({"margin-left":"-100%","display":"none"});
		})
	});
	var hammertime8 = new Hammer(ma_img2);
	hammertime8.on("tap", function() {
		$(".details2").removeClass("no");
		$(".details2").animate({
			"top":0
		},500,function(){
			$(".wrap").css({"margin-left":"-100%","display":"none"});
		})
	});
	var hammertime9 = new Hammer(ma_img3);
	hammertime9.on("tap", function() {
		$(".details3").removeClass("no");
		$(".details3").animate({
			"top":0
		},500,function(){
			$(".wrap").css({"margin-left":"-100%","display":"none"});
		})
	});
	for(var i=0;i<su.length;i++){
		(function(z){
			hammertime6 = new Hammer(su[z].getElementsByTagName("i")[0]);
			hammertime6.on("tap", function() {
				scr = $("body").scrollTop();
				$(".wrap").css({"display":"block","top":scr+"px"})
				$(".wrap").animate({"margin-left":0},500)
				$(".ddddd").eq(z).animate({
					"left":"100%"
				},500,function(){
					$(".ddddd").eq(z).addClass("no");
					$(".ddddd").eq(z).removeAttr("style");
					$(".wrap").removeAttr("style");
				})
			});
		})(i)
	}
	
	var hammertime7;
	for(var i=0;i<all.length;i++){
		(function(z){
			hammertime7 = new Hammer(all[z]);
			hammertime7.on("tap", function() {
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

	var m_di = gName("m_di")[0];
	var sea_span = gName("seabox")[0].getElementsByTagName("span")[0];
	var ha1 = new Hammer(m_di);
	ha1.on("tap", function() {
		$(".search").removeClass("no");
		$(".search").animate({
			"margin-left":0
		},500,function(){
			$(".wrap").css("display","none")
		})
	});
	var ha2 = new Hammer(sea_span);
	ha2.on("tap", function() {
		$(".wrap").css("display","block")
		$(".search").animate({
			"margin-left":"100%"
		},500,function(){
			$(".search").addClass("no");
			$(".not").addClass("no");
			$(".seabox input").val("");
			$(".search").removeAttr("style");
		})
	});




	var xq_fx = document.getElementsByClassName("fenxiang");
	var off = document.getElementsByClassName("off");
	var go = gName("go")[0].getElementsByTagName("a")[0];
	var dZ = gName("daozhe")[0];
	var hamm1,hamm2,hamm5,hamm6;
	for(var i=0;i<xq_fx.length;i++){
		(function(z){
			hamm1 = new Hammer(xq_fx[z]);
			hamm1.on("tap",function(){
				$(".fuceng").removeClass("no");
				$(".change").animate({"margin-bottom":0},500);
				event.stopPropagation();
			});
		})(i)
	}
	for(var i=0;i<off.length;i++){
		(function(z){
			hamm2 = new Hammer(off[z]);
			hamm2.on("tap",function(){
				$(".fuceng").addClass("no");
				$(".change").animate({"margin-bottom":"-6.07rem"},500)
			});
		})(i)
	}
	var hamm3 = new Hammer(dZ);
	hamm3.on("tap",function(){
		scr = $("body").scrollTop();
		$(".go").removeClass("no");
		$(".go").css("top",scr);
		$(".go").animate({"margin-left":0},500,function(){
			$(".d1").css("display","none");
			$(".go").css("top",0);
			$("body").scrollTop(0);
		});
	});
	var hamm4 = new Hammer(go);
	hamm4.on("tap",function(){
		$(".d1").css("display","block");
		$(".go").css("top",scr);
		$("body").scrollTop(scr);
		$(".go").animate({"margin-left":"100%"},500,function(){
			$(".go").addClass("no");
			$(".go").removeAttr("style");
		})
	});

	var gz = gName("guanzhu");
	for(var i=0;i<gz.length;i++){
		(function(z){
			hamm5 = new Hammer(gz[z]);
			hamm5.on("tap", function() {
				if(window.getComputedStyle(gz[z].getElementsByTagName("i")[0],null).color == "rgb(255, 0, 0)"){
					removeClassName(gz[z].getElementsByTagName("i")[0],"red2");
				}else{
					addClassName(gz[z].getElementsByTagName("i")[0],"red2")
				}
			});
		})(i)
	}
	
	var ping = gName("ping");
	for(var i=0;i<ping.length;i++){
		(function(z){
			hamm6 = new Hammer(ping[z]);
			hamm6.on("tap", function() {
				scr = $("body").scrollTop();
				$(".discuss").removeClass("no");
				$(".discuss").css("top",scr);
				$(".discuss").animate({"margin-left":0},500,function(){
					$(".dddd").eq(z).css("display","none");
					$(".discuss").css("top",0);
					$("body").scrollTop(0);
				});
			});
		})(i)
	}

	var dI = gName("dcu1")[0].getElementsByTagName("i")[0];
	var hamm7 = new Hammer(dI);
	hamm7.on("tap", function() {
		$(".dddd").css("display","block");
		$(".discuss").css("top",scr);
		$("body").scrollTop(scr);
		$(".discuss").animate({"margin-left":"100%"},500,function(){
			$(".discuss").addClass("no");
			$(".discuss").removeAttr("style");
			$(".dddd").removeAttr("style");
		})
	});

	var imgA = gTag("img");
	for(var i=0;i<imgA.length;i++){
		(function(z){
			hamm8 = new Hammer(imgA[z]);
			hamm8.on("press", function(event) {
				$(".save_jin").removeClass("no");
				$(".save").animate({"margin-bottom":0},200);
			});
		})(i)
	}
	var off2 = gName("off2")[0];
	var hamm9 = new Hammer(off2);
	hamm9.on("tap",function(){
		$(".save_jin").addClass("no");
		$(".save").animate({"margin-bottom":"-6.07rem"},200)
	});


	var ter_a = gName("terms")[0].getElementsByTagName("a");
	var inp="";
	var hamm10;
	for(var i=0;i<ter_a.length;i++){
		(function(z){
			hamm10 = new Hammer(ter_a[z]);
			hamm10.on("tap",function(){
				inp += ter_a[z].text+" ";
				$(".seabox input").val(inp);
			});
		})(i)
	}
	var ter_im = gName("seabox")[0].getElementsByTagName("img")[0];
	var hamm11 = new Hammer(ter_im);
	hamm11.on("tap",function(){
		$(".not").removeClass("no");
		$(".terms").css("opacity","0.5");
	});


	var showimg = gName("showmax")[0].getElementsByTagName("img");
	var hamm12;
	for(var i=0;i<showimg.length;i++){
		(function(z){
			hamm12 = new Hammer(showimg[z]);
			hamm12.on("tap",function(){
				$(".drawing").eq(z).removeClass("no");
				$(".drawing").eq(z).animate({"margin-left":0},500,function(){
					$(".wrap").addClass("no");
				})
			});
		})(i)
	}
	var dradown = gName("dratop");
	var hamm13;
	for(var i=0;i<dradown.length;i++){
		(function(z){
			hamm13 = new Hammer(dradown[z].getElementsByTagName("div")[0]);
			hamm13.on("tap",function(){
				$(".drawing").eq(z).addClass("no");
				$(".wrap").removeClass("no");
				$(".drawing").eq(z).removeAttr("style");
			});
		})(i)
	}


}