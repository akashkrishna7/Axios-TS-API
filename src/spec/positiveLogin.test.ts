import { expect } from 'chai';
import { AuthService } from '../service/AuthService';
import { LoginCredentials } from '../exports/requestsExports';
import { loginCredentialsJson } from '../exports/jsonExports'
import { LoginResponse } from '../exports/responseExports';

describe('Login', () => {
    let authService: AuthService;

    before(() => {
        authService = new AuthService();
    });

    it('should login successfully', async () => {
        //  Get the environment from the command line argument or default to 'dev'
        const environment = process.env.ENV;

        console.log(environment);

        const requestData: LoginCredentials = {
            email: loginCredentialsJson.validCredentials[environment].username,
            password: loginCredentialsJson.validCredentials[environment].password
        };

        console.log(requestData);

        const response: LoginResponse = await authService.login(requestData);
        expect(response).to.exist;
        expect(response.data.session).to.have.property('access_token').that.is.a('string');
    });
});
