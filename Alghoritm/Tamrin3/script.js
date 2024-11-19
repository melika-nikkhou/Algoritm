// input=1,2,n,..,900  output=9,18,n,...,900
let sum=0;
for(let n=9;n<=900;n+=9){
 console.log(n);
 sum+=n;
}
console.log(sum);
