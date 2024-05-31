import {Given,  When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que eu esteja na tela de busca do Google', () => {
	cy.visit('https://google.com.br/')
});

When('eu realizar a busca do termo {string}', (string) => {
	cy.get('#APjFqb').type(string)
	cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
});

 Then('devo receber resultados com a palavra chave {string}', (string) => {
	cy.get('#rcnt', {timeout: 10000}).should('contain', string)
});


When('eu realizar a busca do termo inexistente {string}', (string) => {
	cy.get('#APjFqb').type(string)
	cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
});

Then('devo receber o alerta {string}', (string) => {
	cy.get('.v3jTId', {timeout: 20000}).should('contain', string)
});


When('eu realizar a busca do termo com imagem', () => {
	cy.get('#APjFqb').type("guitarra")
	cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
});

Then('devo receber resultados com imagens e textos alternativos', () => {
	cy.get('.cu-container', {timeout: 20000}).should('contain', 'Guitarra')
});


When('eu realizar a busca do {string}', (string2) => {
	cy.get('#APjFqb').type(string2)
	cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
});

Then('devo receber resultados com a {string}', (string2) => {
	cy.get('#rcnt', {timeout: 10000}).should('contain', string2)
});

