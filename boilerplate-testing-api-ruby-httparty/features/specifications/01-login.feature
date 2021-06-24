#language: pt
@login
Funcionalidade: Autenticação API

Cenário: Efetuando login com sucesso
    Quando realizar a requisição para logar na API
    Então o sistema retorna o código 200
    E o token da url é gerado criando a sessão

Cenário: Efetuando logout
    Quando realizar a requisição para fazer logout na API
    Então o sistema retorna o código 204