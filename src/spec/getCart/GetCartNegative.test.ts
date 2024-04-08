import { expect } from "chai";
import { CartService } from "../../exports/serviceExports";
import { ErrorResponse } from "../../exports/responseExports";

describe('Negative Test Cases for getCart API', async function(){
    let cartService : CartService
    before(() => {
        cartService = new CartService();
    });

    it('should handle invalid or expired token', async function(){

        const invalidAccessToken = "Invalid Token"
        const response: ErrorResponse= await cartService.getCartWithInvalidAccessToken(invalidAccessToken);

        expect(response.status, "Status does not match").to.equal(401);
        expect(response.data.message).to.equal("Token is invalid or expired.");

    })

    it('should handle missing headers', async function(){

        const response: ErrorResponse= await cartService.getCartWithMissingHeader();

        expect(response.status, "Status does not match").to.equal(400);
        expect(response.data.message).to.equal("Authorization header is missing.");

    })
})