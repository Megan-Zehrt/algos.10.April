// 1437. Check If All 1's Are at Least Length K Places Away

// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

 

var kLengthApart = function(nums, k) {
    var list = [];
    var idx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            list.push(i);
        }
    }

    for (let j = 0; j < list.length - 1; j++) {
        if (list[j + 1] - list[j] <= k) {
            return false;
        }
    }

    return true;
};