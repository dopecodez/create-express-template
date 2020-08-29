//Uncomment the code in this file to see typeorm in work
import { USERSERVICE } from '../../../const/types';
import { provide } from "inversify-binding-decorators";
import { IUserService } from "./userService.interface";
import { logger } from '../../../helpers/logger';
// import { User } from "../../../models/entities/Users";
// import { EntityManager, getManager } from "typeorm";

@provide(USERSERVICE)
class UserService implements IUserService{// eslint-disable-line

    // private manager: EntityManager;
    // constructor() {
    //     this.manager = getManager();
    // }

    async getRandomTest(): Promise<any> {
        try {
            // const user = new User();
            // user.firstName = "Test"
            // this.manager.save(user);
            logger.info("success")
            return "it works";
        } catch (error) {
            logger.error("success")
            return error;
        }
    }
}