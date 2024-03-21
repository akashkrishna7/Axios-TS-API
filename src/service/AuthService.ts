import axios from 'axios';
import { BaseService } from '../exports/serviceExports';
import { LoginCredentials } from '../exports/requestsExports'
import { LoginResponse } from '../exports/responseExports';
export class AuthService extends BaseService{
    async login(requestData: LoginCredentials): Promise<any> {
        
        const url : string = `${this.getBaseUrl()}/api/auth/login`;

        try {
            const response = await axios.post(url, requestData);
            
            const loginResponse: LoginResponse = response.data;

            loginResponse.status = response.status;
            loginResponse.statusText = response.statusText;

            return loginResponse;
        } catch (error) {
            throw error;
        }
    }
}