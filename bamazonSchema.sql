DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
  product_name VARCHAR
    (100) NOT NULL,
  department_name VARCHAR
    (45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY
    (item_id)
);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("basketballs", "sporting goods", 12, 200),
    ("baseballs", "sporting goods", 5, 200),
    ("footballs", "sporting goods", 15, 200),
    ("tennis balls", "sporting goods", 8, 200),
    ("soccer balls", "sporting goods", 12, 200),
    ("ping-pong balls", "sporting goods", 2, 200),
    ("golf balls", "sporting goods", 6, 200),
    ("steaks", "grocery", 12, 200),
    ("bananas", "grocery", 9, 200),
    ("lettuce", "grocery", 2, 200);