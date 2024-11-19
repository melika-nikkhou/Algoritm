let radius=5;
let count=0;
for(let x=-5;x<=5;x++){

    for(let y=-5;y<=5;y++){
        if(x*x+y*y<=radius*radius){
            count++
        }
    }

}
console.log(count);
