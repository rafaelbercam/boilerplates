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
});
