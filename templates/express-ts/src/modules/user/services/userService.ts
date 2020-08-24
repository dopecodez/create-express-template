import { IUserService } from "./userService.interface";

class UserService implements IUserService {// eslint-disable-line
    
    async getRandomTest(): Promise<any> {
        try {
            return "it works";
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new UserService();