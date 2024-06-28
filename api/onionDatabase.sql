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
(array[3, 11, 10])
),
('MF Doom''s Villainous Mac and Cheese', 
'https://www.justtherecipe.com/?url=https://hiphophero.com/revisit-mf-dooms-villainous-mac-and-cheese-recipe/',
(array[3, 11, 10])
), 
('Instant Pot Pulled Pork',
'https://www.justtherecipe.com/?url=https://www.wellplated.com/instant-pot-pulled-pork/',
(array[3, 13])
),
('Instant Pot Chicken and Dumplings',
'https://youtu.be/oDw-9P1vphE',
(array[3, 13])
),
('Baked Ziti',
'https://www.justtherecipe.com/?url=https://www.simplyrecipes.com/recipes/baked_ziti/',
(array[3, 11, 10])
),
('The Best Chocolate Chip Cookie Recipe Ever',
'https://justtherecipe.com/?url=https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/',
(array[4, 11])
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
(array[11])
),
('Steamed Sea Bream with Doubanjiang', 
'https://www.tiger-corporation.com/en/usa/feature/recipe/rice-cooker/steamed-sea-bream-with-doubanjiang-chili-bean-sauce/',
(array[3, 15])
),
('The Perfect Pound Cake Recipe', 'https://www.justtherecipe.com/?url=https://sugarspunrun.com/best-pound-cake-recipe/', 
(array[4, 11])
),
('Slutty Brownies', 'https://www.justtherecipe.com/?url=https://whatsgabycooking.com/slutty-brownies/', 
(array[4,11])),

('Butterscotch Gingerbread Cookie', 'https://www.foodnetwork.com/recipes/butterscotch-gingerbread-cookies-3362612', 
(array[4,11,10])),

('Easy Garlic Cheese Pasta', 'https://www.justtherecipe.com/?url=https://simply-delicious-food.com/easy-garlic-cheese-pasta/', 
(array[2,3,6,10])),

('Chicken Francese', 'https://docs.google.com/document/d/e/2PACX-1vSv1UTQdN3-BWuoLVgPMatiW4OPq_G848F2fe9FZdyxGkmY_QMszK-zVuWUoSD1-mg2CBvcLFFG2Y_G/pub',
(array[2,3,10])),

('New England Clam Chowder', 'https://www.justtherecipe.com/?url=https://frannielovesfood.com/soup-series/new-england-clam-chowder/', 
(array[3,14])),

('Smoke ''Em fi you''ve got ''em', 'https://whiskyadvocate.com/A-Whiskey-Lovers-Guide-To-Ancho-Reyes-Liqueur', 
(array[16, 19 ])),

('Sassy Summer Sidecar', 'https://whiskyadvocate.com/A-Whiskey-Lovers-Guide-To-Ancho-Reyes-Liqueur', 
(array[16, 19, 17])),

('FiReD uP Old Fashioned', 'https://whiskyadvocate.com/A-Whiskey-Lovers-Guide-To-Ancho-Reyes-Liqueur', 
(array[16, 19])),

('Embers', 'https://whiskyadvocate.com/A-Whiskey-Lovers-Guide-To-Ancho-Reyes-Liqueur', 
(array[16,  19]));



INSERT INTO tags(tag) VALUES
('breakfast'), -- 1
('lunch'), --2
('dinner'), --3
('dessert'), --4
('vegan'), --5
('vegetarian'), --6 
('gluten free'), --7
('sugar free'), --8
('natural sugar'), --9
('quick and easy'), --10
('baking'), --11
('frying'), --12
('instant pot'), --13
('soup'), --14
('rice cooker'), --15
('Cocktails'),  --16
('Sweet'), --17
('Spicy'), -- 18
('Whisky') -- 19


