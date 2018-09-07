var index= 0;
main.onmouseout = function(){
	timer = setInterval(function(){
		index++;
		console.log(index);
	},2000)