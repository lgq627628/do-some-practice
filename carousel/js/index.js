var i=0;
var timer;
$(function(){
	$(".tp").eq(0).show().siblings().hide();
	Timer();
	$(".xb").hover(function(){
		i=$(this).index();
		show();
		clearInterval(timer);
	},function(){
		Timer();
	});
	$(".btn1").click(function(){
		clearInterval(timer);
		i--;
		if(i==-1){
			i=4;
		}
		show();
		Timer();
	});
	$(".btn2").click(function(){
		clearInterval(timer);
		i++;
		if(i==5){
			i=0;
		}
		show();
		Timer();
	});
})
function show(){
	$(".tp").eq(i).fadeIn(400).siblings().fadeOut(400);
	$(".xb").eq(i).addClass("bg").siblings().removeClass("bg");
}
function Timer(){
	timer=setInterval(function(){
		i++;
		if(i==5){
			i=0;
		}
		show();
	},2500);
}
