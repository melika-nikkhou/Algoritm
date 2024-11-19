let n=1256;
const numberString=n.toString();
let eventCount=0;
let oddCount=0;
let zeroCount=0;
for(let i=0;i<numberString.length;i++){
    const digit=parseInt(numberString[i],10)
    if(digit===0){
        zeroCount++;
    }
    else if(digit%2===0){
        eventCount++;
    }
    else{
        oddCount++;
    }
}
console.log(zeroCount,'   ',oddCount,'   ',eventCount);
