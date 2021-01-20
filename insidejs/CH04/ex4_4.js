var factorialVar = function factorial(n){
    if(n<=1){
        return 1;
    }
    else {
        return n * factorial(n-1);
    }

}

console.log(factorialVar(5));