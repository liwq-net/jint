/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-2-32.js
 * @description Object.defineProperty - argument 'P' is a number that converts to a string (value is 123.1234567)
 */


function testcase() {
        var obj = {};
        Object.defineProperty(obj, 123.1234567, {});

        return obj.hasOwnProperty("123.1234567");

    }
runTestCase(testcase);
