CREATE DATABASE cloud;

CREATE TABLE products
(
    id serial primary key,
    name varchar(255),
    type varchar(255),
    unit varchar (255),
    cost FLOAT
);
CREATE TABLE clients
(
    id serial primary key,
    name varchar(255),
    email varchar(255),
    phone varchar(255),
    location varchar(255)
);
CREATE TABLE request
(
    id serial primary key,
    date VARCHAR(255),
    client_id int not null,
    FOREIGN Key (client_id) REFERENCES clients
);
CREATE TABLE reqProduct
(
    id serial primary key,
    product_id int not null,
    FOREIGN KEY (product_id) REFERENCES products,
    request_Id int not null,
    FOREIGN Key (request_Id) REFERENCES request
);


INSERT INTO products
    (id,name, type,unit,cost)
VALUES
    ('CPU','i5','none',173),
    ('CPU','i7','none',424),
    ('AMD','RAM','1GB',35),
    ('WD','disk','1TB',49.99),
    ('Cisco','switch','none',34.9),
    ('Cisco','router','none',89.99);






