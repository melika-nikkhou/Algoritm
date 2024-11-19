let n=120;
let t=0;
let s=0;
for(let i=0;i<=n;i++){
    t=n%10;
    n=Math.floor(n/10); 
    s+=Math.pow((t*3),i);
}
console.log(s);
