#language: pt
@tarefas @login
Funcionalidade: Manter dados de Tarefas

Contexto: Login API
    Dado que o cliente esteja logado na API

Cenário: Criar uma tarefa
    Quando realizar a requisição para cadastrar uma nova tarefa
    Então o sistema retorna o código 201
    E o corpo da resposta da tarefa
    E ao final o cliente irá deslogar da API

Cenário: Listar Tarefa por id
    Quando realizar a requisição para consultar tarefas
    Então o sistema retorna o código 200
    E o corpo da resposta da tarefa
    E ao final o cliente irá deslogar da API