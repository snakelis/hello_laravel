var inspect = require('../');
var test = require('tape');

test('function', function (t) {
    t.plan(1);
    var obj = [ 1, 2, function f (n) {}, 4 ];
    t.equal(inspect(obj), '[ 1, 2, [Function: f], 4 ]');
});

test('function name', function (t) {
    t.plan(1);
    var f = function () {};
    f.toString = function () { return 'function xxx () {}' };
    var obj = [ 1, 2, f, 4 ];
    t.equal(inspect(obj), '[ 1, 2, [Function: xxx], 4 ]');
});
