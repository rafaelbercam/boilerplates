const todo = {
    checkPlaceHolder(text){
        cy.get('.new-todo').should('have.attr','placeholder',text)
    },
    
    visit(){
        cy.visit('/')
    },
    
    addTodo(text){
        cy.get('.new-todo').type(text + '{enter}')
    },
    
    validateItemsLeft(num){
        if(num == 1){
            cy.contains(num +' item left').should('have.contain.text', num +' item left')
        }
        else{
            cy.contains(num +' items left').should('have.contain.text', num +' items left')
        }
    },
    
    clearCompleted(){
        cy.get('.clear-completed').click()
    },
    
    completeTodo(position){
        cy.get(`.todo-list li:nth-child(${position}) .toggle`).click()
    },
    
    destroyTodo(position){
        cy.get(`.todo-list li:nth-child(${position}) .destroy`).click({force: true})
    },
    
    checkLabelText(position, text){
        cy.get(`.todo-list li:nth-child(${position}) label`).should('have.text', text)
    },
    
    checked(position){
        cy.get(`.todo-list li:nth-child(${position}) .toggle`).should('be.checked')
    },
    
    textDecoration(position){
        cy.get(`.todo-list li:nth-child(${position}) label`).should('have.css', 'text-decoration-line', 'line-through')
    },
    
    emptyTodoList(){
        cy.get('.todoapp').should('not.have.descendants', 'ul')
    }
}
export default todo;
