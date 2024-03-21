import { BaseResponse } from "../../../exports/responseExports";

export interface CartResponse extends BaseResponse{
    cart_id: string,
    user_id: string,
    created_at: string
}