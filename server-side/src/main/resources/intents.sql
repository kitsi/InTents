use intents;

-- insert into categories(title) values
-- ('cookeware'), ('tents'), ('sleeping-bags'), ('fans'), ('emergency');

-- insert into products(sku, title, description, price, category) values
-- ('45687542', '''Blackstone 22'' Tabletop Griddle with Cover', 'hfghfgh', 149.99, 1);

-- update products set image =
-- 'https://www.campingworld.com/dw/image/v2/BCJK_PRD/on/demandware.static/-/Sites-global-master-catalog/default/dw32700d0f/images/large/655035_1.jpg?sw=800&sh=800'
-- where product_id = 1;

-- insert into inventory(product_id, quantity) values
-- (1, 10);

-- update products set inventory = 1 where product_id = 1; 

-- ============================================
CREATE PROCEDURE CreateProduct(
    skuu VARCHAR(255), 
    ttl VARCHAR(255),
    descr VARCHAR(255),
    prce DECIMAL(10,2) UNSIGNED,
    cat_id BIGINT
)
BEGIN
    DECLARE prod_id BIGINT DEFAULT 0;
    
    START TRANSACTION;
    -- Insert product data
    INSERT INTO products(skuu, title, description, price, category_id)
    VALUES(skuu, ttl, descr, prce, cat_id);
    
    -- get product id
    SET prod_id = LAST_INSERT_ID();
    
    -- insert inventory for the product
    IF prod_id > 0 THEN
	INSERT INTO inventory(product_id, quantity)
        VALUES(l_account_id,phone,description);
        -- commit
        COMMIT;
     ELSE
	ROLLBACK;
    END IF;
END$$

DELIMITER ;


-- ============================================

-- drop table order_products;
-- drop table billing;
-- drop table inventory;
-- drop table orders;
-- drop table products;
-- drop table users;

-- alter table products drop column inventory_id;

-- ALTER TABLE order_products DROP FOREIGN KEY FKq2yge7ebtfuvwufr6lwfwqy9l;

-- desc products;



-- show tables;

-- desc categories;
-- desc users;
-- desc orders;
desc products;
-- desc order_products;
-- desc billing;
-- desc inventory;


-- drop database intents;

-- insert into products(product_title) values
-- 	('tent'),
--     ('stove');

-- select * from orders;
-- select * from categories;
-- select * from products;
-- select * from inventory;
