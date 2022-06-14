#!/bin/bash

export PGPASSWORD=$POSTGRES_PASSWORD;

echo '*******************************************************************************'
echo '*******************************************************************************'
echo '*******************************************************************************'
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
 \connect $APP_DB_NAME $APP_DB_USER
  BEGIN;
	INSERT INTO recipes(name, recipe)
  VALUES ('Curried Lentils and Rice', '{
             "name": "Curried Lentils and Rice",
             "ingredients": [
               {
                 "quantity": "1 quart",
                 "name": "Beef broth",
                 "type": "Misc"
               },
               {
                 "quantity": "1 cup",
                 "name": "Dried green lentils",
                 "type": "Misc"
               },
               {
                 "quantity": "1/2 cup",
                 "name": "Basmati rice",
                 "type": "Misc"
               },
               {
                 "quantity": "1 tsp",
                 "name": "Curry powder",
                 "type": "Condiments"
               },
               {
                 "quantity": "1 tsp",
                 "name": "Salt",
                 "type": "Condiments"
               }
             ],
             "steps": [
               "Bring broth to a low boil.",
               "Add curry powder and salt.",
               "Cook lentils for 20 minutes.",
               "Add rice and simmer for 20 minutes.",
               "Enjoy!"
             ],
             "timers": [
               0,
               0,
               20,
               20,
               0
             ],
             "imageURL": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.simplystacie.net%2Fwp-content%2Fuploads%2F2016%2F03%2Flentil-rice-1-1-680x1020.jpg&f=1&nofb=1"
             }'),
             ('Roasted Asparagus','{
               "name": "Roasted Asparagus",
               "ingredients": [
                 {
                   "quantity": "1 lb",
                   "name": " asparagus",
                   "type": "Produce"
                 },
                 {
                   "quantity": "1 1/2 tbsp",
                   "name": "olive oil",
                   "type": "Condiments"
                 },
                 {
                   "quantity": "1/2 tsp",
                   "name": "kosher salt",
                   "type": "Baking"
                 }
               ],
               "steps": [
                 "Preheat oven to 425°F.",
                 "Cut off the woody bottom part of the asparagus spears and discard.",
                 "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).",
                 "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
                 "Sprinkle with salt.",
                 "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
                 "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
                 "They should be tender when pierced with the tip of a knife.",
                 "The tips of the spears will get very brown but watch them to prevent burning.",
                 "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."
               ],
               "timers": [
                 0,
                 0,
                 0,
                 0,
                 0,
                 0,
                 10,
                 0,
                 0,
                 0
               ],
               "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
               "originalURL": "http://www.food.com/recipe/roasted-asparagus-50847"
             }'),
             ('Big Night Pizza','{
               "name": "Big Night Pizza",
               "ingredients": [
                 {
                   "quantity": "5 teaspoons",
                   "name": "yeast",
                   "type": "Baking"
                 },
                 {
                   "quantity": "5 cups",
                   "name": "flour",
                   "type": "Baking"
                 },
                 {
                   "quantity": "4 tablespoons",
                   "name": "vegetable oil",
                   "type": "Baking"
                 },
                 {
                   "quantity": "2 tablespoons",
                   "name": "sugar",
                   "type": "Baking"
                 },
                 {
                   "quantity": "2 teaspoons",
                   "name": "salt",
                   "type": "Baking"
                 },
                 {
                   "quantity": "2 cups",
                   "name": "hot water",
                   "type": "Misc"
                 },
                 {
                   "quantity": "1/4 cup",
                   "name": "pizza sauce",
                   "type": "Misc"
                 },
                 {
                   "quantity": "3/4 cup",
                   "name": "mozzarella cheese",
                   "type": "Dairy"
                 }
               ],
               "steps": [
                 "Add hot water to yeast in a large bowl and let sit for 15 minutes.",
                 "Mix in oil, sugar, salt, and flour and let sit for 1 hour.",
                 "Knead the dough and spread onto a pan.",
                 "Spread pizza sauce and sprinkle cheese.",
                 "Add any optional toppings as you wish.",
                 "Bake at 400 deg Fahrenheit for 15 minutes.",
                 "Enjoy!"
               ],
               "timers": [
                 15,
                 60,
                 0,
                 0,
                 0,
                 15,
                 0
               ],
               "imageURL": "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg"
             }'),
             ('Mics Yorkshire Puds','{
               "name": "Mics Yorkshire Puds",
               "ingredients": [
                 {
                   "quantity": "200g",
                   "name": "plain flour",
                   "type": "Baking"
                 },
                 {
                   "quantity": "3",
                   "name": "eggs",
                   "type": "Dairy"
                 },
                 {
                   "quantity": "300ml",
                   "name": "milk",
                   "type": "Dairy"
                 },
                 {
                   "quantity": "3 tbsp",
                   "name": "vegetable oil",
                   "type": "Condiments"
                 }
               ],
               "steps": [
                 "Put the flour and some seasoning into a large bowl.",
                 "Stir in eggs, one at a time.",
                 "Whisk in milk until you have a smooth batter.",
                 "Chill in the fridge for at least 30 minutes.",
                 "Heat oven to 220C/gas mark 7.",
                 "Pour the oil into the holes of a 8-hole muffin tin.",
                 "Heat tin in the oven for 5 minutes.",
                 "Ladle the batter mix into the tin.",
                 "Bake for 30 minutes until well browned and risen."
               ],
               "timers": [
                 0,
                 0,
                 0,
                 30,
                 0,
                 0,
                 5,
                 0,
                 30
               ],
               "imageURL": "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg",
               "originalURL": "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg"
             }'),
             ('Curried chicken salad','{
               "name": "Curried chicken salad",
               "ingredients": [
                 {
                   "quantity": "3",
                   "name": "skinless, boneless chicken breasts, halved lengthwise",
                   "type": "Meat"
                 },
                 {
                   "quantity": "1/2 cup",
                   "name": "mayonnaise",
                   "type": "Baking"
                 },
                 {
                   "quantity": "1 tbsp",
                   "name": "lemon zest",
                   "type": "Produce"
                 },
                 {
                   "quantity": "1 tbsp ",
                   "name": "lemon juice",
                   "type": "Produce"
                 },
                 {
                   "quantity": "1 1/2 tsp",
                   "name": "curry powder",
                   "type": "Baking"
                 },
                 {
                   "quantity": "1/4 tsp",
                   "name": "salt",
                   "type": "Baking"
                 },
                 {
                   "quantity": "2",
                   "name": "ripe mangoes, diced",
                   "type": "Produce"
                 },
                 {
                   "quantity": "1/4 cup",
                   "name": "dried cranberries",
                   "type": "Produce"
                 },
                 {
                   "quantity": "2",
                   "name": "green onions, thinly sliced",
                   "type": "Produce"
                 },
                 {
                   "quantity": "1",
                   "name": "celery stalk, finely chopped",
                   "type": "Produce"
                 },
                 {
                   "quantity": "6 leaves",
                   "name": "Boston lettuce",
                   "type": "Produce"
                 },
                 {
                   "quantity": "6",
                   "name": "English muffins, toasted",
                   "type": "Misc"
                 }
               ],
               "steps": [
                 "ARRANGE chicken in a single layer in a large pot.",
                 "Add water to just cover.",
                 "Bring to a boil over medium-high.",
                 "Flip chicken, reduce heat to medium and simmer until cooked, about 6 more min.",
                 "Cool.",
                 "STIR mayo with lemon zest, juice, curry and salt in large bowl.",
                 "Using 2 forks, shred chicken, then stir into mayo mixture with mango, cranberries, green onions and celery.",
                 "Divide among muffins with lettuce leaves",
                 "Sandwich with tops"
               ],
               "timers": [
                 0,
                 0,
                 0,
                 6,
                 0,
                 0,
                 0,
                 0,
                 0
               ],
               "imageURL": "http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg",
               "originalURL": "http://www.chatelaine.com/recipe/stovetop-cooking-method/curried-chicken-salad/"
             }');
  COMMIT;
EOSQL
