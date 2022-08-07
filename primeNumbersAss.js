// A program that sums up all prime numbers less than a number
function primeCalc(num){
    if(num==2){
        return true
    }

    for(let i=2; i<num; i++){
        if(num%i==0){
            return false
        }
    }
    return true
}


function sumPrime(lessThan){
    let summation = 0
    for(i=2; i<lessThan; i++){
        if(primeCalc(i)){
            summation+=i
        }
    }
    return summation;
}

console.log(sumPrime(19))
