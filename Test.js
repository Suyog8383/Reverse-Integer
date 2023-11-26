var reverse = function(x) {
    let result=0;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    while(x != 0){
        let lastDigit= x % 10;
         x=parseInt(x/10);
                if (result > INT_MAX / 10 || (result === INT_MAX / 10 && lastDigit > 7)) {
            return 0;
        }
        if (result < INT_MIN / 10 || (result === INT_MIN / 10 && lastDigit < -8)) {
            return 0;
        }
        result = result * 10 + lastDigit;
      
    }
    return result ;
};
