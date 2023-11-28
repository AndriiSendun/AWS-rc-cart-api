DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'cart_status_enum') THEN
    CREATE TYPE cart_status_enum AS ENUM('OPEN', 'ORDERED');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS carts (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    status cart_status_enum NOT NULL
);

CREATE TABLE IF NOT EXISTS cart_items (
    cart_id UUID,
    product_id UUID,
    count INT,
    PRIMARY KEY (cart_id, product_id),
    FOREIGN KEY (cart_id) REFERENCES carts(id)
);

INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES
    ('40e6215d-b5c6-4896-987c-f30f3678f608', '40e6215d-b5c6-4896-987c-f30f3678f609', '2023-01-01', '2023-01-01', 'OPEN'),
    ('6ecd8c99-4036-403d-bf84-cf8400f67836', '40e6215d-b5c6-4896-987c-f30f3678f610', '2023-01-02', '2023-01-02', 'ORDERED');

INSERT INTO cart_items (cart_id, product_id, count) VALUES
    ('40e6215d-b5c6-4896-987c-f30f3678f608', '40e6215d-b5c6-4896-987c-f30f3678f611', 3),
    ('40e6215d-b5c6-4896-987c-f30f3678f608', '40e6215d-b5c6-4896-987c-f30f3678f612', 1),
    ('6ecd8c99-4036-403d-bf84-cf8400f67836', '40e6215d-b5c6-4896-987c-f30f3678f613', 2);