import { expect } from 'chai';
import { AuthService } from '../../exports/serviceExports';
import { LoginCredentials } from '../../exports/requestsExports';
import { loginCredentialsJson } from '../../exports/jsonExports'
import { LoginResponse } from '../../exports/responseExports';

describe('Login', () => {
    let authService: AuthService;

    before(() => {
        authService = new AuthService();
    });

    it('should login successfully', async () => {
        const environment = process.env.ENV;

        const requestData: LoginCredentials = {
            email: loginCredentialsJson.validCredentials[environment].email,
            password: loginCredentialsJson.validCredentials[environment].password
        };

        const response: LoginResponse = await authService.login(requestData);

        expect(response, 'Response should not be null').to.be.not.null;
        expect(response.status).to.equal(200, "The status code does not match");
        expect(response.data.session).to.have.property('access_token').that.is.a('string', "The session type is not of string");
        expect(response.data.user.email.toString()).to.equal(requestData.email, "The response email does not match");
    });
});
