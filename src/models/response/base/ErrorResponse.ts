import { BaseResponse } from "./BaseResponse";

export interface ErrorResponse extends BaseResponse{
    data: {
        message: string;
    }
}