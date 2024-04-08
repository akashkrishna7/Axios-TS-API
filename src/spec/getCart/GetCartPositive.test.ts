import { expect } from "chai";
import { CartService } from "../../exports/serviceExports";
import { CartResponse } from "../../exports/responseExports";

describe('Get Cart Tests', async function(){
    let cartService : CartService
    before(() => {
        cartService = new CartService();
    });

    it('should get cart details', async function(){

        const response : CartResponse= await cartService.getCart();

        expect(response.status,"Status does not match").to.equal(200);
        expect(response, 'Response should not be null').to.be.not.null;

    })
})