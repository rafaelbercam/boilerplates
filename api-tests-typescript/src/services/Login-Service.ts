require ('dotenv').config({ path: '../../.env' })

import chai = require('chai');
import chaiHttp = require('chai-http');
chai.use(chaiHttp);

export async function postLogin(credentials: any) {
    return await chai
        .request(`${process.env.DEV}`)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            email: credentials.email,
            password: credentials.password
        })
}