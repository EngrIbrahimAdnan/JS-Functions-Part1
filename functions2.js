function isOdd(n){
    if (n%2!==0){
        return true;
    }
    else{
        return false;

    }
}

function oddsSmallerThan(n){
    return Math.floor(n/2)
}

function squareOrDouble(n) {
    if (n%2!==0){//if n is odd, square it
        return Math.pow(n,2);
    }
    else{//if n is even, double it
        return n*2;
    }
}