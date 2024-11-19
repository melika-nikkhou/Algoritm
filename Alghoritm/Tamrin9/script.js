let t = 0;
let n=0;
for (let i = 10; i < 100; i++) {
t=i%10;
n=Math.floor(i/10)
if(t===n){
    console.log(i);
    
}
}