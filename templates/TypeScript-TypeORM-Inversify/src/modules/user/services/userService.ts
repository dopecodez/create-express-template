//Uncomment the code in this file to see typeorm in work
import { USER_SERVICE } from '../../../const/types';
import { provide } from "inversify-binding-decorators";
import { IUserService } from "./userService.interface";
// import { User } from "../../../models/entities/Users";
// import { EntityManager, getManager } from "typeorm";

@provide(USER_SERVICE)
class UserService implements IUserService{// eslint-disable-line

    // private manager: EntityManager;
    // constructor() {
    //     this.manager = getManager();
    // }

    async getRandomTest(): Promise<any> {
        try {
            // const user = new User();
            // user.firstName = "Gree"
            // this.manager.save(user);
            return "it works";
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}