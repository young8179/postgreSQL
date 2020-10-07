CREATE table restaurants (
    id serial primary key,
    name varchar(50) not null,
    distance integer,
    stars integer,
    category text,
    favorit_dish text,
    takeout boolean,
    latest_ate timestamp 
)