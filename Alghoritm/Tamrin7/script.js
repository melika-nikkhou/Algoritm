let m=20;
let n=10;
let t;
if(m>n){
 t=m;
 m=n;
 n=t;
 for(let i=m;i<=n;i++){
    if(i%3===0){
        console.log(i);
        
    }
 }
}
else{
    for(let i=m;i<=n;i++){
        if(i%3===0){
            console.log(i);
            
        }
     }
}
