/**
 * Created by torresyb 2014/11/13
 */
require.config({
	baseUrl: 'js/app', // 根路径
    paths: {
        jquery: '../lib/jquery' //不存在根路径下面的模块路径
    },
    shim: {
    	'sub': ['jquery'] //sub 模块依赖 jquery 模块，不加此处会因为异步加载 报错
    }
});

// 加载主入口 依赖 jquery sub a 模块
require(["jquery", "sub", "a"], function($, sub, a){
	console.log(sub.add(1, 1));
    console.log(sub.a(3));
    console.log(sub.j());
    console.log(a);
    console.log(sub.sup);
});