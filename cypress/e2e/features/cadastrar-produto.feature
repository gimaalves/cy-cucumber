# language: pt

Funcionalidade: Cadastrar Produto
Eu, como administrador da loja online,
Quero cadastrar novos produtos no sistema,
Para que eles possam ser disponibilizados aos clientes para compra.

Contexto:
Dado que eu esteja na tela de cadastro de produtos como admin

@alto
Esquema do Cenário: Cadastro de produtos com sucesso
Quando eu inserir <nome>, <preco>, <descricao>, <quantidade>
Entao deve validar o <nome> do produto na lista

Exemplos:
| nome | preco | descricao | quantidade |
| "Produto A" | 30 | "Descricao do produto A" | 55 |
| "Produto B" | 25 | "Descricao do produto B" | 76 |


Cenário: Upload de imagem na tela de cadastro de produto
Quando fizer upload de imagem
Entao deve apresentar nome do arquivo carregado
