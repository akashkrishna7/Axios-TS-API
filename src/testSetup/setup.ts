// setup.ts
// require('ts-node/register');

import { AuthService } from '../service/AuthService';
import { LoginCredentials } from '../exports/requestsExports';
import { loginCredentialsJson } from '../exports/jsonExports';
import { LoginResponse } from '../exports/responseExports';

let accessToken: string;

before(async () => {
    console.log("SETUP STARTED");
    
    const authService = new AuthService();
    const environment = process.env.ENV;

    const requestData: LoginCredentials = {
        email: loginCredentialsJson.validCredentials[environment].email,
        password: loginCredentialsJson.validCredentials[environment].password
    };

    const response: LoginResponse = await authService.login(requestData);
    accessToken = response.data.session.access_token;
});

export function getAccessToken(): string {
    return accessToken;
}

