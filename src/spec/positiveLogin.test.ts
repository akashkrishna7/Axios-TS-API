import { expect } from 'chai';
import { AuthService } from '../service/AuthService';
import { LoginCredentials } from '../models/request/LoginCredentials';
import { loginCredentialsJson } from '../exports/jsonExports'

describe('Login', () => {
    let authService: AuthService;

    before(() => {
        authService = new AuthService();
    });

    it('should login successfully', async () => {

        const requestData : LoginCredentials = {
            email: loginCredentialsJson.dev.username,
            password: loginCredentialsJson.dev.password
          };

        const response = await authService.login(requestData);
        
        expect(response).to.exist;
        expect(response.data.session).to.have.property('access_token').that.is.a('string');
    });
});
