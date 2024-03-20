import axios from 'axios';
import { BaseService } from './BaseService';
import { LoginCredentials } from '../models/request/LoginCredentials'
import { LoginResponse } from '../exports/responseExports';

// import { log } from 'winston';

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