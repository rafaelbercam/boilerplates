"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = void 0;
require('dotenv').config({ path: '../../.env' });
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
async function postLogin(credentials) {
    return await chai
        .request(`${process.env.DEV}`)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
        email: credentials.email,
        password: credentials.password
    });
}
exports.postLogin = postLogin;
