const fibonacci = function(num) {
    let arr = [1,1];

    if(num < 0) {
        return 'OOPS';
    }

        while(arr.length < num) {
            const sum = arr[0]+arr[1];
            arr.unshift(sum)
        }
    
        return arr.reverse()[num-1];
    

    
};

// fibonacci(25)

// Do not edit below this line
module.exports = fibonacci;
