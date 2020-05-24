var permute = function(nums) {
    const result = [];
    const remove = (array, index) => {
        return [...array.slice(0, index), ...array.slice(index + 1)];
    }
    const dfs = (cache, remain) => {
        if(!remain.length) {
            result.push(cache);
            return;
        }
        
        for(let i=0; i<remain.length; i++){
          dfs(cache.concat([remain[i]]), remove(remain, i));
        }  
    };
    
    dfs([], nums);
    
    return result;
};
