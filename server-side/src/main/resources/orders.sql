use intents;

-- SET FOREIGN_KEY_CHECKS=0;

insert into users(first_name, last_name, username) values
('Neo', 'Maraisane', 'neom'),
('Pallavi','Deshpande', 'pallad'),
('Garrett', 'Molle', 'garm'),
('Donavyn', 'Haley', 'the_don'),
('Cisco', 'Nordstrand', 'ciscon'),
('Kit', 'Sidhu', 'kitsi');

insert into users(first_name, last_name, username, is_admin) values
('Mary', 'Wenzel', 'sailor', true);

insert into billing(order_id) values
(1),(2),(3),(4),(5),(6),(7);

insert into orders(user_id) values
(6),(1),(4),(2),(5),(2),(5);

insert into order_products(order_id, product_id, qty) values
(1, 5, 1), (1, 22, 3), (1, 13, 4), (1, 21, 10),
(4, 19, 4),
(3, 11, 4),
(5, 6, 1), (5, 22, 3), (1, 13, 4), (1, 21, 10),
(6, 5, 1), (6, 22, 3), (6, 13, 4), (6, 21, 10), (6, 16, 2),
(2, 7, 1),
(7, 4, 1);

-- desc billing;

-- drop database intents;
-- select * from users;
-- select * from billing;
-- select * from order_products;
-- select * from orders;
