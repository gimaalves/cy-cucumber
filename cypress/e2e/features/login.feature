# language: pt

Funcionalidade: Login
Eu, como usuário do sistema serverest, 
Quero me autenticar, 
Para poder visualizar recursos do site.

Contexto: 
Dado que eu esteja na tela de login do serverest

Cenário: Deve fazer login com sucesso
Quando eu inserir email e senha corretamente
Então deve direcionar para o dashboard


Cenário: Deve fazer login com sucesso usando exemplo de dados
Quando eu inserir email "Gisselle.Schowalter@hotmail.com" e senha "teste"
Entao deve direcionar para o dashboard

Cenário: Deve validar erro ao fazer login com usuário ou senha inválidos
Quando eu inserir email "sdfsdff@hotmail.com" e senha "testesfds"
Então deve exibir uma mensagem de erro

Esquema do Cenário: Deve fazer login com sucesso usando tabela
Quando eu inserir <email> e <senha>
Entao deve direcionar para o dashboard

Exemplos:
| email | senha |
| "Gisselle.Schowalter@hotmail.com" | "teste" |
| "wjqg@emailteste.com" | "teste" |
