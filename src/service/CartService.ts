import axios from 'axios';
import { BaseService } from '../exports/serviceExports';
import { getAccessToken } from '../testSetup/setup';
import { CART_ENDPOINT } from '../apiEndpoints';
export class CartService extends BaseService{

    async getCart(): Promise<any> {
        const url: string = `${this.getBaseUrl()}/${CART_ENDPOINT}`;
        const accessToken: string = getAccessToken();

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            const responseData = response.data;
            responseData.status = response.status;

            return responseData;

        } catch (error: any) {
            console.error("Error getting cart response:", error);
            throw new Error("Failed to get cart response: " + error.message);
        }
    }

    async getCartWithInvalidAccessToken(accessToken: string): Promise<any> {
        const url: string = `${this.getBaseUrl()}/${CART_ENDPOINT}`;
        try{
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return response;
            
        } catch(error: any){
            return error.response;
        }
    }

    async getCartWithMissingHeader(): Promise<any> {
        const url: string = `${this.getBaseUrl()}/${CART_ENDPOINT}`;
        try{
            const response = await axios.get(url);
            
            return response;
            
        } catch(error: any){
            return error.response;
        }
    }
}
