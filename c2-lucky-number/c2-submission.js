let n = 31052022;
let sum;
// Write solution code here to find the lucky number
function luckyNumber(n) {
    
    do {
        sum=0;
        while(n!=0){
            let remember = n%10;
            sum=sum+remember;
            n=Math.floor(n/10);
        }
        n=sum;
    } while (sum>10)
 return sum;   
}

console.log(`Your Lucky Number is ${luckyNumber(n)}`);