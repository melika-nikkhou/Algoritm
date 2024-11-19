for(let i=101;i<1000;i++){
    let y;
    let newi;
    let d;
    let s;
    if(i>0){
         y=i%10
        newi=Math.floor(i/10)
        if(newi>0){
             d=newi%10
            newi=Math.floor(newi/10)
        }
        if(newi>0){
             s=newi%10
            newi=Math.floor(newi/10)
            if(y===s && d%2===0){
                console.log(i);
                
            }
        }
    }

}