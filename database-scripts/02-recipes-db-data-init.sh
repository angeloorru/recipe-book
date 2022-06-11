#!/bin/bash

export PGPASSWORD=$POSTGRES_PASSWORD;

echo '*******************************************************************************'
echo '*******************************************************************************'
echo '*******************************************************************************'
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
 \connect $APP_DB_NAME $APP_DB_USER
  BEGIN;
	INSERT INTO recipes(recipe)
  VALUES ('{
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
            "imageURL": "http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg"
          }');
  COMMIT;
EOSQL