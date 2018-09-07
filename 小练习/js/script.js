//封装一个byId()函数代替代替document.getElementById()的方法
function byId(id) {
	return typeof(id)==="string"?document.getElementById(id):id;
}
//console.log(byId('main'));

//全局变量
var index=0,
	timer=null,
	pics=byId("banner").getElementsByTagName('div'),

	dots=byId("dots").getElementsByTagName("span"),
	prev=byId("prev"),
	next=byId("next"),
	len=pics.length;

function slideImg(){
	//var box = byId(main);
	//滑过清楚定时器，离开继续
	main.onmouseover=function(){
	//滑过清除定时器
		if (timer) clearInterval(timer);
	}
	main.onmouseout=function(){
		//鼠标离开时继续
		timer=setInterval(function(){
			index++;
			if (index>=len) {
				index=0;
			}
			//console.log(index);  1 2 0 1 2 0 ````
			//切换图片
			changeImg();//index是全局变量 不需要传参数，在任何地方都能使用
		},2000);
	}
	//自动在main上触发鼠标离开事件
	main.onmouseout();

	//点击圆点，切换图片   
	//遍历所有圆点，且绑定事件
	for (var d= 0; d < len; d++) {
		//给所有的span添加一个id属性，值为d，作为当前的索引
		dots[d].id=d;
		dots[d].onclick=function(){
			//改变index为当前spand的id值	
			index=this.id;		
			//alert(this.id);//function 可以改变作用域，弹出的index是3 ，是最终值,加上索引后
			changeImg();
		}
	}

	//点击上一张，下一张，切换图片
	next.onclick=function(){
		index++;
		if (index>=len) {index=0;}
		changeImg();
	}
	prev.onclick=function(){
		index--;
		if (index<0) {index=len-1;}
		changeImg();
	}
}


function changeImg(){//切换图片的函数
	//需要遍历banner下所有的div，将其隐藏，然后根据pics[index],来将其显示
	for (var i = 0; i < len; i++) {
		pics[i].style.display='none';//现将所有的隐藏
		dots[i].className="";
		}
	pics[index].style.display='block';//如果不遍历， 经过一轮后，所有的div都是display block，所以会停留在最后一个div，前面的都被覆盖
	dots[index].className="active";
}



slideImg();