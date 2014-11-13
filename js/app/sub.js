/**
 * Created sub 模块 依赖 sup模块
 * Created by qianzhangsheng
 */
define(["sup"], function (sup) {
    var add = function (x, y) {
        return x + y;
    };

    var a = function (x) {
        return x;
    };
    var b = function (x) {
        return x + 5;
    };

    var j = function () {
        return $().jquery;
    };

    return {
        add: add,
        a: b,
        j: j,
        sup: sup
    };
});