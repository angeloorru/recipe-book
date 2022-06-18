# Recipe app

## End point implemented
`GET /recipes`: Lists all recipes
`POST /recipe`: Allow to search by name or ingredient
`POST /recipes`: Allow to add a new recipe
`DELETE /recipe/:id`: Allow to delete a recipe

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

## Build an app for a chef to store their favorite recipes.
Ideal tech stack:
- Typescript
- React
- Cypress
- Docker

## Non-functional requirements
- Run the whole stack with `make install docker`
- Data is persisted when database is stopped and started
- End to end tests demonstrate acceptance criteria has been implemented


## Saving favorite recipes
### User story 1
As a chef
I want to save my favorite recipes\
So that I can cook them another time

### Acceptance criteria 1
Given I have a new recipe\
When I add the new recipe name\
And ingredients\
And measurements\
And cooking method\
Then the new recipe is saved for later
 
## Searching favorite recipes by name
### User story 2
As a chef\
I want to search for my favorite recipe\
So that I can cook it

### Acceptance criteria 2
Given I want to look for a recipe\
When I search by the name of the recipe\
Then I find the recipe\
And I can see the ingredients\
And I can see the cooking methods
 
## Searching favorite recipes by ingredients (Optional)
### User story 3
As a chef\
I want to search for my favorite recipe by ingredient\
So that I can cook it

### Acceptance criteria 3
Given I want to look for a recipe by ingredients\
When I search by the ingredient of the recipe\
Then I find the recipe\
And I can see the ingredients\
And I can see the cooking methods

## Bonus points (Optional)
1. Continuous integration
2. App deployment
