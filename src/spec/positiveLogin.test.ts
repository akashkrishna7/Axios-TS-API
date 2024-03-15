import { expect } from 'chai';
import { AuthService } from '../service/AuthService';

describe('Login', () => {
    let authService: AuthService;

    before(() => {
        authService = new AuthService();
    });

    it('should login successfully', async () => {
        const email = 'abc@abc.com';
        const password = 'abcabc';

        const response = await authService.login(email, password);
        
        expect(response).to.exist;
        expect(response.data.session).to.have.property('access_token').that.is.a('string');
    });
});
