/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-161.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is the length property of 'O', the [[Value]] field of 'desc' is less than value of  the length property,  test the [[Writable]] attribute of the length property is set to true at last after deleting properties with large index named if the [[Writable]] field of 'desc' is absent (15.4.5.1 step 3.h)
 */


function testcase() {

        var arr = [0, 1];

        Object.defineProperties(arr, {
            length: {
                value: 1
            }
        });

        arr.length = 10; //try to overwrite length value of arr
        return !arr.hasOwnProperty("1") && arr.length === 10 && arr[0] === 0;
    }
runTestCase(testcase);
