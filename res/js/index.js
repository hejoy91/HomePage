layui.use(["layer"]);

function testLayui(){
	layer.msg("hello! we are joining the world!",{icon:16,time:0});
	console.log(layui);
}
function testLayui2(){
	layer.open("hello! we are joining the world!",{icon:16,time:0});
	console.log(layui);
}
function offsetTest(){
	var ul = $(".ulTest");
	var x0 = ul.offset();
	console.log(ul.css("top")+','+ ul.height());
	console.log("x0:"+x0.left+","+ x0.top);
	console.log("scroll-pos:"+ ul.scrollLeft()+","+ ul.scrollTop());
	//console.log("offset-000:"+ ul.scrollLeft()+","+ ul.scrollTop());
	var x1 = $("li.c1",ul).offset();
	console.log("offset-c1:"+ x1.left+","+ x1.top);
	var x = $("li.LastLi",ul).prev().offset();
	console.log("offset-prev:"+ x.left+","+ x.top);
	var xx = $("li.LastLi",ul).offset();
	console.log("offset-child:"+ xx.left+","+ xx.top);
	var h = xx.top + ul.scrollTop() - x0.top;
	ul.scrollTop(h);
}
$(document).ready(function(){
		$("button[name='btnStop']").on("click",function(){
			//layer.alert("stop!");
			layer.close(layer.index);
		});
		$("button[name='btn1']").on("click",function(){
			testLayui();
		});
		$("button[name='btn2']").on("click",function(){
			testLayui2();
		});
		$("button[name='btnOffSet']").on("click",function(){
			offsetTest();
		});
		$("button[name='btnOffSet']").on("click",function(){
			layer.alert("append!");
		});
});