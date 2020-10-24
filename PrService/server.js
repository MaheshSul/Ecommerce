var express = require("express");
var app = express();

var productController = function(req,res){

var products = [

      {id: 1, title: "Rose", description: "Valentine Flower", unitPrice: 10, quantity: 4500},
      {id: 2, title: "Lotus", description: "Valentine Flower", unitPrice: 10, quantity: 4500},
      {id: 3, title: "Lilly", description: "Valentine Flower", unitPrice: 10, quantity: 4500}
];

   res.send(products);
}

app.get("/products", productController);

var server = app.listen(8086, function(){

    console.log("Product Service Is Running on Port 8086");
})