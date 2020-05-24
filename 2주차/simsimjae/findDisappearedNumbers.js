var findDisappearedNumbers = function(nums) {
    for(let i=0; i<nums.length; i++) {
        const cur = Math.abs(nums[i]);
        nums[cur - 1] = -1 * Math.abs(nums[cur - 1]);
    }
    const result = [];
    for(let i=0; i<nums.length; i++) {
        if(nums[i] > 0) {
            result.push(i+1);
        }
    }
    return result;
};
