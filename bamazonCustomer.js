var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "bamazon",
    database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);
    promptForId(results);
    });
}

function promptForId(data) {
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the ID of the product you would like to buy?",
            }
        ]).then(function(val){
            // console.log(val.item);
            for(var i = 0; i < data.length; i++){
                if(data[i].item_id===parseInt(val.item)){
                    promptForQuantity(data[i]);
                }
            }
        });
}    

function promptForQuantity(product) {
    inquirer
        .prompt([
            {
                name: "quantity",
                type: "input",
                message: "What is the quantity of the product you would like to buy?",
            }
        ]).then(function (val) {
            if(parseInt(val.quantity) > product.stock_quantity){
                console.log("not enough product on hand");
                start();
            }
            else{
                connection.query(
                    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
                    [parseInt(val.quantity), product.item_id],
                    function (err, results){
                    start();
                })
            } 
        });
}
