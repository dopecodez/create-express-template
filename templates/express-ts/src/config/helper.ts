import { IHelper } from "./helper.interface";
import { successResponse, errorResponse } from './responseType'

class Helper implements IHelper {// eslint-disable-line
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