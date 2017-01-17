function Order(IdOrder,Time){
    console.log("Id Order "+IdOrder);
    ProsesOrder(IdOrder,Time);
}

function ProsesOrder(IdOrder,Time)
{
    setTimeout(function(){
     console.log("Id Order " +IdOrder+ " sudah di proses");   
        
    },Time);
}
Order(1,3000);
Order(2,5000);
Order(3,7000);