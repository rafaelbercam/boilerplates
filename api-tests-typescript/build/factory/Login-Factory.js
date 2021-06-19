"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginFactory = {
    loginSuccess: {
        "email": "fulano@qa.com",
        "password": "teste"
    },
    loginFail: {
        "email": "fulano@qa.com",
        "password": "test"
    },
    loginEmailRequired: {
        "email": "",
        "password": "test"
    }
};
exports.default = loginFactory;
