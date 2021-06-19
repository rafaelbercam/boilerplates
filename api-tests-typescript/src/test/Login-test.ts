import { expect } from "chai";
import loginFactory from "../factory/Login-Factory";
import { postLogin } from "../services/Login-Service";

require ('dotenv').config({ path: '../../.env' })

let response: any;

describe('Login test request', async ()=>{
    it('Login Success', async ()=>{
        
        response = await postLogin(loginFactory.loginSuccess);
        expect(response.statusCode).to.eq(200);
        expect(response.body.message).to.eq('Login realizado com sucesso');
        
    })

    it('Login test Fail - wrong credentials', async () => {
        response = await postLogin(loginFactory.loginFail);
        expect(response.statusCode).to.eq(401);
        expect(response.body.message).to.eq('Email e/ou senha inválidos');
    })

    it('Login test Fail - email required', async () => {
        response = await postLogin(loginFactory.loginEmailRequired);
        expect(response.statusCode).to.eq(400);
        expect(response.body.email).to.eq('email não pode ficar em branco');
    })
})