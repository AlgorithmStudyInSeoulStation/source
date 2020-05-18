var isHappy = function(n) {
    const MAP = new Map();

    const squareSum = function(number){
        let sum = 0;
        while(number > 0) {
            const remain = parseInt(number % 10, 10);
            sum += remain * remain;
            number = parseInt(number / 10, 10);
        } 
        return sum;
    };
    
    while(true){
        const sum = squareSum(n);
        console.log(sum);
        if(MAP.has(sum)) return false;
        else MAP.set(sum);
        
        if(sum === 1) return true;
        else n = sum;
    }
};
