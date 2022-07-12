# Recipe Book

## Implemented endpoints
* `GET /recipes`: Lists all recipes
* `POST /recipe`: Allow to search by name or ingredient
* `POST /recipes`: Allow to add a new recipe
* `DELETE /recipe/:id`: Allow to delete a recipe

## How to run the app
Open a terminal and run the following command to spin up the API and React UI
```
make install docker
```
_Navigate to http://localhost:3000 to view the UI_

## How to run the tests
Run the following command in a separate terminal (You must have your UI and API running)
```
make test
```
** Before running e2e tests, ensure that all three containers are running (`make install docker`)

## Local dev api build tool
Webpack has been implemented for local development.
To run it, navigate to the `api` folder and once there, type: 
```
npm run webpack
```

## Run unit tests locally
### API
From a terminal window, `cd` to the `api` folder and run the following command:
```
npm run test
```
To generate test coverage, run the following command:
```
test:coverage
```
### Front end
From a terminal window, `cd` to the `ui` folder and run the following command:
```
npm run test
```

### Run whole app stack locally (no docker)
- Set `PG_HOST` from env file to `127.0.0.1`
- `cd api`
- `npm run dev`

In a new terminal window:
- `cd ui`
- `npm start`

Finally, you can run only your postgres container using docker:
- `docker compose up -d recipe-book-postgres`
