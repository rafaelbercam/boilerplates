"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Login_Factory_1 = require("../factory/Login-Factory");
const Login_Service_1 = require("../services/Login-Service");
require('dotenv').config({ path: '../../.env' });
let response;
describe('Login test request', async () => {
    it('Login Success', async () => {
        response = await Login_Service_1.postLogin(Login_Factory_1.default.loginSuccess);
        chai_1.expect(response.statusCode).to.eq(200);
        chai_1.expect(response.body.message).to.eq('Login realizado com sucesso');
    });
    it('Login test Fail - wrong credentials', async () => {
        response = await Login_Service_1.postLogin(Login_Factory_1.default.loginFail);
        chai_1.expect(response.statusCode).to.eq(401);
        chai_1.expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
    it('Login test Fail - email required', async () => {
        response = await Login_Service_1.postLogin(Login_Factory_1.default.loginEmailRequired);
        chai_1.expect(response.statusCode).to.eq(400);
        chai_1.expect(response.body.email).to.eq('email não pode ficar em branco');
    });
});
