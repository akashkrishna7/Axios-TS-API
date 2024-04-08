import axios from 'axios';
import { BaseService } from '../exports/serviceExports';
import { LoginCredentials } from '../exports/requestsExports'
import { LoginResponse } from '../exports/responseExports';
import { LOGIN_ENDPOINT } from '../apiEndpoints';
export class AuthService extends BaseService{
    async login(requestData: LoginCredentials): Promise<any> {
        
        const url : string = `${this.getBaseUrl()}/${LOGIN_ENDPOINT}`;
        
        try {
            const response = await axios.post(url, requestData);
            
            const loginResponse: LoginResponse = response.data;

            loginResponse.status = response.status;
            loginResponse.statusText = response.statusText;

            return loginResponse;
        } catch (error) {
            console.error("Error in login:", error);
            throw new Error("Error in login:: " + error.message);
        }
    }
}