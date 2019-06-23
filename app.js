// 回调函数


function add(x,y,callback){
	setTimeout(function(){
		var soc = x+y
		callback(soc)//回调函数
	},1000)
}

add(10,20,function(res){

	console.log(res)//拿到异步执行结果
})
setTimeout(function(){
	console.log(2)
},200)
console.log(3)
