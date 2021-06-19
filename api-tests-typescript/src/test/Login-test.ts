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
})