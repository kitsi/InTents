use intents;

insert into categories(title) values
('cookeware'), ('tents'), ('sleeping-bags'), ('fans'), ('emergency');

insert into inventory(quantity) values
(42),(2),(10),(30),(25),(15),(300),(260),(120),(50),(30),
(10),(15),(35),(45),(10),(11),(30),(15),(45),(35),(44),(72);


insert into products(sku, title, description, price, category_id, inventory_id, image) values
('45687542', '''Blackstone 22'' Tabletop Griddle with Cover', 'hfghfgh', 149.99, 1, 1,
'https://www.campingworld.com/dw/image/v2/BCJK_PRD/on/demandware.static/-/Sites-global-master-catalog/default/dw32700d0f/images/large/655035_1.jpg?sw=800&sh=800'),
('89432145', 'Venture Forward 5-Person Cabin Tent', 'The Venture Forward Cabin Tent sleeps up to 5 and has a straight side wall design with a 6\'10\" center height so there\'s plenty of room for even the tallest campers. Its durable, watertight construction includes taped seams on the rain fly, no-wick technology, and a welded tub-style floor. The sturdy X-Frame steel and fiberglass frame design and ring-and-pin anchoring system provide fast and easy setup.',
999999.99, 2, 2,'https://www.campingworld.com/dw/image/v2/BCJK_PRD/on/demandware.static/-/Sites-global-master-catalog/default/dw61c309b9/images/large/731913_1.jpg?sw=800&sh=800'),
('82154905','Crua Twin Hybrid by Crua Outdoors', 'Virtually a portable chateau, this durable, single-wall tent boasts room for six people, ceilings high enough to stand beneath, large windows for expansive views and exceptional airflow, and a color-coded easy-pitch design. Packs into a duffel-bag-style stuffsack for easy transport.',
569.99,2,3,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/Cocoon_Maxx_New_2x-Copy.progressive.jpg?v=1646144464'),
(43647289, 'MSR Hubba Hubba NX 2-Person Backpacking Tent', 'Designed for backpackers who need a tent that can do it all while still being compact and lightweight, MSR\'s bestselling MSR Hubba Hubba NX 2-person tent feels as light and efficient to use as it does to carry. From its spacious interior to its quick setup, this tent redefines lightweight livability. And now it boasts premier durability features, including virtually indestructible Easton® Syclone™ poles and MSR’s long-lasting Xtreme Shield™ waterproof coating. Whether you’re setting out to climb the Sawatch Range or circumnavigate Mount Rainier along the Wonderland Trail, the freestanding, 3-season Hubba Hubba NX tent lets you enjoy the full backcountry experience — including time spent in the tent.',
449.95, 2, 4, 'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/HybridTwinNew.progressive.jpg?v=1638783905'),
('91580402', 'Nemo Equipment Dragonfly™ Ultralight Backpacking 2 Person Tent','Designed for backpackers who need a tent that can do it all while still being compact and lightweight, MSR\'s bestselling MSR Hubba Hubba NX 2-person tent feels as light and efficient to use as it does to carry. From its spacious interior to its quick setup, this tent redefines lightweight livability. And now it boasts premier durability features, including virtually indestructible Easton® Syclone™ poles and MSR’s long-lasting Xtreme Shield™ waterproof coating. Whether you’re setting out to climb the Sawatch Range or circumnavigate Mount Rainier along the Wonderland Trail, the freestanding, 3-season Hubba Hubba NX tent lets you enjoy the full backcountry experience — including time spent in the tent.',
449.95,2,5,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/8140410192556.progressive.jpg?v=1649347998'),
('75102651','Eureka Northern Breeze 12 Screen House', 'Designed for backpackers who need a tent that can do it all while still being compact and lightweight, MSR\'s bestselling MSR Hubba Hubba NX 2-person tent feels as light and efficient to use as it does to carry. From its spacious interior to its quick setup, this tent redefines lightweight livability. And now it boasts premier durability features, including virtually indestructible Easton® Syclone™ poles and MSR’s long-lasting Xtreme Shield™ waterproof coating. Whether you’re setting out to climb the Sawatch Range or circumnavigate Mount Rainier along the Wonderland Trail, the freestanding, 3-season Hubba Hubba NX tent lets you enjoy the full backcountry experience — including time spent in the tent.',
472.46,2,6,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/26263018_b33e53ec-248a-43ea-80bd-9ad2cf40ca5d.progressive.jpg?v=1610744057'),
('73005246','GSI Outdoors Bugaboo Non-Stick Frypan','Versatile, heavy-gauge, non-stick frypan.GSI Outdoors Bugaboo frypans are the dependable, non-stick option for all your outdoor cooking needs. These high-quality aluminum pans are light enough for backpacking, yet heat evenly enough to satisfy the most demanding camp cook. Plus, each piece is fully formed then coated with two layers of durable nonstick coating for added scratch resistance.',
33.95,1,7,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/60110_0_i.progressive.jpg?v=1585086966'),
('17935564','Eureka SPRK Camp Stove','The Eureka SPRK Stove is ready to go wherever you go. Designed with your adventures in mind, this compact camp stove is easy to use and even easier to clean. Precise simmer control makes cooking for favorite meals for your campsite crew a breeze, and an included carry case makes this stove ready to go whenever you\'re ready to head out. Because we think you should be able to cook the goods wherever you\'re headed.',
33.71,1,8,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/25722004.progressive.jpg?v=1610734811'),
('22781240','Rome Pioneer Grill','The most versatile grill you\'ll find anywhere. Great over open wood fire or charcoal, also terrific for cooking steaks and hamburgers in your home fireplace. Large 13 x 24 cooking surface with 7 gauge steel plated crossbars spaced close for placing food directly on grill. Rigidly braced 11 legs fold flat for easy storage. (5lbs. 5 oz. each).',
26.99,1,9,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/P6Rn9jvqRdi8Oaq0bJf1_124.progressive.jpg?v=1594223515'),
('42277840','Eureka Ignite Camp Stove','To cook a great meal, you need a great stove. The Ignite Camping Stove is the stove you need for awesome Dinners and scrumptious breakfasts.',
86.21,1,10,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/1104877_primary.png?v=1585329736'),
('91011420','Coleman Brazos Cold Weather Sleeping Bag','The Coleman Brazos 20 Degree Sleeping Bag is a comfortable entry-level rectangular bag, for camp or cabin. Polyester shell and insulation for easy care.',
44.99,3,11,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/FafiNNk5SYuNG9eDDuFD_brazo.png?v=1589488215'),
('5452191','Kelty Mistral 20 Degree Sleeping Bag','The Kelty Mistral 20 Degree Sleeping Bag is ideal for budget-conscious campers who want reliable comfort for 3 season camping endeavors. It comes with extra Cozy CloudLoft™ synthetic insulation over the chest area and a zipper draft tube to keep out the cold.',
69.95,3,12,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/pWD5ZCSN6zsmxdsiSLlA_354155193.progressive.jpg?v=1614871019'),
('47391507','Marmot Nanowave 50 Semi Rectangular Sleeping Bag','The Marmot Nanowave 50 Semi Rectangular Sleeping Bag provides extra space in the toe box and easily packable for water or land adventures. ',
79.0,3,13,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/38800.progressive.jpg?v=1636201392'),
('27312973','The North Face WASATCH 30/-1 Degree Sleeping Bag','The North Face WASATCH 30/-1 Degree Sleeping Bag is fitted hood with draw string allows you to close out the cold and the offset quilted construction locks in the heat.',
79.0,3,14,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/CE76_U0E_hero.progressive.jpg?v=1618148111'),
('90489954','Kelty Tru.comfort Doublewide 20 Degrees F Regular','Whether you’re snoozing or snuggling, you want two things from your sleeping bag: contact with bae, and control over your temperature. Our Doublewide lets you do you...times two. Wider than a standard double with a hood that accommodates two standard-sized pillows, the Tru.Comfort Doublewide also gives each person their own personal snuggle blanket and foot vent. Not in the mood for ZZZs? The Doublewide is the best way to get down without getting dirty in the outdoors.',
209.95,3,15,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/35417119DWDT4.progressive.jpg?v=1646931432'),
('94145731','O2Cool 10inch Camping Fan with Lights','It blows cold air',
59.99,4,16,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/FTPW3eBQ0ObP0DPECJ1g_FD10018L.progressive.jpg?v=1597112525'),
('06205894','Car Camping Fan by Luno® - USA','Beat the heat with this small but mighty 5inch USB-powered fan. The hefty, stay-tight suction cup allows you to attach the fan to any of your windows. After attaching, the articulating ball mount gives you full control over the direction of airflow to keep you cool and comfortable while camping. Heads up: a power bank or USB port is necessary for the use of this fan - all this power has to come from somewhere!',
34.99,4,17,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/Luno-FanPics10.progressive.jpg?v=1643964913'),
('38127488','SOL Heavy Duty Emergency Blanket','The Heavy Duty Emergency Blanket by AMK is an ultra-versatile, all-purpose emergency shelter designed for use in the harshest terrain and conditions. Weighing in at only 7.9 oz, this 5\' x 8\' shelter packs down to a pocket sized package yet can withstand almost any abuse you can throw at it. Wind & waterproof and 90% heat reflective, the Heavy Duty Emergency Blanket will keep you warm and dry and is tough enough to survive multiple adventures. Can be used as an emergency blanket, ground cloth, gear cover, emergency shelter or whatever suits your needs.',
13.99,5,18,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/83014gre_b494de8e-8910-459d-a80a-4d0349af72ef.progressive.jpg?v=1581785450'),
('60838486','SOL Escape Bivvy','The Survive Outdoors Longer® Escape™ Bivvy is nothing less than a revolution in backcountry shelters. The complaint with most ultra-light emergency shelters is the same: condensation builds up inside as you get warm, leaving your clothes soaking wet. With the Escape™ Bivvy, condensation is no longer an issue, and you never again have to choose between staying dry and staying warm. The proprietary fabric lets moisture escape at the same time that it keeps rain, snow, and wind on the outside – all while reflecting your body heat back to you. Waterproof seams plus a drawstring hood closure and side zip mean you can seal out the elements entirely or use the bivvy like a traditional sleeping bag, and the high-visibility orange exterior makes it easy for rescuers to spot you even in areas with high tree cover.',
49.99,5,19,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/0140-12282_67247349-678a-4ccc-ae5f-3e173cc2add4.progressive.jpg?v=1618106595'),
('51203854','SOL Emergency Fire Blanket','Keep the SOL Emergency Fire Blanket ready at a moment\'s notice in your home, car, and at your campsite. Unlike a traditional fire extinguisher, it does not expire, does not require training, and does not produce fumes or make a mess. Safe to use on liquid, grease, and biofuel fires, but not on electrical fires. In a fire emergency, throw the blanket over the fire to smother or wrap around a person. 100% fiberglass, the SOL Emergency Fire Blanket is essential in an emergency kit.',
24.99,5,20,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/0140-1151.progressive.jpg?v=1633600400'),
('30768082','Coghlan\'s Fire Sticks','A fast, safe way to start barbeques, campfires and fireplaces. They\'ll light even after being submerged in water. Twelve 5 in. sticks.',
3.99,5,21,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/23132_7a82f13d-4757-499e-be64-f26a60214b1e.progressive.jpg?v=1582121159'),
('96749165','UCO Titan Fire Striker','Sparks fly when the Titan Fire Striker is used with its stainless steel striker. This fire starter has many uses and can ignite tinder or be used to light a campfire, gas stove or gas barbeque. The robust Ferrocerium rod is capable of 20,000 strikes (at 5400 degrees F) in all conditions (at all altitudes and in cold weather). It also comes with a stainless steel striker which also is a multifunctional survival tool with 8 functions. Functions include screwdriver, bottle opener, 4 hex sizes and striker. The bright sparks from the Fire Striker can also be used as an emergency signal. Finally it\'s all held together with a Paracord lanyard connected to both pieces with a Rapid Release Connector.',
14.99,5,22,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/XYtkmAkzTsifJXVkviGb_mt-fs-titan_titan_firestriker.progressive.jpg?v=1589571428'),
('55662868','SOL Fire Lite Tinder Cord 550, 30 ft.','The Fire Lite Tinder Cord in the Utility Grade makes it the perfect multi-purpose paracord that doubles as an easy-to-use fire starter. The diameter is small enough to easily tie your gear to packs or racks, yet durable enough to take on any adventure. The nylon outer sheath provides a rugged protective layer for the ignitable waxed cotton inner core. Whether you pack it in your emergency kit or wrap it around your water bottle, the Fire Lite™ Tinder Cord is a multi-purpose life-saving tool.',
5.99,5,23,'https://cdn.shopify.com/s/files/1/0301/4023/5913/products/0141-17304.progressive.jpg?v=1618100949');

