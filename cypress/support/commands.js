// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, senha) => { 
    cy.visit('login')
    cy.get('[data-testid="email"]').clear().type(email, {log: false})
    cy.get('[data-testid="senha"]').clear().type(senha, {log: false})
    cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('cadastrarProduto', (nome, preco, descricao, quantidade) => { 
    cy.get('[data-testid="nome"]').clear().type(nome)
    cy.get('[data-testid="preco"]').clear().type(preco)
    cy.get('[data-testid="descricao"]').clear().type(descricao)
    cy.get('[data-testid="quantity"]').clear().type(quantidade)
    cy.get('[data-testid="cadastarProdutos"]').click()
})