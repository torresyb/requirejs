require.config({
	baseUrl: 'js/lib',
    paths: {
        sub: "../app/sub",
        sup: "../app/sup",
        a: "../app/a",
        b: "../app/b"
    },
    shim: {
    	'sub': ['jquery']
    }
});

require(["jquery", "sub", "a"], function($, sub, a){
	console.log(sub.add(1, 1));
    console.log(sub.a(3));
    console.log(sub.j());
    console.log(a);
    console.log(sub.sup);
});