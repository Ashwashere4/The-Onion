DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS tags;

CREATE TABLE recipes(
    id  SERIAL PRIMARY KEY NOT NULL,
    recipe TEXT NOT NULL,
    rating int,
    url TEXT NOT NULL,
    tags INT[] 
);

CREATE TABLE tags(
    id SERIAL PRIMARY KEY NOT NULL,
    tag TEXT NOT NULL
);

INSERT INTO recipes(recipe, url, tags) VALUES
('Grandma''s Chicken Casserole', 
'https://www.justtherecipe.com/?url=https://www.bettycrocker.com/recipes/grandmas-chicken-casserole/697d271e-3fc2-4357-a678-f97bfa43972a', 
(array[3, 11])
),
('MF Doom''s Villaionous Mac and Cheeze', 
'https://www.justtherecipe.com/?url=https://hiphophero.com/revisit-mf-dooms-villainous-mac-and-cheese-recipe/',
(array[3,11])
), 
('Instant Pot Pulled Pork',
'https://www.justtherecipe.com/?url=https://www.wellplated.com/instant-pot-pulled-pork/',
(array[3, 13])
),
('Instant Pot Chicken and Dumplings',
'https://youtu.be/oDw-9P1vphE',
(array[3,13])
),
('Baked Ziti',
'https://www.justtherecipe.com/?url=https://www.simplyrecipes.com/recipes/baked_ziti/',
(array[3,11])
),
('The Best Chocolate Chip Cookie Recipe Ever',
'https://justtherecipe.com/?url=https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/',
(array[4,11])
),
('The Ultimate Potato Soup Recipe', 
'https://www.justtherecipe.com/?url=https://sugarspunrun.com/creamy-potato-soup-recipe/',
(array[3, 14, 10])
),
('Beefcake',
'https://youtu.be/I4te3rdRAMk',
(array[3, 10, 11])
),
('Basic Bread',
'https://youtu.be/OI2-6Ps2Hcc?si=ndsqsd1pGqrnLWzu',
(array[2, 10, 11])
),
('Steamed Sea Bream with Doubanjiang', 
'https://www.tiger-corporation.com/en/usa/feature/recipe/rice-cooker/steamed-sea-bream-with-doubanjiang-chili-bean-sauce/',
(array[3, 15])
);

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
('frying'),
('instant pot'),
('soup'),
('rice cooker')


