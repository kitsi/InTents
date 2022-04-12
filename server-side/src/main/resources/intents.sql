use intents;

insert into categories(title) values
('cookeware'), ('tents'), ('sleeping-bags'), ('fans'), ('emergency');

insert into inventory(quantity) values
(42),(2),(10),(30),(25),(15),(300),(260),(120),(50),(30),
(10),(15),(35),(45),(10),(11),(30),(15),(45),(35),(44),(72);


insert into products(sku, title, description, price, category_id, inventory_id, image) values
('45687542', '''Blackstone 22'' Tabletop Griddle with Cover', 'hfghfgh', 149.99, 1, 1,
'https://www.campingworld.com/dw/image/v2/BCJK_PRD/on/demandware.static/-/Sites-global-master-catalog/default/dw32700d0f/images/large/655035_1.jpg?sw=800&sh=800'),
('89432145', 'enture Forward 5-Person Cabin Tent', 
'The Venture Forward Cabin Tent sleeps up to 5 and has a straight side wall design with a 6\'10\" center height so there\'s plenty of room for even the tallest campers. Its durable, watertight construction includes taped seams on the rain fly, no-wick technology, and a welded tub-style floor. The sturdy X-Frame steel and fiberglass frame design and ring-and-pin anchoring system provide fast and easy setup.',
999999.99, 2, 2,'https://www.campingworld.com/dw/image/v2/BCJK_PRD/on/demandware.static/-/Sites-global-master-catalog/default/dw61c309b9/images/large/731913_1.jpg?sw=800&sh=800'),
('82154905','Crua Twin Hybrid by Crua Outdoors', 'Virtually a portable chateau, this durable, single-wall tent boasts room for six people, ceilings high enough to stand beneath, large windows for expansive views and exceptional airflow, and a color-coded easy-pitch design. Packs into a duffel-bag-style stuffsack for easy transport.',
569.99,3,2,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/Cocoon_Maxx_New_2x-Copy.progressive.jpg?v=1646144464'),
(43647289, 'MSR Hubba Hubba NX 2-Person Backpacking Tent', 'Designed for backpackers who need a tent that can do it all while still being compact and lightweight, MSR\'s bestselling MSR Hubba Hubba NX 2-person tent feels as light and efficient to use as it does to carry. From its spacious interior to its quick setup, this tent redefines lightweight livability. And now it boasts premier durability features, including virtually indestructible Easton® Syclone™ poles and MSR’s long-lasting Xtreme Shield™ waterproof coating. Whether you’re setting out to climb the Sawatch Range or circumnavigate Mount Rainier along the Wonderland Trail, the freestanding, 3-season Hubba Hubba NX tent lets you enjoy the full backcountry experience — including time spent in the tent.',
449.95, 4, 2, 'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/HybridTwinNew.progressive.jpg?v=1638783905'),
('91580402', 'Nemo Equipment Dragonfly™ Ultralight Backpacking 2 Person Tent',
'Designed for backpackers who need a tent that can do it all while still being compact and lightweight, MSR\'s bestselling MSR Hubba Hubba NX 2-person tent feels as light and efficient to use as it does to carry. From its spacious interior to its quick setup, this tent redefines lightweight livability. And now it boasts premier durability features, including virtually indestructible Easton® Syclone™ poles and MSR’s long-lasting Xtreme Shield™ waterproof coating. Whether you’re setting out to climb the Sawatch Range or circumnavigate Mount Rainier along the Wonderland Trail, the freestanding, 3-season Hubba Hubba NX tent lets you enjoy the full backcountry experience — including time spent in the tent.',
449.95,5,2,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/8140410192556.progressive.jpg?v=1649347998')
;

insert into products(sku, title, description, price, category_id, inventory_id, image) values
(),
(),
(),
(),
()
;

-- insert into products(sku, title, description, price, category_id, inventory_id, image) values


-- insert into products(sku, title, description, price, category_id, inventory_id, image) values


-- insert into products(sku, title, description, price, category_id, inventory_id, image) values

drop database intents;


select * from categories;
select * from inventory;
select * from products;
-- select * from orders;
