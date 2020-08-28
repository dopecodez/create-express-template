import { IUserService } from "./userService.interface";
import { logger } from '../../../helpers/logger'

class UserService implements IUserService {// eslint-disable-line
    
    async getRandomTest(): Promise<any> {
        try {
            logger.info("success")
            return "it works";
        } catch (error) {
            logger.error(error)
            return error;
        }
    }
}

export default new UserService();