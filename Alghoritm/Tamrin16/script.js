const shopes=[
    {shopId:1,salesperYear:600000},
    {shopId:2,salesperYear:300000},
    {shopId:3,salesperYear:700000},
    {shopId:4,salesperYear:100000}
]
shopes.map(item=>{
    let Seller=0;
  
    if(item.salesperYear<=500000){
        console.log('shop id',':',item.shopId,'seller',':',Seller=item.salesperYear*3/100);

    }
    else if(item.salesperYear>50000 && item.salesperYear<=700000){
        console.log('shop id',':',item.shopId,'seller',':',Seller=item.salesperYear*5/100);
    }
   
    
})