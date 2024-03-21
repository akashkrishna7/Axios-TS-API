import { expect } from "chai";
import { CartService } from "../../service/CartService";

describe('Get Cart Tests', async function(){
    let cartService : CartService
    before(() => {
        cartService = new CartService();
    });

    it('should get cart details', async function(){

        const response = await cartService.getCart();

        expect(response.status,"Status does not match").to.equal(200);
        expect(response, 'Response should not be null').to.be.not.null;

    })
})