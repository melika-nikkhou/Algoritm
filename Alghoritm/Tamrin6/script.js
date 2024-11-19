let n=8;
let sum=0;
for(let i=1;i<=n;i++){
 sum+=i;
}
if(n%sum===0){
    console.log('it is divisible');
    
}
else{
    console.log('it is not divisible');
    
}