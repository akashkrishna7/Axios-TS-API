import axios from 'axios';
import { BaseService } from './BaseService';

export class AuthService extends BaseService{
    async login(email: string, password: string): Promise<any> {
        const url : string = `${this.getBaseUrl()}/api/auth/login`;
        const data = { email, password };

        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
