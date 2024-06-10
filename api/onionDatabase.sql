DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS tags;

CREATE TABLE recipes(
    id  SERIAL PRIMARY KEY NOT NULL,
    recipe TEXT NOT NULL,
    rating int NOT NULL,
    url TEXT NOT NULL,
    tags INT[] 
);

CREATE TABLE tags(
    id SERIAL PRIMARY KEY NOT NULL,
    tag TEXT NOT NULL
);

INSERT INTO recipes(recipe, rating, url, tags) VALUES
('CHEESE', 5, 'test :d', (array[1,2,3,4,5]));

INSERT INTO tags(tag) VALUES
('breakfast'),
('lunch'),
('dinner'),
('dessert'),
('vegan'),
('vegetarian'), 
('gluten free'),
('sugar free'),
('natural sugar'),
('quick and easy'),
('baking'),
('frying')


