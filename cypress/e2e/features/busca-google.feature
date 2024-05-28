Feature: Busca de produtos no Google
Como pesquisador de conteúdo
Quero realizar uma busca no google
Para ter resultados relevantes com o meu interesse

Scenario: Busca no google com sucesso
Given que eu esteja na tela de busca do Google
When eu realizar a busca do termo "Qualidade de software"
Then devo receber resultados com a palavra chave "Qualidade de software"

Scenario: Busca no google com termo não encontrado
Given que eu esteja na tela de busca do Google
When eu realizar a busca do termo inexistente "125356jljkjllj" 
Then devo receber o alerta "Sua pesquisa não encontrou nenhum documento correspondente"

Scenario: Resultados da busca com com texto alternativo das imagens
Given que eu esteja na tela de busca do Google
When eu realizar a busca do termo com imagem
Then devo receber resultados com imagens e textos alternativos

Scenario Outline: Busca no google em massa
Given que eu esteja na tela de busca do Google
When eu realizar a busca do <termo> 
Then devo receber resultados com a <palavra-chave>

Examples: 
|termo| palavra-chave   |
|"bdd"| "Behavior Driven Development"           |
|"desenvolvimento"| "desenvolvimento" |
|"agile"| "agile"       |






