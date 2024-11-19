const datas=[
    {sname:'melika',basicInventory:50000000,numberofTransactions:4,transactionType:2,depositAmount:10000000},
    {sname:'mohmad',basicInventory:30000000,numberofTransactions:3,transactionType:1,depositAmount:2000000},
    {sname:'melina',basicInventory:9000000,numberofTransactions:2,transactionType:2,depositAmount:30000000}
]
datas.map(item=>{
    let amount=item.basicInventory;
    if(item.transactionType===1){
        amount+=item.depositAmount
    }
    else if(item.transactionType===2){
        if(amount>item.depositAmount){
          amount-=item.depositAmount
        }
        else{
            console.log('name',':',item.sname,'amount',':','Insufficient Inventory');
            return null
            
        }
      }
    console.log('name',':',item.sname,'','amount',':',amount);
    
})
