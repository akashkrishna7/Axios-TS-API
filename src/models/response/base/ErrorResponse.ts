import { BaseResponse } from "./BaseResponse";

export interface ErrorResponse extends BaseResponse{
    error: string;
}