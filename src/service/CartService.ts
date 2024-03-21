import axios from 'axios';
import { BaseService } from '../exports/serviceExports';
import { CartResponse } from '../exports/responseExports';
import { getAccessToken } from '../testSetup/setup';
export class CartService extends BaseService{

    async getCart(): Promise<CartResponse> {
        const url: string = `${this.getBaseUrl()}/api/cart`;
        const accessToken: string = getAccessToken();
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            const responseData: CartResponse = response.data;
            responseData.status = response.status;
            return responseData;
        } catch (error: any) {
            console.error("Error getting cart:", error);
            throw new Error("Failed to get cart: " + error.message);
        }
    }
}