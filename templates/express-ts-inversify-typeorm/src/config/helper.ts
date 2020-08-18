import { IHelper } from "./helper.interface";
import { successResponse, errorResponse } from './responseType'
import { provide } from "inversify-binding-decorators";
import { HELPER } from "../const/types";

@provide(HELPER)
class Helper implements IHelper {
    createSuccessResponse(body: any): successResponse {
        const response: successResponse = {
            status: body.status || 200,
            body: body.body || {},
            message: body.message || 'Operation Completed Successfully'
        }
        return response
    }
    createErrorResponse(error: any): errorResponse {
        const response: errorResponse = {
            status: error.status || 500,
            message: error.message || 'Internal Server Error'
        }
        return response
    }
}