import { successResponse, errorResponse } from "./responseType";

export interface IHelper {
    createSuccessResponse(body:any): successResponse
    createErrorResponse(error:any): errorResponse
}