"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Login_factory_1 = require("../factory/Login-factory");
const User_factory_1 = require("../factory/User-factory");
const Login_service_1 = require("../services/Login-service");
const Users_service_1 = require("../services/Users-service");
require('dotenv').config({ path: '../../.env' });
let response;
let user;
describe('Login test request', async () => {
    before(async () => {
        user = User_factory_1.default.createUser();
        await Users_service_1.postUser(user);
    });
    it('Login Success', async () => {
        response = await Login_service_1.postLogin(user);
        chai_1.expect(response.statusCode).to.eq(200);
        chai_1.expect(response.body.message).to.eq('Login realizado com sucesso');
    });
    it('Login test Fail - wrong credentials', async () => {
        response = await Login_service_1.postLogin(Login_factory_1.default.loginFail);
        chai_1.expect(response.statusCode).to.eq(401);
        chai_1.expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
    it('Login test Fail - email required', async () => {
        response = await Login_service_1.postLogin(Login_factory_1.default.loginEmailRequired);
        chai_1.expect(response.statusCode).to.eq(400);
        chai_1.expect(response.body.email).to.eq('email não pode ficar em branco');
    });
});
