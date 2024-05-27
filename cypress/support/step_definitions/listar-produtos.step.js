import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

When(`clicar em Listar Produtos`, () => {
    cy.get('[data-testid="listarProdutos"]').click()
});

Then(`deve exibir lista de produtos`, () => {
    cy.get(':nth-child(1) > :nth-child(6) > .row > .btn-info', {timeout: 10000}).should('exist')
});