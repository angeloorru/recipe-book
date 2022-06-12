#!/bin/bash

export PGPASSWORD=$POSTGRES_PASSWORD;

echo '*******************************************************************************'
echo '*******************************************************************************'
echo '*******************************************************************************'
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER $APP_DB_USER WITH PASSWORD '$APP_DB_PASS';
  CREATE DATABASE $APP_DB_NAME;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
  \connect $APP_DB_NAME $APP_DB_USER
  BEGIN;
    CREATE TABLE IF NOT EXISTS recipes (
	  id SERIAL PRIMARY KEY,
	  name  CHAR(50) NOT NULL,
	  recipe JSON NOT NULL
	);
	CREATE INDEX idx_recipes_id ON recipes (id);
  COMMIT;
EOSQL
