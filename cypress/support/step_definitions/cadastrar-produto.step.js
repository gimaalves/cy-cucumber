import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(`que eu esteja na tela de cadastro de produtos como admin`, () => {
    cy.fixture('usuario-admin').then((usuario) => {
        cy.login(usuario.email, usuario.senha)
        cy.get('h1', {timeout: 10000}).should('contain', 'Bem Vindo')
    })
    cy.visit('admin/cadastrarprodutos')
});

When(`eu inserir {string}, {int}, {string}, {int}`, (nome, preco, descricao, quantidade) => {
    let nomeProduto = `${nome}-${Date.now()}`
    cy.cadastrarProduto(nomeProduto, preco, descricao, quantidade)
});

Then(`deve validar o {string} do produto na lista`, (nome) => {
    cy.get('.jumbotron', {timeout: 10000}).should('contain', nome)
});

When(`fizer upload de imagem`, () => {
    cy.get('[data-testid="imagem"]').selectFile('cadastroProduto.jpg');
});

Then(`deve apresentar nome do arquivo carregado`, () => {
    cy.get('[data-testid="imagem"]', {timeout: 10000}).should('contain.value', 'cadastroProduto.jpg')
});