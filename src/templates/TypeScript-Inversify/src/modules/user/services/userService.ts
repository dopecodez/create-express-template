import { USERSERVICE } from '../../../const/types';
import { provide } from "inversify-binding-decorators";
import { IUserService } from "./userService.interface";
import { logger } from '../../../helpers/logger';

@provide(USERSERVICE)
class UserService implements IUserService{// eslint-disable-line

    async getRandomTest(): Promise<any> {
        try {
            //logic here
            logger.info("success")
            return "it works";
        } catch (error) {
            logger.info(error)
            return error;
        }
    }
}