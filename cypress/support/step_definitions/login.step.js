import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`que eu esteja na tela de login do serverest`, () => {
    cy.visit('login')
});

When(`eu inserir email e senha corretamente`, () => {
/*     cy.get('[data-testid="email"]').clear().type('Gisselle.Schowalter@hotmail.com')
    cy.get('[data-testid="senha"]').clear().type('teste')
    cy.get('[data-testid="entrar"]').click() */
    cy.login('Gisselle.Schowalter@hotmail.com', 'teste')
});

Then(`deve direcionar para o dashboard`, () => {
    cy.get('h1', {timeout: 10000}).should('contain', 'Bem Vindo')
});

When(`eu inserir email {string} e senha {string}`, (email, senha) => {
    //cy.get('[data-testid="email"]').clear().type(arg0)
    //cy.get('[data-testid="senha"]').clear().type(arg1)
    //cy.get('[data-testid="entrar"]').click()

    cy.login(email, senha)
});

Then(`deve exibir uma mensagem de erro`, () => {
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
});


When(`eu inserir {string} e {string}`, (email, senha) => {
    //y.get('[data-testid="email"]').clear().type(arg0)
    //cy.get('[data-testid="senha"]').clear().type(arg1)
    //cy.get('[data-testid="entrar"]').click()
    cy.login(email, senha)
});