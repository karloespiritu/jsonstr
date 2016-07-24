'use strict';

// Unit Test
var test = require('tape');
var jsonstr = require('./index');

test('simple object', function(t) {
    var result = jsonstr({"a": 1, "b": 2});
    t.equal(result, '{\n  "a": 1,\n  "b": 2\n}', 'format simple object');
    t.end();
});


console.log(jsonstr(obj));