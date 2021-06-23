const faker = require('faker')

const factory = {
    createTodo(){
        return faker.random.arrayElement([
            "Arrumar quarto",
            "Lavar louça",
            "Passar roupas",
            "Dar banho nos cachorros",
            "Limpar banheiro",
            "Fazer almoço"
        ])
    }
}

export default factory;