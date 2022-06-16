describe("Recipe tests", () => {
  it(`Given I have a new recipe
      When I add the new recipe name
      And ingredients
      And measurements
      And cooking method
      Then the new recipe is saved for later`, () => {
    cy.visit('http:localhost:3000');
    cy.get('.tab-2').click();
    cy.url().should('include', '/home')
    cy.get('#standard-basic').type('TestNewRecipe').should('have.value', 'TestNewRecipe');
    cy.get('.add-button').click();
    cy.get('.tab-3').click();

    const cardContent = cy.get('.TestNewRecipe').get('.MuiCardHeader-content').last();
    cardContent.should('have.text', 'TestNewRecipe');

    cy.get('.expand-card').last().click();
  });

  it(`Given I want to look for a recipe
      When I search by the name of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
    cy.get('.tab-1').click();
    cy.get('#standard-basic').type('TestNewRecipe').should('have.value', 'TestNewRecipe');
    cy.get('.search-button').click();

    //Check that a result is returned
    const cardContent = cy.get('.TestNewRecipe').get('.MuiCardHeader-content').last();
    cardContent.should('have.text', 'TestNewRecipe');

    //View ingredients
    cy.get('[data-testid=ExpandMoreIcon]').first().click();
    cy.get('.MuiTypography-h6').first().should('have.text', 'Ingredients:');
    //Remove the card - All done
    //cy.get('.delete-icon').click();
  });

  it(`Given I want to look for a recipe by ingredients
      When I search by the ingredient of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
    cy.get('.tab-1').click();
    cy.get('#standard-basic').clear();
    cy.get('#standard-basic').type('gravy').should('have.value', 'gravy');
    cy.get('.search-button').click();

    //Check that a result is returned
    const cardContent = cy.get('.TestNewRecipe').get('.MuiCardHeader-content').last();
    cardContent.should('have.text', 'TestNewRecipe');

    //View ingredients
    cy.get('[data-testid=ExpandMoreIcon]').first().click();
    cy.get('.MuiTypography-h6').first().should('have.text', 'Ingredients:');
  });

  it(`Given I delete a recipe
      When I search by the name of the recipe
      Then I do not find the recipe`, () => {
    cy.get('.tab-1').click();
    //Clear the txt field
    cy.get('#standard-basic').clear();
    cy.get('#standard-basic').should('have.value', '');

    //Search for it again
    cy.get('#standard-basic').type('TestNewRecipe').should('have.value', 'TestNewRecipe');
    cy.get('.search-button').click();
    cy.get('.TestNewRecipe').get('.MuiCardHeader-content').last().should('have.text', 'TestNewRecipe');
    //Click the delete icon
    cy.get('.delete-icon').last().click();
    //Search for the recipe again
    //Verify its deletion
    cy.get('#standard-basic').type('TestNewRecipe');
    cy.get('.search-button').click();
    cy.get('.TestNewRecipe').should('not.exist');
  });
});
