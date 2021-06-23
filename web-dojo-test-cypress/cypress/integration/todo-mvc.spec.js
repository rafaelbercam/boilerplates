/// <reference types="Cypress" />

import todoPage from '../actions/todo-mvc.action'
import factoryPage from '../factory/todo-mvc.factory'

describe('testes e2e lista de tarefas', ()=>{
    beforeEach(()=>{
        todoPage.visit()
        todoPage.addTodo(factoryPage.createTodo())
    })

    it('validar placeholder', ()=>{
        todoPage.checkPlaceHolder('What needs to be done?')
    })

    it('validar se item da lista ta marcado', ()=>{
        todoPage.completeTodo(1)
        todoPage.checked(1)
    })

    it('validar exclusão de item lista', ()=>{
        todoPage.destroyTodo(1)
        todoPage.emptyTodoList()
    })

    it('validar texto cortado após selecionar tarefa', ()=>{
        todoPage.completeTodo(1)
        todoPage.textDecoration(1)
    })

    it('validar lista vazia', ()=>{
        todoPage.completeTodo(1)
        todoPage.clearCompleted()
        todoPage.emptyTodoList()
    })

   it('gerar lista aleatória', ()=>{
    var i;
    for (i= 0; i < 10; i++) {
        todoPage.addTodo(factoryPage.createTodo())
    }
    })

    it('validar nome da tarefa na lista', ()=>{
        todoPage.addTodo('Arrumar quarto')
        todoPage.checkLabelText(2,'Arrumar quarto')
    })

    it('validar quantidade de items restantes', ()=>{
        todoPage.addTodo('Arrumar quarto')
        todoPage.validateItemsLeft(2)
        todoPage.addTodo('Lavar louça')
        todoPage.validateItemsLeft(3)
        todoPage.addTodo('Passar as roupas')
        todoPage.validateItemsLeft(4)
        todoPage.completeTodo(1)
        todoPage.validateItemsLeft(3)
        todoPage.completeTodo(2)
        todoPage.validateItemsLeft(2)
    })
})


