var express = require("express");
var app = express();

var customersController = function(req,res){

var customers = [

      {id: 1, title: "Rose", description: "Valentine Flower", unitPrice: 10, quantity: 4500},
      {id: 2, title: "Lotus", description: "Valentine Flower", unitPrice: 10, quantity: 4500}
];

   res.send(customers);
}

app.get("/customers", customersController);

var server = app.listen(8088, function(){

    console.log("Product Service Is Running on Poer 8088");
})