module.exports = {
    
    //This condition will checks the prime numbers.
    checkPrime(s1, s2) {
        var flag = 0, k = 0;
        var array = [];
        for (var i = s1; i <= s2; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 0;
                    
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                array[k++] = i;
            }
        }
        return array;
    }
}