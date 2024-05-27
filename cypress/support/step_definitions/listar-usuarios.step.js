import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`que acessei a tela home do sistema serverest como administrador`, () => {
    cy.fixture('usuario-admin').then((usuario) => {
        cy.login(usuario.email, usuario.senha)
    })
});

When(`clicar em Listar Usuários`, () => {
    cy.get('[data-testid="listarUsuarios"]').click()
});

Then(`deve exibir lista de usuários`, () => {
    cy.get('.jumbotron', {timeout: 10000}).should('contain', '@')
});