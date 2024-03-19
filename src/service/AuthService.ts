import axios from 'axios';
import { BaseService } from './BaseService';
import { LoginCredentials } from '../models/request/LoginCredentials'

export class AuthService extends BaseService{
    async login(requestData: LoginCredentials): Promise<any> {
        const url : string = `${this.getBaseUrl()}/api/auth/login`;

        try {
            const response = await axios.post(url, requestData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}