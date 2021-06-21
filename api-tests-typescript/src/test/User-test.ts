import { expect } from "chai";
import UserFactory from "../factory/User-factory";
import { getUserById, getUsers, postUser } from "../services/Users-service";

let response: any;
let _id: string;

describe('User test request', async ()=>{
    it('get users', async () => {
        response = await getUsers();
        _id = response.body.usuarios[0]._id
        expect(response.statusCode).to.eq(200);
        expect(response.body.quantidade).greaterThanOrEqual(0);
    })

    it('get users by Id', async () => {
        response = await getUserById(_id);
        expect(response.statusCode).to.eq(200);
        expect(_id).to.eq(response.body._id)
    })

    it('post new user', async () => {
        response = await postUser(UserFactory.createUser());
        expect(response.statusCode).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })
    
})